
let title = document.getElementById("title");
let date = document.getElementById("date");
let post = document.getElementById("post");
let saveBtn = document.getElementById("saveBtn");
let postList = document.getElementById("postList");

// Funktion för att spara ett inlägg
function savePost() {

    let posts = localStorage.getItem('showPost');
    posts = posts ? JSON.parse(posts) : [];

    let newPost = {
        title: title.value,
        date: date.value,
        post: post.value
    };

    // Lägg till det nya inlägget i listan
    posts.push(newPost);

    // Spara uppdaterade listan i localStorage
    localStorage.setItem('showPost', JSON.stringify(posts));

    // Uppdatera visningen av inläggen
    displayPost();
}

// Funktion för att radera ett inlägg
function deletePost(index) {
    let posts = localStorage.getItem("showPost");
    posts = posts ? JSON.parse(posts) : [];

    // Ta bort inlägget vid det angivna indexet
    posts.splice(index, 1); // Rätt metod för att ändra arrayen

    // Uppdatera localStorage med den nya listan
    localStorage.setItem('showPost', JSON.stringify(posts));

    // Uppdatera visningen av inläggen
    displayPost();
}

// Funktion för att visa alla inlägg
function displayPost() {
    let posts = localStorage.getItem("showPost");
    posts = posts ? JSON.parse(posts) : [];

    // Töm listan innan vi lägger till nya inlägg
    postList.innerHTML = '';

    posts.forEach((post, index) => {
        let listItem = document.createElement('li');
        
        // Skapa en radera-knapp och skicka med index för att kunna ta bort rätt inlägg
        listItem.innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>Datum:</strong> ${post.date}</p>
            <p>${post.post}</p>
            <button onclick="deletePost(${index})">Radera</button>
        `;

        
        postList.appendChild(listItem);
    });
 
    
}

// Lägg till en event listener för att spara inlägg
saveBtn.addEventListener('click', savePost);

// Visa inlägg från localStorage vid sidladdning
displayPost();
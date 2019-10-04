// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Get Data from API
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response);
    const bootstrap = response.data.articles.bootstrap;
    const javascript = response.data.articles.javascript;
    const jquery = response.data.articles.jquery;
    const node = response.data.articles.node;
    const technology = response.data.articles.technology;
    
    const catagory = [bootstrap, javascript, jquery, node, technology];
    catagory.forEach(e => {
        e.forEach(article => {
            console.log(article);
            const newArticle = createCard(article)
            cardContainer.appendChild(newArticle);
        })
    })
});

// Get card container
const cardContainer = document.querySelector(".cards-container");

function createCard(obj) {
    // create elements
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const byLine = document.createElement("span");

    // create structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(byLine);

    // add classes
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    // add content
    headline.textContent = obj.headline
    img.src = obj.authorPhoto;
    byLine.textContent = `By ${obj.authorName}`;

    return card;
}


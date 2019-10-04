// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response.data.topics);
    response.data.topics.forEach(item => {
        const newTab = tabCreator(item);
        topicDiv.appendChild(newTab);
        
    });
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

const topicDiv = document.querySelector(".topics");

function tabCreator(text) {
  // create elements
  const tab = document.createElement("div");

  // add structure

  // add class
  tab.classList.add("tab");

  // add content from API
  tab.textContent = text 

  return tab;
}

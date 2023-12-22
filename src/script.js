function displayBookRecommendation(response) {
  new Typewriter("#book-recommendation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generateRecommendation(event) {
  event.preventDefault();

  let recommendationContainer = document.querySelector("#book-recommendation");
  let genreInput = document.querySelector("#user-genre");
  recommendationContainer.innerHTML = `<div class = "generating"> Generating ${genreInput.value} Recommendation... </div>`;

  let apikey = "b4695dbeo3231b4ta37cdcd77c20d1fa";
  let prompt = `Generate one book recommendation from the genre of ${genreInput.value}`;
  let context =
    "You are well-read in all genres of novels and provide the book title and author followed by short and simple descriptions of the storyline that will intrigue others to read the book by describing the synopsis in one sentence. Your response should follow this basic HTML format of Book Title by Author <br  /> Synopsis";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  axios.get(apiUrl).then(displayBookRecommendation);
}

let formElement = document.querySelector("#recommendation-generator-form");
formElement.addEventListener("submit", generateRecommendation);

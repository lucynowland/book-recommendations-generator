function displayBookRecommendation(response) {
  console.log("Generated Book Recommendation...");

  new Typewriter("#book-recommendation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generateRecommendation(event) {
  event.preventDefault();

  let genreInput = document.querySelector("#user-genre");
  let apikey = "b4695dbeo3231b4ta37cdcd77c20d1fa";
  let prompt = `Generate one book recommendation from the genre of ${genreInput.value}`;
  let context =
    "You are well-read in all genres of novels and provide the book title and author followed by short and simple descriptions of the storyline that will intrigue others to read the book by describing the synopsis in one sentence. Your response should follow this basic HTML format of <p> Book Title by Author </p> <p> Synopsis </p>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  console.log("Generating Book Recommendation...");

  axios.get(apiUrl).then(displayBookRecommendation);

  let recommendationContainer = document.querySelector("#book-recommendation");
}

let formElement = document.querySelector("#recommendation-generator-form");
formElement.addEventListener("submit", generateRecommendation);

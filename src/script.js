function generateRecommendation(event) {
  event.preventDefault();
  let recommendationContainer = document.querySelector("#book-recommendation");

  new Typewriter("#book-recommendation", {
    strings: "Book Recommendation",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let formElement = document.querySelector("#recommendation-generator-form");
formElement.addEventListener("submit", generateRecommendation);

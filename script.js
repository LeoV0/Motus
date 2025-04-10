const GETBUTTON = document.querySelector("#btn");

GETBUTTON.addEventListener("click", () => {
  guess();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    guess();
  }
});
function guess() {
  let base = "chat";
  let word = document.querySelector("#word").value.toLowerCase();
  let result = tryWord(word, base);
  console.log(result);
  console.log(result.wellPlaced);
  document.getElementById("word").value = "";
  document.getElementById("try").innerText = word;
  document.getElementById("well").innerText =
    "Bien placé: " + result.wellPlaced.join(", ");
  document.getElementById("miss").innerText =
    "Mal placé: " + result.missplaced.join(", ");
  document.getElementById("not").innerText =
    "Pas dans le mot: " + result.notInWord.join(", ");
  if (result.wellPlaced.length === base.length) {
    document.getElementById("win").innerText = "Vous avez gagné";
  }
}

function tryWord(word, base) {
  // TODO: fix jeu sensible à la casse.
  // Problème de majuscule
  let wellPlaced = [];
  let notInWord = [];
  let missplaced = [];

  let correctAnswer = base.split("");
  let guessAnswer = word.split("");

  for (let i = 0; i < guessAnswer.length; i++) {
    console.log(i);
    if (correctAnswer[i] === guessAnswer[i]) {
      wellPlaced.push(guessAnswer[i]);
      console.log("Bien placé :" + wellPlaced);
      console.log(wellPlaced);
    } else if (correctAnswer.includes(guessAnswer[i]) === true) {
      missplaced.push(guessAnswer[i]);
      console.log(missplaced);
    } else {
      notInWord.push(guessAnswer[i]);
    }
  }
  console.log("Ton mot : " + guessAnswer);

  return {
    wellPlaced: wellPlaced,
    missplaced: missplaced,
    notInWord: notInWord,
  };
}

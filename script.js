export function guess(inputWord = null) {
  let base = "chat";
  let word =
    inputWord !== null
      ? inputWord.toLowerCase()
      : document.querySelector("#word").value.toLowerCase();
  let result = tryWord(word, base);

  if (typeof document !== "undefined") {
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

  return result;
}

function tryWord(word, base) {
  let wellPlaced = [];
  let notInWord = [];
  let missplaced = [];

  let correctAnswer = base.split("");
  let guessAnswer = word.split("");

  for (let i = 0; i < guessAnswer.length; i++) {
    if (correctAnswer[i] === guessAnswer[i]) {
      wellPlaced.push(guessAnswer[i]);
    } else if (correctAnswer.includes(guessAnswer[i])) {
      missplaced.push(guessAnswer[i]);
    } else {
      notInWord.push(guessAnswer[i]);
    }
  }

  return {
    wellPlaced,
    missplaced,
    notInWord,
  };
}

const GETBUTTON = document.querySelector("#btn");

if (GETBUTTON) {
  GETBUTTON.addEventListener("click", () => {
    guess();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    guess();
  }
});

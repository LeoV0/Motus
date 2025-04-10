import { expect, test } from "vitest";
import { guess } from "./script.js";

test("Vérifie que guess retourne le bon résultat pour un mot", () => {
  const result = guess("chou"); // Test avec une entrée spécifique
  expect(result.wellPlaced).toEqual(["c", "h"]); // "c" et "h" sont bien placés
  expect(result.missplaced).toEqual(["o"]); // "o" est mal placé
  expect(result.notInWord).toEqual(["u"]); // "u" n'est pas dans "chat"
});

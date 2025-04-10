import { expect, test } from "vitest";
import { guess } from "./script.js";

test("Uniquement une string en input", () => {
  expect(guess(3)).toBe("Salut");
});

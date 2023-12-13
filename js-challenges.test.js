import { expect, describe, test } from "vitest";
import {
  sum,
  subtract,
  countLetters,
  isAnagram,
  isPalindrome,
} from "./js-challenges.js";

test("sum", function () {
  const expected = 2;
  const actual = sum(1, 1);

  expect(actual).toBe(expected);
});

test("subtract", function () {
  const expected = 0;
  const actual = subtract(1, 1);
  expect(actual).toBe(expected);
});

test("countLetters", () => {
  expect(countLetters("hello", "l")).toBe(2);
  expect(countLetters("hello", "o")).toBe(1);
});

// Describe (from vitest) allows us to group tests for similar functionality under the same heading
describe("isPalindrome", () => {
  test("returns true for palindromic strings", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("deified")).toBe(true);
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  test("returns false for non-palindromic strings", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    expect(isPalindrome("not a palindrome")).toBe(false);
  });
});

describe("isAnagram", () => {
  test("returns true for anagrams", () => {
    expect(isAnagram("elbow", "below")).toBe(true);
    expect(isAnagram("dormitory", "dirty room")).toBe(true);
    expect(isAnagram("Conversation", "voices rant on")).toBe(true);
  });

  test("returns false for non-anagrams", () => {
    expect(isAnagram("elbow", "belows")).toBe(false);
    expect(isAnagram("dormitory", "dirty rooms")).toBe(false);
    expect(isAnagram("Conversation", "voices ranting on!")).toBe(false);
  });
});
const {
  inventors,
  getTotalYearsLived,
  getTotalLettersInFirstNames,
  getTotalLettersInLastNames,
} = require("../exercises/3-inventors-reduce");

describe("Inventors - Array.prototype.reduce", () => {
  describe("getTotalYearsLived", () => {
    it("should return the total number of years that all inventors lived", () => {
      const expected = 861;
      const actual = getTotalYearsLived(inventors);
      expect(actual).toEqual(expected);
    });
  });

  describe("getTotalLettersInFirstNames", () => {
    it("should return the total number of letters in all inventors first names", () => {
      const expected = 71;
      const actual = getTotalLettersInFirstNames(inventors);
      expect(actual).toEqual(expected);
    });
  });

  describe("getTotalLettersInLastNames", () => {
    it("should return the total number of letters in all inventors last names", () => {
      const expected = 87;
      const actual = getTotalLettersInLastNames(inventors);
      expect(actual).toEqual(expected);
    });
  });
});

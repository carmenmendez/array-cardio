const {
  inventors,
  filterInventorsBySixteenthCentury,
  filterInventorsByNineTeenCentury,
  filterInventorsByLivedMoreThan80Years,
  filterInventorsByDiedIn20thCentury,
  filterInventorsByFirstNameWithMoreThan8Letters,
  filterInventorsByLivedAtLeast,
} = require("../exercises/2-inventors-filter");

describe("Inventors - Array.prototype.filter", () => {
  describe("filterInventorsBySixteenthCentury", () => {
    it("should return an array of inventors born in the 16th century", () => {
      const expected = [
        { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
        { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
      ];
      const actual = filterInventorsBySixteenthCentury(inventors);
      expect(actual).toEqual(expected);
    });
  });
  describe("filterInventorsByNineTeenCentury", () => {
    it("should return an array of inventors born in the 19th century", () => {
      const expected = [
        { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
        { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
        { first: "Max", last: "Planck", year: 1858, passed: 1947 },
        { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
        { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
        { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
        { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
        { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
      ];
      const actual = filterInventorsByNineTeenCentury(inventors);
      expect(actual).toEqual(expected);
    });
  });
  describe("filterInventorsByLivedMoreThan80Years", () => {
    it("should return an array of inventors who lived more than 80 years", () => {
      const expected = [
        {
          first: "Isaac",
          last: "Newton",
          year: 1643,
          passed: 1727,
        },
        {
          first: "Max",
          last: "Planck",
          year: 1858,
          passed: 1947,
        },
        {
          first: "Katherine",
          last: "Blodgett",
          year: 1898,
          passed: 1979,
        },
        {
          first: "Lise",
          last: "Meitner",
          year: 1878,
          passed: 1968,
        },
        {
          first: "Hanna",
          last: "Hammarström",
          year: 1829,
          passed: 1909,
        },
      ];
      const actual = filterInventorsByLivedMoreThan80Years(inventors);
      expect(actual).toEqual(expected);
    });
  });

  describe("filterInventorsByDiedIn20thCentury", () => {
    it("should return an array of inventors who died in the 20th century", () => {
      const expected = [
        { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
        { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
        { first: "Max", last: "Planck", year: 1858, passed: 1947 },
        { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
        { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
        { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
        { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
      ];
      const actual = filterInventorsByDiedIn20thCentury(inventors);
      expect(actual).toEqual(expected);
    });
  });

  describe("filterInventorsByFirstNameWithMoreThan8Letters", () => {
    it("should return an array of inventors whose first name has more than 8 letters", () => {
      const expected = [
        { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
      ];
      const actual = filterInventorsByFirstNameWithMoreThan8Letters(inventors);
      expect(actual).toEqual(expected);
    });
  });

  describe("filterInventorsByLivedMoreThan", () => {
    it('should return an array of inventors who lived at least "x" years', () => {
      const expected = [
        { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
      ];
      const actual = filterInventorsByLivedAtLeast(inventors, 90);
      expect(actual).toEqual(expected);
    });
  });
});

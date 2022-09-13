const {
  inventors,
  getFullName,
  getFirstNameLength,
  getYearsLived,
  getFullNameAndYearsLived,
  addFullName,
  addYearsLived,
  addFullNameAndYearsLived,
  getFullNameWithSeparator,
} = require("../exercises/1-inventors-map");

describe("Inventors - Array.prototype.map", () => {
  describe("getFullName", () => {
    it("should return an array of full names", () => {
      const expected = [
        "Albert Einstein",
        "Isaac Newton",
        "Galileo Galilei",
        "Marie Curie",
        "Johannes Kepler",
        "Nicolaus Copernicus",
        "Max Planck",
        "Katherine Blodgett",
        "Ada Lovelace",
        "Sarah E. Goode",
        "Lise Meitner",
        "Hanna Hammarström",
      ];
      const actual = getFullName(inventors);
      expect(actual).toEqual(expected);
    });
  });

  describe("getFirstNameLength", () => {
    it("should return an array of first names length", () => {
      const expected = [6, 5, 7, 5, 8, 8, 3, 9, 3, 8, 4, 5];
      const actual = getFirstNameLength(inventors);
      expect(actual).toEqual(expected);
    });
  });

  describe("getYearsLived", () => {
    it("should return an array of years lived", () => {
      const expected = [76, 84, 78, 67, 59, 70, 89, 81, 37, 50, 90, 80];
      const actual = getYearsLived(inventors);
      expect(actual).toEqual(expected);
    });
  });

  describe("getFullNameAndYearsLived", () => {
    it("should return an array of objects with full name and years lived", () => {
      const expected = [
        { fullName: "Albert Einstein", yearsLived: 76 },
        { fullName: "Isaac Newton", yearsLived: 84 },
        { fullName: "Galileo Galilei", yearsLived: 78 },
        { fullName: "Marie Curie", yearsLived: 67 },
        { fullName: "Johannes Kepler", yearsLived: 59 },
        { fullName: "Nicolaus Copernicus", yearsLived: 70 },
        { fullName: "Max Planck", yearsLived: 89 },
        { fullName: "Katherine Blodgett", yearsLived: 81 },
        { fullName: "Ada Lovelace", yearsLived: 37 },
        { fullName: "Sarah E. Goode", yearsLived: 50 },
        { fullName: "Lise Meitner", yearsLived: 90 },
        { fullName: "Hanna Hammarström", yearsLived: 80 },
      ];
      const actual = getFullNameAndYearsLived(inventors);
      expect(actual).toEqual(expected);
    });
  });

  describe("addFullName", () => {
    it("should return an array of inventors with full name", () => {
      const expected = [
        {
          first: "Albert",
          last: "Einstein",
          year: 1879,
          passed: 1955,
          fullName: "Albert Einstein",
        },
        {
          first: "Isaac",
          last: "Newton",
          year: 1643,
          passed: 1727,
          fullName: "Isaac Newton",
        },
        {
          first: "Galileo",
          last: "Galilei",
          year: 1564,
          passed: 1642,
          fullName: "Galileo Galilei",
        },
        {
          first: "Marie",
          last: "Curie",
          year: 1867,
          passed: 1934,
          fullName: "Marie Curie",
        },
        {
          first: "Johannes",
          last: "Kepler",
          year: 1571,
          passed: 1630,
          fullName: "Johannes Kepler",
        },
        {
          first: "Nicolaus",
          last: "Copernicus",
          year: 1473,
          passed: 1543,
          fullName: "Nicolaus Copernicus",
        },
        {
          first: "Max",
          last: "Planck",
          year: 1858,
          passed: 1947,
          fullName: "Max Planck",
        },
        {
          first: "Katherine",
          last: "Blodgett",
          year: 1898,
          passed: 1979,
          fullName: "Katherine Blodgett",
        },
        {
          first: "Ada",
          last: "Lovelace",
          year: 1815,
          passed: 1852,
          fullName: "Ada Lovelace",
        },
        {
          first: "Sarah E.",
          last: "Goode",
          year: 1855,
          passed: 1905,
          fullName: "Sarah E. Goode",
        },
        {
          first: "Lise",
          last: "Meitner",
          year: 1878,
          passed: 1968,
          fullName: "Lise Meitner",
        },
        {
          first: "Hanna",
          last: "Hammarström",
          year: 1829,
          passed: 1909,
          fullName: "Hanna Hammarström",
        },
      ];
      const actual = addFullName(inventors);
      expect(actual).toEqual(expected);
    });
  });

  describe("addYearsLived", () => {
    it("should return an array of inventors with years lived", () => {
      const expected = [
        {
          first: "Albert",
          last: "Einstein",
          year: 1879,
          passed: 1955,
          yearsLived: 76,
        },
        {
          first: "Isaac",
          last: "Newton",
          year: 1643,
          passed: 1727,
          yearsLived: 84,
        },
        {
          first: "Galileo",
          last: "Galilei",
          year: 1564,
          passed: 1642,
          yearsLived: 78,
        },
        {
          first: "Marie",
          last: "Curie",
          year: 1867,
          passed: 1934,
          yearsLived: 67,
        },
        {
          first: "Johannes",
          last: "Kepler",
          year: 1571,
          passed: 1630,
          yearsLived: 59,
        },
        {
          first: "Nicolaus",
          last: "Copernicus",
          year: 1473,
          passed: 1543,
          yearsLived: 70,
        },
        {
          first: "Max",
          last: "Planck",
          year: 1858,
          passed: 1947,
          yearsLived: 89,
        },
        {
          first: "Katherine",
          last: "Blodgett",
          year: 1898,
          passed: 1979,
          yearsLived: 81,
        },
        {
          first: "Ada",
          last: "Lovelace",
          year: 1815,
          passed: 1852,
          yearsLived: 37,
        },
        {
          first: "Sarah E.",
          last: "Goode",
          year: 1855,
          passed: 1905,
          yearsLived: 50,
        },
        {
          first: "Lise",
          last: "Meitner",
          year: 1878,
          passed: 1968,
          yearsLived: 90,
        },
        {
          first: "Hanna",
          last: "Hammarström",
          year: 1829,
          passed: 1909,
          yearsLived: 80,
        },
      ];
      const actual = addYearsLived(inventors);
      expect(actual).toEqual(expected);
    });
  });

  describe("addFullNameAndYearsLived", () => {
    it("should return an array of inventors with full name and years lived", () => {
      // define expected array with inventors data and full name and years lived
      const expected = [
        {
          first: "Albert",
          last: "Einstein",
          year: 1879,
          passed: 1955,
          fullName: "Albert Einstein",
          yearsLived: 76,
        },
        {
          first: "Isaac",
          last: "Newton",
          year: 1643,
          passed: 1727,
          fullName: "Isaac Newton",
          yearsLived: 84,
        },
        {
          first: "Galileo",
          last: "Galilei",
          year: 1564,
          passed: 1642,
          fullName: "Galileo Galilei",
          yearsLived: 78,
        },
        {
          first: "Marie",
          last: "Curie",
          year: 1867,
          passed: 1934,
          fullName: "Marie Curie",
          yearsLived: 67,
        },
        {
          first: "Johannes",
          last: "Kepler",
          year: 1571,
          passed: 1630,
          fullName: "Johannes Kepler",
          yearsLived: 59,
        },
        {
          first: "Nicolaus",
          last: "Copernicus",
          year: 1473,
          passed: 1543,
          fullName: "Nicolaus Copernicus",
          yearsLived: 70,
        },
        {
          first: "Max",
          last: "Planck",
          year: 1858,
          passed: 1947,
          fullName: "Max Planck",
          yearsLived: 89,
        },
        {
          first: "Katherine",
          last: "Blodgett",
          year: 1898,
          passed: 1979,
          fullName: "Katherine Blodgett",
          yearsLived: 81,
        },
        {
          first: "Ada",
          last: "Lovelace",
          year: 1815,
          passed: 1852,
          fullName: "Ada Lovelace",
          yearsLived: 37,
        },
        {
          first: "Sarah E.",
          last: "Goode",
          year: 1855,
          passed: 1905,
          fullName: "Sarah E. Goode",
          yearsLived: 50,
        },
        {
          first: "Lise",
          last: "Meitner",
          year: 1878,
          passed: 1968,
          fullName: "Lise Meitner",
          yearsLived: 90,
        },
        {
          first: "Hanna",
          last: "Hammarström",
          year: 1829,
          passed: 1909,
          fullName: "Hanna Hammarström",
          yearsLived: 80,
        },
      ];
      const actual = addFullNameAndYearsLived(inventors);
      expect(actual).toEqual(expected);
    });
  });

  describe("getFullNameWithSeparator", () => {
    it("should return an array of inventors fullname separated by emoji 😛", () => {
      const expected = [
        "Albert😛Einstein",
        "Isaac😛Newton",
        "Galileo😛Galilei",
        "Marie😛Curie",
        "Johannes😛Kepler",
        "Nicolaus😛Copernicus",
        "Max😛Planck",
        "Katherine😛Blodgett",
        "Ada😛Lovelace",
        "Sarah E.😛Goode",
        "Lise😛Meitner",
        "Hanna😛Hammarström",
      ];
      const actual = getFullNameWithSeparator(inventors, "😛");
      expect(actual).toEqual(expected);
    });
  });
});

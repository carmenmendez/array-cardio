const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.prototype.reduce() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// How many years did all the inventors live?

// return the total number of years that all inventors lived
function getTotalYearsLived(inventors) {
  return inventors.reduce((acc, inventor) => {
    const yearsLived = inventor.passed - inventor.year;
    return acc + yearsLived
  }, 0)
}

// return the total number of letters in all inventors' first names
function getTotalLettersInFirstNames(inventors) {
  return inventors.reduce((acc, inventor) => {
    const lettersInFirstName = inventor.first.length;
    return acc + lettersInFirstName
  }, 0)
}

// return the total number of letters in all inventors' last names
function getTotalLettersInLastNames(inventors) {
  return inventors.reduce((acc, inventor) => {
    const lettersInLastName = inventor.last.length;
    return acc + lettersInLastName
  }, 0)
}

module.exports = {
  inventors,
  getTotalYearsLived,
  getTotalLettersInFirstNames,
  getTotalLettersInLastNames,
};

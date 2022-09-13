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

/**
 * Ejercicios con Map
 * Array.prototype.map() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

// Retorna un nuevo arreglo en el que cada elemento sea un objeto que sólo contenga el fullName:
// ejemplo: ['Albert Einstein', 'Isaac Newton', ...]
function getFullName(inventors) {}

// Retorna un nuevo arreglo que contenga la cantidad de letras que tiene cada first name:
// ejemplo: [6, 5, 7, 5, 8, ...]
function getFirstNameLength(inventors) {}

// Retorna un nuevo arreglo que contenga la cantidad de años que vivió cada inventor:
// ejemplo: [76, 84, 78, 67, ...]
function getYearsLived(inventors) {}

// Retorna un nuevo arreglo en el que cada inventor contenga el nombre completo y la cantidad de años que vivió:
// ejemplo: [{ fullName: 'Albert Einstein', yearsLived: 76 }, ...]
function getFullNameAndYearsLived(inventors) {}

// Retorna un nuevo arreglo en el que cada inventor contenga el nombre completo además de sus datos originalmente contenidos:
// ejemplo: [{ fullName: 'Albert Einstein', first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, ...]
function addFullName(inventors) {}

// Retorna un nuevo arreglo en el que cada inventor contenga la cantidad de años que vivió además de sus datos originalmente contenidos:
// ejemplo: [{ yearsLived: 76, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, ...]
function addYearsLived(inventors) {}

// Retorna un nuevo arreglo en el que cada inventor contenga el nombre completo y la cantidad de años que vivió además de sus datos originalmente contenidos:
// ejemplo: [{ fullName: 'Albert Einstein', yearsLived: 76, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, ...]
function addFullNameAndYearsLived(inventors) {}

// retorna un nuevo arreglo con el nombre completo de cada inventor separado por el caracter que se recibe como parámetro:
// ejemplos:

// ejecutar: getFullNameWithSeparator(inventors, '😛')
// retorna: ['Albert😛Einstein', 'Isaac😛Newton', ...]

// ejecutar: getFullNameWithSeparator(inventors, '*****')
// retorna: ['Albert*****Einstein', 'Isaac*****Newton', ...]
function getFullNameWithSeparator(inventors, separator) {}

module.exports = {
  inventors,
  getFullName,
  getFirstNameLength,
  getYearsLived,
  getFullNameAndYearsLived,
  addFullName,
  addYearsLived,
  addFullNameAndYearsLived,
  getFullNameWithSeparator,
};

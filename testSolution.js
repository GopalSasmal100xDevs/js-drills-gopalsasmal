const persons = require("./person");
const { getAllEmails } = require("./solution");

//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
console.log(getAllEmails(persons));
console.log(getAllEmails([]));
console.log(getAllEmails(undefined));
console.log(getAllEmails(null));

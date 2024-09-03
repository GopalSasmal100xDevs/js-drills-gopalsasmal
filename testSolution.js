const persons = require("./person");
const {
  getAllEmails,
  getHobbiesOfaSpecificAge,
  checkIsStudentLiveInAustralia,
  logTheIndexedPerson,
} = require("./solution");

//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
console.log(getAllEmails(persons));
// console.log(getAllEmails([]));
// console.log(getAllEmails(undefined));
// console.log(getAllEmails(null));

//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
getHobbiesOfaSpecificAge(persons, 30);
// getHobbiesOfaSpecificAge(persons, "30");
// getHobbiesOfaSpecificAge(persons, null);
// getHobbiesOfaSpecificAge([], 30);

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
checkIsStudentLiveInAustralia(persons);
// checkIsStudentLiveInAustralia([]);
// checkIsStudentLiveInAustralia(undefined);

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
logTheIndexedPerson(persons, 3);
logTheIndexedPerson(persons, 20);
logTheIndexedPerson(persons, -1);
logTheIndexedPerson([], 3);

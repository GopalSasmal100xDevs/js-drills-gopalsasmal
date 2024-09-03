const persons = require("./person");
const {
  getAllEmails,
  getHobbiesOfaSpecificAge,
  checkIsStudentLiveInAustralia,
  logTheIndexedPerson,
  printAllAges,
  getFirstHobby,
  infoOfAged25,
  printCityAndCountry,
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
// logTheIndexedPerson(persons, 20);
// logTheIndexedPerson(persons, -1);
// logTheIndexedPerson([], 3);

//    Implement a loop to access and print the ages of all individuals in the dataset.
printAllAges(persons);
// printAllAges([]);
// printAllAges(undefined);

//    Create a function to retrieve and display the first hobby of each individual in the dataset.
getFirstHobby(persons);
// getFirstHobby([{}]);
// getFirstHobby(undefined);
// getFirstHobby();

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
infoOfAged25(persons);
// infoOfAged25([{ name: "Mark", age: 25 }]);
// infoOfAged25([{ age: 25 }]);
// infoOfAged25([]);
// infoOfAged25();

//    Implement a loop to access and log the city and country of each individual in the dataset.
printCityAndCountry(persons);
// printCityAndCountry();
printCityAndCountry([{}]);

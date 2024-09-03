//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
function getAllEmails(persons) {
  if (!Array.isArray(persons)) {
    return [];
  }
  return persons.map((person) => person.email);
}

//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function getHobbiesOfaSpecificAge(persons, age) {
  if (!Array.isArray(persons)) {
    console.log("First argument is not an array!"); // return [] when persons is not an array
    return;
  }

  if (persons.length == 0) {
    console.log("Array is empty!");
    return;
  }

  if (!Number.isInteger(age)) {
    console.log("Age is not a number!"); // return [] when age is not a number
    return;
  }

  persons.forEach((person) => {
    if (person.age === age) {
      console.log(...person.hobbies);
    }
  });
}

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
function checkIsStudentLiveInAustralia(persons) {
  if (!Array.isArray(persons)) {
    console.log("Argument is not an array");
    return;
  }

  persons.forEach((person) => {
    if (person.isStudent && person.country === "Australia") {
      console.log(`${person.name} is a student and live in Australia`);
    }
  });
}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
function logTheIndexedPerson(persons, index) {
  if (
    !Array.isArray(persons) ||
    !Number.isInteger(index) ||
    index < 0 ||
    index >= persons.length
  ) {
    console.log("Invalid argument");
    return;
  }

  const person = persons[index];
  console.log(`In index ${index} ${person.name} is present.`);
}

//    Implement a loop to access and print the ages of all individuals in the dataset.
function printAllAges(persons) {
  if (!Array.isArray(persons)) {
    console.log("Argument is not valid");
    return;
  }

  for (let index = 0; index < persons.length; index++) {
    console.log(`${persons[index].name} is ${persons[index].age} years old`);
  }
}

//    Create a function to retrieve and display the first hobby of each individual in the dataset.
function getFirstHobby(persons) {
  if (!Array.isArray(persons)) {
    console.log("Argument is not valid");
    return;
  }
  for (let index = 0; index < persons.length; index++) {
    if (
      persons[index].hasOwnProperty("hobbies") &&
      persons[index].hobbies.length > 0
    )
      console.log(
        `${persons[index].name} first hobby is ${persons[index].hobbies[0]}`
      );
  }
}

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
function infoOfAged25(persons) {
  if (!Array.isArray(persons)) {
    console.log("Invalid arugment");
    return;
  }

  persons.forEach((person) => {
    const { age, name, email } = person;
    if (age && age === 25 && name && email) {
      console.log(
        `${person.name}'s email address is ${person.email}, who's age is 25`
      );
    }
  });
}

//    Implement a loop to access and log the city and country of each individual in the dataset.
function printCityAndCountry(persons) {
  if (!Array.isArray(persons)) {
    console.log("Invalid arguments");
    return;
  }

  for (let index = 0; index < persons.length; index++) {
    const { name, city, country } = persons[index];
    console.log(`${name} city is ${city} and country is ${country}`);
  }
}

module.exports = {
  getAllEmails,
  getHobbiesOfaSpecificAge,
  checkIsStudentLiveInAustralia,
  logTheIndexedPerson,
  printAllAges,
  getFirstHobby,
  infoOfAged25,
  printCityAndCountry,
};

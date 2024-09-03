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
  }

  if (persons.length == 1) {
    console.log("Array is empty!");
  }

  if (!Number.isInteger(age)) {
    console.log("Age is not a number!"); // return [] when age is not a number
  }

  persons.forEach((person) => {
    if (person.age === age) {
      console.log(...person.hobbies);
    }
  });
}

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

//    Implement a loop to access and print the ages of all individuals in the dataset.

//    Create a function to retrieve and display the first hobby of each individual in the dataset.

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

//    Implement a loop to access and log the city and country of each individual in the dataset.

module.exports = { getAllEmails, getHobbiesOfaSpecificAge };

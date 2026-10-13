const students = [
  { name: "Jane", grade: 11, gpa: 3.8, isHonors: true },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota", grade: 10, gpa: 3.9, isHonors: true },
];

// =================================================================
// PROBLEM 1 — Reading Object Properties
// =================================================================
// You are given this movie object. Write code below to:
//   1. Print the title
//   2. Print the director
//   3. Print true/false: is the runtime over 120 minutes?
//   4. Add a new property `watched` set to true
//   5. Print each key-value pair using console.log("Title:", movie.title) style




// TODO 1: Print the movie title
// console.log(...)

// TODO 2: Print the director's name
// console.log(...)

// TODO 3: Print true/false — is runtime over 120?
// console.log(...)

// TODO 4: Add a `watched` property set to true
// movie.??? = ???

// TODO 5: Print each key-value pair
// console.log("Title:", ...)
// console.log("Year:", ...)
// console.log("Director:", ...)
// console.log("Rating:", ...)
// console.log("Runtime:", ...)
// console.log("Watched:", ...)



/* const movie = {
  title: "Interstellar",
  year: 2014,
  director: "Christopher Nolan",
  rating: "PG-13",
  runtime: 169,
  watched: true,
};

console.log(movie.title)
console.log(movie.year)
if (movie.runtime > 120) 
    console.log("true")
else console.log(false)
 */
/* console.log(movie.director)
console.log(movie.rating)
console.log(movie.runtime)
console.log(movie.watched)  */






// =================================================================
// PROBLEM 2 — Build Your Own Object
// =================================================================
// Write a function createStudent(name, grade, gpa) that:
//   - Returns an object with those three properties
//   - Also includes isHonors: true if gpa >= 3.5, false otherwise
//
// Expected output:
//   createStudent("Alex", 11, 3.7)  → { name: "Alex", grade: 11, gpa: 3.7, isHonors: true }
//   createStudent("Sam",  10, 2.9)  → { name: "Sam",  grade: 10, gpa: 2.9, isHonors: false }
/* 
function createStudent(name, grade, gpa) {
  return{
    name: name,
    grade: grade,
    gpa: gpa, 
    isHonors: gpa >= 3.5

  }
}

console.log(createStudent("Alex", 11, 3.7));
console.log(createStudent("Sam", 10, 2.9));

 */


// =================================================================
// PROBLEM 3 — Searching an Array of Objects
// =================================================================
// Write a function findByName(students, targetName) that:
//   - Uses .find() to return the student object with that name
//   - Returns null if no match is found
//
// Expected output:
//   findByName(students, "ChenZee") → { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false }
//   findByName(students, "Marcus")  → null


const student = 
    {name: ChenZee, grade: 12, gpa: 3.5, isHonors: false}


function findByName(students, targetName) {
  const foundstudent = students.find (name === ChenZee)
}

console.log(findByName(students, "ChenZee"));
console.log(findByName(students, "Jane"));
console.log(findByName(students, "Marcus"));

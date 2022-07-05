/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

 const book = {
    category: "Just for fun",
    Language: "English",
    Pages: 300,
    personagens: {
         name1: "Father",
         name2: "Mother",
     },
    Sons: 2,
    Pet: "Dog"
    
  };
  
  var newPage = "Pages"
  
  console.log("The personagens Objects:", book.personagens)
  
  console.log("The pages object:", book.Pages);
  
console.log("The newPages object:", book[newPage]);
  
console.log(book);
/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Shoe from "./Shoe.js";

const everyDayShoe = new Shoe(
    "Nike",
    54,
    "Black",
    "Male",
    "USA"
);

const everyDayBackpack = new Backpack(
    "Puma",
    "45L",
    "Black",
    33,
    26,
    26,
    "Closed"
);
    
console.log("The everyDayShoe object:", everyDayShoe);
console.log("The EverydayDayPackpack object:", everyDayBackpack);

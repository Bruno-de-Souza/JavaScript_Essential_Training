/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

 class Shoe {
    constructor(
    
        // Defines parameters
    
        brand,
        size,
        color,
        indication,
        country
    ) {
    
        // Define properties

        this.brand = brand;
        this.size = size;
        this.color = color;
        this.indication = indication;
        this.country = country;
    }

        // Add methods like normal functions:
    
    newBrand(secondBrand) {
        this.brand = secondBrand;
    }
    newSize(secondSize) {
        this.size = secondSize;
    }
    newColor(secondColor) {
        this.color = secondColor;
    }
    newIndication(secondIndication) {
        this.indication = secondIndication;
    }
    newCountry(secondCountry) {
        this.country = secondCountry;
    }

}

console.log(Shoe)

export default Shoe;
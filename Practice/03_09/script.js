/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

 const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newName: function (weekendBackpack) {
    this.name = weekendBackpack;
  },
  newVolume: function (nowVolume) {
    this.volume = nowVolume;
  },
  newColor: function (nowColor) {
    this.color = nowColor;
  },
  newPocketNum: function (newNum) {
    this.pocketNum = newNum;
   },
   newStrapLength: function (newLeft, newRight) {
     this.strapLength.left = newLeft;
     this.strapLength.right = newRight;
  }
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

/* Updating the properties */

console.log("Name after:", backpack.name);
backpack.newName("Wekeend Backpack");
console.log("Name before:", backpack.name);

console.log("Volume before:", backpack.volume);
backpack.newVolume(50);
console.log("Volume after:", backpack.volume);

console.log("Color before:", backpack.color);
backpack.newColor("Black");
console.log("Color after:", backpack.color);

console.log("pocketNum before:", backpack.pocketNum);
backpack.newPocketNum(30);
console.log("pocketNum after:", backpack.pocketNum);

console.log("left before:", backpack.strapLength.left);
console.log("Right before:", backpack.strapLength.right);
backpack.newStrapLength(36, 36);
console.log("Left after:", backpack.strapLength.left);
console.log("Right after:", backpack.strapLength.right);

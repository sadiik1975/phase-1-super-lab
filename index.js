// Write your classes here
// Define the Tree class
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  // Define the Deciduous class extending Tree
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species); // Use super to call the parent constructor
      this.name = name;
    }
  
    static definition() {
      // Use super to access the Tree's definition and add more information
      return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
  }
  
  // Define the Evergreen class extending Tree
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species); // Use super to call the parent constructor
      this.name = name;
    }
  
    static definition() {
      // Use super to access the Tree's definition and add more information
      return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
  }
  
  // Example usage:
  const oak = new Deciduous("Quercus", "Oak");
  console.log(oak.species); // Output: Quercus
  console.log(oak.name); // Output: Oak
  console.log(Deciduous.definition()); 
  // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.
  
  const pine = new Evergreen("Pinus", "Pine");
  console.log(pine.species); // Output: Pinus
  console.log(pine.name); // Output: Pine
  console.log(Evergreen.definition()); 
  // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round.
  
// Orange Tree Simulator: a program that simulates the life cycle of an orange tree. It allows the tree to grow and produce oranges ovre time. The simulator also includes features such as the ability to pick oranges from the tree, and end the simulation when the tree reaches its maxinmun age ot dies.

class OrangeTree {
  constructor() {
    this.age = 0,
    this.height= 100,
    this.oranges = [];
    // dead and maxAge properties are private, should use getter and setter methods to access it
    this.dead = false;
    this.maxAge = 40;
  }

  getIsDead() {
    return this.dead;
  }

  setIsDead(status) {
    if (typeof status === "boolean") {
      this.dead = status;
    }
  }

  getMaxAge() {
    return this.maxAge;
  }

  setMaxAge(newMaxAge) {
    if(newMaxAge > 0) {
      this.maxAge = newMaxAge;
    }
  }

  ageMe() {
    if(this.age < this.getMaxAge()) {
      this.age += 1;
    }
    if (this.age === this.getMaxAge()) {
      this.setIsDead(true);
    }
    if (this.age < 11) {
      this.height += 20;
    }
    if(!this.getIsDead() && this.age > 3 && this.age < this.getMaxAge()) {
      // loop to produce 3 oranges of random diameter of 1 to 5cm
      for (let i=0; i<3; i++) {
        const randomDiameter = Math.floor((Math.random() * 5) + 1);
        const orange = new Orange(randomDiameter);
        this.oranges.push(orange);
      }
    }
  }

  hasAnyOranges() {
    return this.oranges.length > 0 ? true : false;
  }

  pickAnOrange() {
    const orange = this.oranges[0];
    this.oranges.splice(0, 1);
    return orange;
  }
}

class Orange {
  constructor(diameter) {
    this.diameter = diameter;
  }
}

// Initialize new Orange tree object
const tree = new OrangeTree();

// While tree has no oranges, age the tree by one year
while (!tree.hasAnyOranges()) {
  tree.ageMe();
}

// Initialize a variable to keep track of the total oranges picked from the tree
let totalOranges = null;

// While the tree is not dead
while (!tree.dead) {
  // Initialize empty basket
  const basket = [];

  // While tree has oranges, pick and place an orange into the basket
  while (tree.hasAnyOranges()) {
    basket.push(tree.pickAnOrange());
  }

  // Increment the total oranges picked by the number of oranges picked this harvest
  totalOranges += basket.length;

  // Calculate the average diameter for this harvest
  let averageDiameter = basket.reduce((sum, orange) => {
    return sum + orange.diameter;
    // return Math.ceil((sum + orange.diameter)/basket.length);
  }, 0);

  // Output tree information (like what year it is, height of a tree, average diameter)
  console.log(`Year ${tree.age} Report`);
  console.log(
    `Harvest: ${basket.length} oranges with an average diameter of ${averageDiameter} cm`
  );
  console.log(`Tree height: ${tree.height}`);

  // Age the tree by one year
  tree.ageMe();
}

// Finally, the tree has died. Output the total number of oranges picked
console.log(
  `At last, the tree has died. It produced a total of ${totalOranges} oranges.`
);
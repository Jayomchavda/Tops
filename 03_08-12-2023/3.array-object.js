// make data storage for your family and vehicle details of each family member

/*
class FamilyMember {
    constructor(name, age, relationship, vehicles = []) {
        this.name = name;
        this.age = age;
        this.relationship = relationship;
        this.vehicles = vehicles;
    }

    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
}

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let jagdish = new FamilyMember("Jagdish chavda", 45, "Father");
let lata = new FamilyMember("Lata chavda", 44, "Mother");
let jayom = new FamilyMember("Jayom chavda", 20, "Son");

let jagdishsCar = new Vehicle("Audi", "Q7", 2018);
let latasCar = new Vehicle("BMW", "X7", 2020);
let jayomsBike = new Vehicle("Marcedis", "Cls", 2022);

jagdish.addVehicle(jagdishsCar);
lata.addVehicle(latasCar);
jayom.addVehicle(jayomsBike);

console.log("Family Details:");
console.log(jagdish);
console.log(lata);
console.log(jayom);

console.log("\nVehicle Details:");
console.log(jagdishsCar);
console.log(latasCar);
console.log(jayomsBike);

*/

//=======================================================

//  all son of your dada name only
/*
class FamilyMember {
    constructor(name, age, relationship, children = [],) {
        this.name = name;
        this.children = children;
    }
    addChild(child) {
        this.children.push(child);
    }
}

let grandfather = new FamilyMember("Grandfather", 70, "Grandfather");

let father1 = new FamilyMember("Jagdish bhai", 45, "Son", [], []);
let father2 = new FamilyMember("Lalit bhai", 42, "Son", [], []);
let father3 = new FamilyMember("Nattu bhai", 47, "Son", [], []);

grandfather.addChild(father1);
grandfather.addChild(father2);
grandfather.addChild(father3);

console.log("Sons of Gordhan bhai:");
grandfather.children.forEach((son) => {
    console.log(son.name);
});

*/

// ==================================================

// 


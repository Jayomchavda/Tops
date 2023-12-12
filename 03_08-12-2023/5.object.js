// make one object who contain your detail like - name,age,multiple vehicles -name,and one function print your name and then do below given task

// - print all value of your details object

/*
function createobj(name, age, vehicles) {
    return {
        name: name,
        age: age,
        vehicles: vehicles,
        printName: function () {
            console.log("My name is", this.name);
        }
    };
}

let myobj = createobj("jayom", 20, ["Car", "Bicycle"]);

console.log("Name:", myobj.name);
console.log("Age:", myobj.age);
console.log("Vehicles:", myobj.vehicles);

myobj.printName();

*/

// =================================================================

// add a function name printAge inside object who print age (from outside)
/*
function createobj(name, age, vehicles) {
    return {
        name: name,
        age: age,
        vehicles: vehicles,
        printName: function () {
            console.log("My name is", this.name);
        },
        printAge: function () {
            console.log("My age is", this.age);
        }
    };
}

let myobj = createobj("jayom", 20, ["Car", "Bicycle"]);

console.log("Name:", myobj.name);
console.log("Age:", myobj.age);
console.log("Vehicles:", myobj.vehicles);

myobj.printName();

myobj.printAge();

*/

// ======================================================

//
/*
function createobj(name, age, vehicles) {
    return {
        name: name,
        age: age,
        vehicles: vehicles,
        printName: function () {
            console.log("My name is", this.name);
        },
        printAge: function () {
            console.log("My age is", this.age);
        },
        getAllKeys: function () {
            return Object.keys(this);
        }
    };
}

let myobj = createobj("jayom", 20, ["Car", "Bicycle"]);

console.log("Name:", myobj.name);
console.log("Age:", myobj.age);
console.log("Vehicles:", myobj.vehicles);

myobj.printName();

myobj.printAge();

let allKeys = myobj.getAllKeys();
console.log("All keys:", allKeys);

*/


// =================================================================

// get all values
/*
function createobj(name, age, vehicles) {
    return {
        name: name,
        age: age,
        vehicles: vehicles,
        printName: function () {
            console.log("My name is", this.name);
        },
        printAge: function () {
            console.log("My age is", this.age);
        },
        getAllKeys: function () {
            return Object.keys(this);
        },
        getAllValues: function () {
            return Object.values(this);
        }
    };
}

let myobj = createobj("jayom", 20, ["Car", "Bicycle"]);

console.log("Name:", myobj.name);
console.log("Age:", myobj.age);
console.log("Vehicles:", myobj.vehicles);

myobj.printName();
myobj.printAge();

let allKeys = myobj.getAllKeys();
console.log("All keys:", allKeys);

let allValues = myobj.getAllValues();
console.log("All values:", allValues);

*/

// =================================================================

// add one key for city name and store your city name on it  (from outside)









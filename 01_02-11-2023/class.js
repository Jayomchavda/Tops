class Teacher {
    constructor(name, salary) {
        console.log("Teacher constructor ---->");
        this.name = name;
        this.salary = salary;
    }

    teach() {
        console.log("---teach---->", this.name);
    }
}

let T1 = new Teacher("Jayom", 50000);
let T2 = new Teacher("Abhishek", 60000);

console.log("T1", T1);
console.log("T2", T2);

T1.teach();
T2.teach();
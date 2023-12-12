/*
class user {
    constructor(name,salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Student extends user {
    fees() {
        console.log("fees");
    }
}

class Teacher extends user {
    salary() {
        console.log("-----salary--->");
    }
}

let s = new Student("Jayom,500000");
let t = new Teacher("UV,6000");

console.log(s);
console.log(t);

*/

class login {
    constructor(name, salary) {
        this.name = name;
        // this.salary = salary;
    }
}

class admin extends login {
    admin() {
        console.log("---admin--->");
        console.log("---Welcome admin--->");
    }
}

class user extends login {
    login() {
        console.log("-----login--->");
    }
}

let a = new admin("Jayom,300000");
let u = new user("UV,500000");

console.log(a);
console.log(u);



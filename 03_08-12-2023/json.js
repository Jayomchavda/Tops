const data = require("./jsondata");
let json = data.total(1, 10);
console.log(json);

let obj = {
    name: "Jayom",
    state: "Gujarat",
};
let jasonString = JSON.stringify(obj);
console.log("jasonString", typeof jasonString, jasonString);
let normalData = JSON.parse(jasonString);
console.log("normalData", normalData);
let date = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// date = date.getDate();
console.log("Date:", date.getDate(), "/", date.getMonth() + 1, "/", date.getFullYear(), ",", weekday[date.getDay()]);

console.log("---getmillisecound--->", date.getMilliseconds());
console.log("---getsecound--->", date.getSeconds());
console.log("---getminute--->", date.getMinutes());
console.log("---gethours--->", date.getHours());
console.log("---getday--->", date.getDay());





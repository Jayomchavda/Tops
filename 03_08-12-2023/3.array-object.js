

// Family members with vehicle details
let family = [
    {
        name: "Jagdish bhai",
        age: 35,
        relationship: "Father",
        vehicles: [{ comp: "Toyota", model: "inno", year: 2010 }],
    },
    {
        name: "lata ben",
        age: 30,
        relationship: "Mother",
        vehicles: [{ comp: "Honda", model: "city", year: 2015 }],
    },
    {
        name: "jayom",
        age: 10,
        relationship: "Son",
        vehicles: [{ comp: "Hero", model: "Adv", year: 2018 }],
    },
    {
        name: "jeny",
        age: 8,
        relationship: "Daughter",
        vehicles: [{ comp: "okinawa", model: "paris pro", year: 2022 }],
    },
];

family.forEach(function (member) {
    console.log(`${member.name} (${member.relationship}), Age: ${member.age}`);
    console.log("Vehicles:");
    member.vehicles.forEach(function (vehicle) {
        console.log(`  ${vehicle.year} ${vehicle.comp} ${vehicle.model}`);
    });
});
//Run this script with Node to test it :)


let toHash = ["Ben", "Mary", "Joe", "Steve", "Harry", "David", "Tessa", "Katy", "Jack", "Jim", "Melissa", "Test", "fyibjsuy", "djnfskj", "fsgrthrfgbfvd", "fsghetfsdg", "d", "jake", "50cent", "drake", "Oats", "speaker", "so many items", "What am I doing", "its 1 am", "I'm going", "to", "sleep", "very", "soon"];

//Physics constants
let g = 9.8           //Force of gravity
let muk = 0.1       //Coefficient of kinetic friction
let m = 1           //Mass
let r = 0.5         //Radius of the wheel
let pi = Math.PI    //Pi

//Make a function to simulate the physics. Returns the hashed index. Args are the energy applied to spin the wheel (e), and the number of items to hash (m).
spinTheWheel = (e, m) => {
    //Arc length of spin
    let s = e / (muk * m * g)
    console.log("Arclength: " + s);

    //Total rotation in radians (arclength / radius)
    let theta = s/r
    console.log("Theta rotated: " + theta);

    //Radians in one segment of the wheel
    let seg = (2 * pi) / m

    //Total number of segments rotated through
    let segT = theta / seg
    console.log("Segments passed: " + segT);

    //Strip full rotations to get index zone
    let iz = segT % m
    console.log("Index zone: " + iz);

    //Return the index of corresponding segment by rounding down. Voila!
    let i = Math.floor(iz)
    console.log("Index: " + i);

    return i
}

let hashedKeys = [];

toHash.forEach((key)=>{
    console.log("About to hash: " + key);

    //Sum the charCodes
    let energyForWheel = 0;
    for (let index = 0; index < [...key].length; index++) {
       energyForWheel += key.charCodeAt(index);
    }
    console.log("Sum of char codes: " + energyForWheel);

    //Spin the wheel!
    let index = spinTheWheel(energyForWheel, toHash.length)

    hashedKeys.push(index);
})

console.log(hashedKeys);

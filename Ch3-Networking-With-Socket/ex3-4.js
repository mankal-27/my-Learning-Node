let myCar = {
    model: 2025,
    name: "Tata Nexon",
    cc: 1500,
    make: "Tata",
    vip : true
};

console.log("Intial Value : ", myCar)

let color = "Black";
myCar["color"] = color;

console.log("After adding color : ", myCar);

myCar["forSale"] = true;
console.log("For Sale : ", myCar)
console.log("Make Of Car : ", myCar["make"])
console.log("Model of Car : ", myCar["model"])
console.log("Available For Sale : ", myCar["forSale"]);
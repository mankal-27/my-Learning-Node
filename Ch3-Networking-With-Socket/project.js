let storeItems = [];
let item1 = {
    name: "ToorDal",
    model: 2021,
    cost: `100₹`,
    quantity: 2
}
let item2 = {
    name: "Macaa",
    model: 2022,
    cost: 2000,
    quantity: 23
}
let item3 = {
    name: "Till",
    model: 2025,
    cost: 245,
    quantity: 1223
}

storeItems.push(item1,item2,item3)
console.log(storeItems)
console.log(storeItems[2]["cost"])
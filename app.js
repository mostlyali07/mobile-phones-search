var search = prompt("Search Mobile Phones");
var mobilePhonesData = {
    Pro13: {
        name: "Apple iPhone 13 Pro Max",
        display: "6.7 inches (17.02 cm)",
        battery: "4500 mAh",
        colors: ["black", "white", "Gold"],
        ram: "6GB",
    }
};
console.log(mobilePhonesData.Pro13[search]);

// var iphone = {
//     name: "my iphone",
//     price: 12554,
// };

// console.log(iphone[search]);
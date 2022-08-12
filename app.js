function search() {
    var seArch = prompt("Search Mobile Phones");
    var mobilePhones = {
        apple: {
            name: "Apple iPhone 13 Pro Max",
            display: "6.7' 1284x2778 pixels",
            battery: "4500 mAh",
            colors: ["black", "white", "Blue"],
            ram: "6GB"
        },
        samsung: {
            name: "Samsung Galaxy Z Fold3 5G",
            display: "7.6' 1768x2208 pixels",
            battery: "4400mAh",
            colors: ["black", "white", "Gold"],
            ram: "12GB"
        },
        google: {
            name: "Google Pixel 6 Pro",
            display: "6.71' 1440x3120 pixels",
            battery: "5003mAh",
            colors: ["black", "white", "Blue"],
            ram: "12GB"
        },
        oppo: {
            name: "Oppo Find X5 Pro",
            display: "6.7' 1440x3216 pixels",
            battery: "5000mAh",
            colors: ["black", "white", "Gold"],
            ram: "8 / 12GB"
        },
        vivo: {
            name: "vivo X80 Pro",
            display: "6.78' 1440x3200 pixels",
            battery: "4700mAh",
            colors: ["black", "Gray", "Gold"],
            ram: "8 / 12GB"
        },
        realme: {
            name: "Realme 9",
            display: "6.4' 1080x2400 pixel",
            battery: "5000mAh",
            colors: ["black", "white", "Gold"],
            ram: "6 / 8GB"
        },
        lg: {
            name: "LG K71",
            display: "6.8' 1080x2460 pixels",
            battery: "4000mAh",
            colors: ["black", "white", "Blue"],
            ram: "4GB"
        },
        xiaomi: {
            name: "Xiaomi 12 Pro",
            display: "6.73' 1440x3200 pixels",
            battery: "4600mAh",
            colors: ["black", "Gray", "Gold"],
            ram: "8 / 12GB"
        }
    };
    console.log(mobilePhones[seArch]);

    var text1 = document.getElementById("text-1");
    var h6 = document.createElement("h6");
    var text = document.createTextNode(text1);
    h6.appendChild(text);
    document.getElementById("text-1").appendChild(h6);
}

// var iphone = {
//     name: "my iphone",
//     price: 12554,
// };

// console.log(iphone[search]);
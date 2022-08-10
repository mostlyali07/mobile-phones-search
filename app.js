// var search = prompt("Search Mobile Phones");
// var mobilePhonesData = {
//     Pro13: {
//         nAme: "Apple iPhone 13 Pro Max",
//         diSplay: "6.7 inches (17.02 cm)",
//         battery: "4500 mAh",
//         colors: ["black", "white", "Gold"],
//         RAm: "6GB",
//     }
// };
// console.log(mobilePhonesData.search);
// Runner.prototype.gameOver = function(){}

// var prp = prompt("Enter Something");

var inner = document.getElementsByTagName("textarea");
// var parentDiv = document.getElementById("div1");
var newParagraph = document.createElement("h1");
var t = document.createTextNode(inner);
newParagraph.appendChild(t);
paragraph1 = inner.firstChild;
inner.insertBefore(newParagraph, paragraph1);
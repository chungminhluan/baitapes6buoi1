// let colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

// let renderButton = (colorContainer) => {

//     for (let i = 0; i < colorContainer.length; i++) {
//         let color = colorContainer[i];
//         document.querySelector('#colorContainer').innerHTML += `
//         <button class="color-button ${color} active" onclick="changeColor('${color}')">${color}</button>
//         `
//     }

// }

// renderButton(colorList);
// let changeColor = (color) => {
//     document.querySelector('#house') = color;

// }


// const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
// let container = document.getElementById("colorContainer");
// (loadColorPick = () => {
//     for (let o = 0; o < colorList.length; o++)
//         container.innerHTML +=
//         0 == o ?
//         "<button class='color-button " + colorList[o] + " active'></button>" :
//         "<button class='color-button " + colorList[o] + "'></button>"

// }), loadColorPick();
// let colorPicker = document.getElementsByClassName("color-button"),
//     house = document.getElementById("house");
// for (let o = 0; o < colorPicker.length; o++) colorPicker[o].addEventListener("click", function () {
//     changeColor(colorList[o], o)
// });
// changeColor = (o, e) => {
//     for (let o = 0; o < colorPicker.length; o++) colorPicker[o].classList.remove("active");
//     colorPicker[e].classList.add("active"), house.className = "house " + o
// };
const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
];
let container = document.getElementById("colorContainer");
window.loadColorPick = () => {
        for (let o = 0; o < colorList.length; o++)
            container.innerHTML +=
            0 == o ?
            "<button class='color-button " + colorList[o] + " active'></button>" :
            "<button class='color-button " + colorList[o] + "'></button>";
    },
    loadColorPick();
let colorPicker = document.getElementsByClassName("color-button"),
    house = document.getElementById("house");
for (let o = 0; o < colorPicker.length; o++)
    colorPicker[o].addEventListener("click", function () {
        changeColor(colorList[o], o);
    });
window.changeColor = (o, e) => {
    for (let o = 0; o < colorPicker.length; o++)
        colorPicker[o].classList.remove("active");
    colorPicker[e].classList.add("active"), (house.className = "house " + o);
};
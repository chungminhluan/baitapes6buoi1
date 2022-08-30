let colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let renderButton = (colorContainer) => {
    let output = '';
    for (let i = 0; i < colorContainer.length; i++) {
        let color = colorContainer[i];
        output += `
        <button class="color-button ${color} active" onclick="changeColor('${color}')">${color}</button>
        `
    }
    document.querySelector('#colorContainer').innerHTML = output;
}

renderButton(colorList);
let changeColor = (color) => {
    document.querySelector('#house') = color;

}
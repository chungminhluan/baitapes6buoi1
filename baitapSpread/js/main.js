const heading = document.querySelector(".heading");
effect = (e => {
    return [...e].map(e => `<span>${e}</span>`).join("")
}), heading.innerHTML = effect(heading.innerText);
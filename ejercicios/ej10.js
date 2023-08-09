let frase = document.getElementById("frase");
let button = document.getElementById("btn");

let functionReverse = () => frase.value.split("").reverse().join("");

button.onclick = () => {
    frase.value = functionReverse(frase);
};

/*
function reverseFrase() {
    reverse = frase.value.split("").reverse().join("");
    frase.value = reverse;
}*/
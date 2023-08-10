const PI = 3.14;

let btn = $( "#btn1" );
let input1 = $("#input1");
let result = $("#result");

btn.on("click", function (event){
    let radio = parseFloat(input1.val());
    
    if (isNaN(radio)) {
        result.html(`Error, ingrese un numero.`);
        result.attr({
            hidden: false
        });
    } else {
        result.html(`Area: ${PI*radio**2}<br>
        Perimetro: ${PI*radio*2}`);
        result.attr({
            hidden: false
        });
    }
})
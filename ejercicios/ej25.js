/*function getFormValores() {
    let form = $( "#form1" ).serialize().split("&");
    alert(form);
}
var e = "";
e.*/
console.log("hello");

$( "#form1" ).submit(function( event ) {

    alert($( "#form1" ).serialize().split("&"));
    
    event.preventDefault();
    
});

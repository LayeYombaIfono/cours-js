let demo = document.getElementById("demo");

function myFunction(date) {
    
    let string = date.toString();
    demo.textContent = string;
}
let newDate = new Date();
myFunction(newDate);

// Selectionner un élément du DOM



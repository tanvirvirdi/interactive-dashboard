var inches;
var centimeters;

inches = prompt("Enter inches:");

// Check if inches is entered (since prompt always returns a value, any input counts)
if (inches) {
    centimeters = inches * 2.54;
    alert("centimeters = inches * 2.54");
    alert("output: " + centimeters);
}
//Convert to numeric value 
let input_value = parseFloat (input_value)
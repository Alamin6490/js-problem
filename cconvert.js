// 12 inch 1 feet 
function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}


// 75 
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft' + inchRemaining + 'inch.'
    return result;
}
const shuvoHeight = inchToFeet(75);
const shuvoHeight2 = inchToFeet2(75);
 console.log(shuvoHeight);
console.log(shuvoHeight2);



// another kilometer example
function mileToKilometer(mile){
    const kilo = mile * 1.6093;
    return kilo;
}
 console.log(mileToKilometer(4));
//
function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
console.log(kiloMeterToMiles(4));


//-----explain the code 
```javascript
// Function to convert inches to feet
// 12 inches = 1 foot
function inchToFeet(inch) {
    const feet = inch / 12;  // Divide inches by 12 to get feet
    return feet;
}

// Function to convert inches to feet and remaining inches
// Takes input in inches and returns a formatted string with feet and inches
function inchToFeet2(inch) {
    const feetFraction = inch / 12;  // Divide inches by 12 to get feet in decimal
    const feetNumber = parseInt(feetFraction);  // Get whole number of feet
    const inchRemaining = inch % 12;  // Find the remaining inches after converting to feet
    const result = feetNumber + 'ft ' + inchRemaining + 'inch.';  // Format result as "ft inch"
    return result;
}

const shuvoHeight = inchToFeet(75);  // Convert 75 inches to feet
const shuvoHeight2 = inchToFeet2(75);  // Convert 75 inches to feet and inches format
// console.log(shuvoHeight);
console.log(shuvoHeight2);  // Output result in "ft inch" format

// Function to convert miles to kilometers
// 1 mile = 1.6093 kilometers
function mileToKilometer(mile) {
    const kilo = mile * 1.6093;  // Multiply miles by conversion factor
    return kilo;
}

// Function to convert kilometers to miles
// 1 kilometer = 0.621371 miles
function kiloMeterToMiles(kilo) {
    const mile = kilo * 0.621371;  // Multiply kilometers by conversion factor
    return mile;
}
```

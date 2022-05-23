// First, create a while loop that will run while the variable num is greater than 0 . Inside the loop, use console.log to print num to the console. Lastly, still inside the loop, decrease num so it eventually becomes equal to 0, which will cause our loop to finish.

let num = 10; 
while (num > 0){
console.log(num)
num--
}

// Create a while loop that will run while monthNumber is less than or equal to monthsToPrint. Let's avoid causing an infinite loop by incrementing the monthNumber variable after each pass at the loop.
// For the first line inside of the loop (before incrementing the monthNumber), multiply the number of sheep by 4. Assign the result back to the numSheep variable.
// Next, use console.log to print how many sheep there will be after each month. Place this line before incrementing the monthNumber and after the numSheep variable is multiplied. Here's what the first two lines of output should look like:
// There will be 16 sheep after 1 month(s)!
// There will be

while (monthNumber <= monthsToPrint) {
    numSheep *= 4;
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
    monthNumber++;
}

// Write a for loop which declares a new variable num and sets its initial value to 10. Run the loop while num is greater than 0. After each iteration, decrease num by 1. Inside the loop, use console.log to print num.

for (let num = 10; num > 0; num--){
    console.log(num)
}

// Write a for loop which uses the monthNumber as the initial value, setting it to 1. For as long as monthNumber is less than or equal to monthsToPrint, increment monthNumber by 1.
// Inside the for loop, multiply the number of sheep by 4 and assign the result back to the numSheep variable.
// Finally, let's use console.log inside the loop to print how many sheep there will be after each month. Here's what the first two lines of output should look like:
// There will be 16 sheep after 1 month(s)!

for (let monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++){
    numSheep *= 4;
    console.log('There will be ' + numSheep + ' sheep after ' + monthNumber)
}  

// Let's start by designing a while loop that handles the first 4 generators. This loop should run as long as runningGen is less than 5. The last line of the loop should increment the runningGen variable by 1. Before we increment the variable, let's add a console.log that will output the following lines:


// Now let's design a for loop that handles the other 15 generators. The first part of the loop should declare a new variable called stoppedGen which is assigned the value from runningGen. This for loop should run as long as stoppedGen is less than or equal to totalGen. For each run, it should increment the stoppedGen variable by 1. Here's what the first two lines of output should look like:

let runningGen = 1;
let totalGen = 19;

while (runningGen < 5){
  console.log('Generator ' + runningGen + ' is on.')
  runningGen ++
}

for(let stoppedGen = runningGen; stoppedGen <= totalGen; stoppedGen++){
  console.log('Generator #' + stoppedGen + ' is off.')
}

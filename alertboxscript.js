// Get the current time
const now = new Date();
const hour = now.getHours();

// Determine the greeting based on the current time
let greeting;

if (hour < 12) {
    greeting = "Good Morning!";
} else if (hour < 18) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

// Display the greeting in an alert box
alert(greeting);

// Using a dedicated worker to perform networking in JavaScript to calculate the number of characters in the response JSON object... 

console.log("Hello, Good Afternoon!");

const jsonStr = 'https://jsonplaceholder.typicode.com/users';

let list = document.getElementById('list');

// Create a new worker
let worker = new Worker('1worker.js');

// Start the worker with the URL as a parameter
worker.postMessage(jsonStr);

// Listen for messages from the worker
worker.onmessage = function(event) {
 // Display the user ID
 list.innerHTML = `<li class="list-group-item"><p><strong>Id:</strong> ${event.data}</p></li>`;
};

// Basic promise chaining using the fetch() API to perform fetching of data from a server
// Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

console.log("Hello, Good Afternoon!");

// The simplest fetch I can use and still have error handling
const jsonStr = 'https://jsonplaceholder.typicode.com/users';

let list = document.getElementById('list');

// A Promise is an Object that links Producing code and Consuming code
// Call `fetch()`, passing in the URL.
let promise1 = fetch(jsonStr)
  // fetch() returns a promise. When we have received a response from the server,
  // the promise's then() handler is called with the response.
  .then(function(response) {
    console.log("Response received for promise1");
    // Error checking
    // 200 - 299 is a success code
    if (!response.ok) throw new Error('invalid response');
    // Otherwise (if the response succeeded), our handler fetches the response
    // as text by calling response.json(), and immediately returns the promise
    // returned by response.json().
    return response.json(); // Method to extract JSON string and convert it to a JSON object
  })
  // When response.json() has succeeded, the then() handler is called with
  // the JSON object, and we process it to create list item elements.
  .then(function(dataArray) { // dataArray is an array of JSON objects
    console.log("Data received for promise1");
    let firstUser = dataArray[0]; // The first user in the array
    // Create list item elements and return them
    return `<li class="list-group-item"> 
      <p><strong>Id:</strong> ${firstUser.id}</p> 
      <p><strong>Name:</strong> ${firstUser.name}</p> 
      <p><strong>Username:</strong> ${firstUser.username}</p> 
      <p><strong>Email:</strong> ${firstUser.email}</p> 
      <p><strong>Phone:</strong> ${firstUser.phone}</p> 
      <p><strong>Website:</strong> ${firstUser.website}</p>
    </li>`;
  })
  // Catch any errors that might happen during the fetch or processing,
  // and display a message in the list element.
  .catch(function(error) {
    console.log("Error received for promise1");
    console.log(error);
    list.innerHTML = `Could not fetch user data: ${error}`;
  });

// When promise1 has completed successfully, the then() handler is called with the result, and we update the list element.
promise1.then(function(data) {
  console.log("Data received for promise1");
  list.innerHTML = data;
});

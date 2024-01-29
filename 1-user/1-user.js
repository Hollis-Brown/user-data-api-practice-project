// Basic promise chaining using the fetch() API to perform fetching of data from a server


console.log("Hello, Good Afternoon!");

const jsonStr = 'https://jsonplaceholder.typicode.com/users';

let list = document.getElementById('list');


let promise1 = fetch(jsonStr)
  
  .then(function(response) {
    console.log("Response received for promise1");
    if (!response.ok) throw new Error('invalid response');
    return response.json(); 
  })
  .then(function(dataArray) { 
    console.log("Data received for promise1");
    let firstUser = dataArray[0]; 
    return `<li class="list-group-item"> 
      <p><strong>Id:</strong> ${firstUser.id}</p> 
      <p><strong>Name:</strong> ${firstUser.name}</p> 
      <p><strong>Username:</strong> ${firstUser.username}</p> 
      <p><strong>Email:</strong> ${firstUser.email}</p> 
      <p><strong>Phone:</strong> ${firstUser.phone}</p> 
      <p><strong>Website:</strong> ${firstUser.website}</p>
    </li>`;
  })
  .catch(function(error) {
    console.log("Error received for promise1");
    console.log(error);
    list.innerHTML = `Could not fetch user data: ${error}`;
  });

promise1.then(function(data) {
  console.log("Data received for promise1");
  list.innerHTML = data;
});

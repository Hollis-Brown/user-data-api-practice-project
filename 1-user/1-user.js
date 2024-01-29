// Basic promise chaining using the fetch() API to perform fetching of data from a server at the click of a button
console.log("Hello, Good Afternoon!");

const jsonStr = 'https://jsonplaceholder.typicode.com/users';

let list = document.getElementById('list');

// Function to fetch and display data for another user
const loadAnotherUser = () => {
  // Fetch data for another user
  fetch(jsonStr)
    .then(response => {
      if (!response.ok) throw new Error('Invalid response');
      return response.json();
    })
    .then(dataArray => {
      // Display data for the second user (assuming there's at least one more user)
      if (dataArray.length > 1) {
        const secondUser = dataArray[0];
        const userHtml = `<li class="list-group-item">
          <p><strong>Id:</strong> ${secondUser.id}</p>
          <p><strong>Name:</strong> ${secondUser.name}</p>
          <p><strong>Username:</strong> ${secondUser.username}</p>
          <p><strong>Email:</strong> ${secondUser.email}</p>
          <p><strong>Phone:</strong> ${secondUser.phone}</p>
          <p><strong>Website:</strong> ${secondUser.website}</p>
        </li>`;
        list.innerHTML = userHtml;
      } else {
        list.innerHTML = 'No more users available.';
      }
    })
    .catch(error => {
      console.log('Error fetching another user:', error);
      list.innerHTML = `Could not fetch user data: ${error}`;
    });
};

// Attach click event listener to the "Load Another User" button
const loadUserButton = document.getElementById('loadUserButton');
loadUserButton.addEventListener('click', loadAnotherUser);

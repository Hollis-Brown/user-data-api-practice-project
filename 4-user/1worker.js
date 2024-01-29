// worker.js
// worker.js
self.onmessage = function(eventObject) {
  fetch(eventObject.data)
      .then(function(response) {
        if (!response.ok) throw new Error('Invalid response');
        return response.json();
      })
      .then(function(dataArray) {
        let firstUser = dataArray[0];
        self.postMessage(firstUser.id);
      })
      .catch(function(error) {
        console.error('Error:', error);
        self.postMessage(error);
      });
 };
 
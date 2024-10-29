const url = 'https://jsonplaceholder.typicode.com/posts';
// Using fetch to get data
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    console.log('Fetched data:', data[1].title); // Log the data
    // You can process the data here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

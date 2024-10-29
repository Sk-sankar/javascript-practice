// function adding(n){
//     let left=n[0];
//     let right=n[n.length-1];
//     let diff=right-left;
//     console.log(diff);
// }
// adding([1,2,3,4,5,6,7,8,9,10])
// const message = 'Hello world' // Try edit me



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
    console.log('Fetched data:', data[1].body); // Log the data
    // You can process the data here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });










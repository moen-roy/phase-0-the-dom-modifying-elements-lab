// Write your code here!// Remove the <main> with id 'main'
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new header
newHeader.id = 'victory';

// Set the text inside the new header
newHeader.textContent = 'Moen is the champion';

// Add the header to the document body
document.body.appendChild(newHeader);

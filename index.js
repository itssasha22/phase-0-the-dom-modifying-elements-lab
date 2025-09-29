// Write your code here!

// Remove the main element
document.querySelector('main#main').remove();

// Create new header
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Sasha is the champion';

// Append to body
document.body.append(newHeader);

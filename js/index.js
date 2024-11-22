const quotes = [
  { 'author': 'Jim Rohn', 'quote': 'Beware of what you become in pursuit of what you want.' },
  { 'author': 'Epictetus', 'quote': 'It\'s not what happens to you, but how you react to it that matters.' },
  { 'author': 'Frank Sinatra', 'quote': 'The best revenge is massive success.' },
  { 'author': 'Wayne Gretzky', 'quote': 'You miss 100% of the shots you don\'t take.' },
  { 'author': 'Nelson Mandela', 'quote': 'Resentment is like drinking poison and waiting for your enemies to die.' },
  { 'author': 'Elbert Hubbard', 'quote': 'Do not take life too seriously. You will not get out alive.' }
];

var currentIndex = 0;

function changeAuthor() {
  
  currentIndex = (currentIndex + 1) % quotes.length;
  var quoteText = quotes[currentIndex].quote;
  var authorText = quotes[currentIndex].author;
  document.getElementById("quote").textContent = `"${quoteText}"`;
  document.getElementById("author").textContent = `- ${authorText}`;
}

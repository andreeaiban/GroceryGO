// Get the search bar and FAQ items
var search = document.getElementById('search');
var faqItems = document.getElementById('faq-items');

// Add an event listener to the search bar
search.addEventListener('keyup', function() {

// Get the search query
var query = search.value.toLowerCase();

// Loop through each FAQ item
faqItems.querySelectorAll('.faq-item').forEach(function(item) {

// Get the FAQ question and answer
var question = item.querySelector('.faq-question').innerText.toLowerCase();
var answer = item.querySelector('.faq-answer').innerText.toLowerCase();

// Show the FAQ item if the search query matches the question or answer, otherwise hide it
if (question.indexOf(query) >= 0 || answer.indexOf(query) >= 0) {
item.style.display = 'block';
} else {
item.style.display = 'none';
}
});
});

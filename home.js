// Get the nav element
var nav = document.querySelector('nav');

// Add an event listener to the nav element
nav.addEventListener('click', function(event) {

// Get the target element
var target = event.target;

// If the target is an anchor element
if (target.tagName === 'A') {

// Remove the active class from all anchor elements
nav.querySelectorAll('a').forEach(function(a) {
a.classList.remove('active');
});

// Add the active class to the clicked anchor element
target.classList.add('active');
}
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");

  toggleButton.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});


const form = document.getElementById('contact-form');
const thankYou = document.getElementById('thank-you');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      thankYou.style.display = 'block';
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  }).catch(error => {
    alert('Oops! Something went wrong. Please try again.');
  });
});

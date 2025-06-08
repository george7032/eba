document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");

  toggleButton.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const status = document.getElementById("form-status");

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.textContent = "Thank you! Your message has been sent.";
      status.style.color = "green";
      form.reset();
    } else {
      response.json().then(data => {
        status.textContent = data.errors ? data.errors.map(err => err.message).join(", ") : "Something went wrong.";
        status.style.color = "red";
      });
    }
  }).catch(() => {
    status.textContent = "Oops! There was a problem.";
    status.style.color = "red";
  });
});



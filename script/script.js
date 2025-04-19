document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactButton");
  const formContainer = document.querySelector(".contact-form-container");
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  // Initially hide the form
  formContainer.style.display = "none";

  // Toggle the visibility of the contact form
  contactBtn.addEventListener("click", function () {
    // Toggle visibility of the form
    if (formContainer.style.display === "none" || formContainer.style.display === "") {
      formContainer.style.display = "block";
      formContainer.scrollIntoView({ behavior: "smooth" });
    } else {
      formContainer.style.display = "none";
    }
  });

  // Handle form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent actual form submission

    // Show success message
    successMessage.style.display = 'block';

    // Optionally, hide the success message after 3 seconds
    setTimeout(function() {
      successMessage.style.display = 'none';
      // Optionally, hide the form after successful submission
      formContainer.style.display = 'none';
    }, 3000);
  });
});

// Get elements
const contactButton = document.getElementById("contactButton");
const modal = document.getElementById("contactModal");
const closeModalBtn = document.getElementById("closeModal");
const form = document.getElementById("consultationForm");
const thankYouModal = document.getElementById("thankYouModal");
const closeButtons = document.querySelectorAll(".close-button");

// Show contact form modal
contactButton.onclick = () => {
  modal.style.display = "flex";
};

// Close contact form modal
closeModalBtn.onclick = closeModal;
window.onclick = (e) => {
  if (e.target === modal) closeModal();
  if (e.target === thankYouModal) closeThankYouModal();
};

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default redirect
  
  // Show the thank-you modal immediately after form submission
  modal.style.display = "none"; // Hide contact modal
  thankYouModal.classList.add("show"); // Show thank-you modal with animation

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      form.reset(); // Reset form fields
      setTimeout(() => {
        closeThankYouModal(); // Close the thank-you modal after 2 seconds
      }, 2000); // Adjust the time as needed
    } else {
      alert("Something went wrong. Please try again later.");
    }
  })
  .catch(error => {
    alert("Network error. Please check your connection.");
  });
});

// Close contact modal and reset
function closeModal() {
  modal.style.display = "none";
  form.reset();
  form.style.display = "block";
}

// Close thank-you modal and scroll back to the contact form section
function closeThankYouModal() {
  thankYouModal.classList.remove("show"); // Hide thank-you modal with animation
  document.querySelector('.contact-container').scrollIntoView({ behavior: 'smooth' }); // Scroll back to the contact form
}

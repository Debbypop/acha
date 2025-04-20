// Get elements
const contactButton = document.getElementById("contactButton");
const modal = document.getElementById("contactModal");
const closeModalBtn = document.getElementById("closeModal");
const form = document.getElementById("consultationForm");
const thankYouModal = document.getElementById("thankYouModal"); // Updated
const closeButtons = document.querySelectorAll(".close-button"); // All close buttons

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
      modal.style.display = "none"; // Hide contact modal
      thankYouModal.style.display = "flex"; // Show thank-you modal
      form.reset(); // Reset form fields
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

// Close thank-you modal
function closeThankYouModal() {
  thankYouModal.style.display = "none";
}

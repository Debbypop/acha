// Get elements
const contactButton = document.getElementById("contactButton");
const modal = document.getElementById("contactModal");
const closeModalBtn = document.getElementById("closeModal");
const form = document.getElementById("consultationForm");
const thankYouMessage = document.getElementById("thankYouMessage");

// Show modal when button is clicked
contactButton.onclick = () => {
  modal.style.display = "flex";
};

// Close modal
closeModalBtn.onclick = closeModal;
window.onclick = (e) => {
  if (e.target === modal) closeModal();
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
      form.style.display = "none";
      thankYouMessage.style.display = "block";
    } else {
      alert("Something went wrong. Please try again later.");
    }
  })
  .catch(error => {
    alert("Network error. Please check your connection.");
  });
});

// Reset and close modal
function closeModal() {
  modal.style.display = "none";
  form.reset();
  form.style.display = "block";
  thankYouMessage.style.display = "none";
}

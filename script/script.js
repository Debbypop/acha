// Get modal, button, and close button elements
const contactButton = document.getElementById("contactButton");
const modal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

// Open the modal when the contact button is clicked
contactButton.onclick = function() {
  modal.style.display = "flex"; // Show the modal
}

// Close the modal when the close button (×) is clicked
closeModal.onclick = function() {
  modal.style.display = "none"; // Hide the modal
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Handle the form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // You can submit the form data here (already handled by formsubmit.co, no additional AJAX needed)
  
  // Redirect the user to the next page after submission
  window.location.href = 'nextpage.html'; // Replace 'nextpage.html' with the desired page URL
}


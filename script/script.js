// Get modal element, button, and close button
const modal = document.getElementById('contactModal');
const contactButton = document.getElementById('contactButton'); // The button that opens the modal
const closeModal = document.getElementById('closeModal');

// When the user clicks the "CONTACT US" button, open the modal
contactButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

// When the user clicks the close button (x), close the modal
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// When the user clicks anywhere outside the modal content, close the modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

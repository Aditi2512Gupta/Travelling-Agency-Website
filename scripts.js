
// Open and close modal for booking
document.querySelector('.cta-button').addEventListener('click', function() {
    document.getElementById('booking-modal').style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('booking-modal').style.display = 'none';
});

// Close the modal if the user clicks outside
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('booking-modal')) {
        document.getElementById('booking-modal').style.display = 'none';
    }
});

const bookingForm = document.getElementById('booking-modal').querySelector('form');

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    alert("Thank you for booking with Orbitz! Your request has been submitted.");
    
    // Close the modal after submission
    document.getElementById('booking-modal').style.display = 'none';

    // Optionally, clear the form inputs after submission
    bookingForm.reset();
});


  // Open Modal
  function openModal() {
    document.getElementById("profileModal").style.display = "flex";  // Show modal
  }

  // Close Modal
  function closeModal() {
    document.getElementById("profileModal").style.display = "none";  // Hide modal
  }

  // Close Modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target == document.getElementById("profileModal")) {
      closeModal();
    }
  }

  // Handle form submission
  document.getElementById("profileForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    alert(`Profile Saved: \nName: ${name} \nEmail: ${email} \nPhone: ${phone}`);
    closeModal();  // Close modal after submission
  });





// Toggle menu visibility for mobile
const menuIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', function() {
    menu.classList.toggle('active');
});

function populateMonths() {
  const monthSelect = document.getElementById('expiryMonth');
  for (let i = 1; i <= 12; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    monthSelect.appendChild(option);
  }
}

// Function to populate years
function populateYears() {
  const yearSelect = document.getElementById('expiryYear');
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i <= currentYear + 20; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }
}

populateMonths();
populateYears();













document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var cardType = document.getElementById('cardType').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryMonth = document.getElementById('expiryMonth').value;
    var expiryYear = document.getElementById('expiryYear').value;
    var cardHolder = document.getElementById('cardHolder').value;
    var email = document.getElementById('email').value;
    var terms = document.getElementById('terms').checked;
  
    if (!cardType || !cardNumber || !expiryMonth || !expiryYear || !cardHolder || !email) {
      alert('Please fill out all required fields.');
      return false;
    }

    if (cardNumber.length !== 16) {
      alert('Card number must be 16 digits.');
      return false;
    }
    
    // Validate expiry date (ensure it's not in the past)
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    if (expiryYear < currentYear || (expiryYear == currentYear && expiryMonth < currentMonth)) {
      alert('Expiry date cannot be in the past.');
      return false;
    }
  
    // Validate email format (simple regex)
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email.');
      return false;
    }
  
    // Validate amount (ensure it's a positive number)
    const amount = document.getElementById('amount').value;
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return false;
    }
  
    if (!terms) {
      alert('You must agree to the terms and conditions.');
      return false;
    }// Add additional validation as necessary
  
    alert('Form is valid, proceed with payment processing.');
  });

  function cancelPayment() {
    if (confirm('Are you sure you want to cancel the payment?')) {
      window.location.href = "../usermenu/usermenu.html";
    }
  }
  
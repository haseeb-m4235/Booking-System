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
  
    if (!terms) {
      alert('You must agree to the terms and conditions.');
      return false;
    }
  
    // Add additional validation as necessary
  
    alert('Form is valid, proceed with payment processing.');
  });
  
  function cancelPayment() {
    if (confirm('Are you sure you want to cancel the payment?')) {
      window.location.href = 'index.html'; // Redirect to a different page or perform another action
    }
  }
  
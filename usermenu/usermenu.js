// now here in these variables we will make different apis for each category and call
// them in the usermenu.js file and show the data
var concerts = [ 
  { name: "Jazz Night", date: "2024-01-15", timings: "19:00", venue: "Downtown Arena", tickets: "120" },
  { name: "Rock Fest", date: "2024-01-20", timings: "18:00", venue: "Riverfront Amphitheater", tickets: "200" }
];

var buses = [
  { name: "Capital Express", date: "2024-01-16", timings: "08:00", venue: "Bus Terminal A", tickets: "30" },
  { name: "City Shuttle", date: "2024-01-16", timings: "09:00", venue: "Bus Terminal B", tickets: "40" }
];

var flights = [
  { name: "Airways 101", date: "2024-01-17", timings: "10:00", venue: "International Airport", tickets: "150" },
  { name: "Skyline 302", date: "2024-01-18", timings: "16:00", venue: "Domestic Airport", tickets: "200" }
];

var trains = [
  { name: "InterCity Express", date: "2024-01-19", timings: "14:00", venue: "Central Station", tickets: "100" },
  { name: "Coastal Liner", date: "2024-01-20", timings: "15:00", venue: "East Station", tickets: "80" }
];

var movies = [
  { name: "Train to Busan", date: "2024-01-19", timings: "14:00", venue: "Giga mall", tickets: "100" },
  { name: "Intersteler", date: "2024-01-20", timings: "15:00", venue: "Centaurus", tickets: "80" },
  { name: "Train to Busan", date: "2024-01-19", timings: "14:00", venue: "Giga mall", tickets: "100" }
];
  

const myBookings = fetch('http://127.0.0.1:8080/senduserbookings', {
  method: 'GET'
}).then(response => response.json());

// Add event listener to My Bookings link
document.getElementById('myBookings').addEventListener('click', displayMyBookings);

function displayMyBookings() {
  var categoryContent = document.getElementById('categoryContent');
  var categoryTitle = document.getElementById('categoryTitle');
  categoryTitle.textContent = 'My Bookings'; // Set the title to "My Bookings"
  categoryContent.innerHTML = ''; // Clear the content

  // Wait for the Promise to resolve
  myBookings.then(data => {
    // Use the data inside the Promise
    data.forEach(function(booking) {
      var bookingItem = document.createElement('div');
      bookingItem.classList.add('category');
      bookingItem.innerHTML = `<strong>${booking.category.toUpperCase()}: ${booking.name}</strong> <br> Date: ${booking.date} <br> Timings: ${booking.timings} <br> Venue: ${booking.venue} <br> Tickets: ${booking.tickets}`;
      categoryContent.appendChild(bookingItem);
    });
  }).catch(error => {
    console.error('Error fetching data:', error);
  });
}



function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var body = document.querySelector('body');
  // Use computed style to get the actual rendered style
  var sidebarStyle = window.getComputedStyle(sidebar);
  
  if (sidebar.classList.contains('hidden')) {
    sidebar.classList.remove('hidden'); // Remove the hidden class to show the sidebar
    body.classList.add('body-shift');
  } else if (sidebarStyle.left === '0px') { // Check if the sidebar is visible
    sidebar.classList.add('hidden'); // Add the hidden class to hide the sidebar
    body.classList.remove('body-shift');
  } else {
    sidebar.style.left = '0'; // Show the sidebar
    body.classList.add('body-shift');
  }
}


function createBookingButton() {
  var button = document.createElement('button');
  button.textContent = 'Book Now';
  button.onclick = function() {
    alert('Redirecting to payment portal...');
    window.location.href = "../Payment/index.html";

  };
  return button;
}

  // Function to display category content
  function showCategory(category) {
    var categoryContent = document.getElementById('categoryContent');
    var categoryTitle = document.getElementById('categoryTitle');
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the first letter
    categoryContent.innerHTML = ''; // Clear the content
    
    switch (category) {
      case 'movies':
        displayMovies();
        break;
      case 'concerts':
        displayConcerts();
        break;
      case 'buses':
        displayBuses();
        break;
      case 'flights':
        displayFlights();
        break;
      case 'trains':
        displayTrains();
        break;
      default:
        console.log("Unknown category: " + category);
    }
  }
  
  // Function to display movies
  function displayMovies() {
    var categoryContent = document.getElementById('categoryContent');
    movies.forEach(function(movie, index) {
      var movieItem = document.createElement('div');
      movieItem.classList.add('category');
      movieItem.innerHTML = `<strong>${movie.name}</strong> <br> Date: ${movie.date} <br> Timings: ${movie.timings} <br> Terminal: ${movie.venue} <br> Tickets Available: ${movie.tickets}`;
      movieItem.appendChild(createBookingButton());
      categoryContent.appendChild(movieItem);
    });
  }
  
  function displayConcerts() {
    var categoryContent = document.getElementById('categoryContent');
    concerts.forEach(function(concert, index) {
      var concertItem = document.createElement('div');
      concertItem.classList.add('category');
      concertItem.innerHTML = `<strong>${concert.name}</strong> <br> Date: ${concert.date} <br> Timings: ${concert.timings} <br> Terminal: ${concert.venue} <br> Tickets Available: ${concert.tickets}`;
      concertItem.appendChild(createBookingButton());
      categoryContent.appendChild(concertItem);
    });
  }
  
  function displayBuses() {
    var categoryContent = document.getElementById('categoryContent');
    buses.forEach(function(bus, index) {
      var busItem = document.createElement('div');
      busItem.classList.add('category');
      busItem.innerHTML = `<strong>${bus.name}</strong> <br> Date: ${bus.date} <br> Timings: ${bus.timings} <br> Terminal: ${bus.venue} <br> Tickets Available: ${bus.tickets}`;
      busItem.appendChild(createBookingButton());
      categoryContent.appendChild(busItem);
    });
  }

  function displayFlights() {
    var categoryContent = document.getElementById('categoryContent');
    flights.forEach(function(flight, index) {
      var flightItem = document.createElement('div');
      flightItem.classList.add('category');
      flightItem.innerHTML = `<strong>${flight.name}</strong> <br> Date: ${flight.date} <br> Timings: ${flight.timings} <br> Airport: ${flight.venue} <br> Seats Available: ${flight.tickets}`;
      flightItem.appendChild(createBookingButton());
      categoryContent.appendChild(flightItem);
    });
  }
  
  function displayTrains() {
    var categoryContent = document.getElementById('categoryContent');
    trains.forEach(function(train, index) {
      var trainItem = document.createElement('div');
      trainItem.classList.add('category');
      trainItem.innerHTML = `<strong>${train.name}</strong> <br> Date: ${train.date} <br> Timings: ${train.timings} <br> Station: ${train.venue} <br> Tickets Available: ${train.tickets}`;
      trainItem.appendChild(createBookingButton());
      categoryContent.appendChild(trainItem);
    });
  }
  


  // Initial display
  showCategory('movies');

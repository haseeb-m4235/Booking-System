// now here in these variables we will make different apis for each category and call
// them in the usermenu.js file and show the data
var concerts = fetch('http://127.0.0.1:8080/showconcerts', {
  method: 'GET'
}).then(response => response.json());

var buses = fetch('http://127.0.0.1:8080/showbuses', {
  method: 'GET'
}).then(response => response.json());

var flights =  fetch('http://127.0.0.1:8080/showflights', {
  method: 'GET'
}).then(response => response.json());

var trains = fetch('http://127.0.0.1:8080/showtrains', {
  method: 'GET'
}).then(response => response.json());

var movies = fetch('http://127.0.0.1:8080/showmovies', {
  method: 'GET'
}).then(response => response.json());


function mapButton(venuelink) {
  var button = document.createElement('mapbutton');
  button.textContent = 'View on map';
  button.onclick = function() {
    alert('Redirecting to Map...');
    window.location.href = venuelink;

  };
  return button;
}




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

function ticketlistButton(numberOfOptions) {
  var select = document.createElement('select'); // Create a <select> element

  for (var i = 1; i <= numberOfOptions; i++) {
    var option = document.createElement('option'); // Create <option> element
    option.textContent = i; // Set the option text to the current number
    option.value = i; // Set the option value to the current number
    select.appendChild(option); // Add option to the select box
  }

  select.onchange = function() {
    alert('You selected: ' + this.value); // Alert the value when an option is selected
  };

  return select; // Return the complete dropdown list
}

  // Function to display category content
  function showCategory(category) {
    var categoryContent = document.getElementById('categoryContent');
    var categoryTitle = document.getElementById('categoryTitle');
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the first letter
    categoryContent.innerHTML = ''; // Clear the content
    
    switch (category) {
      case 'Movie':
        displayMovies();
        break;
      case 'Concert':
        displayConcerts();
        break;
      case 'Bus':
        displayBuses();
        break;
      case 'Flight':
        displayFlights();
        break;
      case 'Train':
        displayTrains();
        break;
      default:
        console.log("Unknown category: " + category);
    }
  }
  
// Function to display movies
function displayMovies() {
  var categoryContent = document.getElementById('categoryContent');
  movies.then(data => {
  data.forEach(function(movie, index) {
    var movieItem = document.createElement('div');
    movieItem.classList.add('category');
    movieItem.innerHTML = `<strong>${movie.eventname}</strong> <br> Date: ${movie.Schedule} <br> Timings: ${movie.eventtime} <br> Terminal: ${movie.venue} <br> Tickets Available: ${movie.TicketAvailability} <br> Number of tickets to book: `;
    movieItem.appendChild(mapButton(movie.venuelink));
    movieItem.appendChild(createBookingButton());
    movieItem.appendChild(ticketlistButton(movie.tickets));
    categoryContent.appendChild(movieItem);
  });
});
}

function displayConcerts() {
  var categoryContent = document.getElementById('categoryContent');
  concerts.then(data => {
  data.forEach(function(concert, index) {
    var concertItem = document.createElement('div');
    concertItem.classList.add('category');
    concertItem.innerHTML = `<strong>${concert.eventname}</strong> <br> Date: ${concert.Schedule} <br> Timings: ${concert.eventtime} <br> Terminal: ${concert.venue} <br> Tickets Available: ${concert.TicketAvailability} <br> Number of tickets to book: `;
    concertItem.appendChild(mapButton(concert.venuelink));
    concertItem.appendChild(createBookingButton());
    concertItem.appendChild(ticketlistButton(concert.tickets));
    categoryContent.appendChild(concertItem);
  });
});
}

function displayBuses() {
  var categoryContent = document.getElementById('categoryContent');
  buses.then(data => {
  data.forEach(function(bus, index) {
    var busItem = document.createElement('div');
    busItem.classList.add('category');
    busItem.innerHTML = `<strong>${bus.eventname}</strong> <br> Date: ${bus.Schedule} <br> Timings: ${bus.eventtime} <br> Terminal: ${bus.venue} <br> Tickets Available: ${bus.TicketAvailability} <br> Number of tickets to book: `;
    busItem.appendChild(mapButton(bus.venuelink));
    busItem.appendChild(createBookingButton());
    busItem.appendChild(ticketlistButton(bus.tickets));
    categoryContent.appendChild(busItem);
  });
});
}

function displayFlights() {
  var categoryContent = document.getElementById('categoryContent');
  flights.then(data => {
  data.forEach(function(flight, index) {
    var flightItem = document.createElement('div');
    flightItem.classList.add('category');
    flightItem.innerHTML = `<strong>${flight.eventname}</strong> <br> Date: ${flight.Schedule} <br> Timings: ${flight.eventtime} <br> Airport: ${flight.venue} <br> Seats Available: ${flight.TicketAvailability} <br> Number of tickets to book: `;
    flightItem.appendChild(mapButton(flight.venuelink));
    flightItem.appendChild(createBookingButton());
    flightItem.appendChild(ticketlistButton(flight.tickets));
    categoryContent.appendChild(flightItem);
  });
});
}

function displayTrains() {
  var categoryContent = document.getElementById('categoryContent');
  trains.then(data => {
  data.forEach(function(train, index) {
    var trainItem = document.createElement('div');
    trainItem.classList.add('category');
    trainItem.innerHTML = `<strong>${train.eventname}</strong> <br> Date: ${train.Schedule} <br> Timings: ${train.eventtime} <br> Station: ${train.venue} <br> Tickets Available: ${train.TicketAvailability} <br> Number of tickets to book: `;
    trainItem.appendChild(mapButton(train.venuelink));
    trainItem.appendChild(createBookingButton());
    trainItem.appendChild(ticketlistButton(train.tickets));
    categoryContent.appendChild(trainItem);
  });
});
}



// Initial display
showCategory('Movie');

// Dummy data for user's bookings
var Bookings = [
  // Assuming you have a way to track user's bookings, they might look something like this
  { email: "haseeb@gmail.com", category: 'movie', name: "Intersteler", date: "2024-01-20", timings: "15:00", venue: "Centaurus", tickets: "2" },
  { email: "haseeb@gmail.com", category: 'movie', name: "Intersteler", date: "2024-01-20", timings: "15:00", venue: "Centaurus", tickets: "2" }
  // ... more bookings
];

// Add event listener to My Bookings link
document.getElementById('allBookings').addEventListener('click', displayBookings);

// Function to display user's bookings
function displayBookings() {
  var categoryContent = document.getElementById('categoryContent');
  var categoryTitle = document.getElementById('categoryTitle');
  categoryTitle.textContent = 'All Bookings'; // Set the title to "My Bookings"
  categoryContent.innerHTML = ''; // Clear the content

  // Populate with user's bookings
  Bookings.forEach(function(booking) {
    var bookingItem = document.createElement('div');
    bookingItem.classList.add('category');
    bookingItem.innerHTML = `<strong>Customer Email: ${booking.email}</strong> <br> <strong>${booking.category.toUpperCase()}: ${booking.name}</strong> <br> Date: ${booking.date} <br> Timings: ${booking.timings} <br> Venue: ${booking.venue} <br> Tickets: ${booking.tickets}`;
    categoryContent.appendChild(bookingItem);
  });
}


// Add these lines at the beginning of your JavaScript file
var modal = document.getElementById('eventModal');
var btn = document.getElementById('createEvent');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var eventType = document.getElementById('eventType').value;
    var eventName = document.getElementById('eventName').value;
    var eventDate = document.getElementById('eventDate').value;
    var eventTime = document.getElementById('eventTime').value;
    var eventVenue = document.getElementById('eventVenue').value;
    var eventTickets = document.getElementById('eventTickets').value;
    
    // Assuming you have a function to add events to the respective arrays
    addEvent(eventType, eventName, eventDate, eventTime, eventVenue, eventTickets);
    modal.style.display = "none";
    alert("Event created successfully!");
});

function addEvent(type, name, date, time, venue, tickets) {
    const newEvent = { name: name, date: date, timings: time, venue: venue, tickets: tickets , type: type};
    fetch("http://127.0.0.1:8080/addevent", {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json', 
  },
      body: JSON.stringify(newEvent), // Convert data to string
  });
    // Refresh the displayed category to show the new event
    showCategory(type);
}



// These are same as in user menu we call the same apis here to show data on both menues.



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
  

// Dummy data for user's bookings
var myBookings = [
  // Assuming you have a way to track user's bookings, they might look something like this
  { category: 'movie', name: "Intersteler", date: "2024-01-20", timings: "15:00", venue: "Centaurus", tickets: "2" },
  { category: 'movie', name: "Intersteler", date: "2024-01-20", timings: "15:00", venue: "Centaurus", tickets: "2" }
  // ... more bookings
];

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


// function createBookingButton() {
//   var button = document.createElement('button');
//   button.textContent = 'Book Now';
//   button.onclick = function() {
//     alert('Redirecting to payment portal...');
//     window.location.href = "/Payment/index.html";

//   };
//   return button;
// }

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
      movieItem.innerHTML = `<strong>${movie.eventname}</strong> <br> Date: ${movie.Schedule} <br> Timings: ${movie.eventtime} <br> Terminal: ${movie.venue} <br> Tickets Available: ${movie.TicketAvailability}`;
      // movieItem.appendChild(createBookingButton());
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
      concertItem.innerHTML = `<strong>${concert.eventname}</strong> <br> Date: ${concert.Schedule} <br> Timings: ${concert.eventtime} <br> Terminal: ${concert.venue} <br> Tickets Available: ${concert.TicketAvailability}`;
      // concertItem.appendChild(createBookingButton());
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
      busItem.innerHTML = `<strong>${bus.eventname}</strong> <br> Date: ${bus.Schedule} <br> Timings: ${bus.eventtime} <br> Terminal: ${bus.venue} <br> Tickets Available: ${bus.TicketAvailability}`;
      // busItem.appendChild(createBookingButton());
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
      flightItem.innerHTML = `<strong>${flight.eventname}</strong> <br> Date: ${flight.Schedule} <br> Timings: ${flight.eventtime} <br> Airport: ${flight.venue} <br> Seats Available: ${flight.TicketAvailability}`;
      // flightItem.appendChild(createBookingButton());
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
      trainItem.innerHTML = `<strong>${train.eventname}</strong> <br> Date: ${train.Schedule} <br> Timings: ${train.eventtime} <br> Station: ${train.venue} <br> Tickets Available: ${train.TicketAvailability}`;
      // trainItem.appendChild(createBookingButton());
      categoryContent.appendChild(trainItem);
    });
  });
  }
  


  // Initial display
  showCategory('Movie');
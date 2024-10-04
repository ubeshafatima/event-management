function submitSelection() {
  const selectedEvents = Array.from(document.querySelectorAll('.event.selected')).map(event => event.textContent);
  const eventDate = document.getElementById('event-date').value;
  const eventTime = document.getElementById('event-time').value;

  if (selectedEvents.length > 0) {
      
      alert('Selected Events: ' + selectedEvents.join(', ') + '\n' + dateTime);
  } else {
       alert('YOUR EVENT IS BOOKED.');
   }
}
  

















const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

hamburgerBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show'); // Toggle the 'show' class
});

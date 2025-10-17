// Display current time in milliseconds
const timeElement = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
  timeElement.textContent = Date.now();
}
updateTime(); // initial render
setInterval(updateTime, 1000); // update every second

document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/status')
    .then(r => r.json())
    .then(data => {
      document.getElementById('status').textContent =
        `API status: ${data.ok ? 'online' : 'offline'} – ${data.message}`;
    })
    .catch(err => {
      console.error(err);
      document.getElementById('status').textContent = 'API status: error';
    });
});







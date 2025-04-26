function waitForMetaToken() {
  const metaTag = document.querySelector('meta[name="gq-api-token"]');
  
  if (!metaTag) {
    setTimeout(waitForMetaToken, 100); // try again after 100ms
    return;
  }

  const token = metaTag.getAttribute('content');

  fetch('/api/v1/whoami', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': '*/*',
    }
  })
  .then(async (response) => {
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HTTP ${response.status}: ${text}`);
    }
    return response.json();
  })
  .then(data => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'response.txt';
    link.click();
  })
  .catch(error => {
    const errorStr = typeof error === 'object' && error.message ? error.message : String(error);
    const blob = new Blob([errorStr], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'error.txt';
    link.click();
  });
}

// Start trying immediately
waitForMetaToken();

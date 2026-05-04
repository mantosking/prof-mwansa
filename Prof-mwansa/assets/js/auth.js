if (window.netlifyIdentity) {
  window.netlifyIdentity.on('login', () => {
    if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) {
      location.replace('/dashboard.html');
    }
  });
  window.netlifyIdentity.on('logout', () => location.replace('/index.html'));
}

const logoutBtn = document.getElementById('logout');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => window.netlifyIdentity?.logout());
}

/* Gère login/logout via Netlify Identity */
if (window.netlifyIdentity) {
  window.netlifyIdentity.on('login', () => {
    if (location.pathname === '/') location.replace('/dashboard');
  });
  window.netlifyIdentity.on('logout', () => location.replace('/'));
}

/* Bouton déconnexion manuelle */
const logoutBtn = document.getElementById('logout');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => window.netlifyIdentity.logout());
}
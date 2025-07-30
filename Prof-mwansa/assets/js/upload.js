/* Feedback après soumission Netlify Forms */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms.cours;
  form?.addEventListener('submit', () => {
    alert('Cours envoyé ! Les étudiants seront notifiés.');
  });
});
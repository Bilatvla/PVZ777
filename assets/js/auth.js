
// =====================================
// AUTH CONFIG
// =====================================
const PORTAL_PASSWORD = '12345';
const AUTH_KEY = 'pvz_portal_auth';
const ROLE_KEY = 'pvz_portal_role';

// =====================================
// LOGIN
// =====================================
function handleLogin() {
  const input = document.getElementById('password');
  const error = document.getElementById('error-message');
  if (!input) return;

  const value = input.value.trim();

  if (value === PORTAL_PASSWORD) {
    sessionStorage.setItem(AUTH_KEY, '1');

    // По умолчанию вход в общий портал
    const next = new URLSearchParams(window.location.search).get('next');
    if (next) {
      window.location.href = next;
    } else {
      window.location.href = 'home.html';
    }
  } else {
    if (error) error.textContent = 'Неверный пароль. Попробуйте еще раз.';
  }
}

function logout() {
  sessionStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem(ROLE_KEY);
  window.location.href = getRootPrefix() + 'index.html';
}

function getRootPrefix() {
  const path = window.location.pathname;
  const parts = path.split('/').filter(Boolean);
  if (parts.length <= 1) return '';
  const depth = parts[parts.length - 1].endsWith('.html') ? parts.length - 1 : parts.length;
  return '../'.repeat(Math.max(depth - 1, 0));
}

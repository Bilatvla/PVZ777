
// =====================================
// ROUTE PROTECTION
// =====================================
(function () {
  const isLoginPage = window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('index.html');
  const filename = window.location.pathname.split('/').pop();

  // allow root login page
  const isRootLogin = filename === 'index.html' && !window.location.pathname.includes('/employee/') && !window.location.pathname.includes('/manager/') && !window.location.pathname.includes('/hr/');

  if (!isRootLogin) {
    const ok = sessionStorage.getItem('pvz_portal_auth') === '1';
    if (!ok) {
      const prefix = getRootPrefixSafe();
      const next = window.location.pathname + window.location.search;
      window.location.href = prefix + 'index.html?next=' + encodeURIComponent(next);
    }
  }
})();

function getRootPrefixSafe() {
  const path = window.location.pathname;
  const parts = path.split('/').filter(Boolean);
  if (parts.length <= 1) return '';
  const depth = parts[parts.length - 1].endsWith('.html') ? parts.length - 1 : parts.length;
  return '../'.repeat(Math.max(depth - 1, 0));
}

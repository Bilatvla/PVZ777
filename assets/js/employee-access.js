(function () {
  const params = new URLSearchParams(window.location.search);
  const access = params.get("access");

  // если нет доступа — редирект
  if (access !== "employee") {
    window.location.href = "../index.html"; // или страница логина
  }

  // сохраняем доступ в сессии
  sessionStorage.setItem("employeeAccess", "true");
})();
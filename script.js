class AppHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
          <link rel="stylesheet" href="styles.css">
        <header>
          <div class="logo"><a href="index.html">sCOOL</a></div>
          <nav>
            <ul>
              <li><a href="index.html">Головна</a></li>
              <li><a href="courses.html">Курси</a></li>
              <li><a href="repetitors.html">Репетитори</a></li>
              <li><a href="#contacts">Контакти</a></li>
              <li><a href="authentication.html" id="auth-link">Вхід</a></li>
            </ul>
          </nav>
        </header>
      `;

    this.updateAuthState();
  }

  updateAuthState() {
    const authLink = this.shadowRoot.getElementById("auth-link");
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      authLink.setAttribute("href", "profile.html");
      authLink.textContent = "Кабінет";
    } else {
      authLink.setAttribute("href", "authentication.html");
      authLink.textContent = "Вхід";
    }
  }
}

customElements.define("app-header", AppHeader);

function goToCourses() {
  window.location.href = "courses.html";
}

function saveUserData(username, password) {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("Дані збережено!");
}

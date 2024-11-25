const menu = document.querySelector(".menu-container");
const token = sessionStorage.getItem("token");

menu.innerHTML = "";

if (token !== null) {
  menu.innerHTML += `
    <menu class="menu">
        <li>
            <a aria-label="Página Inicial" href="index.html">Home</a>
        </li>
        <li>
            <a aria-label="Escrever" href="./src/pages/new-post/index.html">
            <i class="bi bi-pencil-square" aria-hidden="true"></i>
                Write
            </a>
        </li>
        <li>
            <a aria-label="Perfil" href="./src/pages/profile/index.html">
                <i class="bi bi-person-circle" aria-hidden="true"></i>
            </a>
        </li>
    </menu>
    `;
} else {
  menu.innerHTML += `
    <div class="login-acesso">
        <a aria-label="Criar conta" href="src/pages/auth/signup.html">Sign-Up</a>
        <a aria-label="Login" href="src/pages/auth/signin.html">Sign-In</a>
    </div>
    `;
}

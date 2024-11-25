export function SignIn() {
  return (
    <div className="container">
      <h1>Login</h1>
      <form id="signin-forms">
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            required
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            required
          />
        </label>

        <div className="buttons">
          <button className="btn btn-secondary">Voltar</button>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

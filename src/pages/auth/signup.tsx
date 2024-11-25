export function SignUp() {
  return (
    <div>
      <div className="container">
        <h1>Cadastre-se</h1>
        <form id="signup-forms">
          <label>
            <span>Digite seu nome completo</span>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              required
            />
          </label>

          <label>
            <span>Crie um email</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              required
            />
          </label>

          <label>
            <span>Crie uma senha</span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              required
            />
          </label>

          <label>
            <span>Confirme a senha</span>
            <input
              type="password"
              name="passwordConfirmed"
              id="passwordConfirmed"
              placeholder="Confirmar"
              required
            />
          </label>

          <div className="buttons">
            <button className="btn btn-secondary">Voltar</button>
            <button className="btn btn-primary" type="submit">
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

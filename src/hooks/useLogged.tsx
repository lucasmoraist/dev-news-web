import { action, makeObservable, observable } from "mobx";

class UseLogged {
  isLogged = false;
  token = '';

  constructor() {
    makeObservable(this, {
      isLogged: observable,
      token: observable,
      login: action,
      logout: action
    });

    const token = localStorage.getItem("token");
    if (token) {
      this.isLogged = true;
      this.token = token;
    }
  }

  login(token: string) {
    this.isLogged = true;
    this.token = token;
    localStorage.setItem("token", token);
  }

  logout() {
    this.isLogged = false;
    this.token = '';
    localStorage.removeItem("token");
  }
}

export const useLogged = new UseLogged();
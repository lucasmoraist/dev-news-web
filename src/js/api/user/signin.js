import { apiUrl } from "../api.js";

document
  .getElementById("signin-forms")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
      email,
      password,
    };

    try {
      const request = await fetch(`${apiUrl}/user/v1/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const response = await request.json();
      sessionStorage.setItem("token", response.token);
      

      if (request.ok || request.status === 200) {
          window.location.href = "../../../index.html";
      }
      
    } catch (error) {
      console.error("Error: ", error);
    }
  });

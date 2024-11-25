
document
  .getElementById("signup-forms")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirmed =
      document.getElementById("passwordConfirmed").value;

    const user = {
      name,
      email,
      password,
    };

    if (password === passwordConfirmed) {
      try {
        const response = await fetch('http://localhost:8080/user/v1/signup', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (response.ok || response.status === 200) {
            window.location.href = "./signin.html";
        }

      } catch (error) {
        console.error("Error: ", error);
      }
    }
  });

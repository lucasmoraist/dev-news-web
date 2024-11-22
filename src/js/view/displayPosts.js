import { getImage } from "../api/image/image.js";
import { findAll } from "../api/post/findAll.js";
import { formatedDate } from "../functions/formatedDate.js";

findAll().then((response) => {
  let postHtml = document.querySelector(".card-largo-wrapper");

  var posts = response.content;

  posts.slice(0, 1).forEach((post) => {
    let id = post.id;

    getImage(id).then((image) => {
      postHtml.innerHTML += `
        <article class="card-largo">
          <div class="conteudo">
            <div>
              <h3>${post.title}</h3>
              <p>
                ${post.content.substring(0, 193)}...
              </p>
            </div>

            <div>
              <span class="data-postagem">${formatedDate(post.updatedAt)}</span>
              <a
                aria-label="Ler mais"
                href="#"
                class="ver-mais"
                title="Leia mais sobre esse post"
                >Read more</a
              >
            </div>
          </div>
          <img
            src=${image}
            alt="Post cover image"
            aria-hidden="true"
          />
        </article>
    `;
    });
  });
});

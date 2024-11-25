import { getImage } from "../api/image/image.js";
import { findAll } from "../api/post/findAll.js";
import { formatedDate } from "../functions/formatedDate.js";

findAll().then((response) => {
  var posts = response.content;

  let cardLargoHtml = document.querySelector(".card-largo-wrapper");
  let cardPequenoHtml = document.querySelector(".card-pequeno-wrapper");
  let cardBigHtml = document.querySelector(".card-big-container");

  posts.slice(0, 1).forEach((post) => {
    let id = post.id;

    getImage(id).then((image) => {
      cardLargoHtml.innerHTML += `
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

  posts.slice(1, 4).forEach((post) => {
    let id = post.id;

    getImage(id).then((image) => {
      cardPequenoHtml.innerHTML += `
        <article class="card-pequeno">
          <img
            src=${image}
            alt="Post preview image 2"
            aria-hidden="true"
          />
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
        </article>
      `;
    });
  });

  posts.slice(4, 5).forEach((post) => {
    let id = post.id;

    getImage(id).then((image) => {
      cardBigHtml.innerHTML += `
        <article class="card-big">
            <div class="conteudo">
              <div>
                <h3>${post.title}</h3>
                <p>
                ${post.content.substring(0, 193)}...

                </p>
              </div>

              <div>
                <span class="data-postagem">${formatedDate(
                  post.updatedAt
                )}</span>
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
              alt="Big post cover image"
              aria-hidden="true"
            />
          </article>
      `;
    });
  });
});

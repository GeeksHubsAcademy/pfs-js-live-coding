import {
  getTrendingMovies,
  IMAGES_BASE_URL,
} from '../services/apiRest.js';
import { createNode } from '../services/utils.js';

let currentPage = 1;
const mainNode = document.querySelector('#movieList');

async function renderPage(page) {
  const { results: movies } = await getTrendingMovies(page);
  console.log(movies);
  for (const {
    title,
    id,
    tagline,
    vote_average,
    backdrop_path,
    release_date,
    poster_path,
  } of movies) {
    const filmNode = createNode(
      `<a class="movie"
              href="/movieDetail.html?movie_id=${id}"
              style="background-image: url(${IMAGES_BASE_URL}/w200/${
        backdrop_path ?? poster_path
      })"
            >
                  <h1 class="title">${title}</h1>
                  <span class="vote_average">${vote_average}</span>
                  <div class="release_date">${release_date}</div>
             </a>`,
    );
    mainNode.appendChild(filmNode);
  }
}
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await renderPage(currentPage);
    currentPage++;
  } catch (error) {
    //  handle error
  }

  document
    .querySelector('#more')
    .addEventListener('click', async () => {
      try {
        await renderPage(currentPage);
        currentPage++;
      } catch (error) {
        //  handle error
      }
    });
});

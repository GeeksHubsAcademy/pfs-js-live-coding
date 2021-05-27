import {
  getMovieById,
  IMAGES_BASE_URL,
} from '../services/apiRest.js';
import { createNode } from '../services/utils.js';

document.addEventListener('DOMContentLoaded', async () => {
  const movie_id = new URL(
    window.location.href,
  ).searchParams.get('movie_id');

  const mainNode = document.querySelector('#movieDetails');
  try {
    const movieData = await getMovieById(movie_id);

    const {
      title,
      tagline,
      vote_average,
      release_date,
      overview,
      backdrop_path,
      genres: [{ name: genereName }],
    } = movieData;

    const filmNode = createNode(
      `<article class="movie" >
              <h1 class="title">${title}</h1>
              <span class="tagline">${tagline}</span>
              <span class="vote_average">${vote_average}</span>
              <div class="release_date">${release_date}</div>
              <div class="genereName">${genereName}</div>
              <p class="overview">${overview}</p>



         </article>`,
    );
    mainNode.appendChild(filmNode);
    mainNode.style.backgroundImage = `url(${IMAGES_BASE_URL}/original/${backdrop_path})`;
  } catch (error) {
    console.dir(error);
    if (error.status === 404) {
      const errorNode = createNode(
        `<h1 class="404" >
                      MOVIE NOT FOUND
                 </h1>`,
      );
      mainNode.appendChild(errorNode);
    } else {
      const errorNode = createNode(
        `<h1 class="" >
                         UPS, SOMETHING GONE WRONG, TRY AGAIN
                     </h1>`,
      );
      mainNode.appendChild(errorNode);
    }
  }
});

const movieData = 'http://cinema.truemoney.net/MovieList';

(async ()=>{
  let getComingSoon_data = await fetch(movieData)
  .then(res => res.json())
  .then(comingsoon => comingsoon.data.comingsoon)  
  for (let i = 0; i < 5; i++) {
    let movieCarousel = document.getElementsByClassName("slick-track");
    let comingsoonCarousel = `
    <figure> 
      <div class="container">
        <img class="d-block mx-auto poster" src="${getComingSoon_data[i].poster_ori}" alt="${getComingSoon_data[i].title_en}"/>
        <div class="d-flex justify-content-center align-items-center flex-column movie-detail"><a class="btn booking-btn" href="showing-time.html">ซื้อตั๋ว</a>
          <h2 class="pt-2 movie-detail__title">${getComingSoon_data[i].title_en}</h2>
          <h5 class="movie-detail__sec-title">${getComingSoon_data[i].title_th}</h5>
          <span class="movie-detail__genre">${getComingSoon_data[i].genre}</span>
        </div>
      </div>
    </figure>`
    movieCarousel.innerHTML += comingsoonCarousel
  }
})();

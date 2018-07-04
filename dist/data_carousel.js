const movieData = 'http://cinema.truemoney.net/MovieList';

(async ()=>{
  let getComingSoon_data = await fetch(movieData)
  .then(res => res.json())
  .then(comingsoon => comingsoon.data.now_showing)
    for (let i = 0; i < getComingSoon_data.length;  i++) {
      let movieCarousel = document.getElementById('movie-carousel')
      if (getComingSoon_data[i].poster_ori == ''){
        getComingSoon_data[i].poster_ori = 'images/Placeholder.jpg'
      }
      let comingsoonCarousel = `
      <figure> 
        <div class="container">
          <img class="d-block mx-auto poster" src="${getComingSoon_data[i].poster_ori}" alt="${getComingSoon_data[i].title_en}"/>
          <div class="d-flex justify-content-center align-items-center flex-column movie-detail"><a class="btn booking-btn" href="showing-time.html">ซื้อตั๋ว</a>
            <h2 class="pt-2 movie-detail__title text-center">${getComingSoon_data[i].title_en}</h2>
            <h5 class="movie-detail__sec-title">${getComingSoon_data[i].title_th}</h5>
            <span class="movie-detail__genre">${getComingSoon_data[i].genre}</span>
          </div>
        </div>
      </figure>`
      movieCarousel.innerHTML += comingsoonCarousel 
    } 
    $('#movie-carousel').slick({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 300,
      centerMode: true,
      lazyLoad: 'ondemand', 
      slidesToScroll: 1,
    }); 
})();

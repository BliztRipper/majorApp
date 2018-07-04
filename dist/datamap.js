const movieData = 'http://cinema.truemoney.net/MovieList';

(async ()=>{
  let getComingSoon_data = await fetch(movieData)
  .then(res => res.json())
  .then(comingsoon => comingsoon.data.comingsoon)  
  for (let i = 0; i < getComingSoon_data.length; i++) {
    const allmovie = document.getElementById('allmovie');
    let comingsoonList = `
    <div class="allmovie__cell">
      <img class="mx-auto d-block lazy" src="${getComingSoon_data[i].poster_ori}">
      <h6 class="allmovie__cell__name text-center">${getComingSoon_data[i].title_th}</h6>
    </div>`
    allmovie.innerHTML += comingsoonList
  }
})(); 

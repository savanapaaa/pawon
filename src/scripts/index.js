import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from '../views/app';

// fetch('https://restaurant-api.dicoding.dev/list')
// .then((response) => {
//     if (!response.ok) {
//         throw new Error('Gagal mengambil data');
//     }
//     return response.json();
// })
// .then((data) => {
//     const restaurants = data.restaurants;
//     const dataList = restaurants
//         .map(
//             (restaurant) => `
//                 <div class="list_item" tabindex="0">
//                     <img class="list_item_thumb" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
//                     <div class="city">${restaurant.city}</div>
//                     <div class="list_item_content">
//                         <p class="list_item_rating">
//                             Rating:
//                             <a href="#" class="list_item_rating_value" tabindex="0">${restaurant.rating}</a>
//                         </p>
//                         <h1 class="list_item_title"><a href="detail" tabindex="0">${restaurant.name}</a></h1>
//                         <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
//                     </div>
//                 </div>
//             `
//         )
//         .join(''); // Gabungkan semua elemen dalam bentuk string

//     // Masukkan elemen ke dalam elemen HTML dengan ID #tes
//     document.querySelector('#tes').innerHTML = dataList;
// })
// .catch((error) => {
//     console.error('Error:', error);
//     document.querySelector('#tes').innerHTML = '<p>Gagal memuat data restoran.</p>';
// });

// const menu = document.querySelector('#menu');
// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');

// main.setAttribute('tabindex', '0');

// menu.addEventListener('click', (event) => {
//     drawer.classList.toggle('open');
//     event.stopPropagation();
// });

// hero.addEventListener('click', () => {
//     drawer.classList.remove('open');
// });

// main.addEventListener('click', () => {
//     drawer.classList.remove('open');
// });

const app = new App({
  content: document.querySelector('#main-content'),
});

document.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

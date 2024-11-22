import UrlParser from '../../scripts/routes/url-parser';
import RestaurantDBSource from '../../scripts/data/restaurantdb-source';
import FavoriteRestaurantIdb from '../../scripts/data/favorite-restaurant-idb';

import { createRestaurantDetailTemplate } from '../templates/template-creator';
import './../../styles/detail.css';

const Detail = {
  async render() {
    return `
          <div id="restaurant" class="restaurant"></div>
          <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDBSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    const isFavorite = await FavoriteRestaurantIdb.getRestaurant(restaurant.id);
    const likeButton = document.createElement('button');
    likeButton.textContent = isFavorite ? 'Hapus dari Favorite' : 'Tambah Ke Favorite';

    likeButton.addEventListener('click', async () => {
      if (isFavorite) {
        // Hapus dari Favorite
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
        alert('Restoran telah dihapus dari daftar favorit!');
      } else {
        // Tambahkan ke Favorite
        await FavoriteRestaurantIdb.putRestaurant(restaurant);
        alert('Restoran telah ditambahkan ke daftar favorit!');
      }
      // Update teks tombol
      likeButton.textContent = isFavorite ? 'Tambah Ke Favorite' : 'Hapus dari Favorite';
    });

    likeButtonContainer.appendChild(likeButton);
  },
};

export default Detail;
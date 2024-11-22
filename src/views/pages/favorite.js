import FavoriteRestaurantIdb from '../../scripts/data/favorite-restaurant-idb';

import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return ' <div id="restaurant" class="restaurant-list"></div>';
  },

  async afterRender() {
    let restaurantHTML = '';
    const Tes = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('.restaurant-list');

    Tes.map((restaurant) => {
      console.log(restaurant);
      restaurantHTML += createRestaurantItemTemplate(restaurant);
    });
    restaurantContainer.innerHTML = restaurantHTML;


  },
};

export default Favorite;

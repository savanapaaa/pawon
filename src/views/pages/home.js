import RestaurantDBSource from '../../scripts/data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import './../../styles/home.css';

const Home = {
  async render() {
    return `
      <!-- Jumbotron -->
      <div class="hero-section" style="background-image: linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)), url('images/heros/hero-image_4.jpg');">
          <div class="hero-inner">
              <h1 class="hero-title" tabindex="0">Pawon Resto</h1>
              <p class="hero-subtitle" tabindex="0">Nikmati Keaslian Rasa dalam Setiap Sajian.</p>
          </div>
      </div>
      <main id="content">
          <section class="main-content">
              <div class="latest-explore">
                  <h1 tabindex="0">Explore Restaurant</h1>
                  <div class="restaurant-list"></div>
              </div>
              <!-- <main id="mainContent"></main> -->
          </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDBSource.restaurant();
    const restaurantsContainer = document.querySelector('.restaurant-list');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
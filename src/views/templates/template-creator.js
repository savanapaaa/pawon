const createRestaurantItemTemplate = (restaurant) => `
    <div class="list-item">
        <img class="list_item_thumb" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
        <div class="city">${restaurant.city}</div>
        <div class="list_item_content">
            <p class="list_item_rating">
                Rating: 
                <a href="#" class="list_item_rating_value" tabindex="0">${restaurant.rating}</a>
            </p>
            <h1 class="list_item_title"><a href="/#/detail/${restaurant.id}" tabindex="0">${restaurant.name}</a></h1>
            <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
        </div>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail-container">
        <div class="detail-header">
            <img class="detail-image" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}">
            <div class="detail-header-info">
                <h1 class="detail-title">${restaurant.name}</h1>
                <p class="detail-city"><strong>City:</strong> ${restaurant.city}</p>
                <p class="detail-city"><strong>Address:</strong> ${restaurant.address}</p>
                <p class="detail-rating"><strong>Rating:</strong> ⭐ ${restaurant.rating}</p>
            </div>
        </div>
        <div class="detail-description">
            <h2>About ${restaurant.name}</h2>
            <p>${restaurant.description}</p>
        </div>
        <div class="detail-menu">
            <h2>Menu</h2>
            <div class="menu-section">
                <h3>Foods</h3>
                <div class="menu-grid">
                    ${restaurant.menus.foods
    .map(
      (food) => `
                        <div class="menu-item">
                            <div class="menu-icon">🍴</div>
                            <p class="menu-name">${food.name}</p>
                        </div>`
    )
    .join('')}
                </div>
            </div>
            <div class="menu-section">
                <h3>Drinks</h3>
                <div class="menu-grid">
                    ${restaurant.menus.drinks
    .map(
      (drink) => `
                        <div class="menu-item">
                            <div class="menu-icon">🥤</div>
                            <p class="menu-name">${drink.name}</p>
                        </div>`
    )
    .join('')}
                </div>
            </div>
        </div>

        <div class="detail-description" style="margin-top: 20px;">
            <h2>Reviews:</h2>
            <ul id="review-list">
            ${restaurant.customerReviews
    .map(
      (review) => `
                    <div class="menu-item">
                        <div class="menu-icon">${review.name}</div>
                        <p class="menu-name">${review.review}</p>
                    </div>`
    )
    .join('')}
            </ul>
        </div>
    </div>
`;


const createRestaurantFavoriteTemplate = (restaurant) =>
  `
    <div class="list-item">
   <div class="list-item">
        <img class="list_item_thumb" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
        <div class="city">${restaurant.city}</div>
        <div class="list_item_content">
            <p class="list_item_rating">
                Rating: 
                <a href="#" class="list_item_rating_value" tabindex="0">${restaurant.rating}</a>
            </p>
            <h1 class="list_item_title"><a href="/#/detail/${restaurant.id}" tabindex="0">${restaurant.name}</a></h1>
            <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
        </div>
    </div> q
`;

const createRestaurantListTemplate = (restaurant) => `
    <div class="list-item">
        <img class="list_item_thumb" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
        <div class="city">${restaurant.city}</div>
        <div class="list_item_content">
            <p class="list_item_rating">
                Rating: 
                <a href="#" class="list_item_rating_value" tabindex="0">${restaurant.rating}</a>
            </p>
            <h1 class="list_item_title"><a href="/#/detail/${restaurant.id}" tabindex="0">${restaurant.name}</a></h1>
            <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;



export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantFavoriteTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantListTemplate
};

import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDBSource {
  static async restaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();

    console.log('responseJson', responseJson);
    return responseJson.restaurant;
  }
}

export default RestaurantDBSource;

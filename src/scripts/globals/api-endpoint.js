import CONFIG from './config';
// console.log(CONFIG);

const API_ENDPOINT = {
  RESTAURANT: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;

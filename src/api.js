import axios from 'axios';


const API = (() => {
  const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/biMNJvYIifRTQNGdCaxG/scores';
  const getLeaderBoard = async () => {
    try {
      const response = await axios.get(URL);
      return response.data.result;
    } catch (error) {
      throw new Error(error);
    }
  };
  return { getLeaderBoard };
})();

export default API;
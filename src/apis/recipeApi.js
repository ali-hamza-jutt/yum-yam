import axios from 'axios';

export const recipeApi = async () => {
  const options = {
    method: 'GET',
    url: 'https://yummly2.p.rapidapi.com/feeds/list',
    params: {
      limit: '50',
      start: '0'
    },
    headers: {
      'x-rapidapi-key': '4ae0a9d261msh291a3241b5be103p114c55jsn849906fb5d0a',
      'x-rapidapi-host': 'yummly2.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

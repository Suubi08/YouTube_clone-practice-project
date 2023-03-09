import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com" 
const REACT_APP_RAPID_API_KEY = 'e3fbdeeedemsh8e3056ea89c0a53p158cdajsn4e43d7c50625'

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50'
      },
    headers: {
      'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }
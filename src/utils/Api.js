import axios from 'axios';

const Api = async (url) => {
  return await axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};

export default Api;

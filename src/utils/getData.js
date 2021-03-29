const API = 'https://randomuser.me/api/';

const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  console.log(API);
  console.log(apiURl);
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;
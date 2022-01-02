
const getImages = (url) => {
  // const newUrl = `https://tiermaker.com/${url}`
  fetch(`http://127.0.0.1:4000/screenshot?url=${url}`)
      .then(response => {
          console.log('the response', response)
          return response.json()
      })
      .then(checkResponse)
      
} 


const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Request could not go through.`);
  }
};

export { getImages };
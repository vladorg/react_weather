export default function(url, params = {}) {
  
  console.log('=======');
  console.log(`fetch request on url: ${url}`);
  console.log('=======');

  return fetch(url, params)
          .then(response => {
            if (response.status !== 200) {
              return response.text(error => {
                throw new Error(error);
              })
            }
        
            return response.json();
          })
          .catch(err => console.warn(`Failed fetch to url: ${url}`))
}
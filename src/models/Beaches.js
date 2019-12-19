const endpoint = 'http://localhost:9000/api/beaches';

class BeachesModel {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log("couldn't get all beaches\n", err));
  };
    
  static create = (beach) => {
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(beach)
    })
      .then(response =>response.json())
      .catch(error => console.log('could not make new beach \n', error));
  }
}

export default BeachesModel

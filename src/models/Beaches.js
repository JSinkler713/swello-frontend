const endpoint = 'http://localhost:9000/api/beaches';

class BeachesModel {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log("couldn't get all beaches\n", err));
  };
  

  static getFullBeach = (extra) => {
    return fetch(endpoint+extra)
      .then(response=> response.json())
      .catch(error => console.log('could not get anything', error));
  };
  //extra is added onto the endpoint /beaches(EXTRA)
  static deleteBeach = (extra) => {
    return fetch(endpoint+extra, {
      method: 'DELETE'
    })
      .then(response => response)
      .catch(error => console.log('could not delete beach', error))
  };
  
  static update = (beach, extra) => {
    return fetch(endpoint+extra, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(beach)
    })
      .then(response=> response)
      .catch(error => console.log('could not update this beach', error));
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

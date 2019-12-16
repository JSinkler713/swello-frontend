const endpoint = 'http://localhost:9000/api/beaches';

class BeachesModel {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log("couldn't get all beaches\n", err));
  };

}

export default BeachesModel

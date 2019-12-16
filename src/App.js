import React, {Component} from 'react';
import './App.css';
import BeachesModel from './models/Beaches'
import BeachesContainer from './containers/BeachesContainer'

class App extends Component {
  state= {
    beaches: null
  }
  
  componentDidMount() {
    this.getAllBeaches()
  }

  getAllBeaches = () => {
    BeachesModel.all().then((result) => {
      console.log(result)
      this.setState ({
        beaches: result
      })
    })
  }

  render() { 
    if (this.state.beaches === null) {
      return 'loading'
    } else {
    return (
      <div className='hello'>
        <BeachesContainer data={this.state.beaches} />
      </div>
     )
    }
  }
}

export default App;

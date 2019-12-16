import React, {Component} from 'react';
import './App.css';
import BeachesModel from './models/Beaches'
import BeachesContainer from './containers/BeachesContainer'

class App extends Component {
  state= {
    beaches:''
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
    return (
      <div className='hello'>
        <BeachesContainer data={this.state.beaches} />
      </div>
     )
  }
}

export default App;

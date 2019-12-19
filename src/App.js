import React, {Component} from 'react';
import './App.css';
import BeachesModel from './models/Beaches'
import BeachesContainer from './containers/BeachesContainer'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';
import './containers/BeachesContainer.css' 
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
        <Switch> 
          <Route exact path='/' component={ Home }/>
          <Route exact path='/beaches' render={routerProps=> {
            return <BeachesContainer getbeaches={this.getAllBeaches}  data={this.state.beaches} />
          }} />
        </Switch>
      </div>
     )
    }
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import BeachesModel from './models/Beaches'
import BeachesContainer from './containers/BeachesContainer'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';
import './containers/BeachesContainer.css' 
import SingleBeach from './components/SingleBeach'

class App extends Component {
  state= {
    beaches: null,
    selectedBeachId: null
  }
  

  selectBeach = (e)=> {
    console.log(e.target.key);
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
            return <BeachesContainer {...routerProps}  selectBeach={this.selectBeach} getbeaches={this.getAllBeaches}  data={this.state.beaches} />
          }} />
          <Route path='/beaches/:id' render={routerProps=> {
            return <SingleBeach updateAppState={this.getAllBeaches} beachoid={this.props.oid} {...routerProps} />      
          }}/>
        </Switch>
      </div>
     )
    }
  }
}

export default App;

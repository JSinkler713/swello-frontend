import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeachesModel from '../models/Beaches'
import './SingleBeach.css'

class SingleBeach extends Component {
  state = {
    boards: null,
    beaches: null,
    boardTypes: null,
    updatedBeachName:'',
    updatedBeachDescription:'',
  }
       
  nameChange = (e)=> {
    this.setState({updatedBeachName: (e.target.value)})
  }
  descChange = (e)=> {
    this.setState({updatedBeachDescription: (e.target.value)})
  }
  componentDidMount() {
    let oid = this.props.match.params.id
    this.getBoards('/'+oid+'/boards');
    console.log(this.props.match.params.id)
    this.getBeach('/'+oid);
    this.getBoardTypes('/'+oid+'/boardtypes');
  }
  
  getBoards = (extra) => {
    console.log(extra)
    BeachesModel.getFullBeach(extra).then((result) => {
      console.log(result)
      this.setState ({
        boards: result
      })
    })
  }
        
  getBeach = (theOid) => {
    let oid = this.props.match.params.id
    BeachesModel.getFullBeach('/'+oid).then((result) => {
      console.log(result)
      this.setState ({
        beaches: result
      })
    })
  }
  
  getBoardTypes = (theOid) => {
    BeachesModel.getFullBeach(theOid).then((result) => {
      console.log(result)
      this.setState ({
        boardTypes: result
      })
    })
  }
  
  deleteBeach = () => {
    let oid = this.props.match.params.id
    let addendum = '/'+oid
    console.log('addendum is ' + addendum)
    BeachesModel.deleteBeach(addendum).then((result) => {
      console.log('this is delete',result.status)
      if (result.status === 200) {
      this.props.updateAppState()
      this.props.history.push('/beaches')
      } else { console.log('no delete')}
    })
  }

  updateBeach = (e)=> {
    e.preventDefault() 
    let oid = this.props.match.params.id
    console.log('##############')
    console.log('checking what updateBeach is')
    let updateBeach= {
      name: this.state.updatedBeachName,
      description: this.state.updatedBeachDescription,
    } 
    console.log('update beach')
    BeachesModel.update(updateBeach, '/'+oid).then((res)=> {
      console.log('the response after update....', res)
      if (res.status === 200) {
      this.props.updateAppState();
      this.setState({updatedBeachName:'', updatedBeachDescription:''})
      this.props.history.push('/beaches')
      } else { console.log('did NOT update beach')}
    })
  }


  render(){
    if (this.state.beaches === null || this.state.boards === null) {
      return 'loading...'
    } else {
      return (
      

      <div className='container'>
        <div className='header'>
          <h1>{this.state.beaches[0].name}</h1>
        </div>
        <div className='image'>
        </div>
        <div className='description'>{this.state.beaches[0].description}
        </div>
        <div className= 'boardtypes'>
        <div className='boardTypeHeader'>Recommended boards:</div>
        <div>Funboard</div>
        <div>Shortboard</div>
        <div>Fish</div>
        <div className='boardtype1'></div>
        <div className='boardtype2'></div>
        <div className='boardtype3'></div>
      </div>
        <div className='specificBoards'>
        {
          this.state.boards.map((board, i)=> {
            return (<div className='boardContainer' key={i}>
              <div>{board.BoardName}</div>
              <div>{board.description}</div>
            </div>)
           })
        }
        </div>
        <Link  onClick={this.props.updateAppState} to={`/beaches`}>
          Backhome
        </Link>
        <button onClick={this.deleteBeach}> Delete beach! </button>
        <form type='input'>
          <input onChange={this.nameChange} id='beachName' placeholder='name here' value={this.state.createBeachName}></input>
          <input onChange={this.descChange} id='description' placeholder='description' value={this.state.createBeachDescription}></input>
            <button className='createBoardButton' onClick={this.updateBeach}>UPDATE BEACH</button>
        </form>  
        </div>
    )
     }
  }
}

export default SingleBeach

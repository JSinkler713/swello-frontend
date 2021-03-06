import React, { Component } from 'react'
import BeachesModel from '../models/Beaches'
import Beaches from '../components/Beaches'
import './BeachesContainer.css'
import { Link } from 'react-router-dom'

class BeachesContainer extends Component {
  state = {
    createBeachName:'',
    createBeachDescription:'',
    boardTypeIds:[]
  }

  toggleArray = (number, array) => {
    let notInArray=true
    let i=0;
    let newArray=[];
    for(let item of array) {
      if(number == item) {
        notInArray=false
        array.splice(i,0);

      }else {
        newArray.push(item)
      }
      i++
    }
    if(notInArray) {
      newArray.push(number)
    }
      return newArray
  }
  //toggler = (boardId)=> {
  //  let i=0
  //  let bIds= {this.state.boardTypeIds}
  //
  //  for (id in bIds) {
  //    if (id == boardId) {
  //    bIds.pop(i);
  //

  //  let array = this.state.boardTypeIds.filter(id => id!= boardId)
  //  console.log(array)
 // }
  boardChoose = (e)=> {
    e.preventDefault();
    let boardTypeId = Number(e.target.value)
    let updated = this.toggleArray(boardTypeId, this.state.boardTypeIds);
    console.log(updated);
    this.setState({boardTypeIds: updated}) 
  }
  
  nameChange = (e)=> {
    this.setState({createBeachName: (e.target.value)})
  }
  descChange = (e)=> {
    this.setState({createBeachDescription: (e.target.value)})
  }

  createBeach = (e)=> {
    e.preventDefault()
    let newBeach= {
      name: this.state.createBeachName,
      description: this.state.createBeachDescription,
      boardTypeIds: this.state.boardTypeIds
    }  
    BeachesModel.create(newBeach).then((res)=> {
      this.setState({createBeachName:'', createBeachDescription:'', boardTypeIds:[]})
      this.props.getbeaches();
    }) 
  }

  render (){
    if (this.props.data === null || this.props.selectBeach === null) {
      return 'loading'
    } else {
      return (
      <div className='beachesContainer'>
        <header>Beaches  <Link to='/'>Home</Link></header>
        <Beaches selectBeach={this.props.selectBeach} allBeaches={this.props.data} />
        <h2>
          Add your local beach and share what you shred with there!
        </h2>
        <form type='input'>
          <div className='inputField'>
            <input onChange={this.nameChange} id='beachName' placeholder='name here' value={this.state.createBeachName}></input>
            <textarea onChange={this.descChange} cols='30' rows='5' id='description' placeholder='description' value={this.state.createBeachDescription}></textarea>
            <button className='createBoardButton' onClick={this.createBeach}>CREATE NEW BEACH</button> 
          </div>
          <p>Choose below which boards you should ride here!</p> 
          <div className="topicsContainer">
            <button
            className={ this.state.boardTypeIds.includes(1) ? 'boardType active shortboard' : 'boardType shortboard' } onClick={this.boardChoose} value={1}>Shortboard</button>
            <button className={ this.state.boardTypeIds.includes(2) ? 'boardType active longboard' : 'boardType longboard' } onClick={this.boardChoose} value={2}>Longboard</button>
            <button className={ this.state.boardTypeIds.includes(3) ? 'boardType fish active' : 'boardType fish' } onClick={this.boardChoose} value={3}>fish</button>
            <button className={ this.state.boardTypeIds.includes(4) ? 'boardType active gun' : 'boardType gun' } onClick={this.boardChoose} value={4}>gun</button>
            <button className={ this.state.boardTypeIds.includes(5) ? 'boardType active funboard' : 'boardType funboard' } onClick={this.boardChoose} value={5}>funboard</button>
          </div>

        </form>
      </div>
      )
    }
  }
}
  
  

export default BeachesContainer

import React, { Component } from 'react'
import BeachesModel from '../models/Beaches'
import Beaches from '../components/Beaches'

class BeachesContainer extends Component {
  state = {
    createBeachName:'newone',
    createBeachDescription:'such a great beach',
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
    if (this.props.data === null) {
      return 'loading'
    } else {
      return (
      <div>
        <Beaches allBeaches={this.props.data} />
        <form type='input'>
          <input onChange={this.nameChange} id='beachName' placeholder='beach name'></input>
          <input onChange={this.descChange} id='description' placeholder='description'></input>
          <p>Choose below which boards you should ride here!</p> 
          <div className="topicsContainer">
            <button className={ this.state.boardTypeIds.includes(1) ? 'boardType active' : 'boardType' } onClick={this.boardChoose} value={1}>Shortboard</button>
            <button className={ this.state.boardTypeIds.includes(2) ? 'boardType active' : 'boardType' } onClick={this.boardChoose} value={2}>Longboard</button>
            <button className={ this.state.boardTypeIds.includes(3) ? 'boardType active' : 'boardType' } onClick={this.boardChoose} value={3}>fish</button>
            <button className={ this.state.boardTypeIds.includes(4) ? 'boardType active' : 'boardType' } onClick={this.boardChoose} value={4}>gun</button>
            <button className={ this.state.boardTypeIds.includes(5) ? 'boardType active' : 'boardType' } onClick={this.boardChoose} value={5}>funboard</button>
            <button className='createBoardButton' onClick={this.createBeach}>CREATE NEW BEACH</button>
          </div>

        </form>
      </div>
      )
    }
  }
}
  
  

export default BeachesContainer

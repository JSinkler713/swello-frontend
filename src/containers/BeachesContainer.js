import React, { Component } from 'react'
import BeachesModel from '../models/Beaches'

class BeachesContainer extends Component {
  state = {
    createBeachName:'newone',
    createBeachDescription:'such a great beach',
    boardTypeIds:[]
  }
  
  boardChoose = (e)=> {
    e.preventDefault();
    let boardTypeId = Number(e.target.value)
    this.setState({boardTypeIds: [...this.state.boardTypeIds, boardTypeId]}) 
    console.log(e.target.value)
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
    return(
      <div>
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
  
  

export default BeachesContainer

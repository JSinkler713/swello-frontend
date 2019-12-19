import React, { Component } from 'react'

class SmallBeachPreview extends Component {
  state = {

  }
  
  render(){

    return(
      <div className='smallBeachPreview'>
        {this.props.name}
      </div>
    )
  }
}

export default SmallBeachPreview


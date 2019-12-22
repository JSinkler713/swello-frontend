import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class SmallBeachPreview extends Component {
  state = {

  }
  
  render(){

    return(
      <div className='smallBeachPreview' onClick={this.props.selectBeach} key={this.props.key}>
        <Link to={`/beaches/${this.props.oid}`}>
          {this.props.name}
        </Link><br/>
        <div className='beachImage'>
        </div>
      </div>
    )
  }
}

export default SmallBeachPreview


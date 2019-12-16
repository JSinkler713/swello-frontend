import React, { Component } from 'react'

class BeachesContainer extends Component {
  render (){
    return(
      this.props.data.map((beach, id) => {
      return <div key={id}>{beach.name}</div>
      })
    )
  }
}
  
  

export default BeachesContainer

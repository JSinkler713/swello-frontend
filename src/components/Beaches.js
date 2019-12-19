import React, { Component } from 'react'
import SmallBeachPreview from './SmallBeachPreview'

class Beaches extends Component {
  render(){
    console.log(this.props.allBeaches)
    let arrayOfBeaches=this.props.allBeaches.map((beach, i)=> {
      return <SmallBeachPreview className='SmallBeachPreview' key={i} name={beach.name} />
    })
    console.log(arrayOfBeaches)
    return(
      <div className='beachPreviewContainer'>
      {arrayOfBeaches}
      </div>
    )
  }
}

export default Beaches


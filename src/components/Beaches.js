import React, { Component } from 'react'
import SmallBeachPreview from './SmallBeachPreview'

class Beaches extends Component {
  render(){
    console.log(this.props.allBeaches)
    let arrayOfBeaches= this.props.allBeaches.map((beach, i)=> {
      return <SmallBeachPreview className='SmallBeachPreview' selectBeach={this.props.selectBeach} key={beach.rowid} name={beach.name} oid={beach.rowid}/>
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


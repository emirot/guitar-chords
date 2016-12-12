import React, { Component } from 'react';

class AudioToolBox extends Component {
  
  constructor () {
    super();
    this.state = {};
  }
 
  render () {
    return (
      <div className={this.props.song}>
        <audio controls preload='true' id='aud' autoPlay>
          <source src={this.props.song} type="audio/ogg"/ >
            Your browser does not support the audio element.
      </audio>
     </div>
    );
  }
}

export default AudioToolBox;
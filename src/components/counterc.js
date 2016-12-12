import React, { Component } from 'react';

class CounterC extends Component {

render () {
  let ct = this.props.ct;
  return (
  	<div className="row">
  	<div className="col-md-9"></div>

          <div className="col-md-3"><h2 className="text-left"> Score: {ct} </h2></div>

    </div>
   );
  }  
}

export default CounterC;
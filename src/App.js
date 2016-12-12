import React, { Component } from 'react';
import './App.css';
import AudioToolBox from './components/audioToolBox'
import CounterC from './components/counterc.js'


class Guitar extends Component {
  constructor () {
    super();
    let items = ['./chords/E.m4a', './chords/A.m4a', './chords/D.m4a', './chords/G.m4a', './chords/B.m4a', './chords/e_.m4a'];
    var item = items[Math.floor(Math.random()*items.length)];
    this.chordPlayed = item;
    this.found = false;
    this.state = {
      currentChord : '',
      currentCount : 0
    };
  }
  
  randomChord() {
    let items = ['./chords/E.m4a', './chords/A.m4a', './chords/D.m4a', './chords/G.m4a', './chords/B.m4a', './chords/e_.m4a'];
    var item = items[Math.floor(Math.random()*items.length)];
    console.log("Item:" + item);
    this.chordPlayed = item;
  }

  render () {
    if (this.found === false)
      {
          console.log("do nothing");
      }
      else {
        this.randomChord();
        this.found = false;
      }
    
    return (
        <div>
          <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4"> 
            <h2 className="text-center">Guitar Chords</h2>
            </div>
          <div className="col-md-4"></div>
        </div>
        <CounterC ct={this.state.currentCount}  />
        
        <div className='row'>
            <div className="col-md-4"></div>
            <div className="col-md-4 well">
             <div className="text-center">
               <AudioToolBox song={this.chordPlayed}/>
                <button  className="btn btn-default btn-lg spr" value='./chords/E.m4a' onClick={this._handleClick.bind(this)}>E</button>
                <button  className="btn btn-default btn-lg spr" value='./chords/A.m4a' onClick={this._handleClick.bind(this)}>A</button>
                <button  className="btn btn-default btn-lg spr" value='./chords/D.m4a' onClick={this._handleClick.bind(this)}>D</button>
                <button  className="btn btn-default btn-lg spr" value='./chords/G.m4a' onClick={this._handleClick.bind(this)}>G</button>
                <button  className="btn btn-default btn-lg spr" value='./chords/B.m4a' onClick={this._handleClick.bind(this)}>B</button>
                <button  className="btn btn-default btn-lg spr"  value='./chords/e_.m4a' onClick={this._handleClick.bind(this)}>e</button>
              </div>
          </div>
          <div className="col-md-4"></div>
        
        </div>

      </div>
        );
  }
   _handleClick(e) {
    e.preventDefault();
     const ob = e.target.value;
     console.log("ob:" + e.target.value);
     console.log("This:" + this.chordPlayed);
     console.log("ob->", ob);
     if (this.chordPlayed === ob){
          this.found = true;
       this.setState({currentCount : this.state.currentCount+1});
       console.log("there");
       document.getElementById('aud').load();
     }
     else {
       this.setState({currentCount : this.state.currentCount -1 });

     }

  }
}

export default Guitar;

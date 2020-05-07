import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../css/App.css';
import '../../node_modules/jquery/dist/jquery.js';
import '../../node_modules/popper.js/dist/umd/popper.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';

const drumPadList = [
  {key: "Q", mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", id: "Heater-1", keyCode: 81},
  {key: "W", mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", id: "Heater-2", keyCode: 87},
  {key: "E", mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", id: "Heater-3", keyCode: 69},
  {key: "A", mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", id: "Heater-4", keyCode: 65},
  {key: "S", mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", id: "Clap", keyCode: 83},
  {key: "D", mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", id: "Open-HH", keyCode: 68},
  {key: "Z", mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", id: "Kick-n'-Hat", keyCode: 90},
  {key: "X", mp3: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", id: "Kick", keyCode: 88},
  {key: "C", mp3: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", id: "Closed-HH", keyCode: 67}
];

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          displayText: "Press a button!"
      }
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(drumPad) {
      this.setState({
          displayText: drumPad.id 
      })
      var audio = new Audio(drumPad.mp3);
      audio.play();
  }

  handleKeyDown(e) {
      switch(e.keyCode) {
        case 81:
            let audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
            audio1.play();
            break;
        case 87:
            let audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3');
            audio2.play();
            break;
            
        default:
            break;
      }
  };

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
      const { drums } = this.props
      return (
          <div className="container p-3 center bg-info" id="drum-machine">
              <div className="text-center display-4 font-weight-bold" id="display">{this.state.displayText}</div>
              <div className="d-flex flex-wrap p-2">
                  {drumPadList.map(
                      (drumPad, i) =>
                        <a href="#" className="drum-links flex-wrap text-decoration-none" key={i}>
                            <div 
                                onClick={() => this.handleClick(drumPad)}
                                 
                                className="drum-pad p-3 m-2 rounded shadow-lg" 
                                id={drumPad.id}>
                                    {drumPad.key}
                                    <audio 
                                        id={drumPad.key} 
                                        className="clip" 
                                        src={drumPad.mp3}>
                                    </audio>
                                    
                            </div>
                        </a>
                  )}
      </div>
          </div>
      )
  }
}


export default App;

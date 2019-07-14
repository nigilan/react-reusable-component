import React from 'react';
import './App.css';
import SelectBox from './components/selectbox';
import ManualSelectBox from './components/manualselectbox';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      nameString : ''
    };
  }

  getInputValues = (event) => {
    document.getElementById('errMessage').textContent = "";
    this.setState({nameString :  event.target.value});
    this.setState({username : ''});
  }

  handleKeyPress = (target) => {
    if(target.charCode===13){
       this.submitClick();  
    }
  }

  submitClick = () => {
    this.setState({username : this.state.nameString});
    if (!this.state.nameString) {
      document.getElementById('errMessage').textContent = "**Enter only valid values";
    }
  }

  render() {
    return (
      <div className="App">
      <div><input autoFocus className='inputName' type='text' placeholder='john,nigilan,shiva,kumar' onChange={this.getInputValues} onKeyPress={this.handleKeyPress}>
      </input>
      <div id='errMessage'></div>
      </div>
      <div>
      <input type='button' value='Show Accounts' onClick={this.submitClick}></input>
      </div>

      <ManualSelectBox name={this.state.username}/>

      <SelectBox name={this.state.username}/>
      
    </div>
    );
  }
}

export default App;
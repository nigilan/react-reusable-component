import React from 'react';
import './App.css';
import SelectBox from './components/selectbox';
import ManualSelectBox from './components/manualselectbox';

let nameString = '';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    };
  }

  getInputValues = (event) => {
    document.getElementById('errMessage').textContent = "";
    nameString = event.target.value;
  }

  submitClick = () => {
    const username = nameString;
    this.setState({username});
    if (!username) {
      document.getElementById('errMessage').textContent = "Enter only valid values";
    }
  }

  render() {
    return (
      <div className="App">
      <div><input className='inputName' type='text' placeholder='john,nigilan,shiva,kumar' onChange={this.getInputValues}>
      </input><span id='errMessage'></span>
      </div>
      <div>
      <input type='button' value='change' onClick={this.submitClick}></input>
      </div>
      <SelectBox name={this.state.username}/>
      <ManualSelectBox name={this.state.username}/>
    </div>
    );
  }
}

export default App;
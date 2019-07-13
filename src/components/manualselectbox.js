import React from 'react';
import getAccountsList from './helper';



class ManualSelectBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = { value: '["<option key="select" value="select">Select</option>"]'};
    }
    

    componentWillReceiveProps(props) {
      console.log("will receive props", props);
      let listItems = this.state.value;
      if (props.name){
        getAccountsList(props.name)
                        .then((values) => {
                          console.log("got values ->>",values);
                          const accounts = values;
                          listItems = accounts.map((number) =>
                               <option key={number} value={number}>{number}</option>
                          ); 

                          this.setState({value : listItems});  
                          console.log(listItems);
                        }
                        )
                        .catch((error) => 
                        console.log(error)
                        );
      }
    }

    handleChange = event => {
      console.log(event.target.value);
      const selectedOption = event.target.value;
      //this.setState( {value : selectedOption});
      console.log(`Option selected:`, selectedOption);
    }

    render() {
      console.log(this.state.value, "test the value"); 
      
      return (
        <div>
        <p>Showing savings account for : {this.props.name}</p>
        <select onChange={this.handleChange}>
          {this.state.value}
         </select>   
         </div>
      );
    }
    
}

  export default ManualSelectBox;
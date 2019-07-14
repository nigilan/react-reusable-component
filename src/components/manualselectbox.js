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
                        }
                        )
                        .catch((error) => 
                        {
                          console.log(error);
                          this.setState({value : []});
                        }
                        );
      }
    }

    handleChange = event => {
      console.log(event.target.value);
      const selectedOption = event.target.value;
      console.log(`Option selected:`, selectedOption);
    }

    render() {      
      return (
        <div className="manual-select-box">
        <p>Showing account details for : <strong>{this.props.name}</strong></p>
        <select className="manual-select" onChange={this.handleChange}>
          {this.state.value}
         </select>   
         </div>
      );
    }
    
}

  export default ManualSelectBox;
import React from 'react';
import Select from 'react-select';
import getAccountsList from './helper';



let listItems = [];

class SelectBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOption: null,
      value : []
    };
  }
   

  componentWillReceiveProps(props) {
      console.log("will receive props11", props.name);
      listItems = this.state.value;
      if (props.name){
        getAccountsList(props.name)
                        .then((values) => {
                          console.log("got values ->>",values);
                          const accounts = values;
                          listItems = accounts.map((number) =>
                            ({'value': number , 'label': number})
                          ); 
                          this.setState({value : listItems});  
                        }
                        )
                        .catch((error) => {
                          console.log(error);
                          listItems = [];
                          this.setState({value : []});
                        } 
                        );
      }
    }

    handleChange = selectedOption => {
      this.setState({ selectedOption });
    };

    render() {
      const { selectedOption } = this.state;

      return (
        <div className="react-select-container">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={listItems}
        />
        </div>
      );
    }
  }

  export default SelectBox;
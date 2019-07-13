import React from 'react';
import Select from 'react-select';
import getAccountsList from './helper';



let listItems = '';

class SelectBox extends React.Component {
    state = {
      selectedOption: null,
      value : []
    };

    componentWillReceiveProps(props) {
      console.log("will receive props", props);
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
                          console.log(listItems);
                        }
                        )
                        .catch((error) => 
                        console.log(error)
                        );
      }
    }

    handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };

    render() {
      const { selectedOption } = this.state;

      return (
        
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={listItems}
        />
        
      );
    }
  }

  export default SelectBox;
import axios from 'axios';


const getAccountsList = name => {
    const URL = 'https://desolate-brook-56593.herokuapp.com/accounts/';
    name = name.toLowerCase();
    return new Promise((resolve, reject) => {
        axios.get(URL+name)
        .then(res => {
          const { data : accounts} = res.data;
          resolve(accounts);
        })
        .catch(error => {
          reject( []); 
        });
    })
}

export default getAccountsList;
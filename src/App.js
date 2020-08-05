import React from 'react';
import './App.css';

import {Cards,Chart,CountryPicker} from './components'
import style from './App.module.css';
import {fetchData} from './api'

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData()  
    this.setState({ data : fetchedData })
    // console.log(data)
  }

//fetch the data

    handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
//Set the state
    this.setState({data: fetchedData, country: country})
     console.log(country)
     
   }


  render(){
    const {data,country} = this.state
    return (
      <div className={style.container}>
        <img className={style.image} src="https://i.ibb.co/7QpKsCX/image.png" alt="covid"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    );
  }

}

export default App;

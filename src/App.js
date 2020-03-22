import React from 'react';
import './App.css';
import List from './Components/List/List';
import Year from './Components/Year/Year';
import Country from './Components/Country/Country';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      data :[],
      yearData:[],
      countryData:[],
      flag :false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.getRestuarants();
  }
  
  getRestuarants = () => {
    fetch('http://starlord.hackerearth.com/TopRamen')
    .then(res => res.json())
    .then(json => this.setState({data:json}))
    .catch(e =>console.log(e)); 
  };

  handleClick(){
  this.setState({
    flag:true
  })
  }


year =(year)=>{
  var resData = this.state.data;
      if(year){
  let resList = resData.filter(yr => yr['Top Ten'].substring(0,4) === year)
  resList = resList.sort((a,b)=>{
    a = parseInt(a['Top Ten'].substring(6,8))
    b = parseInt(b['Top Ten'].substring(6,8))
    return a>b?1:-1;
  })
  this.setState({yearData:resList}) 
    }
      else{
  this.setState({yearData:resData})
    }
}
 
country =(country)=>{
  var resData = this.state.data;
  console.log(country)
  if(country){
    let resListByCountry = resData.filter(cy => cy['Country'] === country)
    this.setState({countryData:resListByCountry})
  }
  else{
    this.setState({yearData:resData})
  }
}

  render(){
    return (
      <div className="App">
        <header className="App-header">
         <h3>Top Ramen Resturants!</h3>
        </header>
        <button onClick={this.handleClick} className="res-btn">All Resturant</button>
        <Year list={this.state.data} Callbacks={this.year}/>  
        <Country list={this.state.data} CallbackCountry={this.country}/>
        {
        <List list={this.state.yearData}/>
        }
        {
        <List list={this.state.countryData}/>
        }
        {
       this.state.flag && <List list={this.state.data}/>
        }
      </div>
    );

  }
}

export default App;

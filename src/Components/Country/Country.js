import React from 'react';
import '../Country/Country.css';

export default class Country extends React.Component{
constructor(props){
    super()
    
}

countryEvent(e){
   let country = e.target.value;
   this.props.CallbackCountry(country);
}

render(){ 
    return(
     <div className="country-label">
         <label>Choose Res by Country : </label>
         <select onChange={this.countryEvent.bind(this)}>   
         <option value="">---Select Year---</option>
         {
           Array.from(new Set((this.props.list.map(el => el['Country']))))
                .map(country => <option key={country} value={country}>{country}</option>)
         }
         </select>
    </div>
    )
}
}
import React from 'react';
import '../Year/Year.css';

export default class Year extends React.Component{
constructor(props){
    super()
    
}

yearEvent(e){
   let year = e.target.value;
   this.props.Callbacks(year);
}

render(){ 
    return(
     <div className="year-label">
         <label>Choose resturant by year : </label>
         <select onChange={this.yearEvent.bind(this)}>   
         <option value="">---Select Year---</option>
         {
           Array.from(new Set(this.props.list.map(year => year['Top Ten'].substring(0,4)).filter(year =>!isNaN(year))))
                .map(year => <option key={year} value={year}>{year}</option>)
         }
         </select>
    </div>
    )
}
}
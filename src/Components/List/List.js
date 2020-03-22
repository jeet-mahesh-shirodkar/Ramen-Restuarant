import React from 'react';
import '../List/List.css';

export default class List extends React.Component{
   constructor(props){
       super()

   }
   
    render(){
        return(
            <div className="col-md-3 col-sm-6">
                {this.props.list.map((el,i)=>{
                   return(
                       <React.Fragment key={i}>
                           <div className="card card-block">         
                        <h5 className="card-title  mt-3 mb-3">Brand : {el.Brand}</h5>
                        <p className="card-text">Variety : {el.Variety}</p>
                        <p className="card-text">Country : {el.Country}</p>
                        <p className="card-text">Style : {el.Style}</p>
                        <p className="card-text">Rating : {el.Stars}</p>
                        <p className="card-text">Rank : {el["Top Ten"].split('#')[1]} in : {el["Top Ten"].split('#')[0]}</p>
                           </div>
                       </React.Fragment>
                   )
                })}
            </div>
            )
    }

}
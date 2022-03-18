import './App.css';
import React from 'react';
import { Component } from 'react';
import { useState } from 'react';


class App extends Component{
  
  constructor()
  {
    super();
    this.state = {
      person: [{id:1,fullName:'Marwen Jammeli',img:'Images/Marwen.jpg', bio:'No pain No gain', profession:'Full Stack JS'}],
      number : "true"
    }
    //this.state = {number : "false"}
    this.clickHandler=this.clickHandler.bind(this);
  }
 clickHandler()
 {
   this.setState(prevState=>{return {number: !prevState.number}})
 }
  render (){
    
    const style={
      display: "flex",
      justifyContent: "center",
      paddingTop: "31px"
    }
  
   
    return (
    <div>
    <div style={style} id="3" className={this.state.number ? "" : "active"}>
       <div className="card rounded" style={{width: "24rem", border:"solid 1px"}}>
       <img src= {this.state.person[0].img}  alt="Profile" style={{width: "100%"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.person[0].fullName} </h5>
                            <p className="card-text">{this.state.person[0].bio}</p>
                            <p className="card-text">{this.state.person[0].profession}</p>
                            
                        </div>
                </div>
    </div>
    <div  style={style} ><button data-toggle="toggle" onClick={this.clickHandler}>Click me !</button></div>
    </div>
  );
}}

export default App;

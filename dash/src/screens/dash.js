import React, {Component} from "react";
import {Link} from 'react-router-dom';


import Logo from '../assets/logo.png';

export function Maps() {
    return (
        <div style={{margin:-10}}>
            <div style={{position:'absolute', height:'98vh', backgroundColor:'#000', width:'20vw', float:'left'}}>
            <img src={Logo} width={100} height={50} style={{ margin:'15%'}}></img>
            <Link to="/"> <div style={{color:'white', fontFamily:'Roboto', fontSize:20, marginTop:'15%',marginBottom:'15%'}}>Status</div></Link>
            <Link to="/yc"> <div style={{color:'white', fontFamily:'Roboto', fontSize:20}}>Track</div></Link>
            </div>
            <div style={{float: "left", marginLeft:'22vw'}}>
              <div style={{margin:"5vh 2.5%",fontFamily:"Roboto", fontSize:"3.75vh",lineHeight:"100%", color:"#4A73B1"}}>
              
                Track
                
        
  </div>
      </div>
      </div>
    );
  }




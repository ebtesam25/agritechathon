import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import Logo from '../assets/logo.png';
import Farmer from '../assets/farmer.png';
import Item from '../assets/item.png';
const data = [{name: '12:00', Temperature: 25, Humidity: 50, Pressure: 50, Movement:5}, {name: '12:10', Temperature: 24, Humidity: 50, Pressure: 40, Movement:5}, {name: '12:20', Temperature: 25, Humidity: 50, Pressure: 30, Movement:3}, {name: '12:30', Temperature: 20, Humidity: 45, Pressure: 30, Movement:7}, {name: '12:40', Temperature: 24, Humidity: 40, Pressure: 60, Movement:2}];


class Yc extends Component {
  constructor(props) {
    super(props);
  } 
    render() {
        return (
         <div style={{margin:-10}}>
            <div style={{position:'absolute', height:'198vh', background:'linear-gradient(to top, #174f0f, #14a800)', width:'20vw', float:'left'}}>
            <img src={Logo} width={200}   style={{ margin:'15%'}}></img>
            <img src={Farmer} width={100}   style={{ margin:'10%', marginBottom:'5%'}}></img>
           <div style={{fontFamily:'Montserrat', fontSize:15, color:'#FFF'}}>farmer@farmer.com</div> 
            <Link to="/" style={{textDecoration:'none'}}> <div style={{color:'white', fontFamily:'Roboto',  fontSize:20, marginTop:'15%',marginBottom:'15%'}}>Discover</div></Link>
            <Link to="/yc" style={{textDecoration:'none'}}> <div style={{color:'white', fontFamily:'Roboto',fontWeight:'bold', fontSize:20}}>Your Consortium</div></Link>
            <Link to="/farm" style={{textDecoration:'none'}}> <div style={{color:'white', fontFamily:'Roboto', fontSize:20, marginTop:'15%',marginBottom:'15%'}}>Farmer’s Briefcase</div></Link>
            <Link to="/maps" style={{textDecoration:'none'}}> <div style={{color:'white', fontFamily:'Roboto', fontSize:20}}>Community Trust</div></Link>
            </div>
            <div style={{float: "left", marginLeft:'22vw'}}>
              <div style={{fontFamily:"Roboto", fontSize:"3.75vh",lineHeight:"100%", color:"#4A73B1", alignSelf:'left', alignContent:'left'}}>
            
                
              <div style={{float: "left", marginLeft:'5%',marginTop:'2.5%', backgroundColor:'#f7fcfb', borderRadius:30, boxShadow: "1px 3px 1px #9E9E9E"}}>
              <div style={{margin:"2.5% 2.5%",fontFamily:"Montserrat", fontSize:"3.75vh",lineHeight:"100%", color:"#4A73B1", fontWeight:'normal'}}>
              
              Price Forecast
               
                    <LineChart width={1300} height={300} data={data} margin={{ top: 40, right: 40, bottom: 40, left: 0 }} style={{fontSize:15}}>
                    <Line type="monotone" dataKey="Temperature" stroke="#298784" strokeWidth={1} />
                  
                    
                    <XAxis dataKey={"Time"} />
                    <YAxis />
                    
                </LineChart>
                
    
                </div>
             
            </div>

            <div style={{float: "left", marginLeft:'5%',marginTop:'2.5%', backgroundColor:'#f7fcfb', borderRadius:30, boxShadow: "1px 3px 1px #9E9E9E"}}>
            <div style={{margin:"2.5% 2.5%",fontFamily:"Montserrat", fontSize:"3.75vh",lineHeight:"100%", color:"#4A73B1", fontWeight:'normal'}}>
              Historical Production Data
               
                    <LineChart width={1300} height={300} data={data} margin={{ top: 40, right: 40, bottom: 40, left: 0 }} style={{fontSize:15}}>
                    <Line type="monotone" dataKey="Humidity" stroke="#298784" strokeWidth={1} />
        
                    <XAxis dataKey={"Time"} />
                    <YAxis />
                   
                </LineChart>
                    
    
                </div>
             
            </div>

            <div style={{float: "left", marginLeft:'5%',marginTop:'2.5%', backgroundColor:'#f7fcfb', borderRadius:30, boxShadow: "1px 3px 1px #9E9E9E"}}>
            <div style={{margin:"2.5% 2.5%",fontFamily:"Montserrat", fontSize:"3.75vh",lineHeight:"100%", color:"#4A73B1", fontWeight:'normal'}}>
              Product Sold
               
                    <LineChart width={1300} height={300} data={data} margin={{ top: 40, right: 40, bottom: 40, left: 0 }} style={{fontSize:15}}>
                    <Line type="monotone" dataKey="Humidity" stroke="#298784" strokeWidth={1} />
        
                    <XAxis dataKey={"Time"} />
                    <YAxis />
                   
                </LineChart>
                    
    
                </div>
             
            </div>





            <div style={{float: "left", marginLeft:'5%',marginTop:'2.5%', backgroundColor:'#f7fcfb', borderRadius:30, boxShadow: "1px 3px 1px #9E9E9E"}}>
            <div style={{margin:"2.5% 2.5%",fontFamily:"Montserrat", fontSize:"3.75vh",lineHeight:"100%", color:"#4A73B1", fontWeight:'normal'}}>
              
              Capacity
               
                    <LineChart width={1300} height={300} data={data} margin={{ top: 40, right: 40, bottom: 40, left: 0 }} style={{fontSize:15}}>
                    <Line type="monotone" dataKey="Pressure" stroke="#298784" strokeWidth={1} />
                  
                    <XAxis dataKey={"Time"} />
                    <YAxis />
              
                </LineChart>
                    
    
                </div>
             
            </div>
                <div style={{ marginRight:"5%"}}>
            
                </div>
                </div>
             
            </div>
         </div>   
        );
    }
}

export default Yc;


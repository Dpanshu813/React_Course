import React, { Component } from 'react';
// import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import { BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import Registration from './Components/CourseReg';
import ContactUs from './Components/ContactUs';
class App extends Component { 
  render() { 
    return ( 
      
          <div style={{ backgroundColor: "#32b3aa",height:"780",width:"1360px"}}>
      
              <nav style={{borderBottom: "solid 1px",paddingBottom: "1rem", fontWeight:"bolder",textAlign:"right",backgroundColor:"#ffd700"}}> 
                
                <Link to="/aboutus">About Us</Link>{" "}|{" "}
                <Link to="/registration">Registration</Link>{" "}|{" "}           
                <Link to="/contactus">Contact Us</Link>               
                </nav>                 
               
                <Routes>                   
                  <Route  path="/aboutus" element={<AboutUs/>}  />
                  <Route  path="/registration"  element={<Registration/>}  />
                  <Route  path="/contactus"  element={<ContactUs/>} />
                </Routes>           
           
            
        </div> 
       
   ); 
  } 
} 
export default App;
	 	  	  	 			     	    	 	

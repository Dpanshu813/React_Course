import React, {Component} from 'react';

var data=[    
   {"id":"C001", "name":"React", "fee":"100","duration":"30 hours" },    
   {"id":"C002", "name":"Angular", "fee":"160","duration":"45 hours"},
   {"id":"C003", "name":"Advanced Java ", "fee":"75","duration":"25 hours"},
   {"id":"C004", "name":"Software Testing", "fee":"135","duration":"45 hours"},
   {"id":"C004", "name":"Data Analytics", "fee":"135","duration":"60 hours"}
];  
const styles={
list: {
   paddingBottom: 10,
   borderBottomStyle: 'solid',
   borderBottomColor: '#ffffff',
   borderBottomWidth: 1,
   marginBottom: 10
},
title: {
   fontWeight: 'bold'
}
};	
class AboutUs extends Component {
       // IMPLEMENT YOUR CODE HERE
render(){
     return(
          <div>
              <h1 style={{textAlign:"center"}}>iTech - Temple of Learning</h1>
               <h2 style={{textAlign:"center"}}>Welcome to the iTech online study portal</h2>
               
         <div style={{marginLeft:"25px"}}> 
               <h3>About Us</h3>              
               <p style={{color:"#ffffff"}}>iTech offers online courses on cutting-edge technologies in Information Technology.
               iTech e-Learning is the right platform to enable Community learning, sharing knowledge and become a healthy competent.</p>
               <h1 style={{textAlign:"center", color:"#ffd700"}}>Register with us today for the best offers!!!</h1>
            </div>
         <div>

       { data.map((data) => 
         <Display key={data.id}	 	  	  	 			     	    	 	
                  course={data} />
         )}
         </div>


</div> 
         );
 }
}


class Display extends Component {
   render() {
      return (
         <div style={{marginLeft:"25px"}}>
            
            <div>
               <div>Course Id : {this.props.course.id}</div>
               <div style={styles.title}>Course Name : {this.props.course.name}</div>
               <div >Duration : ${this.props.course.duration}</div>
               <div style={styles.list}>Fees: ${this.props.course.fee}</div>              
            </div>         
</div>
   )
}
}
export {Display};
export default AboutUs;

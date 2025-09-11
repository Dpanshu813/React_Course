import React, {Component} from 'react';

const styles={
  display:{      
       color:"#FFFFFF",
       fontWeight:"bolder",
      fontSize:'20px'              
   },
    button:{
       
       backgroundColor:'#ffd700',
       height:'30px',
       textAlign:'center',
       width:'75px'
   }

}


class ContactUs extends Component {
   constructor(props){
      super(props)
      this.state={  
         feedback:'',      
          display:''

      }
  }
   handleSubmit=(event)=>{
      event.preventDefault(); 
       if(this.state.feedback=='')
      {
          this.setState({ display: "Feedback rating field should not be empty" });      

      }
      else
      {
      this.setState({ display: "Thanks for your valuable feedback!!!" });
      }
  }
  handleFeedback=(event)=>{
   this.setState({ feedback: event.target.value });
}
   render() {	 	  	  	 			     	    	 	
      return (
         <div style={{marginLeft:"25px"}}>
               <div >
                  <h1 style={{textAlign:"center"}}>iTech - Temple of Learning</h1> 
                  <h3>Contact Us</h3>
                  <h4>Address</h4>           
                  <p style={{color:"#FFFFFF"}}>Way 1111<br/>
                                             Building 1234<br/>
                                             North Lane<br/>
                                             Los Angeles<br/>
                                             California 93239
                                             </p> 
               </div>
               <div>            
               <h4>Feedback</h4><br/> 
               <form id="fbForm"  >                            
                  <table id="feedback" border="2">
                  <tr colspan="2"><td>Please rate our service</td></tr>                          
                                 <tr>
                                    <td><label>Course content and delivery</label></td>&nbsp;&nbsp;
                                    <td><input type='radio' id='one' value="1"  name="course"   onChange={this.handleFeedback} required/>&nbsp;<label>1</label>&nbsp;&nbsp;
                                        <input type='radio' id='two' value="2" name="course"   onChange={this.handleFeedback}/>&nbsp;<label>2</label>&nbsp;&nbsp;
                                        <input type='radio' id='three' value="3"  name="course"   onChange={this.handleFeedback}/>&nbsp;<label>3</label>&nbsp;&nbsp;
                                        <input type='radio' id='four' value="4"  name="course"  onChange={this.handleFeedback}/>&nbsp;<label>4</label>&nbsp;&nbsp;
                                        <input type='radio' id='five' value="5"  name="course" onChange={this.handleFeedback}/>&nbsp;<label>5</label>&nbsp;&nbsp;                                       
                                    </td>
                                 </tr>
                  </table><br/><br/>
                  <button  style={styles.button} id="click1" type="submit" onClick={this.handleSubmit}>Click Me</button>   
               </form>  <br/><br/>   
                <div id="display1" style={styles.display}>{this.state.display}</div>                
            </div>                                
         </div>      
                   
                  
      );
      

   }	 	  	  	 			     	    	 	
}
export default ContactUs;
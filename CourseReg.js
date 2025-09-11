
import React,{Component} from 'react';

const styles={
    display:{
        height:"30px",
        width:"auto",
        backgroundColor: '#d3eaf1',
        padding:"3px"

    },
    header:{
        height:"50px",
        color:'#ffffff',
        padding:"10px",
        marginLeft:"5px;",
        backgroundColor: '#81807E'
    },
    button:{        
        backgroundColor:'#ffd700',
        height:'30px',
        textAlign:'center',
        width:'75px'
    }

}
class Registration extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            emailId:'',
            phone:'',
            qualification:'',
            course:'',
            display:''

        }	 	  	  	 			     	    	 	
    }
    handleRegister=(event)=>{
        event.preventDefault(); 
         if(this.state.name=='' || this.state.emailId=='' || this.state.phone=='' || this.state.qualification=='' || this.state.course=='')
      {
          this.setState({ display: "Form fields should not be empty" });      

      }
       else{ 
        
        this.setState({ display: this.state.name+", you have successfully registered for the course "+this.state.course+" with 20% offer." });
       }
    }
    handleName=(event)=>{
        this.setState({ name: event.target.value });
     }
    handleEmailId=(event)=>{
        this.setState({ emailId: event.target.value });
     }
     handleQualification=(event)=>{
        this.setState({ qualification: event.target.value });
     }
     handlePhone=(event)=>{
        this.setState({ phone: event.target.value });
     }

     handleCourse=(event)=>{
        this.setState({ course: event.target.value });
     }
      render(){
    
            return (     
                // <div>   

                     <div>
                    
                        <h1 style={{textAlign:"center"}}>iTech - Temple of Learning</h1>
                        
                        <h3 style={styles.header}>Register Here</h3>
                        <form  style={{marginLeft:"25px"}} id="contactForm" >
                        
                        
                            <div>
                                <div>Name<br/>
                                <input  id="name" type="text" placeholder="Enter your name" value={this.state.name} onChange={this.handleName}/></div>
                            </div><br/>
                          
                            <div>
                                <div >Email <br/>
                                <input  id="email" type="email" placeholder="xxx@mail.com" value={this.state.emailId} onChange={this.handleEmailId}/></div>
                            </div><br/>
                        
                          
                            <div>
                                <div>Phone number<br/>
                                <input  id="phoneno" type="tel" placeholder="Enter phone number" value={this.state.phone} onChange={this.handlePhone}/></div>
                            </div><br/>
                            
                           
                            <div >
                                <div >Qualification<br/>
                                <input id="qualification" type="text" placeholder="Enter qualification" value={this.state.qualification} onChange={this.handleQualification}/></div>
                            </div><br/>
                            
                            <div >Select Course
                            <select id="course" onChange={this.handleCourse}>
                                
                                <option value="React">React</option>
                                <option value="Angular">Angular</option>    
                                <option value="AdvJava">Advanced Java</option>
                                <option value="Angular">Software Testing</option>  
                                <option value="DataAnalytics">Data Analytics</option>

                            </select>
                            </div><br/>

                           
                            <div>
                            <button  style={styles.button} id="click" type="submit"  onClick={this.handleRegister} >Click Me</button>
                            </div><br/>

                           
                           
                        </form>  
                        <div id="display" style={styles.display}>{this.state.display}</div> 
                    </div>
                       
                     );
        }	 	  	  	 			     	    	 	
    }
    
    export default Registration;


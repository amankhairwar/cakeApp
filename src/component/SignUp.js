import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup(){
     var user={
        
     }
     var navigate=useNavigate()

    function register(){
        
        console.log("User Details",user)
        axios({
            url:"https://apifromashu.herokuapp.com/api/register",
            method:"post",
            data:user
        }).then((response)=>{
            console.log("response from login api",response)
            if(response.data.message=="User Registered" ){
                
                navigate('/Message')
            }
        },(error)=>{
            console.log("error from login ",error)
        })
    }
    function getEmail(event){
        user.email=event.target.value

    }
    function getName(event){
        user.name=event.target.value
    }
    function getPassword(event){
        user.password=event.target.value
    }
    return(
        <>
        <h3 className="text-center">Sign Up Here</h3>
        <div className="text-center">
        <label for="Email" class="form-label" >Email address</label>
        <br></br>
        <input onChange={getEmail} className="col-8 text-center" placeholder="Email" type="text" ></input>
        <br></br>
        <label for="name" class="form-label" >Name</label><br></br>
        <input onChange={getName} className="col-8 text-center"type="text" placeholder="Name" ></input>
        <br></br>
        <label for="passw" class="form-label" >Password</label>
        <br></br>
        <input onChange={getPassword} type="password"className="col-8 text-center " placeholder="Password"></input>
        <br></br>
        <br></br>
        <button onClick={register} type="submit" className="col-4 btn btn-danger mx-auto">SignUp</button>
        <br></br><br></br>
        </div>
        </>   
    ) 
}
export default Signup
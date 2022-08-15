
import axios from 'axios';
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import {Link,useNavigate} from 'react-router-dom'

var flag = false
function SignIn(){
    var navigate = useNavigate();
    var email
    var signupname,pass;
    var user = {};
    var [errorMssg,validate] = useState("")
    var [flag,change] = useState(false)
    var [access,accesschange] = useState("")
    var dispatch = useDispatch()


    function Login(){
        change(true)
        if(email === "" || email === undefined){
            validate("Enter Email Register")
        }else{
            validate("")
            axios({
                url:"https://apifromashu.herokuapp.com/api/login",
                method:"post",
                data:user
            }).then(
                (response)=> {
                    if(response.data.token){
                        localStorage.setItem("token",response.data.token)
                        navigate("/")  
                        dispatch({
                            type: "LOGIN"
                        })
                        
                        
                    }else{
                        accesschange("Access Denied")
                    }
                },
                (error)=>{
                    console.log("Error: "+error)
                })
        }
    }

    
    function getEmail(event){
        email = event.target.value;
        user.email = email
        if(email != ""){
            validate("")
        }else if(email == "" && flag == true){
            validate("Enter Email")
        }
    }

    function getPass(event){
        user.password = event.target.value
        pass = event.target.value;
    }


    return(

        <>

        <div class="d-flex flex-align-center  align-items-center ">
        <div className="d-flex flex-column h-100 col-4 m-auto">
            <div>
                <input class="form-control" onChange={getEmail} type="email" name="email" placeholder="Email"/>
            </div>
            <label class="text-danger">{errorMssg}</label>
            <div>
                <input class="form-control" onChange={getPass} type="password" name="email" placeholder="Password" />
            </div>
            <div>
                <button class="form-control btn btn-primary" onClick={Login}>Sign In Here</button>
            </div>
            <div>
                New Here!!<Link to="/signup"><a class="nav-link">SignUp Here</a></Link>
            </div>
        </div>

        <div>
            <label>{access}</label>
        </div>
        
        </div>

        </>

    )


}

export default SignIn
import axios from "axios"
import { useEffect , useState } from "react"
import { useNavigate, useParams } from "react-router"
import Loader from "./Loader"

function Cakedetails(){
    var params =  useParams()
    var [cake,setCake] =  useState()
    var navigate = useNavigate()
    var [isLoading,setIsloading] =  useState(false)
    var navigate = useNavigate()


   function addToCart(){

      var cakevalue = {
        cakeid: cake.cakeid,
        image: cake.image,
        name: cake.name,
        price: cake.price,
        weight: cake.weight
      }
      console.log(localStorage.getItem("token"))
      if(localStorage.getItem("token")){
        axios({
          method:"post",
          url:"https://apifromashu.herokuapp.com/api/addcaketocart/",
          data: cakevalue,
          headers:{
            authtoken: localStorage.getItem("token")
          }
        }).then((response)=>{
          navigate("/Cart")
          
        },(error)=>{
        })
      }else{
        window.location.href = "/signup"
      }
   }

    useEffect(()=>{
        axios({
            method:"get",
            url:"https://apifromashu.herokuapp.com/api/cake/"+params.cakeid
        }).then((response)=>{
            setCake(response.data.data)
        },(error)=>{
        })
    },[])
    
        let ratings = Math.floor(cake?.ratings)
  if(cake){
    return <div className="container mt-4">
    <h1>{cake.name}</h1>
    <section className="cake-details mb-5 pt-4 pb-4">
    <div className="col-md-12 row">
      <div className="col-md-5 mb-4 mb-md-0">
        <div className="mdb-lightbox">
          <div className="row product-gallery mx-1">
            <div className="col-12 mb-0">
              <div className="view rounded z-depth-1 main-img">
                <a href={cake.image} data-size="710x823">
                  <img src={cake.image}  alt={cake.name} className="img-fluid z-depth-1" style={{width:"100%"}}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <h5>{cake.name}</h5>
        <p className="mb-2 text-muted text-uppercase small">{cake.reviews} reviews</p>
      
        <p><span className="mr-1"><strong>₹{cake.price}</strong></span></p>
        <p className="pt-1">{cake.description}</p>
        <div className="table-responsive">
          <table className="table table-sm table-borderless mb-0">
            <tbody>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Flavour</strong></th>
                <td>{cake.flavour}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Ingredients</strong></th>
                <td>{cake.ingredients?.join()}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Occasion</strong></th>
                <td>{cake.type}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Weight</strong></th>
                <td>{cake.weight} kg</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        {/* <button type="button" className="btn btn-primary btn-md mr-1 mb-2">Buy now</button> */}
        {!isLoading && <button onClick={addToCart}  type="button" className="btn btn-light btn-md mr-1 mb-2"><i
            className="fas fa-shopping-cart pr-2"></i>Add to cart</button>}
        {isLoading && <button type="button" className="btn btn-light btn-md mr-1 mb-2" disabled><i
            className="fas fa-shopping-cart pr-2"></i> Please wait... Adding to cart</button>}
      </div>
      <div className="col-md-3">
            <img src="safety.png" className="img-fluid"></img>
      </div>
    </div>
  
  </section></div>
  }
  else{
    return <Loader />
  }
  
    
}

export default Cakedetails
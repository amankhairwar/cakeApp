import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Loader from "./Loader"
import Checkout from "./Checkout"
import {Link} from 'react-router-dom'

function Cart() {
    var [cartitems, setCartitems] = useState([])
    var [isloading, setIsloading] = useState(false)
    var total = 0

    function removeItem(cakeid,index){
        setIsloading(true)
        axios({
            url: "https://apifromashu.herokuapp.com/api/removecakefromcart",
            method: "post",
            data:{
                cakeid:cakeid
            },
            headers: {
                authtoken: localStorage.token
            }
        }).then((response) => {
        setIsloading(false)

            console.log("Item removed from cart")
            cartitems.splice(index,1)
            setCartitems(cartitems)
        }, (error) => {
        setIsloading(false)

            console.log("Error from removeing cart items api", error)
        })
    }

    useEffect(() => {
        axios({
            url: "https://apifromashu.herokuapp.com/api/cakecart",
            method: "get",
            headers: {
                authtoken: localStorage.token
            }
        }).then((response) => {
            setCartitems(response.data.data)
        }, (error) => {
            console.log("Error from cart items api", error)
        })
    }, [])

    return (
        <>  
            {isloading && <Loader />}
            <div className="container">
                <div className="col-md-3" style={{margin:"auto"}}>
                <h1>Shopping Cart</h1>
                </div>
                <div className="row col-md-10 mt-3" style={{margin:"auto"}}>
                    <div className="col-md-9" style={{borderRadius:"5%",backgroundColor:"#e9e6e6"}}>
                    <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartitems.map((each, index) => {
                                total=total+each.quantity*each.price
                                return (
                                    <tr>
                                        <td><h5>{each.name}</h5></td>
                                        <td><img src={each.image} style={{height:"3rem",width:"4rem"}}></img></td>
                                        <td>{each.price}</td>
                                        <td><button className="btn btn-light">+</button>{each.quantity}<button className="btn btn-light">-</button></td>
                                        <td><button onClick={removeItem.bind(null,each.cakeid,index)} className="btn btn-danger">X</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                    </div>
                    <div className="col-md-3" style={{borderRadius:"5%"}}>
                        <div style={{margin:"auto",alignItems:"center"}}>
                            <h4>Total Price : {total}</h4>
                          <Link to="/Checkout"> <button className="btn btn-warning">Checkout</button></Link>
                        </div>
                    </div>
                </div>
             
            </div>

        </>
    )
}

export default Cart
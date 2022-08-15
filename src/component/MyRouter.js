import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from './SignUp'
import SignIn from './SignIn'
import App from '../App'
import Navbar from './Navbar'
import Error from './ErrorPage'
import Search from "./Search";
import CakeDetails from "./CakeDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Payment  from "./Payment";
import Address  from "./Address";
import  Message  from "./Message";
function MyRouter(){
   
        return <>
            
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/Login" element={<SignIn />} />
                    {/* <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/logout" element={<App />} />
                    <Route path="/" element={<App />} />
                    <Route path="/*" element={<Error />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/Checkout" element={<Checkout/>}>
                        <Route path="Address" element={<Address/>}/>
                        <Route path="Payment" element={<Payment/>}/>
                    </Route>
                    <Route path="Message" element={<Message/>}/>
                    <Route path="/details/:cakeid"  element={<CakeDetails />}/> */}
                </Routes>
            </BrowserRouter>
            
        
        </>

}

export default MyRouter
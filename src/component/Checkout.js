import { Link } from "react-router-dom";

function Checkout() {
    return <div className="container">
        <div className="row col-md-10" style={{ margin: "auto" }}>
            <div style={{backgroundColor:"#e9e6e6",height:"100%"}} className="col-md-4">
                <ul class="nav flex-column">
                 
                    <li class="nav-item">
                        <Link class="nav-link" to="address">Add Address</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="payment">Payment</Link>
                    </li>
                  
                </ul>
            </div>
            <div className="col-md-8">

            </div>
        </div>
    </div>
}

export default Checkout
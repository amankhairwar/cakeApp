import { Link } from "react-router-dom"


function Cake(props){
    return <>
    
    <div class="col-xs-12 col-sm-6 col-md-4" id="cakecards">
        <div className="card p-4">
        <Link to={"/details/"+props.cakeid} ><img className="h-25" src={props.cakeImg} className="card-img-top" alt="..." /></Link>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.cakeDesc}</p>
            <a href="#" className="btn btn-primary w-100">Shop Here</a>
        </div>
        </div>
        </div>

    </>

}

 export default Cake
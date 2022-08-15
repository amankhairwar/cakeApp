import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'


function Navbar(){

  var isLogedIn = useSelector((state)=>{
    return state.isLoggedin
  })


    function isLogout(){
      localStorage.clear()
      window.location.href = "/"
    }



    return <>

      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to="/"><a class="navbar-brand">Cake Shop</a></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More Options
                </a>
                <ul class="dropdown-menu">
                  <li><Link to="/signup"><a class="nav-link">Profile</a></Link></li>
                  <li><Link to="/login"><a class="nav-link">Sign In</a></Link></li>
                  <li><Link to="/signup"><a class="nav-link">SignUp</a></Link></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              {!isLogedIn && <Link to="/login"><button class="btn btn-outline-success" type="submit">Login</button></Link>}
              {isLogedIn && <Link to="/logout"><button class="btn btn-outline-success" onClick={isLogout} type="submit">Logout</button></Link>}
            </form>
          </div>
        </div>
      </nav>

    </>
}

export default Navbar
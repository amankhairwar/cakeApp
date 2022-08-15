import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Carousel from './component/Carousel'
import Cake from './component/Cake'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import CakeList from './component/CakeList'
import SignUp from './component/SignUp'
import SignIn from './component/SignIn'

function App() {

  return (
    <>
    <div class="container-fluid">
      <div class="row">
      <Carousel />
      </div>
    </div>
    <CakeList />
    </>
  );
}

export default App;

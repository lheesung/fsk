import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Join from './component/Join';
import Header from './component/Header'
import Elementary from './component/Elementary'
import Middle from './component/Middle'
import High from './component/High'
import Slider from './component/Slider'
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function App() {
  return (
    <>
    <div>
      <Header></Header>
      <Slider></Slider>
    </div>
    <div style={{display: 'flex'}}>
      <Elementary></Elementary>
      <Middle></Middle>
      <High></High>
      {/* <Login></Login> */}     
      {/* <Join></Join> */}
    </div>
    </>
  );
}

export default App;

import './App.css';
import SideBar from './SideBar';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container-fluid">
        <div className='row flex'>
          <SideBar></SideBar>
          <div className="col" style={{ height:'90vh',padding:'20px'}} id="main"> Hola Mundo</div>
        </div>
      </div>
    </div>
  );
}

export default App;

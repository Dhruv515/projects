
import Navbar from './Navbar';
import Content from './Content';
import Content2 from './Content2';
import Content4 from './Content4';

import Content3 from './Content3';
import Footer from './Footer';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="con">
       <Content></Content>
      </div>

      <div className="con2">
       <Content2></Content2>
      </div>

      <div className="con4">
       <Content4></Content4>
      </div>

      
      <div className="con3">
       <Content3></Content3>
      </div>

      <div className="foot">
       <Footer></Footer>
      </div>

    </div>
  );
}

export default App;

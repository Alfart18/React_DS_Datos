import './App.css';
import logo from './DS.png'

function App() {
  return (
    <div class="App">
      <div class="App-header">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <img src={logo} alt="Logo_DS"></img>
            </div>
            <div class="col-8">
              <h1>Hadware y Software</h1>
            </div>
            <div class="img_mov">
              <center><marquee behavior="alternate" direction="right" width="170%"> <img src="https://www.lennu.net/wp-content/uploads/2015/01/windows-mac-linux.png" /> </marquee></center>
            </div> 
              <div class="container">
                <div class="row">
                  <div class="col order-last">
                    1
                  </div>
                  <div class="col">
                    2
                  </div>
                  <div class="col order-first">
                    3
                  </div>
                </div>     
                <div class="row">
                  <div class="col order-last">
                    4
                  </div>
                  <div class="col">
                    5
                  </div>
                  <div class="col order-first">
                    6
                  </div>
                </div>   
                <div class="row">
                  <div class="col order-last">
                    7
                  </div>
                  <div class="col">
                    8
                  </div>
                  <div class="col order-first">
                    9
                  </div>
                </div>   
                <div class="row">
                  <div class="col order-last">
                    10
                  </div>
                  <div class="col">
                    11
                  </div>
                  <div class="col order-first">
                    12
                  </div>
                </div>    
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default App;

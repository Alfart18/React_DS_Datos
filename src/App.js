import './App.css';
import logo_DS from './DS.png'
import logo_Linux from './Linux.png'
import logo_HP from './HP.png'
import logo_AMD from './AMD.png'
import logo_Asus from './Asus.png'
import logo_Logitech from './Logitech.png'
import logo_Windows from './Windows.png'

function App() {
  return (
  
    <div class="container p-4 my-4 bg-light text-warning">
      <div class="row style="text-align: center;">
      <div class="col-sm-3" style="text-align: center;">
        <img src={logo_DS} alt="Logo_DS"></img>
      </div>
      <div class="col-sm-9" style="text-align: center;">
        <img src={logo_Linux} alt="Logo_Linux" style="width:100px;height:80px;"></img>
        <img src={logo_HP} alt="Logo_HP" style="width:100px;height:80px;"></img>
        <img src={logo_AMD} alt="Logo_AMD" style="width:100px;height:80px;"></img>
        <img src={logo_Asus} alt="Logo_Asus" style="width:100px;height:80px;"></img>
        <img src={logo_Logitech} alt="Logo_Logitech" style="width:90px;height:80px;"></img>
        <img src={logo_Windows} alt="Logo_Windows" style="width:80px;height:80px;"></img>

      </div>
    </div>
</div>
<div class="container p-4 my-4 bg-dark text-warning">
    <div class="row" style="text-align: center;">
        <div class="col-sm-3"><a href="http://localhost:3000/DS/placa">
                <button type="button" class="btn btn-warning" style="width:100px;height:80px; margin-bottom: 5%;">
                    <div class="inner">
                        <div class="icons"><i class="fal fa-server"></i></div>
                        <div class="icontitle">Placa</div>
                    </div>
                </button>
            </a>
        </div>

        <div class="col-sm-3"><a href="http://localhost:3000/DS/procesador">
                <button type="button" class="btn btn-warning" style="width:100px;height:80px; margin-bottom: 5%;">
                    <div class="inner">
                        <div class="icons"><i class="fal fa-microchip"></i></div>
                        <div class="icontitle">CPU</div>
                    </div>
                </button>
            </a>
        </div>
        <div class="col-sm-3"><a href="http://localhost:3000/DS/RAM">
                <button type="button" class="btn btn-warning" style="width:100px;height:80px; margin-bottom: 5%;">
                    <div class="inner">
                        <div class="icons"><i class="fal fa-memory"></i></div>
                        <div class="icontitle">RAM</div>
                    </div>
                </button>
            </a>
        </div>
        <div class="col-sm-3"><a href="http://localhost:3000/DS/placa">
                <button type="button" class="btn btn-warning" style="width:100px;height:80px; margin-bottom: 5%;">
                    <div class="inner">
                        <div class="icons"><i class="fal fa-desktop"></i></div>
                        <div class="icontitle">Graficos</div>
                    </div>
                </button>
            </a>
        </div>
    </div>


    <div class="row" style="text-align: center;">
        <div class="col-sm-3"><a href="http://localhost:3000/DS/sistema">
                <button type="button" class="btn btn-warning" style="width:100px;height:80px; margin-bottom: 5%;">
                    <div class="inner">
                        <div class="icons"><i class="bi bi-windows"></i></i></div>
                        <div class="icontitle">Sistema</div>
                    </div>
                </button>
            </a>
        </div>
        <div class="col-sm-3"><a href="http://localhost:3000/DS/placa">
                <button type="button" class="btn btn-warning" style="width:100px;height:80px; margin-bottom: 5%;">
                    <div class="inner">
                        <div class="icons"><i class="fal fa-chart-line"></i></div>
                        <div class="icontitle">Procesos</div>
                    </div>
                </button>
            </a>
        </div>
        <div class="col-sm-3"><a href="http://localhost:3000/DS/disco">
                <button type="button" class="btn btn-warning" style="width:100px;height:80px; margin-bottom: 5%;">
                    <div class="inner">
                        <div class="icons"><i class="bi bi-hdd-fill"></i></div>
                        <div class="icontitle">Disco Duro</div>
                    </div>
                </button>
            </a>
        </div>
        <div class="col-sm-3"><a href="http://localhost:3000/DS/USB">
                <button type="button" class="btn btn-warning" style="width:100px;height:80px; margin-bottom: 5%;">
                    <div class="inner">
                        <div class="icons"><i class="bi bi-usb-symbol"></i></div>
                        <div class="icontitle">USB</div>
                    </div>
                </button>
            </a>
        </div>
    </div>

    <div class="row" style="text-align: center;">
        <div class="col-sm-3"><a href="http://localhost:3000/DS/bios">
                <button type="button" class="btn btn-warning" style="width:100px;height:80px; margin-bottom: 5%;">
                    <div class="inner">
                        <div class="icons"><i class="fal fa-th-list"></i></div>
                        <div class="icontitle">Bios</div>
                    </div>
                </button>
            </a>
        </div>
        <div class="col-sm-3"><a href="http://localhost:3000/DS/red">
                <button type="button" class="btn btn-warning" style="width:100px;height:80px; margin-bottom: 5%;">
                    <div class="inner">
                        <div class="icons"><i class="bi bi-diagram-3-fill"></i></div>
                        <div class="icontitle">Red</div>
                    </div>
                </button>
            </a>
        </div>
        <div class="col-sm-3"><a href="http://localhost:3000/DS/placa">
                <button type="button" class="btn btn-warning" style="width:100px;height:80px; margin-bottom: 5%;">
                    <div class="inner">
                        <div class="icons"><i class="bi bi-wifi"></i></div>
                        <div class="icontitle">Wifi</div>
                    </div>
                </button>
            </a>
        </div>
        <div class="col-sm-3"><a href="http://localhost:3000/DS/programas">
                <button type="button" class="btn btn-warning" style="width:100px;height:80px; margin-bottom: 5%;">
                    <div class="inner">
                        <div class="icons"><i class="bi bi-github"></i></div>
                        <div class="icontitle">Programas</div>
                    </div>
                </button>
            </a>
        </div>
    </div>
</div >);
}


export default App;

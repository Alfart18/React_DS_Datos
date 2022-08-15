import logo_DS from './DS.png';
import logo_Linux from './Linux.png';
import logo_HP from './Hp.png';
import logo_AMD from './AMD.png';
import logo_Asus from './Asus.png';
import logo_Logitech from './Logitech.png';
import logo_Windows from './Windows.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <div class="container p-4 my-4 bg-light text-warning">
                <div class="row">
                    <div class="col-sm-3">
                        <img class="logo_DS" src={logo_DS} alt="Logo_DS"></img>
                    </div>
                    <div class="col-sm-9">
                        <img class="logo_Linux" src={logo_Linux} alt="Logo_Linux"></img>
                        <img class="logo_HP" src={logo_HP} alt="Logo_HP"></img>
                        <img class="logo_AMD" src={logo_AMD} alt="Logo_AMD"></img>
                        <img class="logo_Asus" src={logo_Asus} alt="Logo_Asus" ></img>
                        <img class="Logo_Logitech" src={logo_Logitech} alt="Logo_Logitech" ></img>
                        <img class="Logo_Windows" src={logo_Windows} alt="Logo_Windows" ></img>
                    </div>
                </div>
            </div>
            <div class="container p-4 my-4 bg-dark text-warning">
                <div class="row">
                    <div class="col-sm-3"><a href="http://localhost:3000/DS/placa">
                        <button type="button" class="btn btn-warning">
                            <div class="inner">
                                <div class="icons"><i class="fal fa-server"></i>
                                </div>
                                <div class="icontitle">Placa</div>
                            </div>
                        </button>
                    </a>
                    </div>

                    <div class="col-sm-3"><a href="http://localhost:3000/DS/procesador">
                        <button type="button" class="btn btn-warning">
                            <div class="inner">
                                <div class="icons"><i class="fal fa-microchip"></i></div>
                                <div class="icontitle">CPU</div>
                            </div>
                        </button>
                    </a>
                    </div>
                    <div class="col-sm-3"><a href="http://localhost:3000/DS/RAM">
                        <button type="button" class="btn btn-warning">
                            <div class="inner">
                                <div class="icons"><i class="fal fa-memory"></i></div>
                                <div class="icontitle">RAM</div>
                            </div>
                        </button>
                    </a>
                    </div>
                    <div class="col-sm-3"><a href="http://localhost:3000/DS/graficos">
                        <button type="button" class="btn btn-warning">
                            <div class="inner">
                                <div class="icons"><i class="fal fa-desktop"></i></div>
                                <div class="icontitle">Graficos</div>
                            </div>
                        </button>
                    </a>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-3"><a href="http://localhost:3000/DS/sistema">
                        <button type="button" class="btn btn-warning">
                            <div class="inner">
                                <div class="icons"><i class="bi bi-windows"></i>
                                </div>
                                <div class="icontitle">Sistema</div>
                            </div>
                        </button>
                    </a>
                    </div>
                    <div class="col-sm-3"><a href="http://localhost:3000/DS/procesos">
                        <button type="button" class="btn btn-warning">
                            <div class="inner">
                                <div class="icons"><i class="fal fa-chart-line"></i></div>
                                <div class="icontitle">Procesos</div>
                            </div>
                        </button>
                    </a>
                    </div>
                    <div class="col-sm-3"><a href="http://localhost:3000/DS/disco">
                        <button type="button" class="btn btn-warning">
                            <div class="inner">
                                <div class="icons"><i class="bi bi-hdd-fill"></i></div>
                                <div class="icontitle">Disco Duro</div>
                            </div>
                        </button>
                    </a>
                    </div>
                    <div class="col-sm-3"><a href="http://localhost:3000/DS/USB">
                        <button type="button" class="btn btn-warning">
                            <div class="inner">
                                <div class="icons"><i class="bi bi-usb-symbol"></i></div>
                                <div class="icontitle">USB</div>
                            </div>
                        </button>
                    </a>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-3"><a href="http://localhost:3000/DS/bios">
                        <button type="button" class="btn btn-warning">
                            <div class="inner">
                                <div class="icons"><i class="fal fa-th-list"></i></div>
                                <div class="icontitle">Bios</div>
                            </div>
                        </button>
                    </a>
                    </div>
                    <div class="col-sm-3"><a href="http://localhost:3000/DS/red">
                        <button type="button" class="btn btn-warning">
                            <div class="inner">
                                <div class="icons"><i class="bi bi-diagram-3-fill"></i></div>
                                <div class="icontitle">Red</div>
                            </div>
                        </button>
                    </a>
                    </div>
                    <div class="col-sm-3"><a href="http://localhost:3000/DS/wifi">
                        <button type="button" class="btn btn-warning">
                            <div class="inner">
                                <div class="icons"><i class="bi bi-wifi"></i></div>
                                <div class="icontitle">Wifi</div>
                            </div>
                        </button>
                    </a>
                    </div>
                    <div class="col-sm-3"><a href="http://localhost:3000/DS/programas">
                        <button type="button" class="btn btn-warning">
                            <div class="inner">
                                <div class="icons"><i class="bi bi-github"></i></div>
                                <div class="icontitle">Programas</div>
                            </div>
                        </button>
                    </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
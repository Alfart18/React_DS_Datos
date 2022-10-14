import React from "react";
import './Inicio.css';
import { NavLink } from 'react-router-dom';

import logo_DS from '../DS.png';
import logo_Linux from '../Linux.png';
import logo_HP from '../Hp.png';
import logo_AMD from '../AMD.png';
import logo_Asus from '../Asus.png';
import logo_Logitech from '../Logitech.png';
import logo_Windows from '../Windows.png';

function Inicio() {
    return (
        <div ClassName="Inicio">
            <div Class="container p-4 my-4 bg-light text-warning">
                <div Class="row">
                    <div Class="col-sm-3">
                        <img Class="logo_DS" src={logo_DS} alt="Logo_DS"></img>
                    </div>
                    <div Class="col-sm-9">
                        <img Class="logo_Linux" src={logo_Linux} alt="Logo_Linux"></img>
                        <img Class="logo_HP" src={logo_HP} alt="Logo_HP"></img>
                        <img Class="logo_AMD" src={logo_AMD} alt="Logo_AMD"></img>
                        <img Class="logo_Asus" src={logo_Asus} alt="Logo_Asus" ></img>
                        <img Class="Logo_Logitech" src={logo_Logitech} alt="Logo_Logitech" ></img>
                        <img Class="Logo_Windows" src={logo_Windows} alt="Logo_Windows" ></img>
                    </div>
                </div>
            </div>
            <div Class="container p-4 my-4 bg-dark text-warning">
                <div Class="row">
                    <div Class="col-sm-3"> <NavLink to="/placa">
                        <button type="button" Class="btn btn-warning">
                            <div Class="inner">
                                <div Class="icons"><i Class="fal fa-server"></i>
                                </div>
                                <div Class="icontitle">Placa</div>
                            </div>
                        </button>
                    </NavLink>
                    </div>

                    <div Class="col-sm-3"> <NavLink to="/cpu">
                        <button type="button" Class="btn btn-warning">
                            <div Class="inner">
                                <div Class="icons"><i Class="fal fa-microchip"></i></div>
                                <div Class="icontitle">CPU</div>
                            </div>
                        </button>
                    </NavLink>
                    </div>
                    <div Class="col-sm-3"><NavLink to="/RAM">
                        <button type="button" Class="btn btn-warning">
                            <div Class="inner">
                                <div Class="icons"><i Class="fal fa-memory"></i></div>
                                <div Class="icontitle">RAM</div>
                            </div>
                        </button>
                    </NavLink>
                    </div>
                    <div Class="col-sm-3"><NavLink to="/graficos">
                        <button type="button" Class="btn btn-warning">
                            <div Class="inner">
                                <div Class="icons"><i Class="fal fa-desktop"></i></div>
                                <div Class="icontitle">Graficos</div>
                            </div>
                        </button>
                    </NavLink>
                    </div>
                </div>

                <div Class="row">
                    <div Class="col-sm-3"><NavLink to="/sistema">
                        <button type="button" Class="btn btn-warning">
                            <div Class="inner">
                                <div Class="icons"><i Class="bi bi-windows"></i>
                                </div>
                                <div Class="icontitle">Sistema</div>
                            </div>
                        </button>
                    </NavLink>
                    </div>
                    <div Class="col-sm-3"><NavLink to="/procesos">
                        <button type="button" Class="btn btn-warning">
                            <div Class="inner">
                                <div Class="icons"><i Class="fal fa-chart-line"></i></div>
                                <div Class="icontitle">Procesos</div>
                            </div>
                        </button>
                    </NavLink>
                    </div>
                    <div Class="col-sm-3"><NavLink to="/disco">
                        <button type="button" Class="btn btn-warning">
                            <div Class="inner">
                                <div Class="icons"><i Class="bi bi-hdd-fill"></i></div>
                                <div Class="icontitle">Disco Duro</div>
                            </div>
                        </button>
                    </NavLink>
                    </div>
                    <div Class="col-sm-3"><NavLink to="/USB">
                        <button type="button" Class="btn btn-warning">
                            <div Class="inner">
                                <div Class="icons"><i Class="bi bi-usb-symbol"></i></div>
                                <div Class="icontitle">USB</div>
                            </div>
                        </button>
                    </NavLink>
                    </div>
                </div>

                <div Class="row">
                    <div Class="col-sm-3"><NavLink to="/bios">
                        <button type="button" Class="btn btn-warning">
                            <div Class="inner">
                                <div Class="icons"><i Class="fal fa-th-list"></i></div>
                                <div Class="icontitle">Bios</div>
                            </div>
                        </button>
                    </NavLink>
                    </div>
                    <div Class="col-sm-3"><NavLink to="/red">
                        <button type="button" Class="btn btn-warning">
                            <div Class="inner">
                                <div Class="icons"><i Class="bi bi-diagram-3-fill"></i></div>
                                <div Class="icontitle">Red</div>
                            </div>
                        </button>
                    </NavLink>
                    </div>
                    <div Class="col-sm-3"><NavLink to="/wifi">
                        <button type="button" Class="btn btn-warning">
                            <div Class="inner">
                                <div Class="icons"><i Class="bi bi-wifi"></i></div>
                                <div Class="icontitle">Wifi</div>
                            </div>
                        </button>
                    </NavLink>
                    </div>
                    <div Class="col-sm-3"><NavLink to="/programas">
                        <button type="button" Class="btn btn-warning">
                            <div Class="inner">
                                <div Class="icons"><i Class="bi bi-github"></i></div>
                                <div Class="icontitle">Programas</div>
                            </div>
                        </button>
                    </NavLink>
                    </div>
                </div>
            </div>
            {/* <div Class="col-sm-12">
                <button type="button" Class="bg-success" onClick={Generar}>
                    <div Class="inner">
                        <div Class="icons"><i class="bi bi-file-earmark-excel-fill"></i></div>
                        <div Class="icontitle">Generar xls</div>
                    </div>
                </button>
 
            </div> */}
        </div>
    );
}

export default Inicio
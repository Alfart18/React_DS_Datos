import React, { useEffect, useState } from "react"
import './Wifi.css';

function Wifi() {
    const [Wifi, setWifi] = useState();
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/DS/Wifi')
            .then((res) => res.json())
            .then((datos) => setWifi(datos))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));

    }, []);
    return (
        <div className="Wifi">
            <h3 class="h3">
                Wifi
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Nombre<h6 class="info">{Loaded && Wifi[0].Nombre}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            BSSID<h6 class="info">{Loaded && Wifi[0].BSSID}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Modo<h6 class="info">{Loaded && Wifi[0].Modo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Seguridad<h6 class="info">{Loaded && Wifi[0].Seguridad}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Canal<h6 class="info">{Loaded && Wifi[0].Canal}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Frecuencia<h6 class="info">{Loaded && Wifi[0].Frecuencia}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Nivel de Señal<h6 class="info">{Loaded && Wifi[0].Nivel_Señal}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Calidad<h6 class="info">{Loaded && Wifi[0].Calidad}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h62">
                            Nombre<h6 class="info">{Loaded && Wifi[1].Nombre}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h62">
                            BSSID<h6 class="info">{Loaded && Wifi[1].BSSID}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h62">
                            Modo<h6 class="info">{Loaded && Wifi[1].Modo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h62">
                            Seguridad<h6 class="info">{Loaded && Wifi[1].Seguridad}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h62">
                            Canal<h6 class="info">{Loaded && Wifi[1].Canal}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h62">
                            Frecuencia<h6 class="info">{Loaded && Wifi[1].Frecuencia}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h62">
                            Nivel de Señal<h6 class="info">{Loaded && Wifi[1].Nivel_Señal}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h62">
                            Calidad<h6 class="info">{Loaded && Wifi[1].Calidad}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h63">
                            Nombre<h6 class="info">{Loaded && Wifi[2].Nombre}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h63">
                            BSSID<h6 class="info">{Loaded && Wifi[2].BSSID}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h63">
                            Modo<h6 class="info">{Loaded && Wifi[2].Modo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h63">
                            Seguridad<h6 class="info">{Loaded && Wifi[2].Seguridad}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h63">
                            Canal<h6 class="info">{Loaded && Wifi[2].Canal}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h63">
                            Frecuencia<h6 class="info">{Loaded && Wifi[2].Frecuencia}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h63">
                            Nivel de Señal<h6 class="info">{Loaded && Wifi[2].Nivel_Señal}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h63">
                            Calidad<h6 class="info">{Loaded && Wifi[2].Calidad}</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wifi
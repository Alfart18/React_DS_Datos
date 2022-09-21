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
            <h3 class="h3wifi">
                WIFI
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6wifi1">
                            Nombre<h6 class="info">{Loaded && Wifi[0].Nombre}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6wifi1">
                            BSSID<h6 class="info">{Loaded && Wifi[0].BSSID}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6wifi1">
                            Seguridad<h6 class="info">{Loaded && Wifi[0].Seguridad}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6wifi1">
                            Canal<h6 class="info">{Loaded && Wifi[0].Canal}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6wifi1">
                            Nivel de Señal<h6 class="info">{Loaded && Wifi[0].Nivel_Señal}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6wifi1">
                            Calidad<h6 class="info">{Loaded && Wifi[0].Calidad}%</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6wifi2">
                            Nombre<h6 class="info">{Loaded && Wifi[1].Nombre}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6wifi2">
                            BSSID<h6 class="info">{Loaded && Wifi[1].BSSID}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6wifi2">
                            Seguridad<h6 class="info">{Loaded && Wifi[1].Seguridad}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6wifi2">
                            Canal<h6 class="info">{Loaded && Wifi[1].Canal}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6wifi2">
                            Nivel de Señal<h6 class="info">{Loaded && Wifi[1].Nivel_Señal}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6wifi2">
                            Calidad<h6 class="info">{Loaded && Wifi[1].Calidad}%</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6wifi3">
                            Nombre<h6 class="info">{Loaded && Wifi[2].Nombre}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6wifi3">
                            BSSID<h6 class="info">{Loaded && Wifi[2].BSSID}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6wifi3">
                            Seguridad<h6 class="info">{Loaded && Wifi[2].Seguridad}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6wifi3">
                            Canal<h6 class="info">{Loaded && Wifi[2].Canal}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6wifi3">
                            Nivel de Señal<h6 class="info">{Loaded && Wifi[2].Nivel_Señal}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6wifi3">
                            Calidad<h6 class="info">{Loaded && Wifi[2].Calidad}%</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wifi
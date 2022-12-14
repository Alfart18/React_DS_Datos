import React, { useEffect, useState } from "react"
import './Graficos.css';

function Graficos() {
    const [Graficos, setGraficos] = useState();
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/DS/Graficos')
            .then((res) => res.json())
            .then((datos) => setGraficos(datos))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));

    }, []);

    return (
        <div className="Graficos">
            <h3 class="h3monitor">
                MONITOR
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6monitor">
                            Marca<h6 class="info">{Loaded && Graficos[0].Marca}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6monitor">
                            Modelo<h6 class="info">{Loaded && Graficos[0].Modelo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6monitor">
                            Nombre del Dispositivo<h6 class="info">{Loaded && Graficos[0].Nombre_Dispositivo}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6monitor">
                            Conexión<h6 class="info">{Loaded && Graficos[0].Conexión}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6monitor">
                            Profundidad<h6 class="info">{Loaded && Graficos[0].Profundidad_Pixeles} &nbsp; Bits</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6monitor">
                            Pixel Horizontal<h6 class="info">{Loaded && Graficos[0].Tamaño_X} &nbsp; PX</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6monitor">
                            Resolución Horizontal<h6 class="info">{Loaded && Graficos[0].Resolución_X} &nbsp; PX</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6monitor">
                            Resolución Vertical<h6 class="info">{Loaded && Graficos[0].Resolución_Y} &nbsp; PX</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6monitor">
                            Pixel Vertical<h6 class="info">{Loaded && Graficos[0].Tamaño_Y} &nbsp; PX</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
            <hr></hr>
            <h3 class="h3controlador">
                CONTROLADOR
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6controlador">
                            Marca<h6 class="info">{Loaded && Graficos[1].Marca}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6controlador">
                            Modelo<h6 class="info">{Loaded && Graficos[1].Modelo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6controlador">
                            Bus<h6 class="info">{Loaded && Graficos[1].Bus}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6controlador">
                            Dirección Bus<h6 class="info">{Loaded && Graficos[1].Dirección_Bus}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6controlador">

                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6controlador">
                            VRAM<h6 class="info">{Loaded && Graficos[1].VRAM}</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graficos
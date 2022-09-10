import React, { useEffect, useState } from "react"
import './Procesos.css';

function Procesos() {
    const [Procesos, setProcesos] = useState();
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/DS/Procesos')
            .then((res) => res.json())
            .then((datos) => setProcesos(datos))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));

    }, []);
    return (
        <div className="Procesos">
            <h3 class="h3">
                Procesos
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Corriendo<h6 class="info">{Loaded && Procesos[1].Corriendo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Bloqueado<h6 class="info">{Loaded && Procesos[1].Bloqueado}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Durmiendo<h6 class="info">{Loaded && Procesos[1].Durmiendo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Desconocido<h6 class="info">{Loaded && Procesos[1].Desconocido}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <h3 class="h3">
                    CPU
                </h3>
                <div Class="container">
                    <div Class="row">
                        <div Class="col-sm-3">
                            <h6 class="h61">
                                Carga Media<h6 class="info">{Loaded && Procesos[0].Carga_Media}</h6><br></br>
                            </h6>
                        </div>
                        <div Class="col-sm-3">
                            <h6 class="h61">
                                Carga Actual<h6 class="info">{Loaded && Procesos[0].Carga_Actual}</h6><br></br>
                            </h6>
                        </div>
                        <div Class="col-sm-3">
                            <h6 class="h61">
                                Carga Usuario<h6 class="info">{Loaded && Procesos[0].Carga_Usuario}</h6><br></br>
                            </h6>
                        </div>
                        <div Class="col-sm-3">
                            <h6 class="h61">
                                Carga Sistema<h6 class="info">{Loaded && Procesos[0].Carga_Sistema}</h6><br></br>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Procesos
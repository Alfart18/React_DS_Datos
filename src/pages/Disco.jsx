import React, { useEffect, useState } from "react"
import './Disco.css';

function Disco() {
    const [Disco, setDisco] = useState();
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/DS/Disco')
            .then((res) => res.json())
            .then((datos) => setDisco(datos))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));

    }, []);
    return (
        <div className="Disco">
            <h3 class="h3disco">
                DISCO &nbsp; DURO
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6disco">
                            Marca<h6 class="info">{Loaded && Disco[0].Marca}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6disco">
                            Modelo<h6 class="info">{Loaded && Disco[0].Modelo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6disco">
                            Número de Serie<h6 class="info">{Loaded && Disco[0].Numero_serie}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6disco">
                            Dispositivo<h6 class="info">{Loaded && Disco[0].Dispostivo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6disco">
                            Tipo<h6 class="info">{Loaded && Disco[0].Tipo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6disco">
                            Capacidad<h6 class="info">{Loaded && Disco[0].Capacidad} &nbsp; TB</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Disco
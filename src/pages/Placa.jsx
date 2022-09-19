import React, { useEffect, useState } from "react"
import './Placa.css';

function Placa() {
    const [Placa, setPlaca] = useState();
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/DS/placa')
            .then((res) => res.json())
            .then((datos) => setPlaca(datos))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));

    }, []);
    return (
        <div className="Placa">
            <h3 class="h3placa">
                PLACA &nbsp; MADRE
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6placa">
                            Marca<h6 class="info">{Loaded && Placa[0].Marca}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6placa">
                            Modelo<h6 class="info">{Loaded && Placa[0].Modelo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6placa">
                            Versión<h6 class="info">{Loaded && Placa[0].Version}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6placa">
                            Número de Serie<h6 class="info">{Loaded && Placa[0].Numero_serie}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6placa">
                            Memoria Máxima<h6 class="info">{Loaded && Placa[0].Men_Max}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6placa">
                            Ranuras de Memoria<h6 class="info">{Loaded && Placa[0].Ran_Men}</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placa


import React, { useEffect, useState } from "react"
import './Ram.css';


function Ram() {
    const [Ram, setRam] = useState();
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/DS/Ram')
            .then((res) => res.json())
            .then((datos) => setRam(datos))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));

    }, []);
    return (
        <div className="Ram">
            <h3 class="h3ram">
                RAM
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6ram">
                            Marca<h6 class="info">{Loaded && Ram[0].Marca}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6ram">
                            Modelo<h6 class="info">{Loaded && Ram[0].Modelo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6ram">
                            Número de Serie<h6 class="info">{Loaded && Ram[0].Numero_serie}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6ram">
                            Memoria Total<h6 class="info">{Loaded && Ram[0].Men_Total}&nbsp; GB</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6ram">
                            Memoria Libre<h6 class="info">{Loaded && Ram[0].Men_Libre}&nbsp; GB</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6ram">
                            Memoria en Uso<h6 class="info">{Loaded && Ram[0].Men_Used}&nbsp; GB</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ram

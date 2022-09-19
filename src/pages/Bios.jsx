import React, { useEffect, useState } from "react"
import './Bios.css';

function Bios() {
    const [Bios, setBios] = useState();
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/DS/bios')
            .then((res) => res.json())
            .then((datos) => setBios(datos))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));

    }, []);
    return (
            <div className="Bios">
                <h3 class="h3bios">
                    BIOS
                </h3>
                <div Class="container">
                    <div Class="row">
                        <div Class="col-sm-4">
                            <h6 class="h6bios">
                                Marca<h6 class="info">{Loaded && Bios[0].Marca}</h6><br></br>
                            </h6>
                        </div>
                        <div Class="col-sm-4">
                            <h6 class="h6bios">
                                Versión<h6 class="info">{Loaded && Bios[0].Version}</h6><br></br>
                            </h6>
                        </div>
                        <div Class="col-sm-4">
                            <h6 class="h6bios">
                                Número de Serie<h6 class="info">{Loaded && Bios[0].Numero_serie}</h6><br></br>
                            </h6>
                        </div>
                    </div>
                    <div Class="row">
                        <div Class="col-sm-4">
                            <h6 class="h6bios">
                                Lenguaje<h6 class="info">{Loaded && Bios[0].Lenguaje}</h6><br></br>
                            </h6>
                        </div>
                        <div Class="col-sm-4">
                            <h6 class="h6bios">
                                Fecha_Lanzamiento<h6 class="info">{Loaded && Bios[0].Fecha_Lanzamiento}</h6><br></br>
                            </h6>
                        </div>
                        <div Class="col-sm-4">
                            <h6 class="h6bios">
                                Revisión<h6 class="info">{Loaded && Bios[0].Revisión}</h6><br></br>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Bios


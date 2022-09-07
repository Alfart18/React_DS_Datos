import React, { useEffect, useState } from "react"
import './Sistema.css';

function Sistema() {
    const [Sistema, setSistema] = useState();
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/DS/Sistema')
            .then((res) => res.json())
            .then((datos) => setSistema(datos))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));

    }, []);
    return (
        <div className="Sistema">
            <h3 class="h3">
                SISTEMA &nbsp; OPERATIVO
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Sistema Operativo<h6 class="info">{Loaded && Sistema[0].Sistema_Operativo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Distribución<h6 class="info">{Loaded && Sistema[0].Distribucion}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Versión<h6 class="info">{Loaded && Sistema[0].Version}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Arquitectura<h6 class="info">{Loaded && Sistema[0].Arquitectura}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Número de Serie<h6 class="info">{Loaded && Sistema[0].Numero_serie}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Kernel<h6 class="info">{Loaded && Sistema[0].Kernel}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Host Name<h6 class="info">{Loaded && Sistema[0].Host_name}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                           
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                        Build<h6 class="info">{Loaded && Sistema[0].Build}</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sistema
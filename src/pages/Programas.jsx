import React, { useEffect, useState } from "react"
import './Programas.css';

function Programas() {
    const [Programas, setProgramas] = useState();
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/DS/programas')
            .then((res) => res.json())
            .then((datos) => setProgramas(datos))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));

    }, []);
    return (
        <div className="Programas">
            <h3 class="h3pro">
                PROGRAMAS
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Kernel<h6 class="info">{Loaded && Programas[0].Kernel}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Sistema Operativo<h6 class="info">{Loaded && Programas[0].Sis_Operativo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            NPM<h6 class="info">{Loaded && Programas[0].npm}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Git<h6 class="info">{Loaded && Programas[0].Git}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Java<h6 class="info">{Loaded && Programas[0].Java}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Virtual Box<h6 class="info">{Loaded && Programas[0].Virtual_Box}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Docker<h6 class="info">{Loaded && Programas[0].Docker}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Php<h6 class="info">{Loaded && Programas[0].Php}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            PostgreSQL<h6 class="info">{Loaded && Programas[0].Postgresql}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            MySQL<h6 class="info">{Loaded && Programas[0].Mysql}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Python<h6 class="info">{Loaded && Programas[0].Python}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Node<h6 class="info">{Loaded && Programas[0].Node}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Mongodb<h6 class="info">{Loaded && Programas[0].Mongodb}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Yarn<h6 class="info">{Loaded && Programas[0].Yarn}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Nginx<h6 class="info">{Loaded && Programas[0].Nginx}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6pro">
                            Dotnet<h6 class="info">{Loaded && Programas[0].Dotnet}</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programas
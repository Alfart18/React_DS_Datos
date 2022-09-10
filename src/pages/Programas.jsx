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
            <h3 class="h3">
                PROGRAMAS
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Kernel<h6 class="info">{Loaded && Programas[0].Kernel}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Sistema Operativo<h6 class="info">{Loaded && Programas[0].Sis_Operativo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            NPM<h6 class="info">{Loaded && Programas[0].npm}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Git<h6 class="info">{Loaded && Programas[0].Git}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Java<h6 class="info">{Loaded && Programas[0].Java}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Virtual Box<h6 class="info">{Loaded && Programas[0].Virtual_Box}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Docker<h6 class="info">{Loaded && Programas[0].Docker}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Php<h6 class="info">{Loaded && Programas[0].Php}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            PostgreSQL<h6 class="info">{Loaded && Programas[0].Postgresql}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            MySQL<h6 class="info">{Loaded && Programas[0].Mysql}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Python<h6 class="info">{Loaded && Programas[0].Python}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Node<h6 class="info">{Loaded && Programas[0].Node}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Mongodb<h6 class="info">{Loaded && Programas[0].Mongodb}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Yarn<h6 class="info">{Loaded && Programas[0].Yarn}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Nginx<h6 class="info">{Loaded && Programas[0].Nginx}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Dotnet<h6 class="info">{Loaded && Programas[0].Dotnet}</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programas
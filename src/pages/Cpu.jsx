import React, { useEffect, useState } from "react"
import './Cpu.css';

function Cpu() {
    const [Cpu, setCpu] = useState();
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/DS/procesador')
            .then((res) => res.json())
            .then((datos) => setCpu(datos))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));

    }, []);
    return (
        <div className="Cpu">
            <h3 class="h3">
                PROCESADOR
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Fabricante<h6 class="info">{Loaded && Cpu[0].Fabricante}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Marca<h6 class="info">{Loaded && Cpu[0].Marca}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Modelo<h6 class="info">{Loaded && Cpu[0].Modelo}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Familia<h6 class="info">{Loaded && Cpu[0].Familia}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Velocidad<h6 class="info">{Loaded && Cpu[0].Velocidad}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Nucleos<h6 class="info">{Loaded && Cpu[0].Nucleos}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Nucleos Fisicos<h6 class="info">{Loaded && Cpu[0].Nucleos_Fisicos}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Velocidad Maxima<h6 class="info">{Loaded && Cpu[0].Velocidad_Max}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Velocidad Minima<h6 class="info">{Loaded && Cpu[0].Velocidad_Min}</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cpu
import React, { useEffect, useState } from "react"
import './Usb.css';

function Usb() {
    const [Usb, setUsb] = useState();
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/DS/usb')
            .then((res) => res.json())
            .then((datos) => setUsb(datos))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));

    }, []);
    return (
        <div className="Usb">
            <h3 class="h3">
                ENTRADAS &nbsp; USB
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Tipo<h6 class="info">{Loaded && Usb[0].Tipo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Marca<h6 class="info">{Loaded && Usb[0].Marca}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            Nombre<h6 class="info">{Loaded && Usb[0].Nombre}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h6">
                            ID<h6 class="info">{Loaded && Usb[0].ID}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <hr />
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h61">
                            Tipo<h6 class="info">{Loaded && Usb[1].Tipo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h61">
                            Marca<h6 class="info">{Loaded && Usb[1].Marca}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h61">
                            Nombre<h6 class="info">{Loaded && Usb[1].Nombre}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h61">
                            ID<h6 class="info">{Loaded && Usb[1].ID}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <hr />
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h62">
                            Tipo<h6 class="info">{Loaded && Usb[2].Tipo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h62">
                            Marca<h6 class="info">{Loaded && Usb[2].Marca}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h62">
                            Nombre<h6 class="info">{Loaded && Usb[2].Nombre}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h62">
                            ID<h6 class="info">{Loaded && Usb[2].ID}</h6><br></br>
                        </h6>
                    </div>
                </div>
                <hr />
                <div Class="row">
                    <div Class="col-sm-3">
                        <h6 class="h63">
                            Tipo<h6 class="info">{Loaded && Usb[3].Tipo}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h63">
                            Marca<h6 class="info">{Loaded && Usb[3].Marca}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h63">
                            Nombre<h6 class="info">{Loaded && Usb[3].Nombre}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-3">
                        <h6 class="h63">
                            ID<h6 class="info">{Loaded && Usb[3].ID}</h6><br></br>
                        </h6>
                    </div>
                    <hr />
                    
                        <div Class="col-sm-3">
                            <h6 class="h64">
                                Tipo<h6 class="info">{Loaded && Usb[4].Tipo}</h6><br></br>
                            </h6>
                        </div>
                        <div Class="col-sm-3">
                            <h6 class="h64">
                                Marca<h6 class="info">{Loaded && Usb[4].Marca}</h6><br></br>
                            </h6>
                        </div>
                        <div Class="col-sm-3">
                            <h6 class="h64">
                                Nombre<h6 class="info">{Loaded && Usb[4].Nombre}</h6><br></br>
                            </h6>
                        </div>
                        <div Class="col-sm-3">
                            <h6 class="h64">
                                ID<h6 class="info">{Loaded && Usb[4].ID}</h6><br></br>
                            </h6>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usb

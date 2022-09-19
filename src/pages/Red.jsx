import React, { useEffect, useState } from "react"
import './Red.css';

function Red() {
    const [Red, setRed] = useState();
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/DS/Red')
            .then((res) => res.json())
            .then((datos) => setRed(datos))
            .catch((err) => console.log(err))
            .finally(() => setLoaded(true));

    }, []);
    return (
        <div className="Red">
            <h3 class="h3red">
            Interfaz de Red
            </h3>
            <h3 class="h3inter">
               {Loaded && Red[0].Intefaz}
            </h3>
            <div Class="container">
                <div Class="row">
                <div Class="col-sm-4">
                        <h6 class="h6inter">
                            Nombre<h6 class="info">{Loaded && Red[0].Nombre}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6inter">
                            Dirección IPv4<h6 class="info">{Loaded && Red[0].Dirección_IPv4}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6inter">
                            Mascara IPv4<h6 class="info">{Loaded && Red[0].Mascara_RED_IPv4}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6inter">
                         Dirección MAC<h6 class="info">{Loaded && Red[0].Dirección_MAC}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6inter">
                        Dirección IPv6<h6 class="info">{Loaded && Red[0].Dirección_IPv6}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6inter">
                        Mascara IPv6<h6 class="info">{Loaded && Red[0].Mascara_RED_IPv6}</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
            <h3 class="h3contro">
               {Loaded && Red[1].Intefaz}
            </h3>
            <div Class="container">
                <div Class="row">
                <div Class="col-sm-4">
                        <h6 class="h6contro">
                            Nombre<h6 class="info">{Loaded && Red[1].Nombre}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6contro">
                            Dirección IPv4<h6 class="info">{Loaded && Red[1].Dirección_IPv4}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6contro">
                            Mascara IPv4<h6 class="info">{Loaded && Red[1].Mascara_RED_IPv4}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6contro">
                         Dirección MAC<h6 class="info">{Loaded && Red[1].Dirección_MAC}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6contro">
                        Dirección IPv6<h6 class="info">{Loaded && Red[1].Dirección_IPv6}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6contro">
                        Mascara IPv6<h6 class="info">{Loaded && Red[1].Mascara_RED_IPv6}</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Red

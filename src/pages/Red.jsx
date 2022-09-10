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
            <h3 class="h3">
                RED
            </h3>
            <div Class="container">
                <div Class="row">
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Dirección IP<h6 class="info">{Loaded && Red[0].Dirección_IP}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Dirección MAC<h6 class="info">{Loaded && Red[0].Dirección_MAC}</h6><br></br>
                        </h6>
                    </div>
                    <div Class="col-sm-4">
                        <h6 class="h6">
                            Mascara de RED<h6 class="info">{Loaded && Red[0].Mascara_RED}</h6><br></br>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Red

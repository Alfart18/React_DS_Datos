import React from "react";
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Placa from './pages/Placa'
import Inicio from "./pages/Inicio";
import Bios from "./pages/Bios";
import Cpu from "./pages/Cpu";
import Disco from "./pages/Disco";
import Graficos from "./pages/Graficos";
import Procesos from "./pages/Procesos";
import Programas from "./pages/Programas";
import Ram from "./pages/Ram";
import Red from "./pages/Red";
import Sistema from "./pages/Sistema";
import Usb from "./pages/Usb";
import Wifi from "./pages/Wifi";

function App() {
    return (
        <Router>       
                <Routes>
                    <Route extact path='/bios' element={<Bios/>} />
                    <Route path='/cpu' element={<Cpu/>} />
                    <Route path='/disco' element={<Disco/>} />
                    <Route path='/graficos' element={<Graficos/>} />
                    <Route path='/placa' element={<Placa/>} />
                    <Route path='/procesos' element={<Procesos/>} />
                    <Route path='/programas' element={<Programas/>} />
                    <Route path='/ram' element={<Ram/>} />
                    <Route path='/red' element={<Red/>} />
                    <Route path='/sistema' element={<Sistema/>} />
                    <Route path='/usb' element={<Usb/>} />
                    <Route path='/wifi' element={<Wifi/>} />
                    <Route path='*' element={<Inicio/>} />
                </Routes>
            </Router>
            );
}

    export default App;
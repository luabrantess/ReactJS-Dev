
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Clima from './pages/Clima';
import Location from './pages/Local';
import Contact from './pages/Contato';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import Navigation from './pages/Nav';



function App(){
    const [clima, setClima] = useState()
    const [local, setLocal] = useState()
    const [contato, setContato] = useState()
   
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/clima"} element={<Clima setClima={setClima}/>}/> 
                <Route path={"/local"} element={<Location setLocal={setLocal}/>}/>   
                <Route path={"/contato"} element={<Contact setContato={setContato}/>}/>
                <Route path={"/"} element={<Navigation/>}/>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);
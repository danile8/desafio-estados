import Boton from "./Boton.jsx";
import React from "react";
import { useState } from "react";

const Input = () => {
const [nombre, setNombre] = useState('');
const [pass, setPass] = useState('');

//Estado boton
const [boton, setBoton] = useState(false)
const validarPass = (e) => {
    
    
    //Validacion
    if(pass === '252525'){
        setBoton(true);
        return;
    }

};

  return (
    <form >
      <div className="form-group">
        <label>Nombre</label>
        <input type="text" name="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
      </div>
      <div className="form-group">
        <label>Contraseña</label>
        <input type="password" name="pass" className="form-control"  onChange={(e) => validarPass(setPass(e.target.value))} value={pass}/>
      </div>
    {boton ? <Boton/> :null}
    </form>
  );
};
export default Input;

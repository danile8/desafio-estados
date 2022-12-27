import Boton from "./Boton.jsx";
import React from "react";
import { useState } from "react";

const Input = () => {
const [nombre, setNombre] = useState('');
const [pass, setPass] = useState();

function validarPass(name, value){
  console.log("validarPass esta funcionando", name, value);
  if(value === '252525' && name ==='pass'){
    setBoton(true);
    return;
  }else{setBoton(false);
  }
}
//Estado boton
const [boton, setBoton] = useState(false);

  return (
    <form onChange={(e)=>validarPass(e.target.name, e.target.value)}>
      <div className="form-group">
        <label>Nombre</label>
        <input type="text" name="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
      </div>
      <div className="form-group">
        <label>Contraseña</label>
        <input type="password" name="pass" className="form-control" onChange={(e) => setPass(e.target.value)}  value={pass}/>
      </div>
    {boton ? <Boton/> :null}
    </form>
  );
};
export default Input;

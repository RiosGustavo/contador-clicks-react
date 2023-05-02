import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import freeCodeCampLogo from "./imagenes/logo free code camp.png";
import { useState } from "react";
/// aca importamos el Hooks useState el cual se utiliza para actulizar el estado de un compponente especificio
/// es muy usado
function App() {
  // hacemos una funcion con un arrgeglo que va a guardar los estados en este caso uno de los estados
  // es el numero de clicks dados el segundo elemente es la funcion que nos va a permitir actualizar el numeo de clicks dados 
  //
  const [ numClicks, setNumClicks ]= useState(0);
  
  /// creamos una funcion flecha para manejar el evento
  const manejarClick = () => {
    /// esto es temporal para motrar si funciona
    ///console.log("click");
    // aca llamamos a la funcion y le pasamos el valor asignado al numero de cliks
    setNumClicks(numClicks + 1 )
  };

  const reiniciarContador = () => {
    ///console.log("reiniciar");
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freeCodeCamp"/>
      </div>

      <div className="contenedor-principal">
    
        <Contador numClicks ={numClicks}
        />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          /// pasamos la funcion como un prop el
          // el lado izquierdo es el prop y lo que esta en las {} es la funcion
          manejarclick={manejarClick}/>

        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarclick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;

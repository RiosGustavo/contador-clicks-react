import React from "react";
import '../hojas-de-estilos/Boton.css';

/// al escribir el objeteo texto entre {} lo estamos desestructurando
/// asi solo nos referimos a la propiedad por su nombre
/// creamos la funcion manejarclick
/// texto, esBotonDeClick, manejarclick son lo que llamamos props que recibe la funcion
function Boton({ texto, esBotonDeClick, manejarclick }) {
  /// personalizamos el texto de lo que dice el boton
 /// aca le asignamos una clase al boton segun su uso
 // para que sea dinamico por eso se utiliza el operador ternario
  return ( 
    /// utilizamos el operador TERNARIO
    /// ? (si) esBotonDeClick se le asigna boton-click : (si no) se le asigna boton-reiniciar
    /// con agregar onClick estamos agregando uin eventListener osea un oyente de eventos
    /// le pasamos la funcion manjar click al event onClick
    ///
  <button 
  className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
  onClick={ manejarclick} >
    {texto}
    </button>
  );
}

export default Boton;

import React from 'react';
import '../hojas-de-estilos/Contador.css'

/// desestructuramos el numero de clicks qeu hacemos  con la variable inventada numCliks
function Contador({numClicks}) {

  return(

    <div className='contador'>
      {numClicks}

    </div>
  );
    
}

export default Contador;
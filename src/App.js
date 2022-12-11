import { useState } from 'react';
import Buscador from './Componentes/Buscador.jsx';
import Listado from './Componentes/Listado.jsx';
import MiApi from './Componentes/MiApi.jsx';





function App() {
  const [valoresMonetarios, setValoresMonetarios ] = useState ({});//valores de la api
  const [termino, setTermino] = useState(''); // filtrado


  // Transformar los valores de api a un arreglo - listado de monedas
  function arregloMonedas() {
    // Mientras api no responda no mostrar resultados con return vacío
    if (Object.keys(valoresMonetarios).length === 0)
    return [];
    // asumo que api ya respondio y transformo su respuesta en un arreglo
    else {
      // Se trae listado de propiedades y filtro propiedades que son monedas excluyendo las que no lo son
      const nombresDeLasMonedas = Object.keys(valoresMonetarios).filter(codigo => codigo != 'version' && codigo != 'autor' && codigo != 'fecha');
      // Segun las propiedades obtenidas en la linea anterior se crea un conjunto de monedas  
      const valores = nombresDeLasMonedas.map((nombreMoneda) => valoresMonetarios[nombreMoneda]);
      
      valores.toString().replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");

      valores.sort((moneda1, moneda2) => { // Ordenar alfabeticamente por nombre
        if(moneda1.nombre.toLowerCase() < moneda2.nombre.toLowerCase()) return -1;
        if(moneda1.nombre.toLowerCase() > moneda2.nombre.toLowerCase()) return 1;
        return 0;
      });
  
      return valores;

    }


  };

  return (
    <main>
      <section>
        <MiApi setValoresMonetarios={setValoresMonetarios}/>
      </section>
      <section className='buscar'>
        <Buscador setTermino={setTermino}/>
      </section>
      <section className='listar'>
        <Listado monedas={arregloMonedas()} termino={termino} />
      </section>

    </main>

  );

}

export default App;
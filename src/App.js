import { useState } from 'react';
import Buscador from './Componentes/Buscador.jsx';
import IndicadoresDiarios from './Componentes/Indicadores.jsx';
import Listado from './Componentes/Listado.jsx';
import MiApi from './Componentes/MiApi.jsx';





function App() {
  const [valoresMonetarios, setValoresMonetarios ] = useState ({});
  const [termino, setTermino] = useState('');


  // Transformar retorno de api a un arreglo - listado de monedas
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
      <IndicadoresDiarios valoresMonetarios={valoresMonetarios}/>
      <section>
        <MiApi setValoresMonetarios={setValoresMonetarios}/>
      </section>
      <section>
        <Listado monedas={arregloMonedas()} termino={termino} />
      </section>
      <section>
        <Buscador setTermino={setTermino}/>
      </section>
    </main>

  );

}

export default App;
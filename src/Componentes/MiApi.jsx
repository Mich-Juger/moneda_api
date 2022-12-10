import { useState, useEffect } from "react";

function MiApi(props) {
    const [info, setInfo] = useState([]);

    // 2. LLamamos al función que consume la API al momento de montar el componente
    useEffect(() => {
      consultarInformacion();
    }, []);

    // 1. Función que consulta la API
    const consultarInformacion = async () => {
      const url = 'https://mindicador.cl/api';
      const response = await fetch(url)
      const data = await response.json()
      setInfo(`"${data.version}" - ${data.autor}`);
      props.setValoresMonetarios(data);
    }

    return (
      <div>

      </div>
    );
  }
  
  export default MiApi;
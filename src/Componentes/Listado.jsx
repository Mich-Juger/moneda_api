import IndicadoresDiarios from './Indicadores.jsx'

function Listado(props) {
    return(
        <section className="listado">
        <h4>Listado Monedas</h4>
      
        { 
            
            props.termino.length === 0 ? // Si no busco o filtro por nombre se muestra la lista completa
            <IndicadoresDiarios monedas={props.monedas}/>

             : // Al filtrar por nombre muestro solo con las que coinciden 
             <IndicadoresDiarios monedas={props.monedas.filter( moneda => moneda.nombre.includes(props.termino))}/>

            
        }    

        </section>
    );
}

export default Listado;


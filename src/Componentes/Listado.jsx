function Listado(props) {
    return(
        <section>
        <h4>Listado Monedas</h4>

     
        {props.monedas.length === 0 ? // Mientras api no responda no mostrar resultados con return vacío
            <p> No existen monedas</p> : 
            
            props.termino.length === 0 ? // buscador
            props.monedas.map( (moneda) =>  ( // Por cada elemento de monedas mostrar su nombre y valor
                <p key={moneda.codigo}> 
                    {moneda.nombre} - {moneda.valor}
                </p>            
            )) : // Filtrar
            props.monedas.filter( moneda => moneda.nombre.includes(props.termino)).map( (moneda) =>  (
                <p key={moneda.codigo}> 
                    {moneda.nombre} - {moneda.valor}
                </p>            
            ))
        }    


        </section>
    );
}

export default Listado;



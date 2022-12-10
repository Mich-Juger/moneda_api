// El responsale de como se mostrará el listado es el componente Indicadores

function IndicadoresDiarios(props) {

    return(
            <section className="indicadores"> 
            {props.monedas.length === 0 ? // Mientras api no responda y el buscador no encuentra no mostrar resultados con return vacío
                <p> No existen resultados</p> :


            props.monedas.map( (moneda) =>  ( // itera el listado de moneda
                <div className="tarjetas" key={moneda.codigo}>
                    <h2>{moneda.nombre}</h2>
                    {moneda.valor.toString().replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",")}                                    
            
                </div>
            ))}

               
            </section>           
        

    );
}

export default IndicadoresDiarios;
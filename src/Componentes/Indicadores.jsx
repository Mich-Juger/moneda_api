// El responsale de como se mostrará el listado es el componente Indicadores

function IndicadoresDiarios(props) {

    return(
            <section className="indicadores"> 
            {props.monedas.length === 0 ? // Mientras api no responda y el buscador no encuentra no mostrar resultados con return vacío
                <p> No existen resultados</p> :


            props.monedas.map( (moneda) =>  ( // itera el listado de moneda
                <div className="tarjetas" key={moneda.codigo}>
                    <h3>{moneda.nombre}</h3>
                    <p className="tarjetas-css">${moneda.valor.toString().replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",")}</p>                                    
            
                </div>
            ))}

               
            </section>           
        

    );
}

export default IndicadoresDiarios;
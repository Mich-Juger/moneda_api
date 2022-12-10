

function IndicadoresDiarios(props) {

    return(
        <header>
            <div className="row">
                <div className="col-8">
                    <h2>UF:</h2>
                    {Object.keys(props.valoresMonetarios).length === 0 ?
                        <p> No existen resultados</p> :
                        `"${props.valoresMonetarios.uf.nombre}" - ${props.valoresMonetarios.uf.valor}`                                    
                }
                </div>

                <div className="col-8">
                <h2>Dolar:</h2>
                {Object.keys(props.valoresMonetarios).length === 0 ?
                    <p> No existen resultados</p> :
                    `"${props.valoresMonetarios.dolar.nombre}" - ${props.valoresMonetarios.dolar.valor}`                                    
            }
            </div>

            </div>


            
        
        </header>
    );
}

export default IndicadoresDiarios;
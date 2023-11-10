function DescricacaoCurso(props){
    return(
        <div>
            <h1>{props.titulo}</h1>
            <h2 style={{  
                textAlign :'left',
                fontSize : '17px',
                marginTop : '20px',

            }} >
                Coordenador do Curso : {props.coordenador} </h2>
            <p>{props.descricao}</p>
        </div>
    )
}

export  default  DescricacaoCurso;
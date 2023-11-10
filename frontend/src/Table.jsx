import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { useProps } from '@mui/x-data-grid/internals';



function Table(props) {

    const colunas = [
        { field: 'horario', headerName: 'Horarios'},
        { field: 'segunda', headerName: 'Segunda feira'},
        { field: 'terca', headerName: ' Terça feira'},
        { field: 'quarta', headerName: 'Quarta feira'},
        { field: 'quinta', headerName: 'Quinta feira'},
        { field: 'sexta', headerName: 'Sexta feira'},
    
    ]
    console.log(colunas)
    console.log(props.cursos)
    return (
        <div className='table'> 
            <p style={{
            display : 'inline-block',
            color : '#00693E',
            border : 'none',
            padding : '10px 15px',
            borderRadius : '5px',
            textDecorationLine: 'underline',
        }} >{props.titulo} - {props.semestre} </p>
            <DataGrid rows={props.cursos} columns={colunas} />
        </div>
    )
 
}

export default Table;


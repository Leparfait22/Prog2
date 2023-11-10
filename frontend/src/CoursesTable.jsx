import React from "react";
import axios from "axios";
import Table from "./Table";
import DescricacaoCurso from "./DescricaoCurso";
import Separacao from "./Separacao";
import VoltaTopo from "./VoltaTopo";


function CoursesTable(props) {
    const [listaCursos, SetlistaCursos] = React.useState([])
    console.log(listaCursos);
    React.useEffect(() => {
        const res = axios.get("/")
        res.then((query) => {
            console.log(query.data)
            SetlistaCursos(query.data)
        })
    }, [])
    return (
        <div>
            <a name={props.nomeCurso}></a>
            <DescricacaoCurso titulo={props.nomeCurso} coordenador={props.coordenador} descricao={props.descricao} ></DescricacaoCurso>
            <Table titulo={props.nomeCurso} semestre="Semestre 1" cursos={listaCursos} />
            <Table titulo={props.nomeCurso} semestre="Semestre 2" cursos={listaCursos} />
            <Table titulo={props.nomeCurso} semestre="Semestre 3" cursos={listaCursos} />
            <Table titulo={props.nomeCurso} semestre="Semestre 4" cursos={listaCursos} />
            <VoltaTopo/>
            <Separacao/>

        </div>
    );
}

export default CoursesTable
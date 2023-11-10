import React from "react";
import axios from "axios";
import Header from "./Header";
import Lateral from "./Lateral";
import CoursesTable from "./CoursesTable";
import Follow from "./Follow";


axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.headers.common["Content-Type"] = "application/json;charset=utf-8";



function App() {

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
        <div className="main">
            <Header />
            <div className="cursos" >
                <Lateral />
                <div className="right">
                    <CoursesTable nomeCurso="Ciencîa da Computação"  coordenador="Braulio Adriano de Mello" descricao="O Curso de Ciência da Computação da UFFS é um curso que pretende, através de bases sólidas da área de computação, formar cientistas capazes de terem um papel importante em áreas da tecnologia da informação (TI), tanto na indústria quanto na academia."/>
                    <CoursesTable nomeCurso="Medecina"  coordenador="Luiz Artur da Rosa Filho" descricao="A proposta pedagógica do Curso de Graduação em Medicina tem como pressupostos básicos o direito universal à saúde, a atenção integral, equitativa e de qualidade, contribuindo no fortalecimento da participação e autonomia dos sujeitos na produção da sua própria saúde individual e coletiva"/>
                    <CoursesTable nomeCurso="Historia"  coordenador="Bruno Antonio Picoli" descricao="O curso de Licenciatura em História da UFFS – Campus Chapecó oferta uma entrada anual, no primeiro semestre, com 50 vagas."/>
                    <CoursesTable nomeCurso="Letras" coordenador="Solange Labbonia" descricao="O Curso de Graduação em Letras Português e Espanhol – Licenciatura pretende formar profissionais que sejam capazes de lidar com as linguagens, nos contextos oral e escrito, e com a interculturalidade – construindo e propagando uma visão crítica da sociedade" />
                </div>
            </div>
        </div>
    )
}


export default App



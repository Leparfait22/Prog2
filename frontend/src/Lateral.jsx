import Courses from "./Courses"

function Lateral() {
    return (
        <div className="left">
            <a name="cursosDisponiveis"></a>
            <h1>CURSOS DISPONIVEIS</h1>
            <div className="cursos-disponiveis">
                <Courses titulo="Cienca da Computação" />
                <Courses titulo="Medecina" />
                <Courses titulo="Letras" />
                <Courses titulo="Historia" />
            </div>

        </div>
    )
}

export default Lateral
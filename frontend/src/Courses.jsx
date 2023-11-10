function Courses(props){
    const caminho =`#${props.titulo}`
    return(
        <div>
          <li> <a href={caminho}>{props.titulo}</a></li>
        </div>
    )
}

export default Courses
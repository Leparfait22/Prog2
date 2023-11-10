const express = require('express')
const app = express()
const cors = require('cors')

const database = {
    cursos: [
        { id: 1, horario: "1º Horario", segunda: "Algoritmos e Programação", terca: "", quarta: "", quinta: "", sexta: "Calculo2" },
        { id: 2, horario: "2º Horario", segunda: "", terca: "Sistema Operacionais ", quarta: "", quinta: "", sexta: "" },
        { id: 3, horario: "3º Horario", segunda: "Programação 1", terca: "", quarta: "Estrutura de Dados", quinta: "", sexta: "" },
        { id: 4, horario: "4º Horario", segunda: "", terca: "Algebra Linear", quarta: "", quinta: "Banco de Dados", sexta: "" },
        { id: 5, horario: "5º Horario", segunda: "Calculo 1", terca: "", quarta: "", quinta: "", sexta: "Grafos" },
    ],
};
app.use(cors())
app.listen(3001, () => console.log("Servidor na porta 3001"))


app.get("/", (req, res) => {
    try {
        res.json(database.cursos).status(200)
        console.log(database.cursos)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }

})



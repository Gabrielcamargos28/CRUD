import express from "express";

const app = express()

app.use(express.json())


const cursos = ["FullStack Master", "Desenvolvimento de Games", "Viver de youtube"]

app.get('/', (req, res) => {
    res.send('Ola')
})

//retorna um curso
app.get('/cursos/:index', (req, res) => {
    const { index } = req.params;
    return res.json(cursos[index])
})
///retorna todos os cursos 

app.get('/cursos', (req, res) => {
    return res.json(cursos);
})
//criar um novo curso
app.post('/cursos', (req, res) => {
    const { name } = req.body;

    cursos.push(name)

    return res.json(cursos)
})
//atualizar um curso
app.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body

    cursos[index] = name;
})
//deletar um curso
app.delete('/cursos/:index', (req, res) => {
    const { index } = req.params
    cursos.splice(index, 1)
    return res.json({ message: "O curso foi deletado" })
})




app.listen(3000, () => {
    console.log('Escutando em http://localhost:3000')
})
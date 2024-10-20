import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const studentsFileJson = path.join(__dirname, 'students.json');

const readEstudentsFile = () => {
    const data = fs.readFileSync(studentsFileJson, 'utf-8');
    return JSON.parse(data);
}

const writeEstudentsFile = (students) => {
    fs.writeFileSync(studentsFileJson, JSON.stringify(students, null, 2));
}

app.get('/students', (req, res) => {
    const students = readEstudentsFile();
    res.send(students);
});

app.get('/students/:id', (req, res) =>{
    const students = readEstudentsFile();
    const {id} = req.params;
    const selectStudent = students.find(student => student.id === parseInt(id));
    
    if(!selectStudent){
        res.status(404).json({error: "El estudiante No ha sido encontrado"});
    } else{
        res.send(selectStudent);
    }
});

app.delete('/students/:id', (req, res) =>{
    let students =  readEstudentsFile();
    const {id} = req.params;
    const selectStudent = students.findIndex(student => student.id === parseInt(id));

    if(selectStudent !==-1){
        const deletedStudent = students.splice(selectStudent, 1);
        writeEstudentsFile(students);
        res.json({ message: 'Estudiante eliminado exitosamente', student: deletedStudent[0] }); 
    }
})

export default app;



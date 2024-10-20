import express from 'express';
import authMiddleware from './middlewares/authMiddleware.js'; 
import validationMiddleware from './middlewares/validationMiddleware.js';

const app = express();

const students = [
    { id: 1, 
      name: 'Alice',
      age: 20, 
      major: 'Computer Science' 
    },
    { id: 2,
      name: 'Bob',
      age: 22,
      major: 'Mathematics' 
    },
    { id: 3,
      name: 'Charlie',
      age: 21,
      major: 'Physics' 
    }
];

app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Bienvenido a mi web de estudiantes");
})

app.get('/students', (req, res) =>{
    res.send(students);
});

app.get('/students/:id', authMiddleware, (req, res) =>{
    
    const {id} = req.params;
    const selectStudent = students.find(student => student.id === parseInt(id));
    
    if(!selectStudent){
        res.status(404).json({error: "El estudiante No ha sido encontrado"});
    } else{
        res.send(selectStudent);
    }
});

app.post('/students', authMiddleware, validationMiddleware, (req, res) => {
    const { name, age, major } = req.body;
    const newStudent = { id: students.length + 1, name, age, major };
    students.push(newStudent);
    res.status(201).send(newStudent);
});

app.put('/students/:id', authMiddleware, validationMiddleware,  (req, res) => {
    const { id } = req.params;
    const { name, age, major } = req.body;
    const selectStudent = students.find(student => student.id === parseInt(id));

    if (!selectStudent) {
        return res.status(404).json({ error: "El estudiante no ha sido encontrado" });
    }

    selectStudent.name = name;
    selectStudent.age = age;
    selectStudent.major = major;

    res.send(selectStudent);
});

app.delete('/students/:id', authMiddleware, (req, res) =>{
    const {id} = req.params;
    const selectStudent = students.findIndex(student => student.id === parseInt(id));

    if(selectStudent !== -1){
        students.splice(selectStudent, 1);
        res.send("El estudiante ha sido eliminado");       
    }else{
        res.status(404).send("El estudiante No ha sido encontrado")
    }
});

export default app;


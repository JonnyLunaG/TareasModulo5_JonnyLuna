//Si quieres retarte te invitamos a crear un programa que sea capaz de recorrer el array estudiantes de el punto 2 y encontrar a el/la estudiante con el mayor promedio, utilizando un bucle for o cualquer otro método visto en clase

const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

//Metodo 1 usando el ciclo for
let EstmayorPromedio = estudiantes[0];
for (let i = 0; i < estudiantes.length; i++) {
    
    if(estudiantes[i].promedio > EstmayorPromedio.promedio){
        EstmayorPromedio = estudiantes[i]
    }
}

console.log('El estudiante con mayor promedio es: ', EstmayorPromedio)

//metodo 2 usando .reduce()
const mpromedio = estudiantes.reduce( (mayorPro, estudiante) => estudiante.promedio > mayorPro.promedio ? estudiante : mayorPro, estudiantes[0])

console.log('El estudiante con mayor promedio es: ', mpromedio)
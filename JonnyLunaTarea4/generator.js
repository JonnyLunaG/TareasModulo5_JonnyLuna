import fs from 'fs';

const numbers = Array.from({length:1000}, (_, i) => i+1).join('\n');

fs.writeFile("numeros.txt", numbers, (error) => {
    if(error) throw error;
    console.log("El archivo numeros.txt se generó exitosamente.")
});


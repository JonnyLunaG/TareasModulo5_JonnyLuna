import fs from 'fs';

fs.readFile('numeros.txt', 'utf-8', (error, data) => {
    if(error) throw error;

    const numeros = data
        .split('\n')
        .map(Number)
        .filter(num => num % 2 === 0);

    console.log('Números pares encontrados: ');
    console.log(numeros.join(', '))

})
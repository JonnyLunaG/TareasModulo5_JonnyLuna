

const sumar = (a,b) => a + b;

const restar = (a,b) => a - b;

const multiplicar = (a,b) => a * b;

const dividir = (a,b) => {
    if(b === 0 ){
        return 'error No es posible la división por cero'
    }
    return (a / b);
}

//console.log(dividir(2,0))
const calcular = (a, operacion, b) =>{
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    if(isNaN(num1) || isNaN(num2) ){
        return 'Error: Ambos valores deben ser números válidos.';
    }

    switch (operacion) {
        case '+':
            return `Resultado: ${sumar(num1, num2)}`;
        case '-':
            return `Resultado: ${restar(num1, num2)}`;
        case '*':
            return `Resultado: ${multiplicar(num1, num2)}`;
        case '/':
            return `Resultado: ${dividir(num1, num2)}`;
        default:
            return 'Operación no válida. Usa alguna de las operaciones: +, -, *, /';
    }
}

const args = process.argv.slice(2);
if (args.length < 3) {
    console.log('Error: Debes proporcionar un número, la operación y el otro número, ejemplo: 10 / 2');
} else {
    const [num1, operacion, num2] = args;
    console.log(calcular( num1, operacion, num2));
}


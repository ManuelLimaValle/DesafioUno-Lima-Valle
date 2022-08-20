let seguir = true;

while(seguir){
    let ingresar = parseInt(prompt("CALCULADORA: 1:-------------- sumar 2:-------------- resta 3:-------------- multiplicar 4:-------------- dividir"));
    let numero1,numero2,resultado;
    switch (ingresar) {
        case 1:
            numero1 = parseInt(prompt("ingrese el primer numero: "));
            numero2 = parseInt(prompt("ingrese el segundo numero: "));
            resultado = numero1 + numero2;
            alert(`resultado es: ${numero1} + ${numero2} = ${resultado}`);
            break;
        case 2: 
            numero1 = parseInt(prompt("ingrese el primer numero: "));
            numero2 = parseInt(prompt("ingrese el segundo numero: "));
            resultado = numero1 - numero2;
            alert(`resultado es: ${numero1} - ${numero2} = ${resultado}`);
            break;
        case 3:
            numero1 = parseInt(prompt("ingrese el primer numero: "));
            numero2 = parseInt(prompt("ingrese el segundo numero: "));
            resultado = numero1 * numero2;
            alert(`resultado es: ${numero1} * ${numero2} = ${resultado}`);
            break;
        case 4:
            numero1 = parseInt(prompt("ingrese el primer numero: "));
            numero2 = parseInt(prompt("ingrese el segundo numero: "));
            resultado = numero1 / numero2;
            alert(`resultado es: ${numero1} / ${numero2} = ${resultado}`);
            break;
        default:
            alert("ingreso incorrecto");
            break;
    }

    seguir = prompt("Desea continuar (Y/N): ");
    if(seguir == "Y" || seguir == "y"){
        seguir = true;
    } else if(seguir == "N" || seguir == "n"){
        break;
    }
}
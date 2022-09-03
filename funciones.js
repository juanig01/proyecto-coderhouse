
const arrayNotas = [];

function calculateTotal() {

    let nombreUsuario = prompt("Ingresa tu nombre");

    localStorage.setItem("nombre", JSON.stringify(nombreUsuario));

    let nota1 = Number(prompt("Ingrese la primer nota"));
    let nota2 = Number(prompt("Ingrese la segunda nota"));
    let nota3 = Number(prompt("Ingrese la tercer nota"));
    var notaAcumulada = 0;



    if (nota1 > 0 && nota2 > 0 && nota3 > 0) {


        arrayNotas.push(nota1);
        arrayNotas.push(nota2);
        arrayNotas.push(nota3);

        for (var i = 0; i < arrayNotas.length; i++) {

            notaAcumulada += arrayNotas[i];
        }

        let promedio = notaAcumulada / 3;


        if (promedio > 7) {

            alert(" Aprobado " + "con un promedio de " + promedio.toFixed(2) + " " + JSON.parse(localStorage.getItem("nombre")));

        } else {

            alert("Desaprobado " + "con un promedio de " + promedio.toFixed(2) + " " + JSON.parse(localStorage.getItem("nombre")));
        }
    } else {
        alert("Debe ingresar numeros mayores a 0 ");
    }

}

function sumarNumeros() {
    let numero1 = Number(prompt("Ingrese el primer numero"));
    let numero2 = Number(prompt("Ingrese el segundo numero"));

    if (!isNaN(numero1)) {
        if (!isNaN((numero2))) {


            alert(math.add(numero1, numero2));
        } else {
            alert("Debe ingresar numeros");
        }
    } else {
        alert("Debe ingresar numeros");
    }


}

function restarNumeros() {
    let numero1 = Number(prompt("Ingrese el primer numero"));
    let numero2 = Number(prompt("Ingrese el segundo numero"));

    if (!isNaN(numero1)) {
        if (!isNaN(numero2)) {


            alert(math.subtract(numero1, numero2));
        } else {
            alert("Debe ingresar numeros");
        }
    } else {
        alert("Debe ingresar numeros");
    }


}



function dividirNumeros() {
    let numero1 = Number(prompt("Ingrese el dividendo"));
    let numero2 = Number(prompt("Ingrese el divisor"));

    if (!isNaN(numero1)) {
        if (!isNaN(numero2)) {
            if (numero2 !== 0) {


                alert(math.divide(numero1, numero2));
            } else {
                alert("Debe ingresar numeros");
            }
        } else {
            alert("Debe ingresar numeros");
        }
    } else {
        alert("Debe ingresar numeros");
    }


}

function calcularPorcentaje() {
    let numero1 = Number(prompt("Ingrese el numero"));
    let numero2 = Number(prompt("Ingrese el porcentaje entre 1 y 100"));

    if (!isNaN(numero1)) {
        if (!isNaN(numero2)) {
            if (numero2 > 0) {
                if (numero2 < 100) {

                    let resultado = numero1 * numero2 / 100;

                    alert(resultado);
                } else {
                    alert("El porcentaje debe ser menor a 100");
                }
            } else {
                alert("El porcentaje debe ser mayor a 0");
            }
        } else {
            alert("Debe ingresar numeros");
        }
    } else {
        alert("Debe ingresar numeros");
    }



}





function getValor() {

    let emailCompra = prompt("Ingresa tu mail para finalizar la compra");

    localStorage.setItem("email", emailCompra);

    let banco = document.getElementById("banco").value;
    let cuotas = Number(document.getElementById("cuotas").value);

    let valorFinal = math.divide(12000, cuotas);
    let email = localStorage.getItem("email");
    let body = '';
    body += `<h2> Cada cuota cuesta ${valorFinal} ,  con el banco ${banco} y los datos seran enviados a tu email :  ${email}</h2>`;

    document.getElementById('app').innerHTML = body;

}








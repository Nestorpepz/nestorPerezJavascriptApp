//INGRESO NOMBRE DE USUARIO
let nombreUsuario = prompt('Ingrese su nombre');
while (nombreUsuario == "" || nombreUsuario == " ") {
    alert("Porfavor coloque su nombre para continuar.");
    nombreUsuario = prompt('Ingrese su nombre');
}
alert('Hola ' + nombreUsuario + " " + "gracias por elegirnos, te ayudaremos a realizar el evento de tus sueños. Continuemos.");

//DECLARACION DE PAQUETES
const PAQUETEPLUS = "$6,500 MXN"
const PAQUETEBASICO = "$5,500 MXN"

//SELECCION DE PAQUETE
let paquete = prompt("Que paquete le interesa? \n\n1-PK PLUS\n2-PK basico");
if (paquete == "1") {
    alert('Gracias' + " " + nombreUsuario + " " + "de momento el paquete plus tiene un costo de" + " " + PAQUETEPLUS);
} else if (paquete == "2") {
    alert('Gracias' + " " + nombreUsuario + " " + "de momento el paquete basico tiene un costo de" + " " + PAQUETEBASICO);
} else
    while (paquete != "1" && paquete != "2") {
        alert('Incorrecto, vuelva a intentar.\n\nUse los comandos:\n1 para PK PLUS\n2 para PK basico');
        paquete = prompt("Que paquete le interesa? \n\n1-PK PLUS\n2-PK basico");
        if (paquete == "1") {
            alert('Gracias' + " " + nombreUsuario + " " + "de momento el paquete plus tiene un costo de" + " " + PAQUETEPLUS);
        } else if (paquete == "2") {
            alert('Gracias' + " " + nombreUsuario + " " + "de momento el paquete basico tiene un costo de" + " " + PAQUETEBASICO);
        }
    }

let mensaje = prompt('Deseas continuar?\n\nS-Si\nN-No\nX-Cambiar paquete');
while (mensaje == "x" || mensaje == "X") {
    paquete = prompt("Que paquete le interesa? \n\n1-PK PLUS\n2-PK basico");
    if (paquete == "1") {
        alert("De momento el paquete plus tiene un costo de" + " " + PAQUETEPLUS);
    } else if (paquete == "2") {
        alert("De momento el paquete basico tiene un costo de" + " " + PAQUETEBASICO);
    }
    mensaje = prompt("Deseas continuar? \n\nS-si\nN-no\nX-Cambiar paquete");
}

if (mensaje == "n" || mensaje == "N") {
    alert("Gracias, hasta la proxima.")
} else alert('Gracias' + " " + nombreUsuario + " " + "continuemos...");

if (paquete == "1" && mensaje == "s") {
    alert("En tu paquete se incluye lo siguiente:\n\n· Salón por 4 horas\n· Servicio de Anfitriones.(2 personas)\n· Aire Acondicionado\n· Equipo de sonido\n· Area corral para bebés\n· Playground tipo Jungla\n· Alberca de Pelotas\n· Cocina\n· Escenario\n· Peliculas\n· Mesas y mobiliario\n· Palomitas Refil\n· Aguas frescas Refil\n· Manteles");
    alert("Adicionalmente tenemos los siguientes servicios:\n\n· Fotografia.(2 hrs).....................................$1,500 MXN\n· Decoracion adicional...............................$1,000 MXN\n· Servicio de banquete..............................$5000 MXN\n· Anfitriones adicionales.(2 adicionales)...$1,200 MXN");
    let mensaje2 = prompt(nombreUsuario + " deseas agregar algun adicional a tu paquete?\n\nS-Si\nN-No");
}

if (paquete == "2" && mensaje == "s") {
    alert("En tu paquete se incluye lo siguiente:\n\n· Salón por 4 horas\n· Servicio de Anfitriones.(2 personas)\n· Aire Acondicionado\n· Equipo de sonido\n· Area corral para bebés\n· Playground tipo Jungla\n· Alberca de Pelotas\n· Cocina\n· Escenario\n· Peliculas\n· Mesas y mobiliario");
    alert("Adicionalmente tenemos los siguientes servicios:\n\n· Fotografia(2 hrs)......................................$1,500 MXN\n· Decoracion adicional...............................$1,000 MXN\n· Servicio de banquete...............................$5000 MXN\n· Anfitriones adicionales(2 adicionales)....$1,200 MXN\n· Palomitas Refil..........................................$600 MXN\n· Aguas frescas Refil..................................$600 MXN\n· Manteles..................................................$400 MXN");
    var mensaje2 = prompt(nombreUsuario + " deseas agregar algun adicional a tu paquete?\n\nS-Si\nN-No");
}

let total = 0;

if (paquete == "1") {
    total = 6500
    while (mensaje2 == "s" || mensaje2 == "S") {
        let producto = prompt("Ingresa el codigo correspondiente al servicio que deseas:\n1-Fotografia.(2 hrs).....................................$1,500 MXN\n2-Decoracion adicional...............................$1,000 MXN\n3-Servicio de banquete..............................$5000 MXN\n4-Anfitriones adicionales.(2 adicionales)...$1,200 MXN");
        switch (producto) {
            case "1":
                alert("Agregaste fotografia.(2 hrs) al carrito = $1,500 MXN");
                totalAdicionalA(1500);
                break;
            case "2":
                alert("Agregaste decoracion adicional al carrito = $1,000 MXN");
                totalAdicionalA(1000);
                break;
            case "3":
                alert("Agregaste servicio de banquete al carrito = $5000 MXN");
                totalAdicionalA(5000);
                break;
            case "4":
                alert("Agregaste anfitriones adicionales al carrito = $1,200 MXN");
                totalAdicionalA(1200);
                break;
            default:
                alert("Ups ese codigo no existe, intente de nuevo.");
                break;
        }
        mensaje2 = prompt("Desea agregar otro servicio adicional?\n\nS-Si\nN-No");
    }
}

if (paquete == "2" && mensaje == "s") {
    total = 5500
    while (mensaje2 == "s" || mensaje2 == "S") {
        let producto = prompt("Ingrese el codigo correspondiente:\n1-Fotografia(2 hrs)......................................$1,500 MXN\n2-Decoracion adicional...............................$1,000 MXN\n3-Servicio de banquete...............................$5000 MXN\n4-Anfitriones adicionales(2 adicionales)....$1,200 MXN\n5-Palomitas Refil.........................................$600 MXN\n6-Aguas frescas Refil..................................$600 MXN\n7-Manteles..................................................$400 MXN");
        switch (producto) {
            case "1":
                alert("Agregaste fotografia.(2 hrs) al carrito = $1,500 MXN");
                totalAdicionalB(1500);
                break;
            case "2":
                alert("Agregaste decoracion adicional al carrito = $1,000 MXN");
                totalAdicionalB(1000);
                break;
            case "3":
                alert("Agregaste servicio de banquete al carrito = $5000 MXN");
                totalAdicionalB(5000);
                break;
            case "4":
                alert("Agregaste anfitriones adicionales al carrito = $1,200 MXN");
                totalAdicionalB(1200);
                break;
            case "5":
                alert("Agregaste palomitas Refil al carrito = $600 MXN");
                totalAdicionalB(600);
                break;
            case "6":
                alert("Agregaste aguas frescas Refil al carrito = $600 MXN");
                totalAdicionalB(600);
                break;
            case "7":
                alert("Agregaste manteles al carrito = $400 MXN");
                totalAdicionalB(400);
                break;
            default:
                alert("Ups ese codigo no existe, intente de nuevo.");
                break;
        }
        mensaje2 = prompt("Desea agregar otro servicio?\n\nS-Si\nN-No");
    }
}

if (mensaje == s) {
    alert("En total su paquete es de $" + total + " MXN");
    function totalAdicionalA(precio) {
        total = total + precio;
        alert("Su total hasta el momento es de $" + total + "." + "\n" + PAQUETEPLUS + " del paquete + $" + (total - 5500) + " de adicionales.");
    }
    function totalAdicionalB(precio) {
        total = total + precio;
        alert("Su total hasta el momento es de $" + total + "." + "\n" + PAQUETEBASICO + " del paquete + $" + (total - 5500) + " de adicionales.");
    }
    let mensaje3 = alert("Gracias por elegirnos")
}
//defini una funcion con los datos del usuario

function datosDelUsuario() {
    let nombre = prompt('Ingrese su nombre')
    let apellido = prompt('Ingrese su apellido')
    let dni = prompt('Ingrese su DNI')
    let fechaNacimiento = prompt('Ingrese su fecha de nacimiento')
    return datosCompletos = (nombre + ' ' + apellido + ' ' + dni + ' ' + fechaNacimiento)
}

//esta fincion es para cacular el costo del seguro

function calcularCosto(datosCompletos) {
    let seguirCotizando = true

    while (seguirCotizando) {
        let edad = parseInt(prompt('Ingrese su edad'))
        if (edad < 18 || edad > 70) {
            alert('Por favor ingrese una edad en el rango etario de 18 a 70 años');
            continue;
        }
        let añoAuto = parseInt(prompt('Ingrese el año de su unidad'))
        let tipoCobertura = prompt('Por favor, ingrese el tipo de cobertura: \n 1- Terceros \n 2- Terceros Completo \n 3- Todo Riesgo')
        let costoBase = 3000
        if (edad >= 18 && edad <= 25) {
            costoBase += 2000;
        } else if (edad >=26 && edad <= 40) {
            costoBase += 1500;
        } else if (edad >=41 && edad <=70 ) {
            costoBase += 1000;
        }

        let añosantigueddad = 2023 - añoAuto;
        if (añosantigueddad < 3) {
            costoBase += 2000;
        } else if (añosantigueddad < 10) {
            costoBase += 1500;
        } else if (añosantigueddad < 30) {
            costoBase += 1500;
        }

        if (tipoCobertura === '1') {
            costoBase += 1000;
        } else if (tipoCobertura === '2') {
            costoBase += 1500;
        } else if (tipoCobertura === '3') {
            costoBase += 2000;
        }

        alert('Muchas gracias ' + datosCompletos + '\nEl costo total del seguro cotizado es de: $' + costoBase);
    
    //aca cree un condicional para que elija si quiere volver o no al programa 

    let seleccionSeguirCotizando = prompt('¿Quiere realizar otra cotizacion? \n 1: Si - 2: No');
        if (seleccionSeguirCotizando !== '1'){
            seguirCotizando = false
            return alert('Muchas gracias por su visita')
        }
        
    }
}    
    
//con esto logramos que se vea el hmtl de fondo mientras corre el programa

window.addEventListener('load', function () {
    alert('¡Bienvenido al cotizador de Seguros Online! \n Presione Enter para continuar')
    let datosCompletos = datosDelUsuario()
    calcularCosto(datosCompletos)
})
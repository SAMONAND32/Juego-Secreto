let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let mento = document.querySelector(elemento);
    mento.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento( 'p', `Acertaste el numero en ${intento} ${(intento === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto
        if(numeroUsuario  > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        } else {
            asignarTextoElemento ('p', 'El numero secreto es mayor')
        }
        intento++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    //Si ya soteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon los numeros posibles');
    } else{
        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesInciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesInciales();
    //Desahabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesInciales();


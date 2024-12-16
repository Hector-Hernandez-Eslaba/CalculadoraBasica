let numero1 = document.querySelector('#Ingreso1');
let numero2 = document.querySelector("#Ingreso2");
let resultado = document.querySelector("#Ingreso3");

function suma(){
    let adicion = +numero1.value + +numero2.value
    resultado.value = adicion;
}

function resta(){
    let adicion = +numero1.value - +numero2.value
    resultado.value = adicion;
}

function multiplicacion(){
    let adicion = +numero1.value * +numero2.value
    resultado.value = adicion;
}

function division(){
    let adicion = +numero1.value / +numero2.value
    resultado.value = adicion;
}

function potencia(){
    let adicion = Math.pow(+numero1.value, +numero2.value) 
    resultado.value = adicion;
}

function raizCuadrada(){
    let adicion = Math.sqrt(numero2.value)
    resultado.value = adicion;
}

function valorAbsoluto(){
    let adicion = Math.abs(numero2.value)
    resultado.value = adicion;
}

function random(){
    let adicion = Math.floor(Math.random() * (+numero1.value, +numero2.value)) 
    resultado.value = adicion;   
}

function round(){ 
    let redondeo = Math.round(resultado.value)
    resultado.value = redondeo
}

function floor(){ 
    let redondeo = Math.floor(resultado.value)
    resultado.value = redondeo
}

function ceil(){ 
    let redondeo = Math.ceil(resultado.value)
    resultado.value = redondeo
}

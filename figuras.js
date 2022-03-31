//codigo cuadrado
console.group('cuadrado');
//const ladoCuadrado = 5;
//console.log('los lados del cuadrado miden: ' + ladoCuadrado);

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log('El perimetro del cuadrado es: ' + perimetroCuadrado);

function areaCuadrado(lado){
    return lado * lado;
}
//console.log('El area del cuadrado es: ' + areaCuadrado)
console.groupEnd;

//codigo triangulo
console.group('triangulo');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log('los lados del triangulo miden: ' + ladoTriangulo1 + 'cm, ' + ladoTriangulo2 + 'cm, ' + baseTriangulo + 'cm');

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
} 
//console.log('El perimetro del triangulo es: ' + perimetroTriangulo);

function areaTriangulo(base, altura){
    return(base * altura) / 2
}
// console.log('El area del triangulo es: ' + areaTriangulo);
console.groupEnd;

//codigo circulo
console.group('circulos');
// const radio = 4;
// console.log('El radio del circulo es: ' + radio);

function diametroCirculo (radio){
    return radio * 2;
}
// console.log('El diametro del circulo es: ' + diametro);

// const pi = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}
// console.log('El perimetro del circulo es: ' + perimetroCirculo);

function areaCirculo(radio){
   return (radio * radio) * Math.PI;
}
// console.log('El area del circulo es: ' + areaCirculo);

console.groupEnd;

//aqui interactuamos con el html

function calcularPerimetroCuadrado(){
   const input = document.getElementById('input-cuadrado');
   const value = input.value;
   const perimetrocuadradofinal = perimetroCuadrado(value);
   alert(perimetrocuadradofinal)
}
function calcularAreaCuadrado(){
    const input = document.getElementById('input-cuadrado');
    const value = input.value;
    const areacuadradofinal = areaCuadrado(value);
    alert(areacuadradofinal)
 }
function calcularPerimetroTriangulo(){
    const sideA = document.getElementById('input-Triangulo-side-a');
    const valueTrianguloSideA = sideA.value;
    const parseadoA = parseInt(valueTrianguloSideA)

    const sideB = document.getElementById('input-Triangulo-side-b');
    const valueTrianguloSideB = sideB.value;
    const parseadoB = parseInt(valueTrianguloSideB)

    const baseFinal = document.getElementById('input-Triangulo-base');
    const valueBase = baseFinal.value;
    const parseadoBase = parseInt(valueBase)

    const perimetrotriangulofinal = perimetroTriangulo(parseadoA, parseadoB, parseadoBase);
    alert(perimetrotriangulofinal)
}
function calcularAreaTriangulo(){
    const baseFinal = document.getElementById('input-Triangulo-base');
    const valueBase = baseFinal.value;

    const height = document.getElementById('input-Triangulo-height');
    const valueHeight = height.value;

    const areatriangulofinal = areaTriangulo(valueBase, valueHeight);
    alert(areatriangulofinal)
}
function calcularPerimetroCirculo(){
    const inputradio = document.getElementById('input-circulo');
   const valueradio = inputradio.value;
   const perimetrocirculofinal = perimetroCirculo(valueradio);
   alert(perimetrocirculofinal)
}
function calcularAreaCirculo(){
    const inputradio = document.getElementById('input-circulo');
    const valueradio = inputradio.value;
    const areacirculofinal = areaCuadrado(valueradio);
    alert(areacirculofinal)
 }
 function calculardiametroCirculo(){
    const inputradio = document.getElementById('input-circulo');
    const valueradio = inputradio.value;
    const areacirculofinal = diametroCirculo(valueradio);
    alert(areacirculofinal)
 }
function calcularAlturaIsosceles(ladoA,ladoB,LadoBase){
    if(ladoA === ladoB){
       const altura = Math.sqrt(ladoA**2-LadoBase**2/2)
       alert('la altura es: '+ altura)
    }else{
        alert('los lados no son iguales')
    }
}

function calcularAlturaTriangulo(){
    const sideA = document.getElementById('input-Triangulo-side-a');
    const valueTrianguloSideA = sideA.value;

    const sideB = document.getElementById('input-Triangulo-side-b');
    const valueTrianguloSideB = sideB.value;

    const baseFinal = document.getElementById('input-Triangulo-base');
    const valueBase = baseFinal.value;
    

    const alturatriangulofinal = calcularAlturaIsosceles(valueTrianguloSideA, valueTrianguloSideB, valueBase);
}

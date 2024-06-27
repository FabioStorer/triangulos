const prompt = require('prompt-sync')();
const equilatero = [];
const isosceles = [];
const escaleno = [];
let triangulo = {
    ladoUm: '',
    ladoDois: '',
    ladoTres: ''
};

console.log('Olá. Vamos cadastrar triângulos e classificá-los baseado no tamanho de seus lados.');
triangulo.ladoUm = +prompt('Digite em metros o tamanho do primeiro lado do triângulo: ');
triangulo.ladoDois = +prompt('Digite em metros o tamanho do segundo lado do triângulo: ');
triangulo.ladoTres = +prompt('Digite em metros o tamanho do terceiro lado do triângulo: ');

if (triangulo.ladoUm == triangulo.ladoDois && triangulo.ladoDois == triangulo.ladoTres) {
    equilatero.push(triangulo);
    triangulo = {
        ladoUm: '',
        ladoDois: '',
        ladoTres: ''
    };
} else if ((triangulo.ladoUm == triangulo.ladoDois && triangulo.ladoDois != triangulo.ladoTres) || (triangulo.ladoUm != triangulo.ladoDois && triangulo.ladoDois == triangulo.ladoTres) || (triangulo.ladoUm == triangulo.ladoTres && triangulo.ladoTres != triangulo.ladoDois)) {
    isosceles.push(triangulo);
    triangulo = {
        ladoUm: '',
        ladoDois: '',
        ladoTres: ''
    };
} else if (triangulo.ladoUm != triangulo.ladoDois && triangulo.ladoDois != triangulo.ladoTres) {
    escaleno.push(triangulo);
    triangulo = {
        ladoUm: '',
        ladoDois: '',
        ladoTres: ''
    };
}

console.log(triangulo);
console.log('Aqui estão todos os triângulos equiláteros cadastrados: ', equilatero);
console.log('Aqui estão todos os triângulos isósceles cadastrados: ', isosceles);
console.log('Aqui estão todos os triângulos escalenos cadastrados: ', escaleno);
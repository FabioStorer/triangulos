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

while (true) {
    triangulo.ladoUm = +prompt('Digite em metros o tamanho do primeiro lado do triângulo: ');
    triangulo.ladoDois = +prompt('Digite em metros o tamanho do segundo lado do triângulo: ');
    triangulo.ladoTres = +prompt('Digite em metros o tamanho do terceiro lado do triângulo: ');

    if (triangulo.ladoUm > 0 && triangulo.ladoDois > 0 && triangulo.ladoTres > 0 && triangulo.ladoUm + triangulo.ladoDois > triangulo.ladoTres && triangulo.ladoDois + triangulo.ladoTres > triangulo.ladoUm && triangulo.ladoTres + triangulo.ladoUm > triangulo.ladoDois) {
        console.log('Triângulo válido.');
        if (triangulo.ladoUm == triangulo.ladoDois && triangulo.ladoDois == triangulo.ladoTres) {
            equilatero.push(triangulo);
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
        } else {
            isosceles.push(triangulo);
            triangulo = {
                ladoUm: '',
                ladoDois: '',
                ladoTres: ''
            };
        }
    } else {
        console.log('Triângulo inválido. Digite um número válido.');
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

    let input = prompt('Se deseja continuar, aperte a tecla ENTER. Caso deseje encerrar o cadastro basta digitar "Sair": ');

    if (input == 'Sair') {
        process.exit();
    }
}
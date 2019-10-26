/* // numero 1
const objeto1 = {
    nombre: 'holaaa'
}

const objeto2 = JSON.parse(JSON.stringify(objeto1))

objeto2.nombre = 'otro nombre';

console.log(objeto1.nombre);

// numero 2 - correcta

const objeto11 = {
nombre: 'otro'
}

const objeto22 = Object.assign({} , objeto11);
const objeto22 = Object.create(objeto11);

 objeto22.nombre = 'some'

 console.log(objeto22.nombre); */


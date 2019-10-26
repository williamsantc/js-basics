/* // 1 cargar la clase que queremos heredar y pasarle los argumentos  -> super(args)
// 2 heredar

function Animal(nombre, tipo) {
     this.nombre = nombre;
     this.tipo = tipo;

     this.correr = function () {
         console.log('el ' +this.tipo + ' ' + this.nombre + ' está corriendo');
     }
}

function Perro(nombre) {
    Animal.call(this, nombre, 'perro');

    this.ladrar = function () {
        console.log('el perro ' + this.nombre + ' está ladrando');
    }
}

function Chando(nombre) {
    Perro.call(this, nombre);

    this.apruebaDeTodo = true;
}

Chando.prototype = Object.create(Perro.prototype);
// falla
Object.assign(Chando.prototype, Animal.prototype);
Chando.prototype.constructor = Chando;

const perro = new Chando('firulais');

perro.correr()
perro.ladrar()

console.log(perro.apruebaDeTodo);

console.log(perro instanceof Perro);
console.log(perro instanceof Animal);
console.log(perro instanceof Chando);

// Principios SOLID.

// ES6 - transpilarlo a ES5
class Chando extends Perro, Animal {

}

// Angular: class-based components (typescript)

// Loopback: (backend - typescript) */
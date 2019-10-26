/* function Animal(nombre, tipo) {

    // const self = this;
    this.nombre = nombre;
    this.tipo = tipo;

    this.correr = function () {
        console.log('el animal ' + this.nombre + ' está corriendo.')
    }

    this.getTipo = function() {
        console.log('imprimiendo ' + this.tipo)
    }

    this.nuevoObj = {
        interno: function () {
            console.log(this)
        },
        internoArrow: () => console.log(this)
    }
}

/// destructuring, spread sintax

const animal = new Animal('maduro', 'culebra');

animal.correr();
animal.getTipo();

animal.nuevoObj.interno()
animal.nuevoObj.internoArrow() */
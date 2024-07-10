class Coche{
   /* /*  /* valor */
    constructor(marca, modelo, color, año) {

       /*  atributo */
        this.marca=marca
        this.modelo=modelo
        this.color=color
        this.año=año
    }
    arrancar(){
        console.log(this.marca)
        
    }

    detener(){
        console.log(this.color)
    }
}

/* primera instancia */
 let micoche= new Coche ("toyota", "civic", "rojo", 2021)
 micoche.arrancar()


 let micoche1 = new Coche("renault", "honda", "azul", 2021)
 micoche1.detener()






/*  crear la clase persona donde tiene numero de documento, nombre, edad, apellido y el metodo saludo que devuelven un console log de el nombre de la clase  */
/* crear 5 instancias con datos diferentes y hacer el llamado del metodo saludo  */

class Persona {
    constructor(numeroDocumento, nombre, apellido, edad) {
      this.numeroDocumento = numeroDocumento;
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
  
    saludo() {
      console.log(`¡Hola! Soy ${this.nombre} ${this.apellido}.`);
    }
  }
  
 /*  creacion de instancias */
let persona1 = new Persona('1059594680', 'Alejandro', 'Paja', 27);
let persona2 = new Persona('6542185563', 'samara', 'Rios', 19);
let persona3 = new Persona('1549825634', 'Salome', 'Sarria', 25);
let persona4 = new Persona('8546259032', 'Marcela', 'Hernandez', 30);
let persona5 = new Persona('9854216503', 'Juan Jose', 'Sulez', 34);


persona1.saludo();
persona2.saludo();
















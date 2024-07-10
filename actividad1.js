/* vamos a crear una clase llamada prestamo, esta clase se crea con la plabra class despues de creada la clase tambien vamos a crear un constructor el
cual este es para asignarles valores a los atributos del objeto, los atributos son los soguientes; 
.documento del usuario 
.nombre usuario
.valor prestamo
.valor prestamo interes
.fecha prestamo
.valor interes
.numero cuotas*/


class Prestamo {
  /*   a continuacion este sera un constructor por defecto que contiene los siguientes valores */

    constructor( valorPrestamo, fechaPrestamo, valorInteres, numeroCuotas){

       /*  en esta parte realizaremos una iniciacion de la informacion almacenada del objeto (atributos) */
        
        this.valorPrestamo=valorPrestamo
        this.valorPrestamoInteres= ""
        this.fechaPrestamo=fechaPrestamo
        this.valorInteres=valorInteres
        this.numeroCuotas=numeroCuotas

        }

        usuario(documentoUsuario,nombreUsuario){
              /*  atributos */
           this.nombreUsuario=nombreUsuario
           this.documentoUsuario=documentoUsuario
        }

       /*  los metodos a implementar son los siguientes  */
        /* Metodo 1 */
        /* CalcularValorTotalPrestamo(): este método se encarga de validar el valor total del préstamo una
        vez se haya ingresado el valor del préstamo, los intereses y el número de cuotas. Este valor debe
        asignarse al atributo valor préstamos con intereses. */


        /* a continuacion el metodo para calcular el valor del metodo de prestamo  */

        calcularValorTotalPrestamo(){
           this.valorPrestamoInteres = ((this.valorPrestamo * this.valorInteres) * this.numeroCuotas) + this.valorPrestamo
           console.log(this.valorPrestamoInteres);
        }


        /* metodo 2 */
       /*  ValorPagarCuotaslnteres(): este método se encarga de informarle al usuario cuanto debe pagar en
        cada cuota con interés. */

        ValorPagarCuotasInteres(){
         this.pagarcuotas = this.valorPrestamoInteres /this.numeroCuotas
         console.log(`el valor de cada cuaota es de ${this.pagarcuotas}.`);
        }


        /* metodo 3 */
        /* ValorPagarCuotas (): este método se encarga de informarle al usuario cuanto debe pagar en cada
        cuota sin interés. */
        valorpagarcuota(){
         this.sincuota = this.valorPrestamo / this.numeroCuotas
         console.log(`el valor que debe pagar en cada cuota sin interes es de  ${this.sincuota}.`);
        }
        
       

      /*   PagarCuota( valorPagar ): este método se encarga de validar si debe dinero y si es así, debe restar
         del valor total con intereses que debe pagar. */
         pagarcuota(valorPagar){
            if(this.valorPrestamo > 0){
               let valorTotal = ((this.valorPrestamo * this.valorInteres)*this.numeroCuotas)+this.valorPrestamo
               let resta = valorTotal - valorPagar
               console.log(resta)

            }
            
           }


         /* Refinanciar( numeroCuotas ): este método permite a partir de un nuevo número de cuotas,
         actualizar el valor del préstamo del interés. Tener en cuenta el valor del interés y el valor del
         préstamo con interés. */

         refinanciar(numeroCuotas) {
            this.valorPrestamoInteres = ((this.valorPrestamo * this.valorInteres) * numeroCuotas) + this.valorPrestamo
           console.log(this.valorPrestamoInteres);
          }


         
        /*   toString() este método se va a encargar de mostrar toda la información del préstamo. */
          toString(){
            console.log(`Informacion del prestamo: 
               Nombre: ${this.nombreUsuario}, 
               Documento: ${this.documentoUsuario},
               Valor del prestamo: ${this.valorPrestamo}, 
               Valor del prestamo con interes: ${this.valorPrestamoInteres},
               Fecha del prestamo: ${this.fechaPrestamo},  
               Numero de cuotas: ${this.numeroCuotas}, 
               Valor del interes: ${this.valorInteres}.`);
           
          }
        
        
        



         }

 /* instancia */
let miprestamo = new Prestamo (3000, "2024-03-11", 0.17, 8)
miprestamo.calcularValorTotalPrestamo();
miprestamo.ValorPagarCuotasInteres();
miprestamo.valorpagarcuota();
miprestamo.pagarcuota(1000);
miprestamo.refinanciar(5);

/* añadir los datos de usuario */
miprestamo.usuario("1059563482", "Alejandro ");
miprestamo.toString();



































































   /*  vamos a realizar la primera instancia de este metodo donde sabremos el valor total del prestamo */
 

    
     
      
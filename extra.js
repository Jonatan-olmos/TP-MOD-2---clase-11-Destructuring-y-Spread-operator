const array = [15,23,25,30,32,37,41,44,52,55];

const [a, b,c,d,e, ] = array;
console.log(a,c,e);


const mascota = {
    nombre : "Rocko",
    tipoDeMascota :" Perro",
    color : "negro",
    raza : "rottweiler",
};
const {nombre,tipoDeMascota,color,raza} = mascota;


function mascota2({nombre,tipoDeMascota,color,raza}) {
    return `Hola les presento a mi mascota su nombre es:${nombre}, es un hermoso ${tipoDeMascota}, de
    color: ${color} y su raza es: ${raza}.`
}

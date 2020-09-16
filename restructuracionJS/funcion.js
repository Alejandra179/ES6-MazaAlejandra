const saludar=nombre=>`Hola ${nombre}`;
console.log(saludar('Alejandro'));

const multiplicar=(a,b)=> resultado=a+b;
console.log(multiplicar(3, 15))

const crearAlumno=(nombre, apellido, edad, materias)=>({nombre,apellido,edad,materias})
console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))

const devolverFecha=(dia,mes,anio)=>`Hoy es ${dia}/${mes}/${anio}`;
console.log(devolverFecha('10','09','2020'));


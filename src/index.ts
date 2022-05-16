let númeroAMultiplicar: number = Number(
  prompt("Ingrese el número que desea multiplicar")
);
let cantidadAMultiplicar: number = Number(
  prompt("Ingrese la cantidad de veces que desea multiplicar")
);
let resultado: number = 0;

for (let contador: number = 1; contador <= cantidadAMultiplicar; contador++) {
  resultado = númeroAMultiplicar * contador;
  console.log(númeroAMultiplicar, "x", contador, "=", resultado);
}

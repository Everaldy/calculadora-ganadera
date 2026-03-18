// FILTRO
function filtrarAnimal() {
  let animal = document.getElementById("animal").value;

  document.getElementById("vaca").style.display = "none";
  document.getElementById("gallina").style.display = "none";
  document.getElementById("cerdo").style.display = "none";

  if (animal === "vaca") {
    document.getElementById("vaca").style.display = "block";
  } else if (animal === "gallina") {
    document.getElementById("gallina").style.display = "block";
  } else if (animal === "cerdo") {
    document.getElementById("cerdo").style.display = "block";
  }
}


// GUARDAR
function guardarDatos(){

let granja = {

vacas: Number(document.getElementById("vacas").value) || 0,
leche: Number(document.getElementById("leche").value) || 0,
precioLeche: Number(document.getElementById("precioLeche").value) || 0,

gallinas: Number(document.getElementById("gallinas").value) || 0,
huevos: Number(document.getElementById("huevos").value) || 0,
precioHuevo: Number(document.getElementById("precioHuevo").value) || 0,

cerdos: Number(document.getElementById("cerdos").value) || 0,
lechones: Number(document.getElementById("lechones").value) || 0,
precioLechon: Number(document.getElementById("precioLechon").value) || 0,

gastos: Number(document.getElementById("gastos").value) || 0

};

localStorage.setItem("granja", JSON.stringify(granja));

alert("Datos guardados correctamente");
}


// CALCULAR
function calcular(){

let datos = {

vacas: Number(document.getElementById("vacas").value) || 0,
leche: Number(document.getElementById("leche").value) || 0,
precioLeche: Number(document.getElementById("precioLeche").value) || 0,

gallinas: Number(document.getElementById("gallinas").value) || 0,
huevos: Number(document.getElementById("huevos").value) || 0,
precioHuevo: Number(document.getElementById("precioHuevo").value) || 0,

cerdos: Number(document.getElementById("cerdos").value) || 0,
lechones: Number(document.getElementById("lechones").value) || 0,
precioLechon: Number(document.getElementById("precioLechon").value) || 0,

gastos: Number(document.getElementById("gastos").value) || 0

};

// PRODUCCIÓN
let lecheMensual = datos.leche * 30;
let huevosMensual = datos.huevos * 30;

// GANANCIAS
let gananciaLeche = lecheMensual * datos.precioLeche;
let gananciaHuevos = huevosMensual * datos.precioHuevo;
let gananciaCerdos = datos.lechones * datos.precioLechon;

let totalGanancias = gananciaLeche + gananciaHuevos + gananciaCerdos;

// GASTOS
let gastosMensuales = datos.gastos * 30;

// GANANCIA NETA
let gananciaNeta = totalGanancias - gastosMensuales;

// COLOR DINÁMICO
let claseGanancia = gananciaNeta >= 0 ? "ganancia" : "perdida";

// RESULTADO
let resultado = `
<h3>Resultado de la Granja</h3>

Vacas: ${datos.vacas} <br>
Leche mensual: ${lecheMensual} <br>
Ganancia: $${gananciaLeche} <br><br>

Gallinas: ${datos.gallinas} <br>
Huevos mensual: ${huevosMensual} <br>
Ganancia: $${gananciaHuevos} <br><br>

Cerdos: ${datos.cerdos} <br>
Lechones: ${datos.lechones} <br>
Ganancia: $${gananciaCerdos} <br><br>

<hr>

Total: <span class="ganancia">$${totalGanancias}</span> <br>
Gastos: $${gastosMensuales} <br>
Ganancia Neta: <span class="${claseGanancia}">$${gananciaNeta}</span>
`;

let box = document.getElementById("resultadoBox");
box.style.display = "block";
box.innerHTML = resultado;

}
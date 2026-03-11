function guardarDatos(){

let granja = {

vacas: document.getElementById("vacas").value,
leche: document.getElementById("leche").value,

gallinas: document.getElementById("gallinas").value,
huevos: document.getElementById("huevos").value,

cerdos: document.getElementById("cerdos").value,
lechones: document.getElementById("lechones").value,

gastos: document.getElementById("gastos").value

};

localStorage.setItem("granja", JSON.stringify(granja));

alert("Datos guardados correctamente");

}


function mostrarResumen(){

let datos = JSON.parse(localStorage.getItem("granja"));

if(!datos){
document.getElementById("resultado").innerHTML="No hay datos registrados";
return;
}

let lecheSemanal = datos.leche * 7;
let lecheMensual = datos.leche * 30;

let huevosSemanal = datos.huevos * 7;
let huevosMensual = datos.huevos * 30;

let lechonesMensual = datos.lechones;

let gastosDiarios = datos.gastos || 0;
let gastosMensuales = gastosDiarios * 30;

let resumen = `
<b>Vacas:</b> ${datos.vacas} <br>
Producción leche semanal: ${lecheSemanal} litros <br>
Producción leche mensual: ${lecheMensual} litros <br><br>

<b>Gallinas:</b> ${datos.gallinas} <br>
Huevos semanal: ${huevosSemanal} <br>
Huevos mensual: ${huevosMensual} <br><br>

<b>Cerdos:</b> ${datos.cerdos} <br>
Lechones por mes: ${lechonesMensual} <br><br>

<b>Gastos diarios:</b> $${gastosDiarios} <br>
<b>Gastos mensuales:</b> $${gastosMensuales}
`;

document.getElementById("resultado").innerHTML = resumen;

generarAlertas(datos);

}



function generarAlertas(datos){

let alerta = "";

if(datos.leche < 20){
alerta += "⚠ Producción de leche baja <br>";
}

if(datos.gallinas < 10){
alerta += "⚠ Pocas gallinas registradas <br>";
}

if(datos.cerdos == 0){
alerta += "⚠ No hay cerdos registrados <br>";
}

document.getElementById("alertas").innerHTML = alerta;

}
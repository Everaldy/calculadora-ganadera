
// FILTRAR ANIMALES
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


// GUARDAR DATOS
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


// CALCULAR Y MOSTRAR EN CUADRO
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

// RESULTADO EN CUADRO
let resultado = `
<h3>Resultado de la Granja</h3>

Vacas: ${datos.vacas} <br>
Leche mensual: ${lecheMensual} <br>
Ganancia leche: $${gananciaLeche} <br><br>

Gallinas: ${datos.gallinas} <br>
Huevos mensual: ${huevosMensual} <br>
Ganancia huevos: $${gananciaHuevos} <br><br>

Cerdos: ${datos.cerdos} <br>
Lechones: ${datos.lechones} <br>
Ganancia cerdos: $${gananciaCerdos} <br><br>

Total ganancias: $${totalGanancias} <br>
Gastos mensuales: $${gastosMensuales} <br>
Ganancia Neta: $${gananciaNeta}
`;

let box = document.getElementById("resultadoBox");
box.style.display = "block";
box.innerHTML = resultado;

}

// --- CÓDIGO DE LOGIN (Al final de tu script.js) ---
const loginForm = document.getElementById('loginForm');

if (loginForm) { // Solo se ejecuta si estamos en la página de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('username').value;
        const rol = document.getElementById('role').value;

        localStorage.setItem('userRole', rol);
        localStorage.setItem('userName', nombre);

        alert(`¡Bienvenido ${nombre}! Rol: ${rol}`);
        window.location.href = ".html";
    });
}
// Función para entrar al sistema
function entrarSistema() {
    const user = document.getElementById('userIn').value;
    const role = document.getElementById('roleIn').value;

    if (user === "") {
        alert("Por favor, ingresa un nombre de usuario");
        return;
    }

    // Guardamos en la memoria
    localStorage.setItem('userRole', role);
    localStorage.setItem('userName', user);

    // Ocultamos el login y mostramos la calculadora
    document.getElementById('loginOverlay').style.display = 'none';
    
    alert("Bienvenido " + user + " (Rol: " + role + ")");

    // Lógica de Rol: Si es vendedor, ocultamos el botón Calcular
    if (role === 'vendedor') {
        const btnCalcular = document.querySelector('.btn-calcular');
        if (btnCalcular) btnCalcular.style.display = 'none';
    }
}

// Al recargar la página, si ya estaba logueado, quitamos el cuadro
window.onload = function() {
    if (localStorage.getItem('userRole')) {
        document.getElementById('loginOverlay').style.display = 'none';
        
        // Aplicar restricción si es vendedor aunque recargue
        if (localStorage.getItem('userRole') === 'vendedor') {
            const btn = document.querySelector('.btn-calcular');
            if (btn) btn.style.display = 'none';
        }
    }
};
function cerrarSesion() {
    localStorage.clear(); // Borra el usuario y el rol
    alert("Has salido del sistema ganadero");
    location.reload();    // Recarga para que aparezca el Login
}
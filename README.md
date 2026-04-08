# Calculadora Ganadera

Este es mi proyecto **Calculadora Ganadera**, un sistema web sencillo para registrar y calcular la producción de una granja.
Fue desarrollado utilizando **HTML, CSS y JavaScript**, aplicando conceptos básicos de desarrollo web.

---

##  Funcionalidades

* Registro de producción por tipo de animal:

  * Vacas (litros de leche por día)
  * Gallinas (huevos por día)
  * Cerdos (lechones por mes)
* Registro de **gastos diarios** de la granja.
* Formulario dinámico (solo aparece el animal seleccionado).
* Cálculo automático de:

  * Producción mensual
  * Ganancias por animal
  * Gastos totales
  * Ganancia neta
* Interfaz moderna, limpia y **responsive **

---

## Tecnologías utilizadas

* **HTML5** → estructura de la aplicación
* **CSS3** → estilos, diseño moderno, efectos visuales y responsive
* **JavaScript** → lógica de cálculo y manipulación del DOM

---

## Estructura del proyecto

```
CALCULADORA-GANADERA/
│
├── img/                # Imágenes del proyecto (ej: vaca.jpg)
├── script.js           # Lógica principal en JavaScript
├── index.html          # Página principal
├── styles.css          # Estilos de la aplicación
└── README.md           # Documentación del proyecto
```

---

##  Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/Everaldy/CALCULADORA-GANADERA.git
```

2. Abrir la carpeta en Visual Studio Code

3. Ejecutar con **Live Server**

---

## Uso

1. Selecciona un animal
2. Ingresa los datos correspondientes
3. Presiona **Guardar** (opcional)
4. Presiona **Calcular**
5. Visualiza los resultados en pantalla

---

## Cambios y mejoras realizadas

* Se agregó un **fondo con imagen** (`vaca.jpg`) para mejorar el diseño visual.
* Se implementaron **tarjetas con efecto vidrio (glassmorphism)**.
* Se mejoraron los **inputs y botones** con estilos modernos y efectos hover.
* Se agregó **formulario dinámico**, mostrando solo el animal seleccionado.
* Se optimizó el diseño para que sea **responsive en celulares **.



##  Notas de la última actualización (Marzo 2026)

 En esta versión **hemos trabajado** en darle un toque más profesional y funcional al sistema. Estas son las mejoras que implementamos:

###  Botón de Soporte Directo (WhatsApp)
**Agregamos** un acceso directo flotante para que cualquier duda se pueda resolver al instante. 
* Lo configuramos con `position: fixed` para que, sin importar cuánto bajes en el registro de animales, el botón siempre esté a la mano en la esquina inferior.
* **Tip del equipo:** Si necesitas cambiar el número de contacto, solo busca la etiqueta `<a>` al final del HTML y edita el enlace de `wa.me`.

### Pulido de la Interfaz (UI/UX)
**Refinamos** el estilo visual para que no solo sea funcional, sino que se vea increíble:
* **Efecto de Vidrio (Glassmorphism):** Ajustamos las transparencias en los cuadros de "Registrar Datos" y "Resumen" para que la foto de fondo de la granja luzca genial sin quitarle legibilidad al texto.
* **Interactividad:** Le dimos "vida" a los botones. Ahora, al pasar el mouse por el botón de WhatsApp o los botones de "Guardar", estos reaccionan con un suave efecto de escalado (`scale`).

###  Ajustes Técnicos
* **Orden del código:** Movimos los estilos del botón al final del CSS para mantener todo organizado.
* **Accesibilidad:** El enlace de WhatsApp ahora abre en una pestaña nueva (`target="_blank"`) para que no se pierdan los datos que el usuario ya ingresó en el formulario.

---
#  Sistema de Registro Productivo de Granja

**Problema rural abordado:** La falta de digitalización en pequeñas fincas genera desorden en el inventario y errores manuales en el cálculo de costos. Este sistema centraliza los datos para optimizar la rentabilidad del productor.

###  Mejoras Implementadas (Semana Actual)
* **Seguridad por Roles:** Diseñamos un *Login Overlay* con efecto **Glassmorphism** integrado en el index.
* **Control de Acceso:** Diferenciamos perfiles; el **Administrador** tiene acceso total, mientras que al **Vendedor** se le restringe el botón de cálculo mediante lógica de DOM.
* **Persistencia:** Implementamos `localStorage` para mantener la sesión activa tras recargar.
* **Interfaz Flotante:** Añadimos un botón de **Cerrar Sesión** con posición fija (`fixed`) para navegación rápida.

### Comandos de Terminal Utilizados
* `git add .` (Preparar cambios).
* `git commit -m "Mejora: Sistema de roles y login"` (Registrar versión).
* `git push origin main` (Subir al repositorio remoto).

### Atajos de Teclado Aplicados
* **F12:** Abrir herramientas de desarrollador para depurar el `localStorage`.
* **Alt + Z:** Ajuste de palabra en VS Code para mejor lectura del código.
* **Ctrl + S:** Guardado rápido de cambios en archivos de estilo y lógica.

###  Instrucciones de Ejecución
1. Abrir la carpeta raíz del proyecto en **VS Code**.
2. Clic derecho sobre `index.html` y seleccionar **"Open with Live Server"**.
3. Ingresar el nombre de usuario y elegir el **Rol** en la pantalla inicial para entrar al sistema.

###  Reflexión Técnica
Aprendimos que la seguridad es fundamental en entornos rurales donde varios operarios comparten un mismo equipo. Implementar **lógica condicional en JavaScript** para ocultar elementos según el rol es una solución eficaz para proteger la integridad de los reportes financieros.

### Nueva Funcionalidad: Glosario Ganadero

En esta actualización trabajamos en agregar una nueva sección al sistema llamada **Glosario Ganadero**, con la idea de complementar la calculadora y hacerla más completa a nivel informativo.

#### 🔹 Lo que implementamos:
* Creamos una nueva página (`glosario.html`) para manejar el glosario de forma independiente.
* Agregamos un botón en la interfaz principal que permite acceder fácilmente a esta sección.
* Incluimos más de **50 términos ganaderos** con definiciones claras y entendibles.
* Organizamos la información en tarjetas (cards), lo que hace que visualmente se vea más ordenado y moderno.
* Usamos un diseño en grid para distribuir mejor el contenido.

####  Mejoras en el diseño:
* Añadimos una imagen de fondo relacionada con el entorno ganadero para que se vea más acorde al proyecto.
* Aplicamos un overlay oscuro para mejorar la lectura del contenido.
* Ajustamos el scroll y el comportamiento del fondo para evitar errores visuales al bajar.
* En general, buscamos que esta sección se vea más como una aplicación real y no solo como texto.

####  Integración con el sistema:
* Conectamos el glosario con la página principal usando navegación con JavaScript.
* También agregamos un botón para volver, facilitando la navegación entre secciones.

 **Resultado:**  
Con esta mejora logramos que la aplicación no solo sirva para hacer cálculos, sino también como una herramienta de apoyo para entender mejor los conceptos ganaderos, lo que le da más valor al proyecto en la feria.
---
## Autores

* **Everaldy Ayala**
* **Alejandra Valencia**
* **Alejandro Velazques**

---
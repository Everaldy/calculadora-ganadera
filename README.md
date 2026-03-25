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
---

## Autores

* **Everaldy Ayala**
* **Alejandra Valencia**
* **Alejandro Velazques**

---
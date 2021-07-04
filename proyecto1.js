// Profe, no entiendo cómo quitar el onclick, intenté de esta forma pero no funciona:
// en html quito el onclick y en js:
//let miBoton = document.getElementById("miBoton")
//miBoton.addEventListener("click", capturar)
//miBoton.addEventListener("click", agregar)
// debería antes decirle miBoton.onclick?

function capturar(){
    function Persona(gamertag, edad){
        this.gamertag = gamertag;
        this.edad = edad;
    }
    var gamertagCapturar = document.getElementById("gamertag").value;
    var edadCapturar = document.getElementById("edad").value;

    nuevoSujeto = new Persona(gamertagCapturar,edadCapturar);
    console.log(nuevoSujeto)
    agregar();
}


var baseDatos= [];
function agregar(){
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += "<tbody><td>"+nuevoSujeto.gamertag+"</td><td>"+nuevoSujeto.edad+"</td></tbody>";
    //Modificador título
    document.getElementById("titulo").innerHTML = ("Bienvenido: " + gamertag.value);
};



//Calculador de promedio y Clasificaciones

function contenido(id) {
    return document.getElementById(id);
}

function calcularProme() {
    var pn = parseInt(contenido("1nota").value);
    var sn = parseInt(contenido("2nota").value);
    var tn = parseInt(contenido("3nota").value);
    var cn = parseInt(contenido("4nota").value);
    var total = (pn + sn + tn + cn)/4;
    contenido("prom").value = total;

    if (total >=9 & total <=10){
        contenido("EQ").value = "Leyenda";
    }
    else if (total >=8 & total <= 9){
        contenido("EQ").value = "Clase Mundial";
    }
    else if (total >=7 & total <= 8){
        contenido("EQ").value = "Profesional";
    }
    else if (total >=6 & total <= 7){
        contenido("EQ").value = "Semi-Profesional";
    }
    else if (total >=4 & total <= 6){
        contenido("EQ").value = "Amateur";
    }
    
    else {
        contenido("EQ").value = "Manco";
    }
}

//JSON y Storage

const clasificaciones = [
    "Manco > 4",
    "Amateur >6",
    "Semi-Profesional > 7",
    "Profesional > 8",
    "Clase Mundial > 9",
    "Leyenda < 9",
]

const guardarLocal = (key, value) => localStorage.setItem(key, value)

guardarLocal("clasificaciones", JSON.stringify(clasificaciones))


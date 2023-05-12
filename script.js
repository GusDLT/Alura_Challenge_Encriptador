function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munheco = document.getElementById("munheco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0){
        mensaje.textContent = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        document.getElementById('munheco').style.display = "none";
        document.getElementById("btn-copiar").style.visibility = "visible"
    } else{
        munheco.src = "./img/Munheco.png";
    tituloMensaje.textContent="Ningun mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar."
        alert("Debes de ingresar algun texto")
    }    
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munheco = document.getElementById("munheco");
    
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if (texto.length != 0){
            mensaje.textContent = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        document.getElementById('munheco').style.display = "none";
        } else{
            munheco.src = "./img/Munheco.png";
            tituloMensaje.textContent="Ningun mensaje fue encontrado"
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar."
            alert("Debes de ingresar algun texto")
        }  
}

function copiar(){
    var contenido = document.querySelector("#mensaje");
    contenido.select();
    document.execCommand("copy");
}
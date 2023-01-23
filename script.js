
const inputTexto = document.querySelector (".input-texto");
const mensagem = document.querySelector (".mensagem");


//Encriptar//

function btnEncriptar (){
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado
    inputTexto.value = "";
    mensagem.style.backgroundImage = "none"
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes (matrizCodigo [i][0])){
            stringEncriptada = stringEncriptada.replaceAll (matrizCodigo [i][0], matrizCodigo [i][1]);
        }
    }

    return stringEncriptada
}

//desencriptar//

function btnDesencriptar (){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado
    inputTexto.value = "";
    mensagem.style.backgroundImage = "none"
}

function desencriptar (stringDesencriptada) {
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes (matrizCodigo [i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll (matrizCodigo [i][1], matrizCodigo [i][0]);
        }
    }

    return stringDesencriptada
}

//copiar//

let btn = document.querySelector('.copy');

btn.addEventListener('click', function(e) {

  let textArea = document.querySelector('.mensagem');
  textArea.select();
  document.execCommand('copy');
  
});
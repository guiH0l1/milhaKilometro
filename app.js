/**
 * 
 * @author Guilherme Holi
 */

function converter(){
    const milha = document.getElementById('milha').value

    const quilometro = milha * 1.60934

    quilometro = document.getElementById('resultado').innerHTML = `${quilometro} km`



}
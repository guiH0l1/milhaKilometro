/**
 * Conversão de milhas para quilômetros:
 * @author Guilherme Holi
 */

function converter(event) {
    event.preventDefault()
  
    let milha = document.getElementById('milha').value

    let km = milha * 1.60934

    document.getElementById('resultado').innerText = `${km.toFixed(2)} Quilômetros`

}

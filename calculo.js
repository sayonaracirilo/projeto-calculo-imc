let peso = document.querySelector('#pesoid')
let altura = document.querySelector('#alturaid')
let resultado = document.querySelector('#resultado')
let resultadoIMC = document.querySelector('#resultadoIMC')

function calculoImc() {
  if (
    altura.value != '' &&
    altura.value != 0 &&
    !isNaN(altura.value) &&
    peso.value != '' &&
    peso.value != 0 &&
    !isNaN(peso.value)
  ) {
    let imc = peso.value / (altura.value * altura.value)
    resultadoIMC.innerHTML = imc.toFixed(2)
    if (imc.toFixed(2) <= 18.5) {
      resultado.innerText = 'Magreza'
    } else if (imc.toFixed(2) > 18.5 && imc.toFixed(2) <= 24.9) {
      resultado.innerText = 'Normal'
    } else if (imc.toFixed(2) > 24.9 && imc.toFixed(2) <= 30) {
      resultado.innerText = 'Sobrepeso'
    } else {
      resultado.innerHTML = 'Obesidade'
    }
  } else {
    resultado.innerText = 'Digite um valor válido!'
  }
}

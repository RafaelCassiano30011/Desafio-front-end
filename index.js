const $formularioRegistro = document.querySelector('.formulario-registro')
const $containerBox = document.querySelector('.container-box')
const $inputFormulario = document.querySelectorAll('.input-register')
const $buttonFormulario = document.querySelector('.button-register')




const buttonIndisponivel = () => {
    for (const input of $inputFormulario) {
        if (input.value == '') {
            $buttonFormulario.classList.add('button-register-off')
            $buttonFormulario.textContent = 'Prencha as informacoes a cima'
        }
        if ($inputFormulario[3].value != $inputFormulario[4].value) {
            $buttonFormulario.classList.add('button-register-off')
            $buttonFormulario.textContent = 'Senhas Não Confere'
        }
    }

}



const imprimirMensagem = () => {
    $formularioRegistro.innerHTML = ''
    const Agradecimento = document.createElement('h2')
    Agradecimento.classList.add('mensagem-registro')
    Agradecimento.textContent = 'Registro feito com sucesso'

    $formularioRegistro.appendChild(Agradecimento)

}


$formularioRegistro.addEventListener('submit', (event) => {
    event.preventDefault()
    for (let i = 0; i < $inputFormulario.length; i++) {
        const input = $inputFormulario[i]
        if (input.value == '') {
            buttonIndisponivel()
            return
        } else if ($inputFormulario[3].value != $inputFormulario[4].value) {
            buttonIndisponivel()
            return
        }
    }
    imprimirMensagem()

})
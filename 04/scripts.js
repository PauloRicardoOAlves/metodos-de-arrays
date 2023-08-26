const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function atendimento(agendar, lista, nome) {
    if (agendar == "agendar") {
        lista.push(nome)
    } else if (agendar == "atender") {
        lista.shift()
    }
    console.log(lista)
}

atendimento("atender", pacientes)
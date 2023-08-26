const pacientes = ['Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(fila, paciente) {
    fila.push(paciente)
    const mostrarFila = fila.join(", ")
    console.log(mostrarFila)
}

function atenderPaciente(fila) {
    fila.shift()
    const mostrarFila = fila.join(", ")
    console.log(mostrarFila)
}

function cancelarPaciente(fila, paciente) {
    fila.splice(fila.indexOf(paciente), 1)
    const mostrarFila = fila.join(", ")
    console.log(mostrarFila)
}

agendarPaciente(pacientes, 'Paulo')
atenderPaciente(pacientes)
// cancelarPaciente(pacientes, 'Paulo')
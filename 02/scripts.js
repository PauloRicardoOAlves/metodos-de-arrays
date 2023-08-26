const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Paulo','Ricardo','Francisca'];
const tamanhoDoGrupo = 4;

function grupos(nomes, tamanhoDoGrupo) {
    let quantGrupos = Math.ceil((nomes.length / tamanhoDoGrupo))
    for (i = 0; i < quantGrupos; i++) {
        let grupo = nomes.slice(i * tamanhoDoGrupo, (i + 1) * tamanhoDoGrupo)
        console.log(grupo)
    }
}

grupos(nomes, tamanhoDoGrupo)
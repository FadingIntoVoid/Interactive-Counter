const valor = document.getElementById('valor');
const btnAumentar = document.getElementById('aumentar');
const btnDiminuir = document.getElementById('diminuir');
const btnResetar = document.getElementById('resetar');

let contador = 0;

function atualizarValor() {
    valor.textContent = contador;

    valor.classList.remove('positivo', 'negativo', 'zero');

    if (contador > 0) {
        valor.classList.add('positivo');
    } else if (contador < 0) {
        valor.classList.add('negativo');
    } else {
        valor.classList.add('zero');
    }
}

btnAumentar.addEventListener('click', () => {
    contador++;
    atualizarValor();
});

btnDiminuir.addEventListener('click', () => {
    contador--;
    atualizarValor();
});

btnResetar.addEventListener('click', () => {
    contador = 0;
    atualizarValor();
});
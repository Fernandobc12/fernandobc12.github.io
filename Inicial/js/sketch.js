const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
const imagem = document.getElementById('foto');
let img = []

img [0] = 'Inicial/Fotos_inicial/inicial_8_barcos.png';
img [1] = 'Inicial/Fotos_inicial/inicial_7_rua.png';
img [2] = 'Inicial/Fotos_inicial/inicial_9_carro.png';
img [3] = 'Inicial/Fotos_inicial/inicial_velhinho.png';
img [4] = 'Inicial/Fotos_inicial/inicial_bancos.png';
img [5] = 'Inicial/Fotos_inicial/inicial_18_rio.png';


let x = 0;

btnNext.addEventListener('click', next);
btnPrev.addEventListener('click', prev);

function next() {
    x = x + 1;
    if (x > 4) {
        x=0;
    }
    imagem.src = img[x];

}

function prev() {
    x -= 1;
    if (x < 0) {
        x=2;
    }
    imagem.src = img[x];

}


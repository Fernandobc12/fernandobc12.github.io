const btnBack = document.getElementById ('btnBack');
const btnFront = document.getElementById ('btnFront');
const imagem =document.getElementById ('desenho_manual');
let img = []

img [0] = '/Desenhos/digitalizacao_desenho/costas_mulher.jpg';
img [1] = '/Desenhos/digitalizacao_desenho/esqueleto_mao.jp';
img [2] = '/Desenhos/digitalizacao_desenho/estudo_olhos.jpg';
img [3] = '/Desenhos/digitalizacao_desenho/estudo_pe.jpg';
img [4] = '/Desenhos/digitalizacao_desenho/estudo_sentado.jpg';
img [5] = '/Desenhos/digitalizacao_desenho/maos_dois.jpg';
img [6]
img [7]


let x = 0;


btnBack.addEventListener('click', next);
btnFront.addEventListener('click',prev);


function next() {
    x = x + 1;
    if (x > 7) {
        x=0;
    }
    imagem.src = img[x]
}

function prev() {
    x -= 1;
    if (x < 0) {
        x=2;
    }
    imagem.src = img[x];

}
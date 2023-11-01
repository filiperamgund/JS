function clickSom(idElementoAudio) {
    
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');


let cont = 0;

//enquanto
while (cont < listaDeTeclas.length) {

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`

    listaDeTeclas[cont].onclick = function () {
        clickSom(idAudio)
    };
        
    cont = cont +1;
    console.log(cont);
}
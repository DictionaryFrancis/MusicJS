// You need to create a function onclick in the HTML
//  function pom(){
//      document.querySelector("#som_tecla_pom").play()
//  }

// let pom = document.querySelector(".tecla_pom")
// pom.addEventListener("click", (e) =>{
//     document.querySelector("#som_tecla_pom").play()
// })

// let clap = document.querySelector(".tecla_clap");
// function playSoundclap() {
//     document.querySelector("#som_tecla_clap").play();
// }

// clap.onclick = playSoundclap;

function playSound(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const teclas = document.querySelectorAll(".tecla")


for(let cont = 0; cont < teclas.length; cont ++){

    const teclaPressed = teclas[cont]
    const instrument =  teclaPressed.classList[1];
    const idAudio = `#som_${instrument}`
    teclaPressed.onclick = function () {
        playSound(idAudio);    
    }  

}

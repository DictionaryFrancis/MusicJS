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

const teclas = document.querySelectorAll(".tecla")
console.log(teclas[2])


function playSoundPom() {
    document.querySelector("#som_tecla_pom").play();
}

let cont = 0;

while(cont < teclas.length){
    teclas[cont].onclick = playSoundPom;

    cont += 1;

}

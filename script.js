window.addEventListener("load", sidenVises);


//Laver burger og nav_links til konstanter

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav_links");


function sidenVises() {
    console.log("sidenVises ok")
    burger.addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu starter")
    nav.classList.toggle("hidden");

    let erSkjult = nav.classList.contains("hidden");

    if (erSkjult == true) {
        console.log("Bruger icon vises")

        burger.classList.add("burger");
        burger.classList.remove("toggle");

    } else {
        console.log("burger icon gemmes")
        burger.classList.add("toggle");

    }

}

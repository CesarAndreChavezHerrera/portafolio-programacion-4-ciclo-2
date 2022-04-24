const footer = document.querySelector("footer")
const header = document.querySelector("nav")
function nav_(){
    let nav = document.createComment("nav")
    let fila = document.createElement("tr")

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    
    let a1 = document.createElement("a")
    let a2 = document.createElement("a")
    let a3 = document.createElement("a")
    let a4 = document.createElement("a")

    a1.href= "index.html"
    a1.textContent = "inicio"

    td1.appendChild(a1)
    fila.appendChild(td1)
    header.appendChild(fila)
}

function footer_(){ 
    let titulo = document.createElement("h3")
    let div = document.createElement("div")
    let github = document.createElement("p")
    let enlace_a = document.createElement("a")
    let correo = document.createElement("p")
    let correo_ugb = document.createElement("p")

    titulo.textContent = "forma de contacto"
    github.textContent = 'Usuario de github:'
    correo_ugb.textContent = "correo institucional: SMIS033320@ugb.edu.sv"
    correo.textContent = "correo personal: cesar.a.chavez@gmail.com"

    enlace_a.href = "https://github.com/CesarAndreChavezHerrera?tab=repositories"
    enlace_a.textContent="CesarAndreChavezHerrera"
    github.appendChild(enlace_a)


    div.appendChild(titulo)
    div.appendChild(github)
    div.appendChild(correo_ugb)
    div.appendChild(correo)

    footer.appendChild(div)
}

footer_()
//nav_()
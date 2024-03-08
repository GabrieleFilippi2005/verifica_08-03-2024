let vetFilm


window.onload = async() =>{
    let dati = await fetch("http://localhost:1337/prendifilm")
    let resp = await dati.json()
    vetFilm = resp
    console.log(vetFilm)



    let secSerie = document.getElementById("serietv")
    let secFilm = document.getElementById("film")
    let secAnimazione = document.getElementById("animazione")
    let recinzione = document.getElementById("nuovaRecensione")

    for (let film of vetFilm){
        let article = document.createElement("article")
        let div = document.createElement("div")
        let titolo = document.createElement("div")
        let voto = document.createElement("div")

        div.setAttribute("class","dati")
        titolo.innerHTML = film.titolo

        console.log(film.voto[0])

        let media = film.voto[0] + film.voto[1] +film.voto[2] +film.voto[3] +film.voto[4] +film.voto[5]
        media = media/ film.voto.length
        voto.innerHTML = (Math.round(media))

        if (film.img !== undefined){
            let img = document.createElement("img")
            //if (film.titolo)
            img.src = film.img
            div.appendChild(img)
        }

        article.appendChild(div)
        div.appendChild(titolo)
        div.appendChild(voto)

        if (film.tipo === "film")
            secFilm.appendChild(article)
        else if (film.tipo === "animazione")
            secAnimazione.appendChild(article)
        else
            secSerie.appendChild(article)



        //recensione
        div.addEventListener("click", ()=>{
            let btnx = document.getElementById("btnx")
            let btnpiu = document.getElementById("btnpiu")
            let testoRecensione = document.getElementById("testoRecensione")
            testoRecensione.innerHTML = film.titolo
            recinzione.style.display = "flex"


            btnx.addEventListener("click", chiudi)

            btnpiu.addEventListener("click", ()=>{
                let vot = document.getElementById("rngNuovo").value
                film.voto.push(parseInt(vot))
                console.log(film.voto)

                div.removeChild(voto)

                /* for ()*/
                media = film.voto[0] + film.voto[1] +film.voto[2] +film.voto[3] +film.voto[4] +film.voto[5]
                media = media/ film.voto.length
                voto.innerHTML = (Math.round(media))

                div.appendChild(voto)
            })
        })

    }

}


function chiudi() {
    document.getElementById("nuovaRecensione").style.display = "none"
}

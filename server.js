
var header = {

    "Access-Control-Allow-Origin":"*",
};


const http = require("http");
const dispatcher = require("dispatcher");
const disp = new dispatcher(header);
const url = require("url");



var filmConVoto = [
    {
        "titolo": "oceania ",
        "tipo": "animazione",
        "voto": [4,3,3,5,5,2],
        "img":"https://pad.mymovies.it/filmclub/2013/12/171/locandina.jpg"
    },
    {
        "titolo": "il diavolo veste prada ",
        "tipo": "film",
        "voto": [4,3,3,5,5,2],
        "img":"https://pad.mymovies.it/filmclub/2006/05/380/locandina.jpg"
    },
    {
        "titolo": "ragazze interrotte ",
        "tipo": "film",
        "voto": [4,3,3,5,5,2]
        
    },
    {
        "titolo": "povere creature ",
        "tipo": "film",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "the greatest showman ",
        "tipo": "film",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "cenerentola ",
        "tipo": "film",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "la casa dei fantasmi ",
        "tipo": "film",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "le follie dell imperatore ",
        "tipo": "animazione",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "bambi ",
        "tipo": "animazione",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "coco ",
        "tipo": "animazione",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "ocean ' s  8 ",
        "tipo": "film",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "pretty woman ",
        "tipo": "film",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "pianeta del tesoro ",
        "tipo": "animazione",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "l apprendista stregone ",
        "tipo": "film",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "hunger games prequel ",
        "tipo": "film",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "adeline e l' eterna giovinezza ",
        "tipo": "film",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "encanto ",
        "tipo": "animazione",
        "voto":[4,3,3,5,5,2]
    },
    {
        "titolo": "elemental ",
        "tipo": "animazione",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "amore cucina e curry ",
        "tipo": "film",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "i bastardi di pizzofalcone ",
        "tipo": "serie tv",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "the diplomat ",
        "tipo": "serie tv",
        "voto": [4,3,3,5,5,2],
        "img":"https://mr.comingsoon.it/imgdb/serietv/serie/3[4,3,3,5,5,2]88/3[4,3,3,5,5,2]88.jpg"        
    },
    {
        "titolo": "anime false ",
        "tipo": "serie tv",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "la mia prediletta ",
        "tipo": "serie tv",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "unbelievable ",
        "tipo": "serie tv",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "blanca ",
        "tipo": "serie tv",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "la casa che brucia ",
        "tipo": "serie tv",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "ghost whisperer ",
        "tipo": "serie tv",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "the glory ",
        "tipo": "serie tv",
        "voto": [4,3,3,5,5,2]
    },
    {
        "titolo": "lidia poet ",
        "tipo": "serie tv",
        "voto": [4,3,3,5,5,2],
        "img":"https://pad.mymovies.it/filmclub/2023/01/189/locandina.jpg"
    }
];






disp.aggServizio("/prendifilm", (richiesta, risposta)=>{
    header["Content-Type"] = "application/json";
    risposta.writeHead(200, header);
    risposta.write(JSON.stringify(filmConVoto));
    risposta.end();
});





var server = http.createServer(gestisciRichieste);
server.listen(1337);
console.log("Il server è stato avviato sulla porta 1337");

function gestisciRichieste(richiesta, risposta){
    disp.smista(richiesta, risposta);
}
# VIDEOTECA
Il sito permette di visionare, cercare e recensire i titoli di alcuni film, film di animazione e serie tv.

## Obiettivo 
L'obiettivo della verifica è quello di sviluppare UN SERVER NODEJS e la parte client corrispondente. Il client sarà un semplice esecutore, nello specifico deve visualizzare i dati già elaborati dal server.

## La visualizzazione
Il sito web deve visualizzare l'elenco dei film/serie tv e film di animazione separati per tipo come mostrato nel video, l'elenco deve essere ritornato dal server su richiesta GET del client. Cliccando su uno dei filmati deve essere possibile raccogliere un nuovo voto.

NOTA 1. Visualizzare la media dei voti presenti nell'array.
NOTA 2. Non tutti i film hanno il path dell'immagine!

## Le recensioni
Quando si clicca su un'immagine o testo deve essere visualizzato il div con id nuovaRecensione impostando a flex la proprità display. 

Quando si clicca sul bottone +, è necessario inviare al server (con una richiesta POST) il nuovo voto che dovrà essere opportunamento inserito nell'array lato server.

Dovrà poi essere aggiornata la media del filmmato.

## La ricerca
E' necessario definire una ricerca totale sui dati rispetto al titolo, questi dovranno poi essere visualizzati nelle diverse sezioni in base al tipo. La ricerca deve attivarsi dopo la pressione dell'invio.

Il javascript intercetterà la parola da cercare e la invierà al server (IN POST) che concluderà il collegamento ritornando gli elementi da visualizzare.

## Esoneri
Chi ha accesso al tempo aggiuntivo è esonerato dalla ricerca di un filmato.

## PUNTEGGI
- Visualizzazione 2.5
- Ricerca 2.5
- Recensioni 3 
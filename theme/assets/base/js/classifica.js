window.addEventListener('load', getClassificaSerieA);

function getClassificaSerieA() {
    // URL dell'API per ottenere la classifica di Serie A
    const url = 'https://api.example.com/seriea/classifica';

    // Effettua la richiesta GET all'API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // I dati sono stati ottenuti con successo
            // Puoi elaborare i dati qui o passarli ad altre funzioni per l'inserimento nella struttura HTML
            console.log(data);
            inserisciDatiNellaStruttura(data);
        })
        .catch(error => {
            // Si è verificato un errore durante la richiesta
            console.error('Si è verificato un errore:', error);
        });
}

function inserisciDatiNellaStruttura(data) {
    // Assumi che ci sia un elemento HTML con l'id "accordion1"
    const container = document.getElementById('accordion1');

    // Svuota il container
    container.innerHTML = '';

    // Itera sui dati della classifica e inserisci gli articoli nella struttura HTML
    data.forEach((squadra, index) => {
        const articolo = document.createElement('article');
        articolo.classList.add('card', 'card-custom');

        const posizione = document.createElement('div');
        posizione.classList.add('card-standing-position', 'card-standing-counter');
        posizione.textContent = squadra.posizione;
        articolo.appendChild(posizione);

        const intestazione = document.createElement('div');
        intestazione.classList.add('card-header');
        intestazione.setAttribute('id', `accordion1Heading${index}`);
        intestazione.setAttribute('role', 'tab');
        articolo.appendChild(intestazione);

        const squadraItem = document.createElement('div');
        squadraItem.classList.add('card-standing-team-item');
        intestazione.appendChild(squadraItem);

        const squadraElement = document.createElement('div');
        squadraElement.classList.add('card-standing-team');
        squadraItem.appendChild(squadraElement);

        const figuraSquadra = document.createElement('div');
        figuraSquadra.classList.add('card-standing-team-figure');
        const immagineSquadra = document.createElement('img');
        immagineSquadra.src = squadra.logo;
        immagineSquadra.alt = squadra.nome;
        immagineSquadra.width = 27;
        immagineSquadra.height = 37;
        figuraSquadra.appendChild(immagineSquadra);
        squadraElement.appendChild(figuraSquadra);

        const titoloSquadra = document.createElement('div');
        titoloSquadra.classList.add('card-standing-team-title');
        const nomeSquadra = document.createElement('div');
        nomeSquadra.classList.add('card-standing-team-name');
        nomeSquadra.textContent = squadra.nome;
        titoloSquadra.appendChild(nomeSquadra);
        squadraElement.appendChild(titoloSquadra);

        const numeriSquadra = document.createElement('div');
        numeriSquadra.classList.add('card-standing-caption-aside');
        squadraItem.appendChild(numeriSquadra);

        const numeri = ['partiteGiocate', 'vittorie', 'sconfitte', 'punti', 'differenzaReti', 'golFatti', 'golSubiti', 'differenzaReti'];
        numeri.forEach(numero => {
            const numeroElement = document.createElement('div');
            numeroElement.classList.add('card-standing-number');
            numeroElement.textContent = squadra[numero];
            numeriSquadra.appendChild(numeroElement);
        });
        container.appendChild(articolo);
    });
}

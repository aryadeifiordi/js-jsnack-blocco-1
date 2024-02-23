console.log('work')

const invitati = ["arya1", "arya2", "arya3", "arya4", "arya5"];

// Chiede all'utente il suo nome
const nomeUtente = prompt("Inserisci il tuo nome:");

// Controlla se il nome dell'utente è presente nell'array degli invitati
const invitato = invitati.includes(nomeUtente);

// Comunica all'utente se può partecipare alla festa o no
if (invitato) {
    alert("Congratulazioni, sei invitato alla festa del Grande Gatsby!");
} else {
    alert("Mi dispiace, non sei invitato alla festa del Grande Gatsby.");
}
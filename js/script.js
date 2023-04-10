//form elements
const voornaam = document.getElementById('voornaam');
const naam = document.getElementById('naam');
const gebruikersnaam = document.getElementById('gebruikersnaam');
const email = document.getElementById('email');
const wachtwoord = document.getElementById('wachtwoord');
const wachtwoordHerhaal = document.getElementById('wachtwoordHerhaal');
const land = document.getElementById('land');
const provincie = document.getElementById('provincie');
const postcode = document.getElementById('postcode');
const nieuwsbrief = document.getElementById('nieuwsbrief');
const voorwaarden = document.getElementById('voorwaarden');
const bankapp = document.getElementById('bankapp');
const overschrijving = document.getElementById('overschrijving');
const visa = document.getElementById('visa');
const paypal = document.getElementById('paypal');
const adres = document.getElementById('adres');

//other elements
const form = document.getElementById('form');
const error = document.getElementById('error');
const succes = document.getElementById('succes');
const betalingswijze = document.getElementById('betalingswijze');
const errortext = document.getElementById('errortext');
const succestext = document.getElementById('succestext');
const betalingswijzetext = document.getElementById('betalingswijzetext');

//hide all alerts
error.style.visibility = "hidden";
succes.style.visibility = "hidden";
betalingswijze.style.visibility = "hidden";

//events
form.addEventListener('submit', (e) =>
{
    e.preventDefault();

    //declare needed variables
    let errors = [];

    //fill variables
    errors = validateForm();

    //alert logic
    if(errors.length > 0){
        errortext.innerText = errors.join('\n');
        error.style.visibility = "visible";
    }else{
        error.style.visibility = "hidden";
        succes.style.visibility = "visible";
        betalingswijze.style.visibility = "visible";
        succestext.innerText="Aww yeah, je werd geregistreerd.";
    }
})

//methods
function validateForm(){
    let errors = [];

    //checking for empty fields
    if(checkEmptyField(voornaam, '#') != null){
        errors.push(checkEmptyField(voornaam, 'Het veld voornaam is vereist.'));
    }

    if(checkEmptyField(naam, '#') != null){
        errors.push(checkEmptyField(naam, 'Het veld naam is vereist.'));
    }

    if(checkEmptyField(gebruikersnaam, '#') != null){
        errors.push(checkEmptyField(gebruikersnaam, 'Het veld gebruikersnaam is vereist.'));
    }

    if(checkEmptyField(adres, '#') != null){
        errors.push(checkEmptyField(adres, 'Het veld adres is vereist.'));
    }
    
    return errors;
}

function checkEmptyField(veld, melding){
    return veld.value === '' || veld.value === null ? melding : null;
}

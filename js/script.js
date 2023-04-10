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
const betaling = document.getElementsByName('betalingRadios');
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

    //alerts logic
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
    else if( gebruikersnaam.value.charAt(0) == '.' || gebruikersnaam.value.charAt(0) == '-'){
        //gebruikersnaam eerste karakter check
        errors.push('Gebruikersnaam mag "-" en "." niet als eerste karakter hebben.')
    }

    if(checkEmptyField(adres, '#') != null){
        errors.push(checkEmptyField(adres, 'Adres is vereist.'));
    }

    if(checkEmptyField(land, '#') != null){
        errors.push(checkEmptyField(land, 'Land is vereist.'));
    }

    if(checkEmptyField(provincie, '#') != null){
        errors.push(checkEmptyField(provincie, 'Provincie is vereist.'));
    }

    //checking email
    if(!validateEmail(email)){
        errors.push('E-mailadres is niet correct.');
    }

    //checking password fields
    if(checkEmptyField(wachtwoord, '#') != null){
        errors.push(checkEmptyField(wachtwoord, 'Het veld wachtwoord is vereist.'));
    }
    else if(wachtwoord.value.length <= 7 ) {
        errors.push('Wachtwoord moet minstens 8 karakters zijn.');
    }

    if(checkEmptyField(wachtwoordHerhaal, '#') != null){
        errors.push(checkEmptyField(wachtwoordHerhaal, 'Het veld herhaal wachtwoord is vereist.'));
    }
    else if(wachtwoordHerhaal.value != wachtwoord.value) {
        errors.push('Je wachtwoorden komen niet overeen.');
    }

    //checking payment method
    validatePayment(betalingswijzetext);
    
    return errors;
}

function checkEmptyField(veld, melding){
    return veld.value === '' || veld.value === null ? melding : null;
}

function validateEmail(email){
    // https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return email.value.match(validRegex) ? true : false;
}

function validatePayment(veld){
    //https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/

    for(i = 0; i < betaling.length; i++) {
        if(betaling[i].checked)
        veld.innerHTML
                = 'Je betalingswijze is ' + betaling[i].id + '.';
    }
}

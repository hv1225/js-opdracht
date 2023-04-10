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
        succestext.innerText="Aww yeah, je werd geregistreerd.";
    }
})

//methods
function validateForm(){
    let errors = [];

    if (validateVoornaam() != null){
        errors.push(validateVoornaam());
    }

    return errors;
}

function checkEmptyField(){

}

function validateEmail(){
    let isValid;

    return isValid;
}

function validateVoornaam(){
    return voornaam.value === '' || voornaam.value === null ? 'Het veld voornaam is vereist.' : null;
}

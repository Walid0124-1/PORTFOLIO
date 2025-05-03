
const acceuil = document.getElementById('acceuil');

const formation = document.getElementById('formation');
console.log("la botton est",formation)

const formation2 = document.getElementById('formation2');
console.log("la div est",formation2)

const Competence = document.getElementById('Competence');

const competence2 = document.getElementById('competence2');

const Projet = document.getElementById('Projet');

const projet2 = document.getElementById('projet2');

const Langues = document.getElementById('Langues');

const langages2 = document.getElementById('langages2');

const Contactes = document.getElementById('Contactes');

const contacts2 = document.getElementById('contacts2');

const x1 = document.getElementById('x1');

const x2 = document.getElementById('x2');

const x3 = document.getElementById('x3');

const x4 = document.getElementById('x4');

const x5 = document.getElementById('x5');

const togle = document.getElementById('togle');

const buttons = document.getElementById('buttons');

const acceuil1 = document.getElementById('acceuil1');

const Retour = document.getElementById('Retour');

formation.addEventListener('click',()=>{
    formation2.style.display="flex"
    acceuil.style.display="none"
})

Competence.addEventListener('click',()=>{
    competence2.style.display="flex"
    acceuil.style.display="none"
})

Projet.addEventListener('click',()=>{
    projet2.style.display="flex"
    acceuil.style.display="none"
})

Langues.addEventListener('click',()=>{
    langages2.style.display="flex"
    acceuil.style.display="none"
})

Contactes.addEventListener('click',()=>{
    contacts2.style.display="flex"
    acceuil.style.display="none"
})

x1.addEventListener('click',()=>{
    formation2.style.display="none"
    acceuil.style.display="flex"
})

x2.addEventListener('click',()=>{
    competence2.style.display="none"
    acceuil.style.display="flex"
})

x3.addEventListener('click',()=>{
    projet2.style.display="none"
    acceuil.style.display="flex"
})

x4.addEventListener('click',()=>{
    langages2.style.display="none"
    acceuil.style.display="flex"
})

x5.addEventListener('click',()=>{
    contacts2.style.display="none"
    acceuil.style.display="flex"
})

togle.addEventListener('click',()=>{
    togle.style.display="none"
    acceuil1.style.display="none"
    buttons.style.display="flex"
    Retour.style.display="flex"
})

Retour.addEventListener('click',()=>{
    acceuil1.style.display="flex"
    togle.style.display="flex"
    buttons.style.display="none"
    Retour.style.display="none"
})
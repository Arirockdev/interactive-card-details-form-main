// //  Captura del boton
const btn = document.querySelector('#btn');

// //  Captura de los inputs

const inputName = document.querySelector('#input-name');
const inputNumber = document.querySelector('#input-number');
const inputMonth = document.querySelector('#input-month');
const inputYear = document.querySelector('#input-year');
const inputCode = document.querySelector('#input-code');


// // parrafos de alerta (que van debajo de los inputs)
const pName = document.querySelector('#p-name');
const pNumber = document.querySelector('#p-number');
const pDate = document.querySelector('#p-date');
const pCode = document.querySelector('#p-code');



// // funcion que valida que todos lo inputs tengan los datos correspondientes

const inputValidation = (nameInput, numberInput, monthInput, yearInput, codeInput) => {

  
  if(nameInput === ''){    

    inputName.classList.add('alert-border');
    pName.classList.remove('hidden');    

  }else {

    inputName.classList.remove('alert-border');
    pName.classList.add('hidden');

  };

  if(numberInput === ''){    

    inputNumber.classList.add('alert-border');
    pNumber.classList.remove('hidden');

  }else {

    inputNumber.classList.remove('alert-border');
    pNumber.classList.add('hidden');

  }; 


  if(monthInput === '' && yearInput === ''){

    inputMonth.classList.add('alert-border');
    inputYear.classList.add('alert-border');
    pDate.classList.remove('hidden');

  }else if(monthInput === '' || yearInput === ''){

    inputMonth.classList.add('alert-border');
    inputYear.classList.add('alert-border');
    pDate.classList.remove('hidden');

  }else {

    inputMonth.classList.remove('alert-border');
    inputYear.classList.remove('alert-border');
    pDate.classList.add('hidden');

  };

  if(codeInput === ''){

    inputCode.classList.add('alert-border');
    pCode.classList.remove('hidden');

  }else {
    inputCode.classList.remove('alert-border');
    pCode.classList.add('hidden');

  };
    

  printInDomName();
  printInDomExpireDateMonth();
  printInDomExpireDateYear();
  printInDomCode();
};





// todo: esta es la parte frontal de la tarjeta


// // frente de la tarjeta
const data = document.querySelector('.data');
// // elementos de nombre
let nameCard = document.createElement('p');



// // funcion que imprime el nombre del titular 
function printInDomName(){
  
  if(inputName.value === ''){
    nameCard.innerHTML = `<p">Jane Appleseed</p>`;
    data.insertAdjacentElement('afterbegin', nameCard);
    
  }else {
    nameCard.textContent = `${inputName.value}`;
    inputName.classList.remove('alert-border');
    pName.classList.add('hidden');
  };
    
};
printInDomName();



// // elemento de la fecha de vencimiento
let dateExp = document.createElement('p');

// // funcion que corrobora la fecha de vencimiento

function printInDomExpireDateMonth (){
  
  let month = inputMonth.value;

  if(month === ''){
    dateExp.innerHTML = `<p>00/00</p>`;
    data.insertAdjacentElement('beforeend', dateExp); 
    
  }else {
    inputMonth.classList.remove('alert-border');
    pDate.classList.add('hidden');    
    month < 10 
    ? dateExp.innerHTML = `<p>0${month}/00</p>`
    : dateExp.innerHTML = `<p>${month}/00</p>`
    
  };
  errorNumberMont();
  validateMonthDate();
   
};
printInDomExpireDateMonth();
 

// // funcion que valida que el mes sea un numero y no una letra.

function errorNumberMont (){
  let month = Number(inputMonth.value);
    if(month !== Number(inputMonth.value)){
      pDate.textContent = 'Must be a number';
      pDate.classList.remove('hidden');
      inputMonth.classList.add('alert-border');
      dateExp.innerHTML = `<p>00/00</p>`;
    }; 

};


// // funcion que valida que el mes no sea mayor a 12 o menor a 1;
function validateMonthDate (){
  let month = Number(inputMonth.value);
    if(month > 12){
      pDate.textContent = 'Big Number';
      pDate.classList.remove('hidden');
      inputMonth.classList.add('alert-border');
      dateExp.innerHTML = `<p>00/00</p>`;
    }else if(month < 1){
     
      dateExp.innerHTML = `<p>00/00</p>`;
    };
      

};


// // funcion que imprime en la tarjeta el año

function printInDomExpireDateYear(){
  let year = inputYear.value;
  
  if(year === ''){
    dateExp.innerHTML = `<p>00/00</p>`;
    data.insertAdjacentElement('beforeend', dateExp);
    
  }else {
    inputYear.classList.remove('alert-border');
    pDate.classList.add('hidden');
    year < 10 
      ? dateExp.innerHTML = `<p>${inputMonth.value}/0${year}</p>`
      : dateExp.innerHTML = `<p>${inputMonth.value}/${year}</p>`
    
  };

  errorNumberYear();

};
printInDomExpireDateYear();


// //  funcion que valida que el año se un numero
function errorNumberYear (){
  let year = Number(inputYear.value);
    if(year !== Number(inputYear.value)){
      pDate.textContent = 'Must be a number';
      pDate.classList.remove('hidden');
      inputYear.classList.add('alert-border');
      dateExp.innerHTML = `<p>${inputMonth.value}/00</p>`;
    };
};





// todo: esta es la parte de atra de la tarjeta que tiene el codigo de seguridad cvc

const cardBack = document.querySelector('.code');
const securityCode = document.querySelector('#sec-code');

function printInDomCode (){
    let codeI = inputCode.value;

    if(codeI === ''){
      securityCode.textContent = '000';
    }else{
      securityCode.textContent = `${codeI}`; 
      pCode.classList.add('hidden');
      inputCode.classList.remove('alert-border');
    };
    
    errorNumberCode();
};


// // valida el tipo de dato que tiene que tener el codigo

function errorNumberCode (){
  let codeI = Number(inputCode.value);

  if(codeI !== Number(inputCode.value)){
    securityCode.textContent = '000';
    pCode.textContent = 'Must be a number';
    pCode.classList.remove('hidden');
    inputCode.classList.add('alert-border');
  };
};
 

// todo: apartir de acq numero de la tarjeta

const number = document.querySelector('#number');


function printInDomNumber ( ){
  
  let cardNumber = inputNumber.value;
  
  if(cardNumber === ''){
    number.textContent = '0000 0000 0000 0000';
  
  }else{
  
    let uno = cardNumber.slice(0, 4);
    let dos = cardNumber.slice(4, 8);
    let tres = cardNumber.slice(8, 12);
    let cuatro = cardNumber.slice(12, cardNumber.length);
  
    number.textContent = `${uno} ${dos} ${tres} ${cuatro}`
  
  };
  
  validateNumberCard();
};
printInDomNumber();
    
function validateNumberCard () {
  let cardNumber = Number(inputNumber.value);

  if(cardNumber !== Number(inputNumber.value)){
    number.textContent = '0000 0000 0000 0000';
    pNumber.textContent = 'Wrong, must be a number';
    pNumber.classList.remove('hidden');
    inputNumber.classList.add('alert-border');
  }else {
    pNumber.classList.add('hidden');
    inputNumber.classList.remove('alert-border');
  };

}; 
  
  
  


inputName.addEventListener('keyup',(e) => {
  printInDomName();
});

inputMonth.addEventListener('keyup', (e) => {  
  printInDomExpireDateMonth();
});


inputYear.addEventListener('keyup', (e) => {
  printInDomExpireDateYear();
});

inputCode.addEventListener('keyup', (e) => {
  printInDomCode();
});

inputNumber.addEventListener('keyup', (e) => {
  printInDomNumber();
});



const completeForm = () => {
  let nameValue, numberValue, monthValue, yearValue, codeValue;

  nameValue = inputName.value;
  numberValue = inputNumber.value;
  monthValue = inputMonth.value;
  yearValue = inputYear.value;
  codeValue = inputCode.value;

  if(nameValue !== '' && numberValue !== '' && monthValue !== '' && yearValue !== '' && codeValue !== ''){
  
    complet.classList.toggle('hidden');
    form.classList.toggle('hidden'); 
  }else {

    inputValidation(inputName.value, inputNumber.value, inputMonth.value, inputYear.value, inputCode.value);
    
  };


};



const complet = document.querySelector('.complete');
const form = document.querySelector('.form');

btn.addEventListener('click', (e) => {
  e.preventDefault();    
  completeForm();


});


const resetCard = () => {
  nameCard.innerHTML = `<p>Jane Appleseed</p>`;
  dateExp.innerHTML = `<p>00/00</p>`;

  number.textContent = '0000 0000 0000 0000';
  securityCode.textContent = '000';

};

const btnContinue = document.querySelector('#btn-continue');

btnContinue.addEventListener('click', (e) => {
  e.preventDefault();
  complet.classList.toggle('hidden');
  form.classList.toggle('hidden');
  
  form.reset();
  
  resetCard();
  
});



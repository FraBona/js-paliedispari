function palindroma(str){
  let result = str.split("")
                 .reverse()
                 .join("");
  console.log(result);

  if(str == result){
    console.log('é una parola palindroma')
  }
  else{
    console.log('non é  una parola palindroma');
  }
}


let stringa = prompt('Inserisci una parola');
 
palindroma(stringa);


/* PARI O DISPARI */
function computer(n){
   n = Math.floor(Math.random() * 5) + 1;

  return n;
}

function vincitore(n1, n2, utente){
  let result = n1 + n2;
  console.log(result);

  if((result % 2) == 0){
    if(utente == 'pari'){
      console.log('hai vinto');
    }
    else if(utente == 'dispari'){
      console.log('hai perso');
    }
  }
  else{
    if(utente == 'dispari'){
      console.log('hai vinto');
    }
    else if(utente == 'pari'){
      console.log('hai perso');
    }
  }
}
let ncomputer = computer();
console.log(ncomputer);
let user = prompt('scegli tra pari o dispari');
let number = parseInt(prompt('scegli un numero tra 1 e 5'));
console.log(number);

vincitore(ncomputer, number, user);
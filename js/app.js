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
   n = Math.floor(Math.random() * 5);

  return n;
}
let ncomputer = computer(n);
console.log(ncomputer);
let user = prompt('scegli tra pari o dispari');
let number = prompt('scegli un numero tra 1 e 5');
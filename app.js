let ism = prompt("Ismingizni kiriting");

let birinchiHarf = ism.charAt().toUpperCase;
let davomi = ism.slice(1).toUpperCase();
let result = birinchiHarf + davomi;

alert("Salom, ${result}");

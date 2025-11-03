function cifraAtbash(texto) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];

    if (/[A-Z]/.test(char)) {
      const novoCodigo = 90 - (char.charCodeAt(0) - 65);
      resultado += String.fromCharCode(novoCodigo);
    } 
    else if (/[a-z]/.test(char)) {
      const novoCodigo = 122 - (char.charCodeAt(0) - 97);
      resultado += String.fromCharCode(novoCodigo);
    } 
    else {
      resultado += char;
    }
  }

  return resultado;
}
console.log(cifraAtbash("Atbash é simple!"));

function cifraCesar(texto, deslocamento) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];

    if (/[A-Z]/.test(char)) {
      const novoCodigo = ((char.charCodeAt(0) - 65 + deslocamento) % 26 + 26) % 26 + 65;
      resultado += String.fromCharCode(novoCodigo);
    } 
    else if (/[a-z]/.test(char)) {
      const novoCodigo = ((char.charCodeAt(0) - 97 + deslocamento) % 26 + 26) % 26 + 97;
      resultado += String.fromCharCode(novoCodigo);
    } 
    else {
      resultado += char;
    }
  }

  return resultado;
}
console.log(cifraCesar("Cifra César!", 3));

function cifraVigenere(texto, chave) {
  let resultado = "";
  let j = 0;
  const chaveFiltrada = chave.replace(/[^a-zA-Z]/g, "").toLowerCase();

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];

    if (/[A-Z]/.test(char)) {
      const desloc = chaveFiltrada.charCodeAt(j % chaveFiltrada.length) - 97;
      const novoCodigo = ((char.charCodeAt(0) - 65 + desloc) % 26) + 65;
      resultado += String.fromCharCode(novoCodigo);
      j++;
    } 
    else if (/[a-z]/.test(char)) {
      const desloc = chaveFiltrada.charCodeAt(j % chaveFiltrada.length) - 97;
      const novoCodigo = ((char.charCodeAt(0) - 97 + desloc) % 26) + 97;
      resultado += String.fromCharCode(novoCodigo);
      j++;
    } 
    else {
      resultado += char;
    }
  }

  return resultado;
}
console.log(cifraVigenere("Cifra Vigenere!", "Chave"));

function gerarChavesRSA() {
  const p = 61;
  const q = 53;
  const n = p * q;
  const phi = (p - 1) * (q - 1);
  const e = 17; 
  const d = 2753;
  return { e, d, n };
}

function cifrarRSA(mensagem, e, n) {
  return mensagem.map(m => Math.pow(m, e) % n);
}

function decifrarRSA(cifrado, d, n) {
  return cifrado.map(c => Math.pow(c, d) % n);
}
const { e, d, n } = gerarChavesRSA();

const msg = "HI".split("").map(c => c.charCodeAt(0));

const cifrado = cifrarRSA(msg, e, n);
console.log("Cifrado:", cifrado);

const decifrado = decifrarRSA(cifrado, d, n).map(c => String.fromCharCode(c)).join("");
console.log("Decifrado:", decifrado);

const nome = prompt("Digite o seu nome:");

const tituloDashboardElement = document.getElementById("titulo-dashboard");
const spanBottomInfoElement = document.getElementById("span-bottom-info");
const cardElement = document.getElementById("card");
const signalElement = document.getElementById("signal");
const premiumElement = document.getElementById("premium")

tituloDashboardElement.textContent = nome;
spanBottomInfoElement.textContent = nome;

if (nome === "Pascax") {
    cardElement.style.backgroundColor = "#000"; 
    signalElement.src = "./assets/wireless-signal-1119306_1280.webp"; 
    spanBottomInfoElement.style.color = "#fff"; 
    premiumElement.style.display = "";
}

const Saldo = prompt("Digite o novo valor do saldo:");
const saldoElement = document.getElementById("saldo");

const novoSaldoNumero = parseFloat(Saldo.replace("R$", ""));

if (novoSaldoNumero) {
    saldoElement.textContent = `R$${novoSaldoNumero.toFixed(2)}`;
} else {
    saldoElement.textContent = "Valor inválido";
}

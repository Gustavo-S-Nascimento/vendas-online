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

let saldo = prompt("Digite o Valor");

let recebe = parseFloat(saldo.replace("R$", ""))


if (recebe !== null && recebe !== "") {
    let saldoCliente = document.querySelector("#saldo");
    saldoCliente.innerHTML = `R$ ${saldo}`
}

function atualizarSaldo() {
    document.querySelector("#saldo").textContent = `R$ ${saldo.toFixed("2")}`;
    saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

const historico = [];

function registrarTransacao(item, valor) {
    const data = new Date();
    const dataFormatada = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    const transacao = {
        data: dataFormatada,
        item: item,
        valor: valor
    };
    historico.push(transacao);

    // Atualize a lista de histórico no HTML
    const listaHistorico = document.getElementById("lista-historico");
    const li = document.createElement("li");
    li.textContent = ` ${transacao.item} - R$ ${transacao.valor.toFixed(2)}`; // ${transacao.data}:
    listaHistorico.appendChild(li);
}

function gastoBoneco() {
    const valorBoneco = 150;
    if (saldo >= valorBoneco) {
        saldo -= valorBoneco;
        atualizarSaldo();
        registrarTransacao("Boneco", valorBoneco);
    } else if (nome === "Pascax") {
        document.querySelector("#ValorBoneco").style.color = "#DAA520";
        saldo -= valorBoneco;
        atualizarSaldo();
        registrarTransacao("Boneco", valorBoneco);
    }
    else {
        alert("Acabou o money!");
        document.querySelector("#ValorBoneco").style.color = "red";
        document.querySelector("#overlayBoneco").textContent = "Valor Insuficiente!";
        document.querySelector("#overlayBoneco").classList.add("overlay-red");
    }
}
function gastoNotebook() {
    const valorNotebook = 6000;
    if (saldo >= valorNotebook) {
        saldo -= valorNotebook;
        atualizarSaldo();
        registrarTransacao("Notebook", valorNotebook);
    } else if (nome === "Pascax") {
        document.querySelector("#ValorNotebook").style.color = "#DAA520";
        saldo -= valorNotebook;
        atualizarSaldo();
        registrarTransacao("Notebook", valorNotebook);
    }
    else {
        document.querySelector("#ValorNotebook").style.color = "red";
        document.querySelector("#overlayNotebook").textContent = "Valor Insuficiente!";
        document.querySelector("#overlayNotebook").classList.add("overlay-red");
        alert("Acabou o money!");
    }
}
function gastoMonitor() {
    const valorMonitor = 750;
    if (saldo >= valorMonitor) {
        saldo -= valorMonitor;
        atualizarSaldo();
        registrarTransacao("Monitor", valorMonitor);
    } else if (nome === "Pascax") {
        document.querySelector("#ValorMonitor").style.color = "#DAA520";
        saldo -= valorMonitor;
        atualizarSaldo();
        registrarTransacao("Monitor", valorMonitor);
    }
    else {
        document.querySelector("#ValorMonitor").style.color = "red";
        document.querySelector("#overlayMonitor").textContent = "Valor Insuficiente!";
        document.querySelector("#overlayMonitor").classList.add("overlay-red");
        alert("Acabou o money!");
    }
}

document.getElementById("boneco").addEventListener("click", gastoBoneco);
document.getElementById("notebook").addEventListener("click", gastoNotebook);
document.getElementById("monitor").addEventListener("click", gastoMonitor);

atualizarSaldo();
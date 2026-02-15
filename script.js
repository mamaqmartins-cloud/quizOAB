const questoes = [
    {
        caso: "Empregado teve sentença desfavorável na Vara do Trabalho e quer recorrer ao TRT.",
        correta: "Recurso Ordinário",
        opcoes: [
            "Agravo de Petição",
            "Recurso Ordinário",
            "Mandado de Segurança",
            "Embargos à Execução"
        ],
        justificativa: "Da sentença cabe Recurso Ordinário ao TRT."
    },

    {
        caso: "Na fase de execução, juiz rejeitou impugnação e parte quer recorrer.",
        correta: "Agravo de Petição",
        opcoes: [
            "Recurso Ordinário",
            "Embargos de Declaração",
            "Agravo de Petição",
            "Recurso de Revista"
        ],
        justificativa: "Na execução o recurso cabível é Agravo de Petição."
    }
];

let atual = 0;

function carregar() {
    const q = questoes[atual];

    document.getElementById("caso").innerHTML = "<p><strong>Caso:</strong> " + q.caso + "</p>";

    const divOpcoes = document.getElementById("opcoes");
    divOpcoes.innerHTML = "";

    q.opcoes.forEach(op => {
        const btn = document.createElement("button");
        btn.innerText = op;
        btn.onclick = () => responder(op);
        divOpcoes.appendChild(btn);
    });

    document.getElementById("resultado").innerHTML = "";
}

function responder(escolha) {
    const q = questoes[atual];

    if (escolha === q.correta) {
        document.getElementById("resultado").innerHTML =
            "✅ Correto!<br>" + q.justificativa;
    } else {
        document.getElementById("resultado").innerHTML =
            "❌ Errado.<br>Resposta correta: " + q.correta +
            "<br>" + q.justificativa;
    }
}

function proxima() {
    atual++;
    if (atual >= questoes.length) atual = 0;
    carregar();
}

carregar();

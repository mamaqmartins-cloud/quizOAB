// ================== QUESTÕES (80) ==================

let questoes = [

/* === PACOTE 1 (40) === */

{
caso:"Sentença desfavorável proferida pela Vara do Trabalho.",
correta:"Recurso Ordinário",
opcoes:["Recurso Ordinário","Agravo de Petição","Embargos de Declaração","Mandado de Segurança"],
justificativa:"Da sentença cabe Recurso Ordinário ao TRT."
},
{
caso:"Decisão na fase de execução indeferindo pedido do exequente.",
correta:"Agravo de Petição",
opcoes:["RO","Agravo de Petição","RR","ED"],
justificativa:"Na execução o recurso cabível é Agravo de Petição."
},
{
caso:"Sentença omissa quanto a pedido formulado.",
correta:"Embargos de Declaração",
opcoes:["RO","AP","Embargos de Declaração","MS"],
justificativa:"Embargos de Declaração servem para sanar omissão."
},
{
caso:"Empregado pretende ajuizar reclamação trabalhista inicial.",
correta:"Reclamação Trabalhista",
opcoes:["Contestação","Reclamação Trabalhista","Réplica","Razões Finais"],
justificativa:"A peça inicial é a Reclamação Trabalhista."
},
{
caso:"Empresa foi citada e precisa se defender.",
correta:"Contestação",
opcoes:["Contestação","Réplica","RO","AP"],
justificativa:"A defesa do réu é feita por Contestação."
},
{
caso:"Após contestação, reclamante deve se manifestar.",
correta:"Réplica",
opcoes:["Réplica","RO","ED","AP"],
justificativa:"Após a contestação cabe réplica."
},
{
caso:"Encerrada instrução e juiz abre prazo para manifestação final.",
correta:"Razões Finais",
opcoes:["Razões Finais","RO","Contestação","Réplica"],
justificativa:"Após instrução apresentam-se razões finais."
},
{
caso:"Decisão interlocutória irrecorrível causa prejuízo imediato.",
correta:"Mandado de Segurança",
opcoes:["RO","AP","Mandado de Segurança","RR"],
justificativa:"MS cabe contra decisão interlocutória sem recurso próprio."
},
{
caso:"TRT negou seguimento ao Recurso de Revista.",
correta:"Agravo de Instrumento",
opcoes:["Agravo Interno","Agravo de Instrumento","RO","ED"],
justificativa:"Negado seguimento ao RR, cabe Agravo de Instrumento."
},
{
caso:"Decisão monocrática de relator.",
correta:"Agravo Interno",
opcoes:["Agravo Interno","AI","RO","AP"],
justificativa:"Contra decisão monocrática cabe Agravo Interno."
},

/* === PACOTE 2 (40) === */

{
caso:"Parte quer esclarecer contradição na sentença.",
correta:"Embargos de Declaração",
opcoes:["RO","ED","AP","RR"],
justificativa:"Contradição é sanada por ED."
},
{
caso:"Juiz indeferiu liminarmente a inicial.",
correta:"Recurso Ordinário",
opcoes:["RO","AP","ED","RR"],
justificativa:"Indeferimento da inicial é sentença."
},
{
caso:"Executado discorda do índice de correção monetária.",
correta:"Agravo de Petição",
opcoes:["RO","AP","ED","RR"],
justificativa:"Discussão em execução gera AP."
},
{
caso:"Reclamante quer desistir do RO.",
correta:"Petição de Desistência",
opcoes:["Desistência","RO","ED","AP"],
justificativa:"Recurso pode ser desistido por petição."
},
{
caso:"Parte quer corrigir erro de soma.",
correta:"Embargos de Declaração",
opcoes:["ED","RO","AP","RR"],
justificativa:"Erro material."
},
{
caso:"Executado discute multa da execução.",
correta:"Agravo de Petição",
opcoes:["RO","AP","ED","RR"],
justificativa:"Multa é matéria executória."
},
{
caso:"Juiz rejeitou exceção de incompetência.",
correta:"Mandado de Segurança",
opcoes:["MS","RO","ED","AP"],
justificativa:"Decisão interlocutória sem recurso próprio."
},
{
caso:"Reclamante quer corrigir erro no valor do pedido.",
correta:"Aditamento da Inicial",
opcoes:["Aditamento","RO","ED","AP"],
justificativa:"Valor do pedido exige aditamento."
},
{
caso:"Empresa quer recorrer de decisão que rejeitou embargos.",
correta:"Agravo de Petição",
opcoes:["RO","AP","ED","RR"],
justificativa:"Rejeição de embargos é execução."
},
{
caso:"TRT manteve condenação integral.",
correta:"Recurso de Revista",
opcoes:["RR","RO","ED","AP"],
justificativa:"Do TRT cabe RR."
}

];

// ================== EMBARALHAR ==================

function shuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
}

shuffle(questoes);

// ================== ESTATÍSTICA ==================

let acertos = Number(localStorage.getItem("acertos")) || 0;
let erros = Number(localStorage.getItem("erros")) || 0;

let atual = 0;

// ================== FUNÇÕES ==================

function carregar() {
const q = questoes[atual];

document.getElementById("status").innerHTML =
`Questão ${atual + 1} / ${questoes.length}`;

document.getElementById("placar").innerHTML =
`✅ Acertos: ${acertos} | ❌ Erros: ${erros}`;

document.getElementById("caso").innerHTML =
"<p><strong>Caso:</strong> " + q.caso + "</p>";

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
acertos++;
localStorage.setItem("acertos", acertos);
document.getElementById("resultado").innerHTML =
"✅ Correto!<br>" + q.justificativa;
} else {
erros++;
localStorage.setItem("erros", erros);
document.getElementById("resultado").innerHTML =
"❌ Errado.<br>Resposta correta: " + q.correta +
"<br>" + q.justificativa;
}

carregar();
}

function proxima() {
atual++;
if (atual >= questoes.length) atual = 0;
carregar();
}

function resetar() {
if (confirm("Resetar estatísticas?")) {
acertos = 0;
erros = 0;
localStorage.clear();
carregar();
}
}

carregar();

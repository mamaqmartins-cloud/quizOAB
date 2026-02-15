const questoes = [

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
caso:"Juiz extinguiu execução por prescrição intercorrente.",
correta:"Agravo de Petição",
opcoes:["RO","Agravo de Petição","ED","RR"],
justificativa:"Na execução cabe Agravo de Petição."
},

{
caso:"TRT negou seguimento ao Recurso de Revista.",
correta:"Agravo de Instrumento",
opcoes:["Agravo Interno","Agravo de Instrumento","RO","ED"],
justificativa:"Negado seguimento ao RR, cabe Agravo de Instrumento."
},

{
caso:"Decisão monocrática de relator no TRT.",
correta:"Agravo Interno",
opcoes:["Agravo Interno","AI","RO","AP"],
justificativa:"Contra decisão monocrática cabe Agravo Interno."
},

{
caso:"Erro material na sentença.",
correta:"Embargos de Declaração",
opcoes:["RO","ED","AP","RR"],
justificativa:"ED também corrigem erro material."
},

{
caso:"Empregador quer rescindir contrato depositando valores.",
correta:"Ação de Consignação em Pagamento",
opcoes:["Consignação","Inicial","Contestação","RO"],
justificativa:"Usa-se consignação para depósito judicial."
},

{
caso:"Empregado estável acusado de falta grave.",
correta:"Inquérito para Apuração de Falta Grave",
opcoes:["Inquérito","RO","Inicial","MS"],
justificativa:"Empregado estável exige inquérito judicial."
},

{
caso:"Pretende desconstituir decisão transitada em julgado.",
correta:"Ação Rescisória",
opcoes:["RO","RR","Ação Rescisória","ED"],
justificativa:"Decisão definitiva só é atacada por ação rescisória."
},

{
caso:"Empresa impugna cálculos apresentados.",
correta:"Impugnação aos Cálculos",
opcoes:["Embargos","Impugnação aos Cálculos","AP","RO"],
justificativa:"Cálculos são atacados por impugnação."
},

{
caso:"Executado garante juízo e quer se defender.",
correta:"Embargos à Execução",
opcoes:["Embargos à Execução","AP","RO","ED"],
justificativa:"Garantido o juízo, cabem embargos."
},

{
caso:"TRT julgou RO desfavoravelmente.",
correta:"Recurso de Revista",
opcoes:["RR","RO","AP","ED"],
justificativa:"Do TRT cabe RR ao TST."
},

{
caso:"Omissão em acórdão do TRT.",
correta:"Embargos de Declaração",
opcoes:["RR","ED","AP","RO"],
justificativa:"Omissão em acórdão se corrige por ED."
},

{
caso:"Decisão interlocutória em execução.",
correta:"Agravo de Petição",
opcoes:["RO","AP","RR","ED"],
justificativa:"Na execução cabe AP."
},

{
caso:"Reclamante quer desistir da ação antes da defesa.",
correta:"Petição de Desistência",
opcoes:["Petição de Desistência","RO","Réplica","ED"],
justificativa:"Antes da contestação pode desistir livremente."
},

{
caso:"Erro de cálculo no acórdão.",
correta:"Embargos de Declaração",
opcoes:["RR","ED","AP","RO"],
justificativa:"Erro material se corrige por ED."
},

{
caso:"Parte pretende discutir matéria constitucional.",
correta:"Recurso Extraordinário",
opcoes:["RR","RE","AP","RO"],
justificativa:"Matéria constitucional vai ao STF."
},

{
caso:"Decisão homologatória de acordo.",
correta:"Embargos de Declaração",
opcoes:["ED","RO","AP","RR"],
justificativa:"Só cabe ED contra homologação."
},

{
caso:"Juiz indefere produção de prova essencial.",
correta:"Mandado de Segurança",
opcoes:["MS","RO","AP","ED"],
justificativa:"Prejuízo imediato permite MS."
},

{
caso:"Empresa quer impugnar decisão monocrática do TST.",
correta:"Agravo Interno",
opcoes:["AI","Agravo Interno","RR","RO"],
justificativa:"Decisão monocrática é combatida por Agravo Interno."
},

{
caso:"Reclamante busca cumprimento da sentença.",
correta:"Execução",
opcoes:["Execução","RO","Contestação","ED"],
justificativa:"Cumprimento ocorre via execução."
},

{
caso:"Empregado pede tutela urgente.",
correta:"Pedido de Tutela Antecipada",
opcoes:["Tutela","RO","ED","AP"],
justificativa:"Urgência é feita por tutela."
},

{
caso:"Sentença sem fundamentação.",
correta:"Embargos de Declaração",
opcoes:["ED","RO","AP","RR"],
justificativa:"Falta de fundamentação gera ED."
},

{
caso:"Empresa quer discutir valor da condenação.",
correta:"Agravo de Petição",
opcoes:["RO","AP","RR","ED"],
justificativa:"Valor em execução se discute por AP."
},

{
caso:"Reclamante quer corrigir erro de nome.",
correta:"Embargos de Declaração",
opcoes:["ED","RO","AP","RR"],
justificativa:"Erro material se corrige por ED."
},

{
caso:"Sentença parcialmente procedente.",
correta:"Recurso Ordinário",
opcoes:["RO","AP","RR","ED"],
justificativa:"Da sentença cabe RO."
},

{
caso:"TRT manteve sentença integralmente.",
correta:"Recurso de Revista",
opcoes:["RR","RO","ED","AP"],
justificativa:"Após TRT cabe RR."
},

{
caso:"Juiz rejeitou embargos à execução.",
correta:"Agravo de Petição",
opcoes:["AP","RO","RR","ED"],
justificativa:"Embargos rejeitados geram AP."
},

{
caso:"Empresa quer parcelar débito.",
correta:"Petição Simples",
opcoes:["Petição Simples","RO","AP","ED"],
justificativa:"Pedido administrativo se faz por petição."
},

{
caso:"Parte quer desistir do recurso.",
correta:"Petição de Desistência",
opcoes:["Desistência","RO","ED","AP"],
justificativa:"Desistência é feita por petição."
},

{
caso:"Erro na data da sentença.",
correta:"Embargos de Declaração",
opcoes:["ED","RO","AP","RR"],
justificativa:"Erro material é ED."
},

{
caso:"Executado questiona penhora.",
correta:"Agravo de Petição",
opcoes:["AP","RO","ED","RR"],
justificativa:"Penhora se discute por AP."
},

{
caso:"Reclamante quer incluir novo pedido.",
correta:"Aditamento da Inicial",
opcoes:["Aditamento","RO","Contestação","ED"],
justificativa:"Pedido novo exige aditamento."
}

];

// embaralha automaticamente ao carregar
function embaralhar(array){
for(let i=array.length-1;i>0;i--){
const j=Math.floor(Math.random()*(i+1));
[array[i],array[j]]=[array[j],array[i]];
}
}

embaralhar(questoes);

let atual=0;

function carregar(){
const q=questoes[atual];
document.getElementById("caso").innerHTML="<p><strong>Caso:</strong> "+q.caso+"</p>";
const div=document.getElementById("opcoes");
div.innerHTML="";
q.opcoes.forEach(op=>{
const b=document.createElement("button");
b.innerText=op;
b.onclick=()=>responder(op);
div.appendChild(b);
});
document.getElementById("resultado").innerHTML="";
}

function responder(escolha){
const q=questoes[atual];
if(escolha===q.correta){
document.getElementById("resultado").innerHTML="✅ Correto!<br>"+q.justificativa;
}else{
document.getElementById("resultado").innerHTML="❌ Errado.<br>Resposta correta: "+q.correta+"<br>"+q.justificativa;
}
}

function proxima(){
atual++;
if(atual>=questoes.length)atual=0;
carregar();
}

carregar();

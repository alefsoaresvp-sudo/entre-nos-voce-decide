(() => {
"use strict";
const $ = id => document.getElementById(id);
const key = "entre-nos-jogo-v1";
const scenes = [
{tag:"Cena 01 · Convivência",title:"O comentário no corredor",emoji:"🏫",visual:"O intervalo está terminando. Uma colega se afasta depois de ouvir um comentário sobre seu cabelo.",copy:"Perto da sala, um estudante faz um comentário depreciativo sobre o cabelo crespo de Joana e tenta encerrar o assunto dizendo que era “só brincadeira”. Algumas pessoas riem. Você presenciou a situação.",dialogue:"“Foi só uma brincadeira. Não precisa levar tão a sério.”",choices:[
["Interromper com firmeza e respeito","Nomear o problema sem humilhar ninguém.","Você marcou um limite","Comentários racistas não devem ser tratados como entretenimento. Uma resposta firme ajuda a não normalizar a discriminação.","Depois, procure Joana em particular e pergunte se está bem e de que apoio precisa. Não presuma que ela queira falar diante de todos.",[2,2,1]],
["Mudar de assunto para evitar conflito","Desviar a conversa sem comentar o que aconteceu.","O assunto mudou, mas o problema ficou","A tensão pode diminuir, porém o comentário não foi contestado. Joana pode sentir que ficou sem apoio.","Ainda é possível retomar o assunto: reconheça que se calou, converse com Joana e pense em como agir diante de novos episódios.",[0,0,0]],
["Acolher Joana em particular","Ouvir sem pressionar e perguntar se ela gostaria de apoio.","Você abriu espaço para a escuta","Uma conversa reservada pode ajudar Joana a não se sentir sozinha. Ouvir sem exigir detalhes respeita sua autonomia.","O acolhimento é importante. Avalie com ela como interromper a repetição do comportamento e quais adultos podem apoiar.",[2,1,0]]
]},
{tag:"Cena 02 · Ambiente digital",title:"O meme no grupo da turma",emoji:"💬",visual:"No grupo da sala, alguém compartilha um meme que usa um estereótipo racial para provocar risadas.",copy:"A publicação recebe reações. Duas pessoas pedem para apagar, mas outra responde que “na internet todo mundo pode brincar”. Você sabe que a mensagem pode circular e atingir estudantes da própria escola.",dialogue:"“Se não gostou, é só sair do grupo.”",choices:[
["Pedir que parem e apaguem o meme","Explicar por que é ofensivo e não reenviar o conteúdo.","Você interrompeu a circulação","Uma mensagem clara ajuda a estabelecer um limite coletivo. Não republicar evita ampliar a exposição de quem pode ser atingido.","Se continuar, preserve informações relevantes sem espalhar o material e procure um professor ou a coordenação.",[1,2,2]],
["Buscar apoio de um adulto de confiança","Relatar o que aconteceu, preservando a privacidade.","Você acionou uma rede de apoio","A escola pode ajudar a interromper a repetição e orientar a turma. O cuidado com a privacidade evita exposição desnecessária.","Conte o que viu, quando ocorreu e em qual espaço. Não faça o conteúdo circular nem transforme a vítima em assunto.",[2,2,1]],
["Responder com outra publicação para ridicularizar","Tentar vencer a discussão expondo quem enviou o meme.","O conflito pode aumentar","A resposta pode ampliar a troca de humilhações, espalhar ainda mais o conteúdo e dificultar uma solução responsável.","É possível discordar com firmeza sem repetir a lógica da exposição. Interrompa o compartilhamento e use os canais de apoio.",[0,0,0]]
]},
{tag:"Cena 03 · Representatividade",title:"Quem participa do trabalho?",emoji:"📚",visual:"A turma precisa preparar uma apresentação sobre história e cultura afro-brasileira.",copy:"Na divisão das tarefas, alguém sugere que estudantes negros sejam os únicos responsáveis por falar sobre racismo. Outra pessoa diz que autores negros “não são tão conhecidos” e propõe usar sempre as mesmas referências. O grupo precisa decidir como construir uma pesquisa mais completa.",dialogue:"“Esse assunto combina mais com quem vive isso.”",choices:[
["Redistribuir as tarefas e ampliar referências","Pesquisar autores, artistas e pesquisadores negros com todo o grupo.","Você ampliou quem tem voz","Uma pesquisa plural reconhece a produção intelectual e cultural negra. A responsabilidade pelo aprendizado é de toda a turma.","A LDB, no art. 26-A, prevê o estudo da história e cultura afro-brasileira e indígena no currículo. Use fontes confiáveis e cite os autores.",[1,1,2]],
["Perguntar como cada pessoa quer contribuir","Ouvir preferências sem presumir que alguém fale por toda uma população.","Você respeitou a autonomia","Dar espaço para cada estudante escolher como participar evita transformar identidade racial em obrigação.","Combine essa escuta com uma pesquisa plural e divisão equilibrada das tarefas. Representatividade também exige reconhecimento e oportunidade.",[2,1,1]],
["Manter a divisão para terminar mais rápido","Aceitar que apenas estudantes negros conduzam o tema.","A divisão reproduz uma desigualdade","A turma deixa de assumir seu próprio compromisso de aprender e reconhecer diferentes contribuições.","Reorganize o trabalho: distribua pesquisa, apresentação e produção entre todos. Ninguém precisa representar sozinho uma comunidade inteira.",[0,0,0]]
]},
{tag:"Cena 04 · Apoio e continuidade",title:"Qual é a próxima atitude?",emoji:"🤝",visual:"Depois da aula, Joana conta que os comentários se repetem e que está cansada de explicar por que isso a machuca.",copy:"Ela diz que não quer virar assunto na escola, mas também não sabe como fazer a situação parar. Você quer ajudar sem tomar decisões por ela, expor sua história ou deixá-la sozinha com o problema.",dialogue:"“Eu só queria que isso parasse. Não quero que todo mundo fique falando de mim.”",choices:[
["Ouvir e perguntar de que apoio ela precisa","Oferecer companhia para buscar um adulto de confiança, sem pressionar.","Apoiar também é respeitar escolhas","Você não exige que Joana conte tudo nem decide por ela. Oferecer opções ajuda a construir apoio sem transferir a responsabilidade para quem foi atingida.","Respeite sua autonomia, mantenha o canal aberto e, diante de risco ou repetição, busque orientação de adultos responsáveis.",[2,2,1]],
["Ajudar a procurar a coordenação com ela","Combinar os próximos passos, preservar a privacidade e registrar os fatos com cuidado.","Você transformou apoio em ação","Uma rede de proteção pode ajudar a escola a agir. A decisão compartilhada evita expor Joana ou deixá-la sozinha para resolver o problema.","Combine o que será relatado e a quem. Procurem um adulto de confiança e os procedimentos de proteção da escola.",[2,2,2]],
["Prometer segredo e não fazer mais nada","Evitar conversar com outras pessoas, mesmo que os episódios continuem.","A intenção protege, mas o apoio fica limitado","Guardar a confiança é importante. Uma promessa absoluta de silêncio pode impedir que Joana receba ajuda para interromper episódios repetidos.","Não espalhe a história. Converse sobre opções seguras e ofereça apoio para procurar alguém de confiança.",[1,0,0]]
]}
];
const fresh = () => ({current:0,scores:{support:0,action:0,collective:0},history:[],revealed:false,finished:false});
let state=fresh();
const intro=$("introView"), game=$("gameView"), ending=$("endingView");
const cap=n=>Math.max(0,Math.min(8,n));
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function save(){try{localStorage.setItem(key,JSON.stringify(state));}catch(e){}}
function load(){try{const x=JSON.parse(localStorage.getItem(key)||"null");if(!x||!Number.isInteger(x.current)||!x.scores||!Array.isArray(x.history)||x.history.length>4)return null;return x;}catch(e){return null;}}
function show(which){intro.classList.toggle("hidden",which!=="intro");game.classList.toggle("active",which==="game");ending.classList.toggle("active",which==="ending");}
function meters(){const s=state.scores;[["support","supportValue","supportBar"],["action","actionValue","actionBar"],["collective","collectiveValue","collectiveBar"]].forEach(a=>{$(a[1]).textContent=cap(s[a[0]])+"/8";$(a[2]).style.width=(cap(s[a[0]])/8*100)+"%";});}
function progress(){
const done=state.history.length,pct=Math.round(done/4*100);
$("progressFill").style.width=pct+"%";$("progressText").textContent=done+" de 4 cenas";$("progressPercent").textContent=pct+"%";
$("chapterList").innerHTML=scenes.map((s,i)=>'<div class="chapter-item '+(i<done?"done ":"")+(i===state.current&&!state.finished?"current":"")+'"><span class="chapter-dot">'+(i<done?"✓":i+1)+'</span><span>'+s.title+'</span></div>').join("");
$("journalList").innerHTML=state.history.map((h,i)=>'<div class="journal-entry"><b>'+String(i+1).padStart(2,"0")+" · "+scenes[i].title+'</b><span>'+escapeHTML(h.title)+'</span></div>').join("");
$("journalEmpty").classList.toggle("hidden",state.history.length>0);meters();
}
function render(){
if(state.current>=4)return finish();
const s=scenes[state.current];show("game");progress();
$("sceneTag").textContent=s.tag;$("sceneIndex").textContent=String(state.current+1).padStart(2,"0")+" / 04";
$("sceneTitle").textContent=s.title;$("sceneEmoji").textContent=s.emoji;$("sceneVisualText").textContent=s.visual;
$("sceneCopy").textContent=s.copy;$("sceneDialogue").textContent=s.dialogue;
$("feedback").classList.remove("show");$("choiceArea").classList.remove("hidden");
$("choices").innerHTML=s.choices.map((c,i)=>'<button class="choice-btn" type="button" data-choice="'+i+'"><span class="choice-letter">'+String.fromCharCode(65+i)+'</span><span><strong>'+escapeHTML(c[0])+'</strong><small>'+escapeHTML(c[1])+'</small></span></button>').join("");
$("choices").querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>choose(Number(b.dataset.choice))));
if(state.revealed)feedback(state.history[state.current].choiceIndex);
window.scrollTo({top:0,behavior:"smooth"});
}
function choose(i){
if(state.revealed)return;
const c=scenes[state.current].choices[i];if(!c)return;
state.scores.support=cap(state.scores.support+c[5][0]);state.scores.action=cap(state.scores.action+c[5][1]);state.scores.collective=cap(state.scores.collective+c[5][2]);
state.history.push({choiceIndex:i,title:c[0]});state.revealed=true;save();progress();feedback(i);
}
function feedback(i){
const c=scenes[state.current].choices[i];$("choiceArea").classList.add("hidden");
$("feedbackTitle").textContent=c[2];$("feedbackText").textContent=c[3];$("feedbackTakeaway").textContent=c[4];
$("continueBtn").textContent=state.current===3?"Ver resultado e refletir →":"Próxima situação →";
$("feedback").classList.add("show");$("continueBtn").focus({preventScroll:true});
}
function finish(){
state.finished=true;save();progress();show("ending");
const s=state.scores;let title,lead;
if(s.support>=6&&s.action>=6&&s.collective>=5){title="Uma rede de apoio em movimento";lead="Suas escolhas combinaram escuta, atitude responsável e compromisso coletivo. Enfrentar o racismo exige acolhimento, posicionamento e continuidade — não apenas uma reação isolada.";}
else if(s.support>=4&&(s.action>=4||s.collective>=4)){title="Mudança em construção";lead="Você abriu caminhos importantes, mas algumas situações ainda pedem continuidade. Ações consistentes da turma e da escola ajudam a transformar o ambiente.";}
else{title="Toda mudança começa com uma próxima atitude";lead="Algumas escolhas deixaram situações sem resposta suficiente. Reconhecer limites, reparar omissões e buscar apoio são passos possíveis para agir melhor daqui para frente.";}
$("endingTitle").textContent=title;$("endingLead").textContent=lead;
$("finalSupport").textContent=s.support+"/8";$("finalAction").textContent=s.action+"/8";$("finalCollective").textContent=s.collective+"/8";
window.scrollTo({top:0,behavior:"smooth"});
}
function start(){state=fresh();save();render();}
$("startBtn").addEventListener("click",start);
$("resumeBtn").addEventListener("click",()=>{const x=load();if(!x)return;state=x;if(state.finished)finish();else render();});
$("continueBtn").addEventListener("click",()=>{if(state.current<3){state.current++;state.revealed=false;save();render();}else finish();});
$("replayBtn").addEventListener("click",start);
$("backSourcesBtn").addEventListener("click",()=>$("referencias").scrollIntoView({behavior:"smooth"}));
$("fontBtn").addEventListener("click",()=>{const on=document.body.classList.toggle("large-text");$("fontBtn").setAttribute("aria-pressed",String(on));});
$("contrastBtn").addEventListener("click",()=>{const on=document.body.classList.toggle("high-contrast");$("contrastBtn").setAttribute("aria-pressed",String(on));});
const old=load();
if(old&&old.history.length){$("resumeRow").classList.add("show");$("resumeText").textContent="Você já concluiu "+old.history.length+" de 4 cenas. Seu progresso está salvo neste dispositivo.";if(old.finished)$("resumeBtn").textContent="Ver meu resultado →";}
})();
const DarkModeButton = document.getElementById('DarkMode');
    DarkModeButton.addEventListener('click', function() {
    if(DarkModeButton.textContent == "Modo Escuro"){
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#fff';
        DarkModeButton.textContent = "Modo Claro"
    }else{
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#222';
        DarkModeButton.textContent = "Modo Escuro";
    }
       });

const frases = [
  'Não seja vítima das dificuldades, tente ultrapassá-las!',
  'Quando você começa o dia com o coração grato, luz emana de dentro de você. ',
  'Hoje é um ótimo dia para espalhar felicidade.',
  'A cada manhã nós renascemos. O que fazemos hoje é o que mais importa!',
  'Erros são as provas de que estamos tentando.',
  'A vida é muito curta para começar o dia com pedaços partidos de ontem.',
  'Um novo dia sempre revela uma nova força e um novo pensamento.',
  'O dia de hoje nunca mais vai se repetir. Faça o melhor dele.',
  'No dia de hoje, plante memórias e colha histórias.',
  'O mundo é perfeito para quem já acorda bem disposto.',
  'Eu te amo, mesmo antes de você tomar a sua primeira xícara de café.',
  'Cerque-se de pessoas que acreditam e lutam por você.',
  'Os limites que impomos sobre nós podem se tornar verdadeiras prisões.',
  'Esteja presente em cada momento da sua vida, antes que estes momentos se tornem apenas lembranças.',
];

const fraseElement = document.getElementById("frases");

function mudaFrase() {
  const randomIndex = Math.floor(Math.random() * frases.length);
  const randomFrase = frases[randomIndex];
  fraseElement.textContent = randomFrase;
}
setInterval(mudaFrase, 4000);


const usuario = {
   nome: document.querySelector('#c-nome'),
   sobrenome: document.querySelector('#c-sobrenome'),
   email: document.querySelector('#c-email'),
   senha: document.querySelector('#c-senha'),
   confirmasenha: document.querySelector('#c-confirmasenha'),
 };

 const label = {
   nome: document.querySelector('#l-nome'),
   sobrenome: document.querySelector('#l-sobre'),
   email: document.querySelector('#l-email'),
   senha: document.querySelector('#l-senha'),
   confirmasenha: document.querySelector('#l-confirmasenha'),
 };

// VALIDAÇÃO PARA O NOME
usuario.nome.addEventListener("keyup", () => {
    if(usuario.nome.value.length<5){
           usuario.nome.setAttribute("style", `outline-color: #ff0000`);
           label.nome.setAttribute("style", `color: #ff0000`);
           
           
           
    
           }else{
              usuario.nome.setAttribute("style", `outline-color: #0f0`);
              label.nome.setAttribute("style", `color: #0f0`);
              
              
              
           }
        });
// VALIDAÇÃO PARA SOBRENOME
usuario.sobrenome.addEventListener("keyup", () => {
    if(usuario.sobrenome.value.length<5){
        usuario.sobrenome.setAttribute("style", `outline-color: #ff0000`);
        label.sobrenome.setAttribute("style", `color: #ff0000`);
        
        
    
           }else{
              usuario.sobrenome.setAttribute("style", `outline-color: #0f0`);
              label.sobrenome.setAttribute("style", `color: #0f0`);//verde
              
              
           }
        });
// VALIDAÇÃO PARA EMAIL
usuario.email.addEventListener("keyup", () => {
    if(usuario.email.value.length>5 && usuario.email.value.includes("@")){
           usuario.email.setAttribute("style", `outline-color: #0f0`);//verde
           label.email.setAttribute("style", `color: #0f0`);
          
           
    
           }else{
              usuario.email.setAttribute("style", `outline-color: #f00`);//vermelho
              label.email.setAttribute("style", `color: #f00`);
              
              
           }    
   
        });
// VALIDAÇÃO PARA SENHA
usuario.senha.addEventListener("keyup", () => {
    if(usuario.senha.value.length >= 5 && usuario.senha.value.length <= 9){
           usuario.senha.setAttribute("style", `outline-color: #0f0`);
           label.senha.setAttribute("style", `color: #0f0`);
           
           
    
           }else{
              usuario.senha.setAttribute("style", `outline-color: #f00`);
              label.senha.setAttribute("style", `color: #f00`);
              
              
           

           }
        });
// VALIDAÇÃO PARA CONFIRMAR SENHA
usuario.confirmasenha.addEventListener("keyup", () => {
    if(usuario.confirmasenha.value != usuario.senha.value){
           usuario.confirmasenha.setAttribute("style", `outline-color: #ff0000`);
           label.confirmasenha.setAttribute("style", `color: #f00`);
           
           
    
           }else{
              usuario.confirmasenha.setAttribute("style", `outline-color: #000`);
              label.confirmasenha.setAttribute("style", `color: #0f0`);
              
              
           }
        });


//VALIDAÇÃO DO BOTÃO CADASTRAR
const btnCadastrar = document.querySelector("#btnCadastro");

btnCadastrar.addEventListener("click", () => {
  if (
    label.nome.style.color === "rgb(0, 255, 0)" &&
    label.sobrenome.style.color === "rgb(0, 255, 0)" &&
    label.email.style.color === "rgb(0, 255, 0)" &&
    label.senha.style.color === "rgb(0, 255, 0)" &&
    label.confirmasenha.style.color === "rgb(0, 255, 0)"
  ) {
    alert("CADASTRO VALIDADO!");
    
  } else {
    alert("CADASTRO INVALIDO!");
  }
});
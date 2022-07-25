function enviarMensagem() {

  const input1 = document.querySelector(".input-number1");
  const number1 = input1.value;

  const input2 = document.querySelector(".input-number2");
  const number2 = input2.value;

  input1.value = "";
  input2.value = "";

  if(number1 === "") return;

  if(number2 === "") return;

  const dados = {
    number1: number1,
    number2: number2,
  };

  console.log(dados);

  const requisicao = axios.post("https://soma-dos-inversos-api.vercel.app/somainversos", dados);
  requisicao.then(mostraResposta);
  requisicao.catch(mostraStatus);
}

function getStatus() {
  const requisicao = axios.get("https://soma-dos-inversos-api.vercel.app/status");
  requisicao.then(mostraResposta);
  requisicao.catch(mostraStatus);
}
function mostraStatus(resposta){
  alert(resposta);
}
function mostraResposta(resposta){
  console.log(resposta);
  alert("A soma dos inversos entre os números digitados é: "+resposta.data);
}

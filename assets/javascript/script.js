function postOne(){
  
  const input1 = document.querySelector(".input-number1");
  const json = input1.value;

  input1.value = "";
  
  if(json === "") return;

  console.log(json);

  const requisicao = axios.post("http://127.0.0.1:5000/inserir_banco", json);

  requisicao.then(mostraResposta);
  requisicao.catch(mostraStatus);
}

function getOne(){

  const input2 = document.querySelector(".input-number2");
  const number2 = input2.value;

  input2.value = "";
 
  if(number2 === "") return;

  const requisicao = axios.get(`http://127.0.0.1:5000/busca_no_banco/${number2}`);

  requisicao.then(mostraResposta);
  requisicao.catch(mostraStatus);
}

function getAll(){

  const requisicao = axios.get("http://127.0.0.1:5000/todos_banco",null);

  requisicao.then(mostraResposta);
  requisicao.catch(mostraStatus);
}

function mostraStatus(resposta){
  alert(resposta);
}

function mostraResposta(resposta){
  console.log(resposta);
  alert(resposta.data);
}

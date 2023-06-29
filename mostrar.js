const getResult = document.getElementById('view')
const memberGroup = []

function viewMember(){
  let memberView= ''
  for(let index = 0; index < memberGroup.length; index++){
    memberView += `${index +1}. ${memberGroup[index]} <br>`
    getResult.innerHTML = memberView
  }
}

function addMember(){
  let askMember = prompt('Insira o nome que deseja adicionar:')
  getResult.innerHTML = ''
    if (askMember === ''){
      alert('Nome vazio')
      retun
    }
    if (!isNaN(parseFloat(askMember))) {
    alert('apenas números!')
    return
    }
  memberGroup.push(askMember)


  for(let index = 0; index < memberGroup.length; index++){
  let nameAdd = `${memberGroup[index]} foi adicionado com sucesso.`
  getResult.innerHTML += nameAdd + '<br>'
}
}

function ocultMember(){
  getResult.innerHTML = ''
}

addMember();
viewMember();
ocultMember();
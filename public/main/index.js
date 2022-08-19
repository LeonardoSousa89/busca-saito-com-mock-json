const _DOC=document

const enviar=_DOC.getElementById('enviar')
let codigo=_DOC.getElementById('codigo')
let msg='dados inválidos! código: 401, usuário não autorizado. por favor, recarregue a página!'

enviar.addEventListener('click', ()=>{
    
    if(codigo.value==='' || codigo.value===''){
        alert('O campo deve ser diferente de vazio.')
    }else{
        const _URL='http://localhost:8081/static/Db/data.json'

        fetch(_URL).then(response=>response.json())
                .then(response=>{
                    for(let i in response){
                        if(response[i].codigo_saito === codigo.value){
                            storageData(response,i)
                            msg='Carregando...'
                            _DOC.body.innerHTML=msg
                            _DOC.location.href='http://localhost:8081/dados'
                        }else if(response[i].codigo_saito != codigo.value){
                            _DOC.body.innerHTML=msg
                        }
                    }
                })
    }
})

function storageData(response, vetor){
    const id=response[vetor].id
    const nome=response[vetor].nome
    const nascimento=response[vetor].nascimento
    const UF=response[vetor].UF
    const cidade=response[vetor].cidade
    const CPF=response[vetor].CPF
    const RG=response[vetor].RG
    const número_do_cartão=response[vetor].número_do_cartão
    const data_de_validade=response[vetor].data_de_validade
    const CVV=response[vetor].CVV
    const bandeira=response[vetor].bandeira
    const email=response[vetor].email
    const codigo_saito=response[vetor].codigo_saito

    localStorage.setItem('dados',JSON.stringify(response[vetor]))
}


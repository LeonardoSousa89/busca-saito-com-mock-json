const _DOC=document
const voltar=_DOC.getElementById('voltar')

let _dados={
    id: _DOC.getElementById('id'),
    nome: _DOC.getElementById('nome'),
    nascimento: _DOC.getElementById('nascimento'),
    UF: _DOC.getElementById('UF'),
    cidade: _DOC.getElementById('cidade'),
    CPF: _DOC.getElementById('CPF'),
    RG: _DOC.getElementById('RG'),
    numero_do_cartao: _DOC.getElementById('numero_do_cartao'),
    data_de_validade: _DOC.getElementById('data_de_validade'),
    CVV: _DOC.getElementById('CVV'),
    bandeira: _DOC.getElementById('bandeira'),
    email: _DOC.getElementById('email'),
    codigo_saito: _DOC.getElementById('codigo_saito')
}

//funções para melhoria do programa

// function parseDeCampos(dados){
//     JSON.parse(dados)
// }

// function receberDados(el,dados){
//     el.append(dados)
// }

function obterEInserirDadosEmCampos(){
    let dados=localStorage.getItem('dados')

    const id=JSON.parse(dados)
    const nome=JSON.parse(dados)
    const nascimento=JSON.parse(dados)
    const UF=JSON.parse(dados)
    const cidade=JSON.parse(dados)
    const CPF=JSON.parse(dados)
    const RG=JSON.parse(dados)
    const numero_do_cartao=JSON.parse(dados)
    const data_de_validade=JSON.parse(dados)
    const CVV=JSON.parse(dados)
    const bandeira=JSON.parse(dados)
    const email=JSON.parse(dados)
    const codigo_saito=JSON.parse(dados)

    _dados.id.append(id.id)
    _dados.nome.append(nome.nome)
    _dados.nascimento.append(nascimento.nascimento)
    _dados.UF.append(UF.UF)
    _dados.cidade.append(cidade.cidade)
    _dados.CPF.append(CPF.CPF)
    _dados.RG.append(RG.RG)
    _dados.numero_do_cartao.append(numero_do_cartao.numero_do_cartao)
    _dados.data_de_validade.append(data_de_validade.data_de_validade)
    _dados.CVV.append(CVV.CVV)
    _dados.bandeira.append(bandeira.bandeira)
    _dados.email.append(email.email)
    _dados.codigo_saito.append(codigo_saito.codigo_saito)
}

obterEInserirDadosEmCampos()

voltar.addEventListener('click',()=>{
    localStorage.removeItem('dados')
    _DOC.location.href='http://localhost:8081'        
})


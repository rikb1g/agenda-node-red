const btn_gravar = document.querySelector("#btn_gravar")
const btn_cancelar = document.querySelector("#btn_cancelar")
const f_nome = document.querySelector("#f_nome")
const f_telemovel = document.querySelector("#f_telemovel")
const f_email = document.querySelector("#f_email")
const f_dtNascimento = document.querySelector("#f_dtNascimento")






btn_gravar.addEventListener("click",(evt)=>{
    const valores = {
        "f_nome": f_nome.value,
        "f_telemovel": f_telemovel.value,
        "f_email": f_email.value,
        "f_dtNascimento": f_dtNascimento.value
    }
    const cabecalho ={
        method:'POST',
        body:JSON.stringify(valores)
    }

    const endpoint= "http://127.0.0.1:1880/addcontatos"
    fetch(endpoint, cabecalho)
    .then(res=>{
        if(res.status==200){
            alert("Dados atualizados com sucesso")
            reset()
        }else{
            alert("Erro ao gravar novo contacto")
        }
    })
    
    
});


btn_cancelar.addEventListener("click",(evt)=>{
  reset()
})

const reset =()=>{
    f_nome.value=""
    f_telemovel.value=""
    f_email.value=""
    f_dtNascimento.value=""
    f_nome.focus()
}







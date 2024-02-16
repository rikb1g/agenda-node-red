
const dados = document.querySelector("#dados")
const fundopopup = document.querySelector("#fundo-popup")

const btn_gravar = document.querySelector("#btn-gravar")
const btn_cancelar = document.querySelector("#btn-cancelar")

const f_id = document.querySelector("#f_id")
const f_nome = document.querySelector("#f_nome")
const f_telemovel = document.querySelector("#f_telemovel")
const f_email = document.querySelector("#f_email")
const f_dtNascimento = document.querySelector("#f_dtNascimento")



btn_gravar.addEventListener("click",(evt)=>{
    fundopopup.classList.add("ocultar")

    const valores = {
        "f_id" : f_id.value,
        "f_nome": f_nome.value,
        "f_telemovel": f_telemovel.value,
        "f_email" : f_email.value,
        "f_dtNascimento": f_dtNascimento.value
    }
    const cabecalho = {
        method :'POST',
        body:JSON.stringify(valores)

    }

    const endpoint = `http://127.0.0.1:1880/editarcontatos/`
    fetch(endpoint,cabecalho)
    .then(res=> {
        if (res.status == 200) {
            alert("Dados atualizados com sucesso")
            preencherdgv()
        } else{
            alert("Erro ao gravar os dados")
        }
    })

    
    


})
btn_cancelar.addEventListener("click",(evt)=>{
    fundopopup.classList.add("ocultar")
    console.log("funciona")

})



const preencherdgv=()=>{

    const endpoint = `http://127.0.0.1:1880/pesquisartodoscontatos/`

    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        dados.innerHTML=""
        res.forEach((ele)=>{
            const linha= document.createElement("div")
            linha.setAttribute("class","linhadados")

            const c1 = document.createElement("div")
            c1.setAttribute("class","coluna c1")
            c1.innerHTML=ele.n_contaco_contato
            linha.appendChild(c1)

            const c2 = document.createElement("div")
            c2.setAttribute("class","coluna c2")
            c2.innerHTML=ele.s_nome_contato
            linha.appendChild(c2)

            
            const c3 = document.createElement("div")
            c3.setAttribute("class","coluna c3")
            c3.innerHTML=ele.s_telefone_contato
            linha.appendChild(c3)

           
            const c4 = document.createElement("div")
            c4.setAttribute("class","coluna c4")
            c4.innerHTML=ele.s_email_contato
            linha.appendChild(c4)

            
            const c5 = document.createElement("div")
            c5.setAttribute("class","coluna c5")
            c5.innerHTML=ele.dt_dataNas_contato.split("T")[0]
            linha.appendChild(c5)

            const c6 = document.createElement("div")
            c6.setAttribute("class","coluna c6 c-operacaoes")
            const imgdelete = document.createElement("img")
            const imgeditar = document.createElement("img")
            imgdelete.setAttribute("src","assets/delete.svg")
            imgdelete.setAttribute("class","iconeop")
            imgdelete.addEventListener("click",(evt)=>{
              const id= evt.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
                removerContato(id)
            })
            imgeditar.setAttribute("class","iconeop")
            imgeditar.setAttribute("src","assets/edit.svg")
            imgeditar.addEventListener("click",(evt)=>{
               fundopopup.classList.remove("ocultar")
               const dados = evt.target.parentNode.parentNode.childNodes
               f_id.value = dados[0].innerHTML
                f_nome.value = dados[1].innerHTML
                f_telemovel.value = dados[2].innerHTML
                f_email.value = dados[3].innerHTML
                f_dtNascimento.value = dados[4].innerHTML.split("T")[0]

            })
            c6.appendChild(imgdelete)
            c6.appendChild(imgeditar)
            linha.appendChild(c6)

            dados.appendChild(linha)
            
            
        });
    })
    
}

preencherdgv()

const removerContato=(id)=>{
    const endpoint = `http://127.0.0.1:1880/eliminarcontatos/${id}`
    fetch(endpoint)
    .then(res=>{
        if(res.status ==200){
            preencherdgv()
        }
    })
}



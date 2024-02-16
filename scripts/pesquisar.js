

const btn_pesquisar = document.querySelector("#btn_pesquisar")
const f_txtpesq = document.querySelector("#f_txtpesq")
const dados = document.querySelector("#dados")


btn_pesquisar.addEventListener("click", (evt) =>{
    const valorpesqu = f_txtpesq.value
    if (valorpesqu == ""){
         alert("Digite a pesquisa")
         f_txtpesq.focus()
         return
    } 
    const f_pesq =document.querySelector("input[name=f_pesq]:checked").value

    const entpoint = `http://127.0.0.1:1880/pesquisarcontato/${f_pesq}/${valorpesqu}`

    fetch(entpoint)
    .then(res=>res.json())
    .then(res=>{
        dados.innerHTML=""
        res.forEach((ele)=>{
            const linha= document.createElement("div")
            linha.setAttribute("class","linhadados")

            const c1 = document.createElement("div")
            c1.setAttribute("class","c1")
            c1.innerHTML=ele.n_contaco_contato
            linha.appendChild(c1)

            const c2 = document.createElement("div")
            c2.setAttribute("class","c2")
            c2.innerHTML=ele.s_nome_contato
            linha.appendChild(c2)

            
            const c3 = document.createElement("div")
            c3.setAttribute("class","c3")
            c3.innerHTML=ele.s_telefone_contato
            linha.appendChild(c3)

           
            const c4 = document.createElement("div")
            c4.setAttribute("class","c4")
            c4.innerHTML=ele.s_email_contato
            linha.appendChild(c4)

            
            const c5 = document.createElement("div")
            c5.setAttribute("class","c5")
            c5.innerHTML=ele.dt_dataNas_contato
            linha.appendChild(c5)

            dados.appendChild(linha)
            
            
        });
    })
    
})

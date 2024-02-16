const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");
const main = document.querySelector("#main");
const btn_home = document.querySelector("#btn_home");
const btn_btn_novo = document.querySelector("#btn_novo");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_gestao = document.querySelector("#btn_gestao");
const btn_sobre = document.querySelector("#btn_sobre");
const btn_filtrar = document.querySelector("#btn_filtrar")



btn_home.addEventListener("click", (evt) =>{
    selecionarAba(evt.target,"./home.html")
    
})
btn_btn_novo.addEventListener("click", (evt) =>{
    selecionarAba(evt.target,"./novo.html")
    
})
btn_pesquisar.addEventListener("click", (evt) =>{
    selecionarAba(evt.target,"./pesquisar.html")
    
})
btn_gestao.addEventListener("click", (evt) =>{
    selecionarAba(evt.target,"./gestao.html")
    
})
btn_sobre.addEventListener("click", (evt) =>{
    selecionarAba(evt.target,"./sobre.html")
})

btn_filtrar.addEventListener("click",(evt)=>{
    selecionarAba(evt.target,"./filtrar.html")
})


const selecionarAba=(el,url)=>{
    
    const abas = [...document.querySelectorAll(".aba")] /* tansforma num array*/
    abas.forEach(e=>{
        e.classList.remove("abaSelecionada")
    } )
    el.classList.add("abaSelecionada")
    window.open(url,"if_principal")    
}
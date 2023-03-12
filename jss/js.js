
let iniciar=()=>{
    const jx=document.querySelector('input#jx')
    const jo=document.querySelector('input#jo')
    const vazio=/\w{4}/mi
    if (!vazio.test(jx.value) || !vazio.test(jo.value)){
        alert('Preencha o formulário corretamente.')
    } else {
        document.querySelector('div#cadastro').style.display='none'
        document.querySelector('div#jogo').style.display='block'
        let njv=''
    }
}

let psc=[...document.querySelectorAll('.psc')]
let info=document.querySelector('p#info')
let jv='X'
let c=0
function limpar(){
    info.innerHTML='Jogador <strong>X</strong> inicia!'
    jv='X'
    psc.map((el,i)=>{
        el.innerHTML=''
    })
    c=0
}

const p1=()=>{
    seGanhou(0)
}
const p2=()=>{
    seGanhou(1)
}
const p3=()=>{
    seGanhou(2)
}
const p4=()=>{
    seGanhou(3)
}
const p5=()=>{
    seGanhou(4)
}
const p6=()=>{
    seGanhou(5)
}
const p7=()=>{
    seGanhou(6)
}
const p8=()=>{
    seGanhou(7)
}
const p9=()=>{
    seGanhou(8)
}

let seGanhou=(p)=>{
    
    if (psc[p].innerText=='X' || psc[p].innerText=='O') {
        window.alert('[ ERRO ] Posição já foi marcada!')
    } else {
        psc[p].innerText=jv

        if ((psc[0].innerText==jv && psc[1].innerText==jv && psc[2].innerText==jv) || (psc[3].innerText==jv && psc[4].innerText==jv && psc[5].innerText==jv) || (psc[6].innerText==jv && psc[7].innerText==jv && psc[8].innerText==jv) || (psc[0].innerText==jv && psc[3].innerText==jv && psc[6].innerText==jv) || (psc[1].innerText==jv && psc[4].innerText==jv && psc[7].innerText==jv) || (psc[2].innerText==jv && psc[5].innerText==jv && psc[8].innerText==jv) || (psc[0].innerText==jv && psc[4].innerText==jv && psc[8].innerText==jv) || (psc[2].innerText==jv && psc[4].innerText==jv && psc[6].innerText==jv)) {
            info.innerHTML=`<strong>${njv}</strong>, Você Ganhou!`
            info.style.fontSize='1.6em'
            c=0
            psc.map((el,i)=>{
                el.innerHTML=''
            })
            
        }else {
            c++
            jv=='X' ? njv=jo.value : njv=jx.value
            jv=='X' ? jv='O' : jv='X'

            info.innerHTML=`Vez  do Jogador <strong>${jv}</strong>`
        }
        if(c>=9){
            info.innerHTML=`EMPATE !!!`
            info.style.fontSize='1.6em'
        }
    }
}
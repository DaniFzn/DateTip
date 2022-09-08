let btnN = document.querySelector("#btn-no")
let btnY = document.querySelector("#btn-yes")
let btnNStyle = document.querySelector(".btnNStyle")
let btnYStyle = document.querySelector(".btnYStyle")
let buttons = document.querySelector(".buttons")
let title = document.querySelector(".title")
let surp = document.querySelector(".hidden")

btnN.addEventListener("click", showBtnY);

function showBtnY(){

    if(btnYStyle.style.display = "block"){
        btnN.addEventListener("mouseenter", randomPos);
    } else {
        btnYStyle.style.display = "block"
    }
}

function randomPos(){

    let randomT = Math.floor(Math.random() * 300) + 1;
    let randomB = Math.floor(Math.random() * 300) + 1;
    let randomL = Math.floor(Math.random() * 300) + 1;
    let randomR = Math.floor(Math.random() * 300) + 1;
    
    btnNStyle.style.background = "rgb(247, 81, 81)"
    btnNStyle.style.cursor ="auto"
    btnNStyle.style.position = "relative"
    btnNStyle.style.top = `${randomT}px`
    btnNStyle.style.left = `${randomL}px`
    btnNStyle.style.bottom = `${randomB}px`
    btnNStyle.style.right = `${randomR}px`
}

btnY.addEventListener("click", accept);

function accept() {
    buttons.style.display = "none"
    title.style.display = "none"
    surp.style.display = "block"
}
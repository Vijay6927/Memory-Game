let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns=["red","green","purple","yellow"];

let med=document.querySelector("media");

document.addEventListener("keypress", function (event) {
    if (started == false) {
        started = true;
          levelup();
    } 
})

let h3 = document.querySelector("h3");

function flash(btn) {
    btn.classList.add("white");
    setTimeout(function () {
        btn.classList.remove("white");
    }, 300);
}

function levelup() {
    userseq=[];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor); 
    flash(randbtn);  
} 
function userflash()
{
    let btn=this;
    flash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length-1);
}
let a = document.querySelectorAll(".bigsquare div");

a.forEach(function(element) {
    element.addEventListener("click", userflash );
});

function check(idx)
{

    if(userseq[idx]===gameseq[idx])
    {
       if(userseq.length==gameseq.length)
       {
        setTimeout(levelup,1000);
       }
    }
    else{
         h3.innerHTML=`Game Over! <br> Your score :<b> ${level}</b> <br>Press any key to start again.`;
         reset();
    }
}
function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}

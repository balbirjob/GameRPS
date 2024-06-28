let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let random = Math.floor(Math.random()*3);
let triangle = document.querySelector(".oneline");
let user = document.querySelector(".user");
let machine = document.querySelector(".machin");
console.log(computer);



let score =JSON.parse(localStorage.getItem("sc"));
let scoreElem = document.getElementById("score");
if(score){
    scoreElem.innerText = score;
}
let count = 0;
let coun = 0;

let cs = document.getElementById("sca");
let cse =JSON.parse(localStorage.getItem("cs"));



let rulebtn = document.querySelector(".btn-rule");
let rulemodal =document.querySelector(".box");
let ruleimage = document.querySelector(".rule-image");

rulebtn.addEventListener("click", ()=>{
    rulemodal.style.display="flex";
    setTimeout(() => {
        ruleimage.style.transform ="translatey(0)"
    }, 500);

});

let close=document.querySelector(".close")
close.addEventListener("click",()=>{
    ruleimage.style.transform = "translateY(-200%)"
    setTimeout(() => {
        rulemodal.style.display = "none";
        
    }, 500);
});



let play=document.querySelector(".btnp");
let winmodel=document.querySelector(".win-model");
let winner = document.querySelector(".winner");
con.forEach((element,index) => {
    element.addEventListener("click",()=>{
        user.style.opacity = "1";
        triangle.style.display="none";
        con.forEach(item => {
            item.style.display="none";   
        });
        element.style.display="block"
        element.classList.add("show")
        setTimeout(()=>{
            machine.style.opacity = "1";
            setTimeout(() => {
                computer[random].style.display = "block";
                computer[random].classList.add("right");
            }, 1000);
        },500);
        setTimeout(() => {
            if(random == index)
                {
                    winmodel.style.display="grid";
                    winmodel.style.display="TIE UP";

                }else if( index==0 && random==1 || index==1 && random==2 ||index==2 && random==0 )
                {
                    winmodel.style.display="grid";
                    winmodel.style.display="YOU WIN";
                    count = score;
                    count++;
                    scoreElem.innerText=count;
                    localStorage.setItem("sc", JSON.stringify(count));
                    
                }else{
                    winmodel.style.display="grid";
                    winmodel.style.display="YOU LOST";

                    coun = cs;
                    coun++;
                    scoreElem.innerText=coun;
                    localStorage.setItem("sca", JSON.stringify(coun));
                }
        }, 1500);
    })   
});


play.addEventListener("click",()=>{
    window.location.reload();
});
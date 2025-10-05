let btn = document.getElementById("openAside");
let cwin = document.getElementById("cubrePantalla");
let aside = document.querySelector("aside");
let boolAside = false;
btn.addEventListener("click", ()=>{
    if(boolAside){
        aside.style.transform = "translateX(100%)";
        cwin.style.transform = "translateX(100%)";
    }
    else{
        aside.style.transform = "translateX(0)";
        cwin.style.transform = "translateX(0)";
    }
    boolAside = !boolAside;
});
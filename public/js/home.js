function revealOnScroll(){
    const reveals = document.querySelectorAll(".infoFoto");
    const triggerBottom = window.innerHeight;
    reveals.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if(boxTop < triggerBottom - 50){
            el.classList.add("active");
        }
        else{
            el.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

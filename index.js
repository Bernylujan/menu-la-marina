document.querySelectorAll(".img-item img ").forEach(el=>{
    el.addEventListener("click", function(ev){
        ev.stopPropagation(); 
        this.parentNode.classList.add("activate");
    })
});

document.querySelectorAll(".img-item").forEach(el => {
    el.addEventListener("click", function(ev){
        this.classList.remove("activate");
        console.log("Click")
    })
})
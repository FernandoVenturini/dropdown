const backToTopBtn = document.querySelector("#back-to-top");

window.addEventListener("scroll",function(){
    const scrollTop = window.pageYOffset || document.documentEleent.scrollTop
    if(scrollTop > 500) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEvenListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
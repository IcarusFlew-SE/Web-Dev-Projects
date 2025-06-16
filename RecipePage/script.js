const cake = document.querySelector(".recipe-img");

cake.addEventListener("mousemove", (e) => {
    let yAxis = (window.innerHeight /2 - e.pageY) / 10;
    let xAxis = (window.innerWidth /2 - e.pageX) / 25;
    cake.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

cake.addEventListener("mouseenter", (e) => {
    cake.style.transition = null;
    cake.style.transform = "translateZ(300px)";
})

cake.addEventListener("mouseleave", (e) => {
    cake.style.transition = "all 0.5s ease";
    cake.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
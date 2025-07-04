const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const flying_squirrel = document.querySelector(".flying_squirrel img");
const Seen = document.querySelector(".Seen");
const description = document.querySelector("info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Event Listening - Interactions towards the mouse
container.addEventListener("mouseenter", (e) =>{
    card.style.transition = "null";
    title.style.transform = "translateZ (150px)";
    flying_squirrel.style.transform = "translateZ (200px) rotateZ (-25deg)";
    description.style.transform = "translateZ (125px)";
    sizes.style.transform = "translateZ (100px)";
    Seen.style.transform = "translateZ (75px)";
});


container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ (0px)";
    flying_squirrel.style.transform = "translateZ (0px) rotateZ(0deg)";
    description.style.transform = "translateZ (0px)";
    sizes.style.transform = "translateZ (0px)";
    Seen.style.transform = "translateZ (0px)";
});
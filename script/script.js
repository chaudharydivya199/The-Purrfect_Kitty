
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
links.classList.toggle("show-links");
});

function get_fact()
{
    fetch("https://catfact.ninja/fact")
    .then(res=>res.json())
    .then(data=>
        {
           document.getElementById('fact_text').innerHTML=data.fact
        })
}



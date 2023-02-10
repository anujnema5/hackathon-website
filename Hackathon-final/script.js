const main = document.querySelector("#main");
const city  = document.querySelector(".city");
const showCity = document.querySelector(".showCity");

city.addEventListener("mouseover", ()=>{
    showCity.style.display = "block";
})

showCity.addEventListener("mouseout", ()=>{
    showCity.style.display = "none";
})
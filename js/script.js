document.addEventListener("DOMContentLoaded",()=>{
const input = document.getElementById("input");

input.addEventListener("focus", loadPage, false);

function loadPage(e){
    e.preventDefault();
    setTimeout(() => {
        location.replace("div.html")
    }, 6000);
}
},false)
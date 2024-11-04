
let projectId = localStorage.getItem("projectId");
console.log(projectId);
localStorage.clear();

function loadProjects(){
    //fetch
    const URL = "http://localhost:3000/progetti";

    fetch(URL)
    .then(data =>{
        return data.json();
    }).then(response =>{
        title.innerHTML = response[projectId].titolo;
        img.src = response[projectId].img;
        desc.innerHTML = response[projectId].descBreve;
    });
}
let title = document.getElementById("title");
let img = document.getElementById("img");
let desc = document.getElementById("desc");
document.addEventListener("DOMContentLoaded", loadProjects);

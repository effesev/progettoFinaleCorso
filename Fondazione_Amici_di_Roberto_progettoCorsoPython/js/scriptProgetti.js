// CLASSES 

class projectObj{
    constructor(id, titolo, descBreve, img){
    this.id = id;
    this.titolo = titolo;
    this.descBreve = descBreve;
    this.img = img;
    }
}

// FUNCTIONS

// GET LOADED PROJECTS NUMBER
function getLoadedProjects() {
    projects = document.querySelectorAll(".card");
    return projects.length;
}

// LOAD SOME PROJECTS
function loadProjects(){
    loadedProjects = getLoadedProjects() + 3;
    divProjects.innerHTML="";
    //fetch
    const URL = "http://localhost:3000/progetti";

    fetch(URL)
    .then(data =>{
        return data.json();
    }).then(response =>{
        console.log(response);
        for (let i= 0; i < loadedProjects; i++) {
            let projectElement = new projectObj(response[i].id, response[i].titolo, response[i].descBreve, response[i].img)
            divProjects.appendChild(createCard(projectElement));
        }});
}

// CREATE NEW PROJECT CARD
function createCard(project){
    // IMAGE
    let cardImage = document.createElement("img");
    cardImage.style.objectFit='scale-down';
    cardImage.style.display = 'block';
    cardImage.style.margin = '0 auto';
    cardImage.classList.add("card-img-top", "img-fluid", "rounded");
    cardImage.src = project.img;
    // TITLE
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = project.titolo;
    // TEXT
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = project.descBreve;

    // BUTTON
    let cardBtn = document.createElement("a");
    cardBtn.classList.add("btn", "btn-primary", "justify-content-md-end", "float-right");
    cardBtn.innerHTML = "Vai al progetto";
    cardBtn.foo = project.id;
    cardBtn.setAttribute("data-id", project.id-1);
    cardBtn.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        localStorage.setItem('projectId', id);
    });
    cardBtn.href = "./progetto.html";
    // BODY
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardBtn);
    // CARD
    let card = document.createElement("div");
    card.classList.add("card", "flex","col-sm-12", "col-md-3", "col-12", "m-2");
    card.appendChild(cardImage);
    card.appendChild(cardBody);

    return card;
}
//  SAVE PROJECT ID IN LOCAL STORAGE
function setProjectId(){
    localStorage.setItem("projectId", 4);
}

// ACTUAL PROGRAM

// LOAD PROJECTS AT START
document.addEventListener("DOMContentLoaded", loadProjects);

let divProjects = document.getElementById("projects");

let moreBtn = document.getElementById("moreBtn");
moreBtn.addEventListener("click", loadProjects);


function saveId(){
    localStorage.setItem("projectId", project.id);
    
    let btn = document.getElementById("btn");
    btn.addEventListener("click", salvaInLS);
    
    
    function recuperaDaLS(){
        let info = localStorage.getItem("persona");
        return info;
    }
    
    let btnR = document.getElementById("btnR");
    btn.addEventListener("click", recuperaDaLS);
    
}
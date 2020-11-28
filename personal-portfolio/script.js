let loadButton = document.querySelector("#load-more");
let rows = document.querySelectorAll(".projects-div .row");
let projectsDiv = document.querySelector(".projects-div");
let lists = document.querySelectorAll(".inline-list");
let filtersDiv = document.querySelector(".filters");
let filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach((button,e) => button.onclick = filterChanged);
checkRows();

function filterChanged(e,callback){
    projectsDiv.innerHTML = "";
    let findFilter = e.target.innerText;
    let cardsArr = [];
    let rowsNeeded = 0;
    filterButtons.forEach(function(filterButton){
        if(filterButton.innerText == findFilter){
            filterButton.classList.add("active");
        }
        else{
            filterButton.classList.remove("active")
        }
    });
    lists.forEach(function(list){
        let listArr = list.innerText.split("\n").filter(x => x != "").map(x => x.trim());
        if(listArr.includes(findFilter)){
            cardsArr.push(list);
        }
    });
    rowsNeeded = Math.ceil(cardsArr.length/3);
    for(let i=0; i<rowsNeeded; i++){
        let row = document.createElement("div");
        if(i > 0){
            row.classList.add("mt-5");    
        }
        if(cardsArr.length >= 3){
            row.appendChild(cardsArr[0].parentElement.parentElement.parentElement);
            row.appendChild(cardsArr[1].parentElement.parentElement.parentElement);
            row.appendChild(cardsArr[2].parentElement.parentElement.parentElement);
            cardsArr = cardsArr.splice(3);
        }
        else if(cardsArr.length == 2){
            row.appendChild(cardsArr[0].parentElement.parentElement.parentElement);
            row.appendChild(cardsArr[1].parentElement.parentElement.parentElement);
        }
        else{
            row.appendChild(cardsArr[0].parentElement.parentElement.parentElement);
        }
        row.classList.add("row");
        projectsDiv.appendChild(row);
    }
}
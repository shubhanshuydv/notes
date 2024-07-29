const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box");

// function showNotes(){
//     notesContainer.innerHTML = localStorage.getItem("notes");
// }
// showNotes();

// function updateStorage(){
//     localStorage.setItem("notes", notesContainer.innerHTML);
// }
createBtn.addEventListener("click" ,()=>{
    let inputBox = document.createElement("p");
    let i = document.createElement("i");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    i.className = "ri-delete-bin-7-fill";
    notesContainer.appendChild(inputBox).appendChild(i);
    updateStorage();
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }

    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
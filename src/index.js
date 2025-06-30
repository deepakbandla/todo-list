// import "./styles.css";

// let projects = document.querySelector(".projects");
// let create_btn = document.querySelector(".create");

// let cards=[];

// let card_array=localStorage.getItem("card_array");
// if(card_array){
//     for (let i = 0; i < card_array.length; i++) {
//         const each_card = card_array[i];
//         projects.appendChild(each_card);
//     }
// }



// create_btn.addEventListener('click', () => {
//     let card = document.createElement("div");
//     card.className = "card";
//     card.innerHTML = `
//       <form class="todo-form">
//             <input type="text" class="project-name" placeholder="Project name..." required>

//             <div class="tasks-container">
//                 <span class="tasks">
//                     <input type="checkbox" class="done">
//                     <input type="text" class="todo-input" placeholder="Enter task..." required>
//                 </span>
//             </div>
            
            
//             <span class="todo-buttons">
//                 <button type="button" class="todo-btn" id="add-btn">Add To-do</button>
//                 <button type="button" class="todo-btn" id="delete-btn">Delete</button>
//             </span>
//         </form>
//     `;

//     if (projects) {
//       projects.appendChild(card);
//     } else {
//       document.body.appendChild(card);
//     }

//     let add_todo_btn = card.querySelector("#add-btn");
//     let tasks_container=card.querySelector(".tasks-container");

//     add_todo_btn.addEventListener('click', ()=>{
//         let new_task=document.createElement("div");
//         new_task.className="tasks";
//         new_task.innerHTML=`
//             <input type="checkbox" class="done">
//             <input type="text" class="todo-input" placeholder="Enter task..." required>
//         `;
//         tasks_container.appendChild(new_task);
//     })


//     let deleteBtn = card.querySelector("#delete-btn");
//     deleteBtn.addEventListener('click', () => {
//       card.remove();
//     });
//     cards.push(card);
    
// });

import "./styles.css";

let projectsContainer = document.querySelector(".projects");
let createBtn = document.querySelector(".create");

let projectsData = JSON.parse(localStorage.getItem("projects")) || [];

function saveToLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projectsData));
}

function renderProjects() {
  projectsContainer.innerHTML = ""; 

  projectsData.forEach((project, projectIndex) => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <form class="todo-form">
        <input type="text" class="project-name" value="${project.name}" data-index="${projectIndex}" required>

        <div class="tasks-container">
          ${project.todos
            .map(
              (todo, todoIndex) => `
              <div class="tasks">
                <input type="checkbox" class="done" data-project="${projectIndex}" data-task="${todoIndex}" ${todo.done ? "checked" : ""}>
                <input type="text" class="todo-input" value="${todo.task}" data-project="${projectIndex}" data-task="${todoIndex}" required>
              </div>
            `
            )
            .join("")}
        </div>

        <span class="todo-buttons">
          <button type="button" class="todo-btn add-btn" data-index="${projectIndex}">Add To-do</button>
          <button type="button" class="todo-btn delete-btn" data-index="${projectIndex}">Delete Project</button>
        </span>
      </form>
    `;

    projectsContainer.appendChild(card);
  });

  attachEventListeners();
}

function attachEventListeners() {

  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = btn.dataset.index;
      projectsData[index].todos.push({ task: "", done: false });
      saveToLocalStorage();
      renderProjects();
    });
  });
  
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      projectsData.splice(index, 1);
      saveToLocalStorage();
      renderProjects();
    });
  });

  
  document.querySelectorAll(".done").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const pIndex = checkbox.dataset.project;
      const tIndex = checkbox.dataset.task;
      projectsData[pIndex].todos[tIndex].done = checkbox.checked;
      saveToLocalStorage();
    });
  });

  document.querySelectorAll(".todo-input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const pIndex = input.dataset.project;
      const tIndex = input.dataset.task;
      projectsData[pIndex].todos[tIndex].task = input.value;
      saveToLocalStorage();
    });
  });

  document.querySelectorAll(".project-name").forEach((input) => {
    input.addEventListener("input", () => {
      const index = input.dataset.index;
      projectsData[index].name = input.value;
      saveToLocalStorage();
    });
  });
}


createBtn.addEventListener("click", () => {
  let newProject = {
    name: "Untitled Project",
    todos: [{ task: "", done: false }]
  };
  projectsData.push(newProject);
  saveToLocalStorage();
  renderProjects();
});

renderProjects();




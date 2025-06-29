import "./styles.css";

let projects = document.querySelector(".projects");
let create_btn = document.querySelector(".create");
let add_todo_btn = document.querySelector("#add-btn");
let tasks=document.querySelector(".tasks");
let tasks_container=document.querySelector(".tasks-container");


create_btn.addEventListener('click', () => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <form class="todo-form">
            <input type="text" class="project-name" placeholder="Project name..." required>

            <div class="tasks-container">
                <span class="tasks">
                    <input type="checkbox" class="done">
                    <input type="text" class="todo-input" placeholder="Enter task..." required>
                </span>
            </div>
            
            <span class="todo-buttons">
                <button type="submit" class="todo-btn" id="add-btn">Add To-do</button>
                <button type="button" class="todo-btn">Delete</button>
            </span>
        </form>
    `;
    // Append the card to the projects container or body if projects is not found
    if (projects) {
      projects.appendChild(card);
    } else {
      document.body.appendChild(card);
    }

    // let form = card.querySelector('.todo-form');
    // form.addEventListener('submit', function(event) {
    //   event.preventDefault();
    //   // your code to handle the todo addition
    // });
});

add_todo_btn.addEventListener('click', ()=>{
    tasks_container.appendChild(tasks_container);
})
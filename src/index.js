import "./styles.css";

let projects = document.querySelector(".projects");
let create_btn = document.querySelector(".create");

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
                <button type="button" class="todo-btn" id="add-btn">Add To-do</button>
                <button type="button" class="todo-btn" id="delete-btn">Delete</button>
            </span>
        </form>
    `;

    if (projects) {
      projects.appendChild(card);
    } else {
      document.body.appendChild(card);
    }

    let add_todo_btn = card.querySelector("#add-btn");
    let tasks_container=card.querySelector(".tasks-container");
    let tasks=card.querySelector(".tasks");

    add_todo_btn.addEventListener('click', ()=>{
        let new_task=document.createElement("div");
        new_task.className="tasks";
        new_task.innerHTML=`
            <input type="checkbox" class="done">
            <input type="text" class="todo-input" placeholder="Enter task..." required>
        `;
        tasks_container.appendChild(new_task);
    })


    let deleteBtn = card.querySelector("#delete-btn");
    deleteBtn.addEventListener('click', () => {
      card.remove();
    });
});

add_todo_btn.addEventListener('click', ()=>{
    tasks_container.appendChild(tasks_container);
})


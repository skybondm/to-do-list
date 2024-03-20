let task_input = document.querySelector('.task')
let add_button = document.querySelector('.cross')
let task_list = document.querySelector('.task_list')

// function add_task () {
//     const new_task = document.createElement('li')
//     const input = document.createElement('input')
//     const delete_button = document.createElement('button')
//     input.value = "Любой текст"
//     input.className = 'task'
//     new_task.className = 'form'
//     delete_button.className = 'delete'
//     new_task.append(input)
//     new_task.append(delete_button)
//     task_list.append(new_task)
// }


function add_task (event) {
    event.preventDefault ()
    const task = task_input.value 
    if (!task) return
    const clone = document.querySelector('#template').cloneNode(true).content
    clone.querySelector('.task').value = task
    clone.querySelector('#del').addEventListener("click", delete_task)
    task_list.append(clone)
    task_input.value = ""
}
add_button.addEventListener("click", add_task)

function delete_task (event) {
    let target = event.target.parentElement
    target.remove ()
}
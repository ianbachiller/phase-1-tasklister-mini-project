document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", function(e){
    e.preventDefault();
    newP(e.target.new_task_description.value)
    form.reset()
  })
})

function newP(toDoEnteredStoredHere){
  let newUl = document.createElement('ul')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteToDoAndAddToCompletedList)
  btn.textContent = ' 💖'
  newUl.textContent= `${toDoEnteredStoredHere} `
  newUl.appendChild(btn)
  document.querySelector('#tasks').appendChild(newUl) 
}
function deleteToDoAndAddToCompletedList(e){
  taskItem = e.target.parentNode
  taskItem.remove();
  document.querySelector('#tasks_completed').appendChild(taskItem)
}


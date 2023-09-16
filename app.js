let input = document.querySelector('.entered-list')
let add = document.querySelector('.btn')
let task = document.querySelector('.tasks')
const btn = document.getElementsByClassName('.btn-delete')

add.addEventListener('click', () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement('div')
    newItem.classList.add('item')
    newItem.innerHTML = `
      <div class="item d-flex flex-row ">
          <p class="p-3"> ${input.value}</p>
          <div class="task-btn p-3">
            <button class="btn btn-danger btn-sm" onclick="removeDiv()"> x </button>
          </div>
      </div>
      `
    task.appendChild(newItem)
    input.value = ''
  } else {
    alert('Please enter a task')
  }
})

function removeDiv() {
  task.innerHTML = ''
}

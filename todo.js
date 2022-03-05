// new-to-do-form
// new-to-do-input
// to-dos
const list_el = document.querySelector('#to-dos');
let tasks = localStorage.getItem('tasks');

function render(obj) {
  //create div with class "to-do-c"
  const todo_el = document.createElement('div');
  todo_el.classList.add('to-do-c');

  //create div with class "content"
  const todo_content_el = document.createElement('div');
  todo_content_el.classList.add('content');
  //make todo_content child of todo_el
  todo_el.appendChild(todo_content_el);
  //create input element with class "text" & type text , value = task variable & give it readonly attr -------->> add fuctionality begen
  const todo_input_el = document.createElement('input');
  todo_input_el.classList.add('text');
  todo_input_el.id = obj.id;
  todo_input_el.type = 'text';
  todo_input_el.value = obj.title;
  todo_input_el.setAttribute('readonly', 'readonly');
  //make child of --<
  todo_content_el.appendChild(todo_input_el);

  //create div element with class = actions
  const actions_el = document.createElement('div');
  actions_el.classList.add('actions');
  //create a button with class = edit  && inner html = Edit
  const edit_el = document.createElement('button');
  edit_el.classList.add('edit');
  edit_el.innerHTML = 'Edit';

  //create a button with class = delete  && inner html = delete
  const delete_el = document.createElement('button');
  delete_el.classList.add('delete');
  delete_el.innerHTML = 'delete';

  //make childs -----
  actions_el.appendChild(edit_el);
  actions_el.appendChild(delete_el);
  todo_el.appendChild(actions_el);
  //must be last
  list_el.appendChild(todo_el);

  edit_el.addEventListener('click', (e) => {
    if (edit_el.innerText.toLowerCase() == 'edit') {
      todo_input_el.removeAttribute('readonly');
      todo_input_el.focus();
      edit_el.innerText = 'Save';
    } else {
      todo_input_el.setAttribute('readonly', 'readonly');
      let tasks_s = localStorage.getItem('tasks');
      tasks_s = JSON.parse(tasks_s);

      tasks_s.forEach((element) => {
        if (element.id == todo_input_el.id) {
          element.title = todo_input_el.value;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(tasks_s));
      edit_el.innerText = 'edit';
    }
  });
  //delete button functionality --------->> delete functionality
  delete_el.addEventListener('click', () => {
    let tasks_s = localStorage.getItem('tasks');
    tasks_s = JSON.parse(tasks_s);

    let i = 0;
    tasks_s.forEach((element) => {
      if (element.id == todo_input_el.id) {
        tasks_s.splice(i, 1);
      }
      i++;
    });

    localStorage.setItem('tasks', JSON.stringify(tasks_s));
    list_el.removeChild(todo_el);
  });

  //make input feild empty after add to do element
  // input.value = '';
}

if (tasks) {
  tasks = JSON.parse(tasks);
  tasks.forEach((element) => {
    render(element);
  });
}

window.addEventListener('load', () => {
  //form action value
  const form = document.querySelector('#new-to-do-form');
  //input value
  const input = document.querySelector('#new-to-do-input');
  //id for perent div id
  const list_el = document.querySelector('#to-dos');
  //array of to-do's

  let arrayOfTaskes = [];

  //check if local storage have tasks
  if (localStorage.getItem('tasks')) {
    arrayOfTaskes = get();
  }

  //listener for input form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    //give todo input value for task variable
    const task = input.value;
    const arrayElement = {
      id: Date.now(),
      title: task,
      completed: false,
    };
    //if task is empty will return nothing and make alert with usfull msg
    if (!task) {
      alert('please fill out the task');
      return;
    }
    arrayOfTaskes.push(arrayElement);

    addToLocakStorage(arrayOfTaskes);
    render(arrayElement);
    input.value = '';

    //make the edit => save ||or|| save => edit : in situation -------->> edit functionality

    // edit_el.addEventListener('click', (e) => {
    //   console.log('aasasasasasas'+e.target);
    //   edit(obj);
    // });
    // //delete button functionality --------->> delete functionality
    // delete_el.addEventListener('click', () => {
    //   list_el.removeChild(todo_el);
    // });
  });
});
function addToLocakStorage(arrayOfTaskes) {
  window.localStorage.setItem('tasks', JSON.stringify(arrayOfTaskes));
}
function get() {
  let data = window.localStorage.getItem('tasks');
  if (data) {
    let tasks = JSON.parse(data);
    return tasks;
  }
}

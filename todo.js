// new-to-do-form
// new-to-do-input
// new-to-do-submit

window.addEventListener('load', () => {
  const form = document.querySelector('#new-to-do-form');
  const input = document.querySelector('#new-to-do-input');
  const list_el = document.querySelector('#to-dos');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;
    if (!task) {
      alert('please fill out the task');
      return;
    }
    const todo_el = document.createElement('div');
    todo_el.classList.add('to-do-c');
    const todo_content_el = document.createElement('div');
    todo_content_el.classList.add('content');
    todo_content_el.innerText = task;
    todo_el.appendChild(todo_content_el);
    list_el.appendChild(todo_el);
  });
});

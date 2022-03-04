// new-to-do-form
// new-to-do-input
// new-to-do-submit

window.addEventListener('load', () => {
  const form = document.querySelector('#new-to-do-form');
  const input = document.querySelector('#new-to-do-input');
  const submit = document.querySelector('#new-to-do-submit');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;
    if (!task) {
      alert('please fill out the task');
      return;
    } else {
      console.log('Success');
    }
  });
});

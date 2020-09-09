const todoInput = document.getElementById('todo');
const submitBtn = document.getElementById('submit_btn');
const todoList = document.getElementById('todo_list');


const addListHandler = () => {
    const listItem = todoInput.value; //get the input value
    const eachList = document.createElement('li'); //create li
    eachList.id = 'id'+Math.floor(Math.random()*9999999); //make each list an id
    let listId = eachList.id.toString();
    eachList.innerHTML = `<span>${listItem}</span><button id="del-btn" class="${listId}"><i id="del-btn__btn" class="far fa-trash-alt"></i></button>`
    todoList.append(eachList);

    const delBtn = eachList.querySelector('.'+listId);

    const delListHandler = () => {
        const delList = delBtn.parentElement;
        delList.remove();
    }

    delBtn.addEventListener('click',(e) => { 
        e.preventDefault();
        delListHandler();
    });

}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addListHandler();
    todoInput.value = '';
});

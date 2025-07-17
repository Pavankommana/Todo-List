const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

        
        
document.querySelector('.js-add-button').addEventListener('click',() => {
    if(document.querySelector('.js-todoName').value === ''){
        alert('Add a Todo...!');
    }
    else{
        addTodo();
    }
});


function addTodo(){
    const name= document.querySelector('.js-todoName').value;
    const dueDate = document.querySelector('.js-dueDate').value;
    todoList.push({
    name,dueDate
    });
    document.querySelector('.js-todoName').value='';
    document.querySelector('.js-dueDate').value='';
    
    showTodo();
    saveToLocalStorage();
    
}
function saveToLocalStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}


function showTodo(){
    let todoHtml='';
    for(let i=0;i<todoList.length;i++){
        const todoObject =todoList[i];
        const {name , dueDate} = todoObject;
        const html = `
        <div class="name">${name}</div>
        <div class="dueDate">${dueDate}</div>
        <button class = "del-btn"
        ">Delete</button>
    `;
        todoHtml+=html;
    }
    document.querySelector('.js-showTodo').innerHTML=todoHtml;

    document.querySelectorAll('.del-btn')
    .forEach((deleteButton,i) =>{
    deleteButton.addEventListener('click',()=>{
        todoList.splice(i,1);
        showTodo();
    });
});
    
}

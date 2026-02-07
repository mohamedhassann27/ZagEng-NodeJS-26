
const studentsList= document.getElementById('students')
const submitBtn= document.querySelector('button')

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    const username= document.getElementById('username').value;
    const age= document.getElementById('age').value;
    const grade= document.getElementById('grade').value

    if(username&& age&& grade){
        const studentObj={
            username,
            age,
            grade
        }
        console.log(studentObj);
        
        const liElement= document.createElement('li')
        liElement.innerHTML=`<p>${studentObj.username}</p> <p>${studentObj.age}</p> <p>${studentObj.grade}</p>`

        
        const btn= document.createElement('button')
        btn.innerText= 'Delete this Student'

        const hr= document.createElement('hr')
            
        liElement.append(btn, hr)
        studentsList.append(liElement)

        btn.addEventListener('click', (e)=>{
            liElement.remove()
        })

    }
    
})




// const addTodoBtn= document.getElementById('addTodo')
// const todos= document.getElementById('todos')
// const todoInput= document.getElementById('todo')

// addTodoBtn.addEventListener('click', (e)=>{
//     if(todoInput.value){
//         const newTodoDiv= document.createElement('div')
    
//         const todoVal= todoInput.value
//         const newTodo= document.createElement('p')
//         newTodo.innerText=todoVal;
    
//         const deleteBtn= document.createElement('button')
//         deleteBtn.innerText='Delete this todo'
//         deleteBtn.addEventListener('click', ()=>{
//             newTodoDiv.remove()
//         })
    
//         const colorsInput=document.createElement('input')
//         colorsInput.setAttribute('type', 'color')
//         colorsInput.addEventListener('input', (e)=>{
//             newTodo.style.color= e.target.value
//         })

//         const br= document.createElement('hr')
    
//         newTodoDiv.append(newTodo, colorsInput, deleteBtn, br)
//         todos.append(newTodoDiv)
//         todoInput.value=''
//     }
// })
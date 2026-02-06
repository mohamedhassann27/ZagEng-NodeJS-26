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
            
        studentsList.append(liElement,btn)

        btn.addEventListener('click', (e)=>{
            liElement.remove()
            btn.remove()
        })
    }
    
})

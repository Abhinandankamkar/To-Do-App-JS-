let form = document.querySelector('form');
let container = document.querySelector('.container');
let inputTask = document.querySelector('#inputTask');
let btn = document.querySelector('#btn');
let taskList = document.querySelector('#taskList');
const btns = document.querySelector('#btns')
const complete = document.querySelector('.complete');
const remove = document.querySelector('.delete');

function addTask(){
    let taskText = inputTask.value.trim();
    
    const li = document.createElement('li');
    li.innerHTML = `
           <div class="lists">
            <span id="taskSpan">${taskText}</span>
            <div class="btns">
                <button class="complete"><span>✔</span></button>
                <button class="edit"><span>🖊</span></button>
                <button class="delete"><span>❌</span></button>
            </div>
            </div>
 
           `
    // console.log(li)

                    if(taskText === '' || taskList === null){
                        alert(`Task can't be empty.`);
                    }
                    else{
                        document.querySelector('ul').appendChild(li)
                    }

                     updateCounts();
                
                    li.querySelector(".delete").addEventListener("click", function () {
                    li.remove();
                    updateCounts();
                    });

                    li.querySelector(".complete").addEventListener("click", function (x) {
                        x.preventDefault();

                            const currentElement = x.target.closest(".lists");
                            currentElement.classList.add('strikes');
                            updateCounts();
                });
                
                    li.querySelector(".edit").addEventListener("click", function (x) {
                        x.preventDefault();

                            const currentElement = x.target.closest(".lists");
                            currentElement.classList.remove('strikes');
                            updateCounts();
                });

    
}


    let total = document.querySelector('.total')
    let completed = document.querySelector('.completed')
    let clear = document.querySelector('.clear')

    function updateCounts(){
        let list = document.querySelector('#taskList');
        let count = list.querySelectorAll('li').length;
        total.textContent = count;
        
        let list2 = list.querySelectorAll('.lists.strikes').length;
        completed.textContent = list2;
        
    }

    document.querySelector('.clear').addEventListener('click',function(e){
        e.preventDefault();

        taskList.innerHTML = ''
        updateCounts();
    })

btn.addEventListener('click',function(evt){
    evt.preventDefault();
    addTask();
    
    inputTask.value = '';
    
})
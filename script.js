/* Task 1 */

var heading= document.getElementById('heading')
console.log(heading.innerText)
/* Task 2 using plain JavaScript */
//Task 2a
var textBtn = document. getElementById('textBtn2')
textBtn.addEventListener('click',function(){
    var task2=document.getElementById('task2')
    var paragraph = document.createElement('p')
    paragraph.innerText = "Hello World"
    task2.appendChild(paragraph)
})
//Task 2b
function changeBGcolor(event){
    var body= document.getElementsByTagName('body')[0]
    if(event.target.innerText=="Red"){
        body.style.backgroundColor = 'red'
    }
      if(event.target.innerText=="Green"){
        body.style.backgroundColor = 'Green'
    }
}
//Task 2c
 function redirectToGoogle(){
    window.location.assign('http;//google.com')
}
/* Task 4 using jQuery */

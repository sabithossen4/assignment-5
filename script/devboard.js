
 const cardBtn = document.querySelectorAll('.card-btn');
 for (let i = 0; i < cardBtn.length; i++){
    const btn = cardBtn[i];
    btn.addEventListener('click', function(event){
          alert('Board updated Successfully');    
    event.target.disabled=true;
    
    const task=document.getElementById('task').innerText;
    const convertedTask= parseFloat(task);  
    const toTask = convertedTask-1;  
    document.getElementById('task').innerText=toTask;
  
    const navCount=document.getElementById('nav-count').innerText;  
    const convertedNavCount= parseFloat(navCount);    
    const toNavCount = convertedNavCount+1;
    document.getElementById('nav-count').innerText=toNavCount;

    if(toTask===0){
      alert('Congrats! You have completed all tasks!');
    }

        

    const acivity =document.getElementById('activity-clear');       
    

    const now = new Date();
    const timeS = now.toLocaleTimeString();
    const log = document.createElement('p');
    
    const tName =document.querySelector('.card-title').textContent;
    document.querySelector('.card-title').textContent;
    log.textContent=`You have completed the task  ${tName} ${timeS}`;    
    acivity.appendChild(log);  
    

      
  });
 }
 
//  task part
document.getElementById('assigned').addEventListener('click', function(){
  window.location.href="./discover.html"
})

//  Theme Part
const button =document.getElementById('bg-color').addEventListener('click', function(){
  const body=document.body;
  const color=['#8a2be2', '#a52a2a', '#5f9ea0', '#ff7f50'] ;
  const colorRan=color[Math.floor(Math.random()*color.length)];
  body.style.backgroundColor=colorRan;   
});

// Activity log clear 
document.getElementById('clear').addEventListener('click', function(){
  const activityClear=document.getElementById('activity-clear');
  activityClear.innerHTML= '';  
})

// real tiem 
const cDate = new Date();
const days=  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayName = days[cDate.getDay()];
const monthName = months[cDate.getMonth()];
const date = cDate.getDate();
const year = cDate.getFullYear();
document.getElementById('real-time').innerText= `${dayName}, ${monthName} ${date}, ${year}`;






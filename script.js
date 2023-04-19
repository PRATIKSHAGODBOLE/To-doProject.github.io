//Reference input button below  ul list

var todoInput = document.querySelector('input');
var btn = document.querySelector('button');
var todoList= document.querySelector('.todo-list');

//Events

btn.onclick = createTodo;//when we click on button we get todo list
todoList.onclick = performActions; //two action cmpbtn and delbtn perform function below

//function
function createTodo(e){
    //console.log("btn,clicked") function called check in console our button inside the form that will try to send data to server so how to remove sent data to server as per belowline
   e.preventDefault();
//// console.log("btn,clicked")
   //whatever we write on input text that we have to display on console
   var data = todoInput.value
   
   if (data!="") {              //data blank nhi hai to below line excute
////console.log(data)           //we get data in console
    var newDiv = document.createElement('div')//we are create code div button li dynamically line no 25 26 27 HTML   
    newDiv.classList.add("todo");     //we given class to div

    var newLi = document.createElement('li'); //create li
    newLi.innerHTML = data;       //li ke andar data hoga line no.17 js
    
    var cmpbtn = document.createElement('button') //created complete button dynamically
    cmpbtn.classList.add('cmpbtn')//created class for complete button
    cmpbtn.innerHTML = '<i class="fa fa-check"></i>'

    var delbtn = document.createElement('button') //created complete button dynamically
    delbtn.classList.add('delbtn')
    delbtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'


    newDiv.appendChild(newLi)    //div ke niche li ko lagana hai div is parents and li is child
    newDiv.appendChild(cmpbtn) //cmpbtn ko div ke andar add kiya
    newDiv.appendChild(delbtn)  //delete button add in div of li
    todoList.appendChild(newDiv)  //ul-todoList ke niche div ko add kr diya  HTML line no. 22 parent of 24 child

   todoInput.value=""            //input data is empty/blank
   }
   else{
    alert("Input Text Is Blank")
   }
   var audioTag = document.createElement('audio')//create audio
   audioTag.src = "sound.wav"
   document.body.appendChild(audioTag)
   audioTag.play();
}


function performActions(e){  //how to identify uderstand which button clicked
   //var action = e.target       //e.target what we had clicked given information (ex: delbutton clicked )
   //console.log(e.target)       //we are clicking on any button we get class name

   var item = e.target                          //item is check & trash symbols
   //console.log(item.classList[0])    //['cmpbtn', value: 'cmpbtn'] class name and value of class name get output //[0] se first value milegi=(output then cmpbtn)
                                       
   if(item.classList[0] == 'cmpbtn'){
      //console.log("Complete button clicked")     ////output = Complete button clicked
      var parent = item.parentElement;            //is element parent is div and classname = todo 
      console.log(parent)                         //output = <div class = todo we get parent
      parent.classList.toggle('todo-done')        //created or added class here classname = todo-done
     // (add ki jagah toggle se on of show hoga)  //output <div class = todo todo-done usedin CSS

     var audioTag2 = document.createElement('audio')//create audio
     audioTag2.src = "sound1.wav"
     document.body.appendChild(audioTag2)
     audioTag2.play();

                                         
   }
   if(item.classList[0] == 'delbtn'){ //delete button performace
     // console.log("Delete button clicked")
     
     var parent = item.parentElement;             //find -out parent elemnet first
     parent.remove();                           //remove data

     var audioTag1 = document.createElement('audio')//create audio
     audioTag1.src = "sound2.wav"
     document.body.appendChild(audioTag1)
     audioTag1.play();

   }
}
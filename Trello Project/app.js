document.addEventListener('DOMContentLoaded', init);

function init(){

//alert('connected');
function addNewItem(){
  var newItem = document.getElementById('addinput');
  var button = document.getElementById('mybutton');
  var addItemList = document.getElementById('addlisthere');

  button.addEventListener('click',function(e){
    e.stopPropagation();
    var newItemData = newItem.value;
    var li = document.createElement('li');
    
    var spanOngoing = document.createElement('span');
    var iOngoing = document.createElement('i');
      spanOngoing.id= 'ongoing';
      iOngoing.className='fa fa-pencil-square-o fa-lg';
      iOngoing.appendChild(document.createTextNode(''));
      spanOngoing.appendChild(document.createTextNode(''));
      spanOngoing.appendChild(iOngoing);
      console.log(spanOngoing);

    var spanDone = document.createElement('span');
    var iDone = document.createElement('i');
    spanDone.id= 'done';
    iDone.className='fa fa-check-square-o fa-lg';
    iDone.appendChild(document.createTextNode(''));
    spanDone.appendChild(document.createTextNode(''));
    spanDone.appendChild(iDone);
    console.log(spanDone);

    var spanDeleted = document.createElement('span');
    var iDelete = document.createElement('i');
    spanDeleted.id= 'delete';
    iDelete.className='fa fa-trash fa-lg';
    iDelete.appendChild(document.createTextNode(''));
    spanDeleted.appendChild(document.createTextNode(''));
    spanDeleted.appendChild(iDelete);
    console.log(spanDeleted);

    li.appendChild(spanOngoing);
    li.appendChild(spanDone);
    li.appendChild(spanDeleted);
    console.log(li);

    li.className = 'ul#addlisthere li addli';
    li.appendChild(document.createTextNode(newItemData));
    addItemList.appendChild(li);
    newItem.textContent ='';
  });
}   
addNewItem();

function toggleInputDisplay(){
  var showInputDisplay = document.getElementsByClassName('addlistitems');

  var form = document.getElementById('myform');
  //form.style.display = 'none';
  
  showInputDisplay[0].addEventListener('click',function(){
    form.style.display == 'none' ?
      form.style.display = 'block' :
      form.style.display = 'none';
  });
}
toggleInputDisplay();

function addTogTaskList(){
  var addTogList = document.querySelectorAll('span#ongoing');
  console.log(addTogList);

  // addTogList.forEach(function(e){
  //   console.log(e);
  // })

  addTogList.forEach(() => {
      this.addEventListener('click',(e) => {
        e.stopPropagation();
        if(e.target.classList.contains('fa-pencil-square-o')){
          var temp = e.target.parentElement.parentElement;
          var removeOng = temp.firstElementChild;  
          if(temp){
            temp.removeChild(removeOng);
          }

          temp.classList.contains('addli') ? 
          temp.classList.remove('addli') :
          temp.classList.add('ongli');

          temp.classList.contains('ul#addlisthere li') ?
          temp.classList.remove('ul#addlisthere','li') :
          temp.classList.add('ul#addogtask','li');

          var tempClone = temp.cloneNode(true);
          var addTogListItem = document.getElementById('addogtask');
          addTogListItem.appendChild(tempClone);
          var temp = temp.parentElement.removeChild(temp); 
        }
      });
  })
}
addTogTaskList();

function addDoneTaskList(){
  var addDoneList = document.querySelectorAll('span#done');
  console.log(addDoneList);

  // addTogList.forEach(function(e){
  //   console.log(e);
  // })

  addDoneList.forEach(() => {
      this.addEventListener('click', (e) => {
        e.stopPropagation();
        if(e.target.classList.contains('fa-check-square-o')){
          var temp = e.target.parentElement.parentElement;
          //console.log(temp);
          var removeOng = temp.children[0];  
          var removeDone = temp.children[1];  
  
          //console.log(removeOng);
          //console.log(removeDone);
          temp.classList.contains('ul#addlisthere li') ? 
          temp.classList.remove('ul#addlisthere','li') :
          temp.classList.contains('ul#addogtask li' )?
          temp.classList.remove('ul#addogtask','li'):
          temp.classList.add('ul#addcomphere','li');

          temp.classList.contains('addli') ?
            temp.classList.remove('addli') :
            temp.classList.remove('ongli');

            temp.removeChild(removeOng);
            temp.removeChild(removeDone);
          var tempClone = temp.cloneNode(true);
          var addDoneListItem = document.getElementById('addcomphere');
          //console.log(addDoneListItem);
          addDoneListItem.appendChild(tempClone);
          var temp = temp.parentElement.removeChild(temp); 
        }
      });
   
  })
}
addDoneTaskList();

function deleteTaskList(){
  var deleteList = document.querySelectorAll("span#delete");
  //console.log(deleteList);

  //deleteList.forEach((e)=>console.log(e));

  deleteList.forEach((i) => {
    this.addEventListener('mouseup',(e) => {
      e.stopPropagation();
      var temp = e.target;
      if(temp.classList.contains('fa-trash')){
          var tempDel = temp.parentElement.parentElement;
          //console.log(temp);
           tempDel.parentElement.removeChild(tempDel);
           //console.log(removeDeleteItem);
      }
    })
  })
}
deleteTaskList();

function selectOff(){
var addSelectOffList = document.querySelectorAll('ul#addlisthere');
var ongSelectedOffList = document.querySelectorAll('ul#addogtask');

 addSelectOffList.forEach((e => console.log(e)));
 ongSelectedOffList.forEach((e => console.log(e)));

addSelectOffList.forEach(()=> {
  this.addEventListener('mouseup',(e) => {
    e.stopPropagation();
    var temp = e.target; 
    if(temp.classList.contains('addli ') ){
        temp.classList.add('addselected');
      } else if (temp.classList.contains('addli addselected')) {
        temp.classList.remove('addselected');
      } else {
        return;
      }
  })
})

ongSelectedOffList.forEach(()=> {
  this.addEventListener('mouseup',(e) => {
    e.stopPropagation();
    var temp = e.target;
    //console.log(temp);
      if(temp.classList.contains('ongli')){
        console.log('fired');
        if(temp.classList.contains('ongselected')){
          console.log('still firing');
            temp.classList.add('ongselected');
           } else { //if(temp.classList.contains('ongli ongselected')){
            temp.classList.remove('ongselected');
          }
      }
   })
        
})

}
selectOff();

}


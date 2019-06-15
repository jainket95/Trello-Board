document.addEventListener('DOMContentLoaded', init);

function init(){
//alert('connected');
function addNewItem(){
  var newItem = document.getElementById('addinput');
  var button = document.getElementById('mybutton');
  var addItemList = document.getElementById('addlisthere');

  button.addEventListener('click',function(e){
    e.preventDefault();
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

    li.className = 'ul#addlisthere li';
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
    if(form.style.display == 'none'){
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  });
}

toggleInputDisplay();

function addTogTaskList(){
  var addTogList = document.querySelectorAll('.fa-pencil-square-o');
  console.log(addTogList);

  addTogList.forEach(function(e){
    console.log(e);
  })

  for(var i=0; i < addTogList.length ; i++){
    addTogList[i].addEventListener('click', function(e){
      if(e.target.classList.contains('fa-pencil-square-o')){
        var temp = e.target.parentElement.parentElement;
        
        console.log('tog function fired.');
        console.log(temp);

        var cloned = temp.cloneNode(true);
        console.log(cloned);
        
        var addTogListItem = document.getElementById('addogtask');
        console.log(addTogListItem);
        addTogListItem.appendChild(cloned);
        var temp = temp.parentElement.removeChild(temp); 
        
      }
    })
 
  }

  
  
}
addTogTaskList();



}


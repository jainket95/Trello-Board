
function init(){
  function addNewItem(){
    var countAddLi = 'addLi';
    var newItem = document.getElementById('addinput');
    var button = document.getElementById('mybutton');
    var addItemList = document.getElementById('addlisthere');
    
    button.addEventListener('click', (e) => {
      e.preventDefault();
      var newItemData = newItem.value;
      
      countAddLi += addItemList.childElementCount;
      var newItemData = newItem.value;
      
      var spanOngoing = document.createElement('span');
      spanOngoing.innerHTML = '<i class="fa fa-pencil-square-o fa-lg"></i>';
      spanOngoing.className= 'ongoing';
      spanOngoing.appendChild(document.createTextNode(''));
      console.log(spanOngoing);
      
      var spanDone = document.createElement('span');
      spanDone.innerHTML = '<i class="fa fa-check-square-o fa-lg"></i>';
      spanDone.className= 'done';
      spanDone.appendChild(document.createTextNode(''));
      console.log(spanDone);
      
      var spanDelete = document.createElement('span');
      spanDelete.innerHTML = '<i class="fa fa-trash fa-lg"></i>';
      spanDelete.className= 'delete';
      spanDelete.appendChild(document.createTextNode(''));
      console.log(spanDelete);
      
      
      var li = document.createElement('li');
      li.className = 'ul#addlisthere li addli';
      li.setAttribute('id', countAddLi);
      li.appendChild(document.createTextNode(newItemData));
      
      li.appendChild(spanOngoing);
      li.appendChild(spanDone);
      li.appendChild(spanDelete);
      console.log(li);
      
      addItemList.appendChild(li);
      newItem.value ='';
    })
  }
  addNewItem();

function toggleInputDisplay(){
      var showInputDisplay = document.getElementsByClassName('addlistitems');
      
    
      var form = document.getElementById('myform');
      // form.style.display = 'none';
      
      
      showInputDisplay[0].addEventListener('click',function(){
        form.style.display == 'none' ?
          form.style.display = 'block' :
          form.style.display = 'none';
      });
    }
    toggleInputDisplay();
    
  
  function addTogTaskList(){
    var addTogList = document.querySelectorAll('.addli');
    var ongList = document.getElementById('addogtask');

    var  countOngLi = 'ongLi'; 
    
    for(var i = 0; i < addTogList.length ; i++){
      addTogList[i].addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-pencil-square-o') || e.target.classList.contains('ongoing')){
          e.stopPropagation();

          countOngLi += ongList.childElementCount;
          var  temp = e.currentTarget.getAttribute('id');
          var getLiNode = document.getElementById(temp);
            
          var removeOng = getLiNode.getElementsByClassName('ongoing');
          removeOng[0].remove();

          getLiNode.classList.contains('addli') ? 
          getLiNode.classList.remove('addli') :
          getLiNode.classList.add('ongli');

          getLiNode.classList.contains('ul#addlisthere li') ?
          getLiNode.classList.remove('ul#addlisthere','li') :
          getLiNode.classList.add('ul#addogtask','li');
          
          getLiNode.removeAttribute('id');
          getLiNode.setAttribute('id', countOngLi);

          var tempClone = getLiNode.cloneNode(true);
          console.log(tempClone);
          var addTogListItem = document.getElementById('addogtask');
          addTogListItem.appendChild(tempClone);
          var getLiNode = getLiNode.parentElement.removeChild(getLiNode);
      }
      })
    }
  }
  addTogTaskList();

function addDoneTaskList(){
    
    var addDoneList = document.querySelectorAll('.addli');
    var doneList = document.getElementById('addcomphere');

    var  countDoneLi = 'doneLi';

    for(var i = 0; i < addDoneList.length ; i++){
      addDoneList[i].addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-check-square-o') || e.target.classList.contains('done')){
          e.stopPropagation();
          console.log('fired from the addli');

          countDoneLi += doneList.childElementCount;

          var  temp = e.currentTarget.getAttribute('id');
          var getLiNode = document.getElementById(temp);
          
          var removeOng = getLiNode.getElementsByClassName('ongoing');
          var removeDone = getLiNode.getElementsByClassName('done');
          removeDone[0].remove();
          removeOng[0].remove();

          getLiNode.classList.contains('ul#addlisthere li') ? 
          getLiNode.classList.remove('ul#addlisthere','li') :
          getLiNode.classList.add('ul#addcomphere','li');
          
          getLiNode.classList.contains('addli') ?
          getLiNode.classList.remove('addli') :    
          getLiNode.classList.remove('doneli');

          getLiNode.removeAttribute('id');
          getLiNode.setAttribute('id', countDoneLi);
          
          var tempClone = getLiNode.cloneNode(true);
          //console.log(tempClone);
          var addDoneListItem = document.getElementById('addcomphere');
          addDoneListItem.appendChild(tempClone);
          var getLiNode = getLiNode.parentElement.removeChild(getLiNode);
        }
      })
    }
    
    
    var ongDoneList = document.querySelectorAll('.ongli');
    console.log(ongDoneList); 
    
    for(var i = 0; i < ongDoneList.length ; i++){
      ongDoneList[i].addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-check-square-o') || e.target.classList.contains('done')){
          e.stopPropagation();
          console.log('fired from the ongli');

          countDoneLi += doneList.childElementCount;

          var  temp = e.currentTarget.getAttribute('id');
          

          var getLiNode = document.getElementById(temp);
          var removeDone = getLiNode.getElementsByClassName('done');
          removeDone[0].remove();          
          
          getLiNode.classList.contains('ul#addogtask li') ? 
          getLiNode.classList.remove('ul#addogtask','li') :
          getLiNode.classList.add('ul#addcomphere','li');
          
          getLiNode.classList.contains('ongli') ?
          getLiNode.classList.remove('ongli') :    
          getLiNode.classList.remove('doneli');

          getLiNode.removeAttribute('id');
          getLiNode.setAttribute('id', countDoneLi);

          var tempClone = getLiNode.cloneNode(true);
          //console.log(tempClone);

          var addDoneListItem = document.getElementById('addcomphere');
          addDoneListItem.appendChild(tempClone);
          var getLiNode = getLiNode.parentElement.removeChild(getLiNode);
       }
      })
    }

  }
  addDoneTaskList();

  function deleteTaskList(){
    var doneDeleteList = document.querySelectorAll('.addli');
    console.log(doneDeleteList); 
    
    for(var i = 0; i < doneDeleteList.length ; i++){
      doneDeleteList[i].addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-trash') || e.target.classList.contains('delete')){
          e.stopPropagation();
          
          var  temp = e.currentTarget.getAttribute('id');
          
          var getLiNode = document.getElementById(temp);
          
          getLiNode.remove();

       }
      })
    }

    var doneDeleteList = document.querySelectorAll('.ongli');
    console.log(doneDeleteList); 
    
    for(var i = 0; i < doneDeleteList.length ; i++){
      doneDeleteList[i].addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-trash') || e.target.classList.contains('delete')){
          e.stopPropagation();
          
          var  temp = e.currentTarget.getAttribute('id');
          
          var getLiNode = document.getElementById(temp);
          
          getLiNode.remove();

       }
      })
    }


    var doneDeleteList = document.querySelectorAll('.doneli');
    console.log(doneDeleteList); 
    
    for(var i = 0; i < doneDeleteList.length ; i++){
      doneDeleteList[i].addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-trash') || e.target.classList.contains('delete')){
          e.stopPropagation();
          
          var  temp = e.currentTarget.getAttribute('id');
          
          var getLiNode = document.getElementById(temp);
          
          getLiNode.remove();

       }
      })
    }


    }
    deleteTaskList();





}



document.addEventListener('DOMContentLoaded', init);
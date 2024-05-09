const inputForm = document.getElementById('inputForm');
const itemInp = document.getElementById('itemInput');
const itemList = document.getElementById('itemList ');
const clearBtn = document.getElementById('clear')



function addItem(e){
    e.preventDefault();
    //validation 
    let newValue = itemInp.value;
    if(newValue === ''){
        alert('Please Add item ');
        return
    }
    //create element 

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newValue))
    const button = createButton ('removeItem border: none; padding-left: 15px');
    li.appendChild(button)
    itemList.appendChild(li);

    itemInp.value = '';
    
   
}
function createButton(classes){
    button = document.createElement('button');
    button.className= classes;
    const icon = createIcon('fa-solid fa-trash');
    button.appendChild(icon)
    return button 

}
function createIcon (classes){
    icon = document.createElement('i');
    icon.className= classes;
    return icon 
}


function removeItem(e){
    if(e.target.parentElement.classList.contains('removeItem')){
        e.target.parentElement.parentElement.remove();
    }
  
}

function clearItems(){
    //first solution to remove item 
//   itemList.innerHTML= '';
  //secod way but it not work properly after using this no new item will be added in listem 
// itemList.remove();

//third way to remove item 

while (itemList.firstChild){
    itemList.removeChild(itemList.firstChild);

}
    console.log('item deleted ');
}
//add event listener 

inputForm.addEventListener('submit' , addItem);
itemList.addEventListener('click' , removeItem )
clearBtn.addEventListener('click' , clearItems)



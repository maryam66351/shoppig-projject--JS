const inputForm = document.getElementById('inputForm');
const itemInp = document.getElementById('itemInput');
const itemList = document.getElementById('itemList ');
const clearBtn = document.getElementById('clear')
const filterM = document.getElementById('filter')
// const items =itemList.querySelectorAll('li');


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
    //adding list item to the DOM 
    itemList.appendChild(li);
    CheckUI()
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
       if(confirm('Are you sure to remove Item')){
        e.target.parentElement.parentElement.remove();
       }
       CheckUI();
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
    CheckUI();
}


function CheckUI(){
    const items =itemList.querySelectorAll('li');
    console.log(items)
    if(items.length === 0){
        filterM.style.display='none'
       clearBtn.style.display='none'
    }else{
        filterM.style.display='block'
        clearBtn.style.display='block'
    }
}

//filterM function 
function filterFunction(e){
    const items =itemList.querySelectorAll('li');
   const text=  e.target.value.toLowerCase();

   items.forEach((item) => {
    const newItem = item.firstChild.textContent.toLowerCase();
    if(newItem.indexOf(text) != -1){
        item.style.display= 'flex'
    }else{
        item.style.display= 'none'
       
    }
   })
    

}
//add event listener 

inputForm.addEventListener('submit' , addItem);
itemList.addEventListener('click' , removeItem );
clearBtn.addEventListener('click' , clearItems);
filterM.addEventListener('input', filterFunction);

CheckUI();


/*local storage and session storage
    ===========> session storage will last untill the page load but local storage will least 

   ======> LOCAL STORAGE ======>
    It is very help full to contect data base to over server 

    Alert ===> dont use local storage for sensitive data 
    ho ge string he but look like an array
*/

localStorage.setItem('name ' , 'maryam ' );
localStorage.setItem('roll ' , 'developer  ' );
localStorage.setItem('city  ' , 'lahore ' );
console.log(localStorage.getItem('name '));


sessionStorage.setItem('name' , 'zahira ')

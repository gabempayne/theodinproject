var toAdd = document.createDocumentFragment();
for(var i=0; i < 11; i++){
   var newDiv = document.createElement('div');
   newDiv.id = 'r'+i;
   newDiv.className = 'ansbox';
   toAdd.appendChild(newDiv);
}

document.appendChild(toAdd);
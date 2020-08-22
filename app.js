// Calling Elements
var inputbtn = document.getElementById('inputbtn');
var additem = document.getElementById('additem');
var dltitem = document.getElementById('dltitem');
var text = document.getElementById('text');


// firebase 
firebase.database().ref('to-do').on('child_added', function(data){

    
var para = document.createElement('p');
text.append(para);
para.append(data.val().value)


// Add delet btn in each text node
var btn = document.createElement("button");
btn.innerHTML = "Delete";
para.appendChild(btn);
btn.style.padding = '4px';
btn.style.float = 'right';
btn.setAttribute("onclick" , "dlteachitem(this)")

// Add done btn in each text node
var btn = document.createElement("button");
btn.innerHTML = "Done";
para.appendChild(btn);
btn.style.padding = '4px';
btn.style.float = 'right';
btn.style.marginRight = '10px';
btn.setAttribute("onclick" , "done(this)")

// Add EDIT btn in each text node
var btn = document.createElement("button");
btn.innerHTML = "EDIT";
para.appendChild(btn);
btn.style.padding = '4px';
btn.style.float = 'right';
btn.style.marginRight = '10px';
btn.setAttribute("onclick" , "edit(this)")

//empty input after hit add
inputbtn.value = "";
})



// Adding Items
function additems(){
    let databse = firebase.database().ref('to-do')
    let key = databse.push().key;
    var todo = {
    value: inputbtn.value,
    key: key
    }
    databse.child(key).set(todo) 

}

function edit(e){
	var val = e.parentNode.firstChild.nodeValue;
	var editnode = prompt("Enter new TEXT", val);
	e.parentNode.firstChild.nodeValue = editnode;
}

function done(e){
    e.parentNode.classList.toggle("checked")
}

function dlteachitem(e){
    e.parentNode.remove();
}

// Deleting All Items
function deletitems(){
    text.innerHTML = " ";
}
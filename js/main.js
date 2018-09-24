let notesDiv = document.getElementById('notes');
showAllItems();

document.getElementById ('add').addEventListener ( 'click', function () {
    let value = document.getElementById('inputField').value;
    if(value) addItemToList(value);
    document.getElementById('inputField').value = '';
    showAllItems(); 
});

document.getElementById('inputField').addEventListener('keydown', function(e){
    let key = e.which || e.keyCode;
    if(key === 13){
        addItemToList(document.getElementById('inputField').value);
        document.getElementById('inputField').value = '';
        showAllItems(); 
    }
});

document.getElementById ('delete').addEventListener ( 'click', function () {
    if (confirm('Are your sure you want to delete all of the entries?')) {
        clearLocalstorage();
        showAllItems(); 
    }
});

function addItemToList (item) {
    var existingEntries = JSON.parse(localStorage.getItem("items"));
    if(existingEntries == null) existingEntries = [];
    var entry = item;
    existingEntries.push(entry);
    localStorage.setItem("items", JSON.stringify(existingEntries));    
}

function showAllItems () {
    let items = JSON.parse(localStorage.getItem('items'));
    if(items !== null && items !== 'undefined') {
        notesDiv.innerHTML = "";
        for (let i = 0; i < items.length; i++) {
            const text = items[i];
            const element = "<p class='note'>"+text+"</p>";
            notesDiv.innerHTML += element;
        }
    }
    else {
        notesDiv.innerHTML = "";
        notesDiv.innerHTML += "No notes in list! <BR>";
    }
}

function clearLocalstorage(){
    localStorage.clear();
    localStorage.setItem('notes', []);
    showAllItems(); 
}
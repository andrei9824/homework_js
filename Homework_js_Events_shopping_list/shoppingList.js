let maxItems = 10;

function addItem(event) {
    event.preventDefault();

    let itemInput = document.getElementById('itemInput');
    let itemValue = itemInput.value.trim();

    if (itemValue !== '') {
        let shoppingList = document.getElementById('shoppingList');
        let listItem = document.createElement('li');
        listItem.textContent = itemValue;

        
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Șterge';
        deleteButton.addEventListener('click', function() {
            shoppingList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);

        
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.addEventListener('change', function() {
            if (checkBox.checked) {
                listItem.style.textDecoration = 'line-through';
            } else {
                listItem.style.textDecoration = 'none';
            }
        });
        listItem.insertBefore(checkBox, listItem.firstChild);

        shoppingList.appendChild(listItem);

        itemInput.value = '';

        
        if (shoppingList.children.length === maxItems) {
            itemInput.disabled = true;
            document.querySelector('#addItemForm button[type="submit"]').disabled = true;
        }
    }
}

var addItemForm = document.getElementById('addItemForm');
addItemForm.addEventListener('submit', addItem);
var counter = 0;
function add() {
    // var node = document.createElement('li');
    var inputValue = document.getElementById('addInput').value;
    var text = document.createTextNode(inputValue);
    var node = document.createElement('li');
    node.appendChild(text);
    node.innerHTML = '<input type="text" id="textInput"' + counter + ' value=' + inputValue + '><button class="btn col s6 m3 l3" onclick="edit();">Edit Task</button><button id="update_btn" class="btn col s6 m3 l3" onclick="update();">Update Task</button><button id="delete_btn" class="btn col s6 m3 l3 offset-s3" onclick="del();">Delete Task</button>';
    var child = node.firstChild;
    // child.style.marginBottom = "-5px";
    child.style.color = "white";
    child.style.fontSize = "20px";
    child.setAttribute("disabled", 'disabled');
    document.getElementById('todoList').appendChild(node);
    counter++;
    node.id = "remove";
    child.className = "edit update";
};

function del() {
    document.getElementById('remove').remove();
};

function edit() {
    child = document.getElementById('remove').firstChild;
    child.removeAttribute('disabled');
};

function update() {
    child = document.getElementById('remove').firstChild;
    child.setAttribute("disabled", 'disabled');
};
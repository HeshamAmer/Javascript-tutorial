/**
 * Created by Gedy on 5/7/2016.
 */
var idCounter=0;
function addToList(listName){

    var Lists={
        todo:document.getElementById('todo'),
        done:document.getElementById('done')
    };
    var inputText=document.getElementById("input").value.trim();

    if (inputText.length>0) {
        var btn = document.getElementById("btn");

        var li = document.createElement("li");

        var chkbox = document.createElement("input");
        chkbox.setAttribute("type", "checkbox");

        chkbox.addEventListener('click', function () {
            var list = this.parentElement.parentElement.id; //Todo or Done
            Lists[list === 'done' ? 'todo' : 'done'].appendChild(this.parentElement);
            this.checked = false;
            //console.log(this.parentElement.parentElement.id);
        });
        li.appendChild(chkbox);
        li.appendChild(document.createTextNode(inputText));
        var ID = Lists[listName].length;
        li.setAttribute("id", idCounter++);
        Lists[listName].appendChild(li);
        console.log("input inserted is:" + inputText);
    }
}


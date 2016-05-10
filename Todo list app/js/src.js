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
        var textChild= document.createElement("span");
        textChild.innerHTML=inputText;
        li.appendChild(textChild);
            var ID = Lists[listName].length;
            li.setAttribute("id", idCounter++);
        var Select = document.createElement("select");
        Select.id = "sel1";
        Select.name="sel1";

        var Colors=["red","green","blue"];
        for (var i=0;i<Colors.length;i++){
            var Option1=  document.createElement('option');
            Option1.setAttribute("value",Colors[i]);
            Option1.setAttribute("text",Colors[i]);
            Option1.innerText=Colors[i];
            Select.appendChild(Option1);
        }
//Kewl :D

        li.appendChild(Select);
        Lists[listName].appendChild(li);
        console.log("input inserted is:" + inputText);
    }
}


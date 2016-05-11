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
        var ID = idCounter;
        textChild.innerHTML=inputText;
        textChild.setAttribute("id","span"+idCounter)
        li.appendChild(textChild);

        li.setAttribute("id", idCounter++);

        var Select = document.createElement("select");
        Select.id = "sel1";
        Select.name="sel1";

        var Colors=["black","red","green","blue"];


            for (var i=0;i<Colors.length;i++){
            var Option1=  document.createElement('option');
            Option1.setAttribute("value",Colors[i]);
            Option1.setAttribute("text",Colors[i]);
            Option1.innerText=Colors[i];
            Select.onchange=function (){
                var id=this.parentElement.getAttribute('id');
                id="span"+id;
                document.getElementById(id).style.color=Select.options[Select.selectedIndex].value;
                console.log("I'm in the Select event listner");
            }

            Select.appendChild(Option1);

        }
        li.appendChild(Select);
        li.textContent.fontcolor("red");
        Lists[listName].appendChild(li);
        console.log("input inserted is:" + inputText);
        document.getElementById('input').value="";
    }
}

function handleImage(){
    var img=document.getElementById("im1");
    img.onmouseover =function(){
        img.setAttribute("src","images/12552904_1933384730220566_167193102920467850_n.jpg");
    }
    img.onmouseout = function(){
        img.setAttribute("src","images/352810-celeste-star.jpg");
    }

}

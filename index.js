var boardList=[];
var idName=0;
function addBoard(id){
    idName ++;
    var listID='projectList'+'_'+idName;
    var boardID='board_'+idName;
    console.log(id);
    var tempBlock='<section class="board-block" id="'+boardID+'">' +
    '<div id="boardHdr">'+id.value+
        '<button id="removebtn" onclick="removeCards('+listID+')">Remove Cards</button>'+
    '</div>'+
    '<div class="project-block-holder" id='+listID+'>'
    +'</div>'+
'</section>' 
document.getElementById('boardBlockList').innerHTML+=tempBlock;
showProjects(listID);
boardList.push({
    List_Id:listID,
    board_id:boardID,
    templateNew:tempBlock
});
document.getElementById('menuList').innerHTML +="<li onClick=loadMenu('"+boardID+"')>"+id.value+"<hr></li>";
id.value=id.defaultValue;
};


var projectListObject=[                                             
    {                                                                                   
        name:'Project whatnot'                                               //This block is for adding new project cards on the project-block-holder           
    },                                                                      //Array for projects name value data etc
    {
        name:'Project cheese cake'
    },
    {
        name:'Project Noodles'
    }   
]; 

function loadMenu(element){
    console.log(element.id);
    for(var i=0; i<boardList.length;i++){        
        if(boardList[i].board_id==element){            
            document.getElementById(boardList[i].board_id).style.display = 'block';
        } else {
            document.getElementById(boardList[i].board_id).style.display = 'none';
        }    
    }    
}


function showProjects(listID){

projectListObject.forEach(function(value,index){
    var template='<div class="project-block">'+value.name+'<ul>'+
            '<li class="tasklist">Task one</li>'+
            '<li class="tasklist">Task two</li>'+
            '</ul>'+
            '</div>'+
            '</div>';
    document.getElementById(listID).innerHTML+=template;
});

}
//This is for the toggle menu from left
function toggleMenu(){
    var toggleVariable=document.getElementsByClassName('menu-block')[0];
    if(toggleVariable.style.display=='none'){
        toggleVariable.style.display='block';
    }
    else{
        toggleVariable.style.display='none';
    }
 
};

//remove cards function
function removeCards(element)
{
    document.getElementById(element.id).innerHTML='';
};
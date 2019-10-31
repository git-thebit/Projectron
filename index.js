//This is for adding new project cards on the project-block-holder

var projectListObject=[                                             
    {                                                                                   
        name:'Project CardiB'                                                           
    },                                                                      //Array for projects name value data etc
    {
        name:'Project Nicki Minaj'
    },
    {
        name:'Project Three'
    }   
];
showProjects();
function showProjects(){

projectListObject.forEach(function(value,index){
    console.log(value);
    var template='<div class="project-block">'+value.name+'<ul>'+
            '<li>Task one</li>'+
            '<li>Task two</li>'+
        '</ul>'+
    '</div>'+
'</div>';
document.getElementById('projectList').innerHTML+=template;
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
 
}

//remove cards function
function removeCards()
{
    document.getElementById('projectList').innerHTML='';
}

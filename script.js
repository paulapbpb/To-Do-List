var removebtn = $("#remove");
var completed = $("#complete");


var additem = function() {
    var userinput = $("#input").val();
    $("#todolist").append("<li class='task'>" + userinput + "<span id='remove'>    X</span><span id='complete'>     <input id='box1' type='checkbox' /></span></li>");
    $("#input").val("");
}

var cross = function() {
    alert("You pressed an item");
}

$("#input").keypress(function(e) {
    if(e.which == 13) {
        additem();
    }
});


$("ul").on("click", "span#remove", function(event){
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
    event.stopPropagation();
})

$("ul").on("click", "span#complete", function(event) {
           $(this).parent().toggleClass( "completed" )
});

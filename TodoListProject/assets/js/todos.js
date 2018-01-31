$("ul").on("click","li", function(){
  $(this).toggleClass("completed");
});

$("input[type= 'text']").css("display","none");

$("ul").on("click","span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type= 'text']").keypress(function(event){
  if (event.which === 13) {
    //grab the new todo from input
    var newTodo = $(this).val();
    $(this).val("");
    // Add new todo/li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + newTodo + "</li>");
  }
});

$(".fa-pencil-square").click(function(){
  $("input[type= 'text']").fadeToggle();
});

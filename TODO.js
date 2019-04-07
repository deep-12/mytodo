$("ul").on("click","li",function(){
     $(this).toggleClass("style");
});
$("ul").on("click","li span",function(event){
     $(this).parent().fadeOut(1000,function(){
           this.remove();
     });
     event.stopPropagation();
});
$("input").keypress(function(event){
    if(event.which==13)
    {
       var text = $(this).val(); 
       $(this).val(""); 
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+text+"</li>");
    }
});
$("h1 span").click(function(){
        $('input').fadeToggle();
});
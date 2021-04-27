
$(document)(function(){
    $('block__title').on('click',function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
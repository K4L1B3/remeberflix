
$(document).ready(function(){

    $(".arrow").click(function(){
        console.log("clickou");
        let parent =  $(this).parent()
        if ($(this).hasClass("arrowRight")){
            let pos = $(parent).scrollLeft()
            $(parent).animate({
                scrollLeft:pos+300
            }, 500)
        } else if($(this).hasClass("arrowLeft")){
            let pos = $(parent).scrollLeft()
            $(parent).animate({
                scrollLeft:pos-300
            }, 500)
        }
        console.log(parent)

    })
}) 
$(document).ready(function(){
    $('.input-field').focusout(function(){
        var inputValue=$(this).value()
        if(inputValue===''){
         $(this).removeClass('has-value')
        }
        else{
            $(this).addClass('has-value')
        }
    })
})
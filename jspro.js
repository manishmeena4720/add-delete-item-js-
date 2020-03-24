$(document).ready(function(){
    function fn(){
        $(this).parent().remove();
    }
    $('#btn1').click(function(){
        var a=$('#user').val();
        if(a=="")
        {
            alert("Empty Input");
            return;
        }
        $("#main").append('<div class="div"><p class="p">aaaaaaa</p><button class="btn">X</button></div>');
        $("p").last().text(a);
        $('#user').val("");
        $("Button").last().on("click", fn);
    })
    $('.btn').click(function(){
        $(this).parent().remove();
    });
})
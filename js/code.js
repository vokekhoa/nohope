$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
            $(".gotop").fadeIn();
        } else {
            $(".gotop").hide();
        }
    });
    $(".gotop").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

    $("#sai").hide();

    $("#sub").click(function(){
        var Name=$("#name").val();
        var Pass=$("#pass").val();
        var Pass1=$("#pass1").val();
        var Pass2=$("#pass2").val();
        var Pass3=$("#pass3").val();
        if(Name==""){
            $("#name").css("border"," rgb(247, 7, 7) 2px solid");
            $("#sai").show();
        }
        if(Pass==""){
            $("#pass").css("border", " rgb(247, 7, 7) 2px solid");
            $("#sai").show();
        }
        if(Pass1==""){
            $("#pass1").css("border", " rgb(247, 7, 7) 2px solid");
            $("#sai").show();
        }
        if(Pass2==""){
            $("#pass2").css("border", " rgb(247, 7, 7) 2px solid");
            $("#sai").show();
        }
        if(Pass3==""){
            $("#pass3").css("border", " rgb(247, 7, 7) 2px solid");
            $("#sai").show();
        }
    })



});
        
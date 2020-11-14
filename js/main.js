$(function(){
    // sidebar display
    $(".navbar .nav_items .fa-bars").click(function(){
        $(".sidebar").css({"right": "0"})
    })
    $(".sidebar .side_in .side_profile i").click(function(){
        $(".sidebar").css({"right": "-100%"})
    })

    // Dashboard sidebar
    $(".side_nav .side_in .side_profile i").click(function(){
        $(".side_nav").css({"left": "-300px"})
        $(".main_body").css({"padding": "100px 50px 50px 90px"})
        $(".contact_bg h3").css({"margin-left": "150px"})
    })
    $(".open_side").click(function(){
        $(".side_nav").css({"left": "0"})
        $(".main_body").css({"padding": "100px 50px 50px 350px"})
        $(".contact_bg h3").css({"margin-left": "350px"})
    })

    // Avatar Upload
    document.querySelector('.main_body .profile .card #avatar-upload').addEventListener('change', readURL, true);
    function readURL(){
        var file = document.querySelector(".main_body .profile .card #avatar-upload").files[0];
        var reader = new FileReader();
        reader.onloadend = function(){ 
            document.querySelector('.main_body .profile .card .img_upload').style.backgroundImage = "url(" + reader.result + ");";       
        }
        if(file){
            reader.readAsDataURL(file);
        }
    }

    $(document).ready(function(){
        $('#birth-date').mask('00/00/0000');
        $('#phone-number').mask('0000-0000');
       })
})
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-user');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }
        else{
            $(this).prev().attr('type', 'password');
        }
    });

});
document.querySelector('#creacc').addEventListener('click', function(e){
    e.preventDefault(); // chặn hành vi mặc định của phần tử
    window.location.href = "/Form-create/create_account.html";
});
$(document).ready(function() {
    $("#form-login").submit(function(e) {
        e.preventDefault(); // chặn gửi form thật
        window.location.href = "/Main/main.html"; // chuyển hướng
    });
});

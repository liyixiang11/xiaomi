var z_inp = $('.z-inp')
var m_inp = $('.m-inp')
var $btn = $('.btn')
$btn.click(function () {
    if (z_inp.val() != '' && m_inp.val() != '') {
        $.ajax({
            type: 'post',
            url: 'php/login.php',
            contentType: 'application/json',
            data: JSON.stringify({
                name: z_inp.val(),
                password: m_inp.val()
            }),
            success: function (data) {
                if (data.code == 200) {
                    location.href = 'xiaomi-SY.html';
                } else {
                    $('.denglushibai').css("display", "block")
                }

            }
        })
    }else{
        $('.denglushibai1').css("display", "block")
    }
})
z_inp.focus(function(){
    $('.denglushibai').css("display", "none")
    $('.denglushibai1').css("display", "none")
})
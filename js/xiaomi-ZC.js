var z_inp = $('.country_select')
var m_inp = $('.tel_input')
var $btn = $('.login_up_btn')
oinp1 = $('.inp1')
oinp2 = $('.inp2')
oinp3 = $('.inp3')
$btn.click(function () {
    if (oinp1.val() != '' && oinp2.val() != '' && oinp3.val() != '') {
        $.ajax({
            type: 'post',
            url: 'php/register.php',
            contentType: 'application/json',
            data: JSON.stringify({
                name: z_inp.val(),
                password: m_inp.val()
            }),
            success: function (data) {
                if (data.code == 200) {
                    location.href = 'xiaomi-DL.html';
                }
            }
        })
    }

})

oinp3.blur(function () {
    if (oinp2.val() != oinp3.val()) {
        alert('两次输入的密码不同,请重新输入');
        oinp2.val() = '';
        oinp3.val() = '';
    }
})

oinp1.blur(function () {
    $.ajax({
        type: 'post',
        url: 'php/zhuce.php',
        contentType: 'application/json',
        data: JSON.stringify({
            name: z_inp.val(),
        }),
        success: function (data) {
            if (data.code == 200 && oinp1.val() != '') {
                $('.inp1_tishi').css("display", "block")
            } else if (data.code == 1000 && oinp1.val() != '') {
                $('.inp1_tishi2').css("display", "block")
            }
        }
    })
})
oinp1.focus(function () {
    $('.inp1_tishi').css("display", "none")
    $('.inp1_tishi2').css("display", "none")
})
var shopCar = (function () {
    var shopList = localStorage.shopList
    shopList = JSON.parse(shopList)
    return {
        init: function () {
            this.fn(shopList)
            this.event()
        },
        event: function () {
            $('.shanchu').click(function () {
                var tr = $(this).parents(".item-box").index('.item-box');
                shopList.splice(tr, 1);
                localStorage.shopList = JSON.stringify(shopList);
                $(this).parents('.item-box').remove()
                if ($(this).parents('.item-box').find('.xuanze').prop("checked") == true) {
                    $('#J_cartTotalNum').text($('#J_cartTotalNum').text() - 1)
                    $('#J_selTotalNum').text($('#J_selTotalNum').text() - $(this).parents(
                            '.item-box').find('.shuliang')
                        .val())
                    $('#J_cartTotalPrice').text(parseInt($('#J_cartTotalPrice').text()) -
                        parseInt($(this).parents(
                            '.item-box').children('.zongfeiyong').text()))
                }
            })

            $(".quanxuan").click(function () {
                if (this.checked) {
                    var zzz = 0;
                    var xxx = 0;
                    $('#J_cartTotalNum').text(0)
                    $('#J_selTotalNum').text(0)
                    $("input[type='checkbox']").prop("checked", true);
                    $('#J_cartTotalNum').text($('#J_cartTotalNum').text() - 0 + $(
                        "input[type='checkbox']").length - 1)

                    var x1 = $('.shuliang').val()
                    for (var i = 0; i < $('.shuliang').length; i++) {
                        zzz = zzz - 0
                        zzz += $('.shuliang')[i].value - 0
                        xxx += $('.shuliang')[i].value * parseInt($('.danjia')[i].innerHTML)
                    }
                    $('#J_selTotalNum').text(zzz)
                    $('#J_cartTotalPrice').text(xxx)
                } else {
                    $("input[type='checkbox']").prop("checked", false);
                    $('#J_cartTotalNum').text(0)
                    $('#J_selTotalNum').text(0)
                    $('#J_cartTotalPrice').text(0)
                }

            });
            $('.J_minus').click(function () {

                if ($(this).siblings('.shuliang').val() >= 1) {
                    var tr = $(this).parents(".item-box").index('.item-box');
                    shopList[tr].goods_num = shopList[tr].goods_num - 1;
                    localStorage.shopList = JSON.stringify(shopList);
                    $(this).siblings('.shuliang').val($(this).siblings('.shuliang').val() - 1);
                    $(this).parent('.goods_num').siblings('.zongfeiyong').text($(this).parent(
                            '.goods_num').siblings(
                            '.zongfeiyong').text().match(/\d+/) - $(this).parent(
                            '.goods_num').siblings('.danjia').text()
                        .match(/\d+/) + '元')
                    console.log($(this).parent('.goods_num').siblings('.goods_sel').children(
                        ".xuanze").prop("checked"))
                    if ($(this).parent('.goods_num').siblings('.goods_sel').children(".xuanze")
                        .prop("checked") == true) {
                        $('#J_selTotalNum').text($('#J_selTotalNum').text() - 1)
                        $('#J_cartTotalPrice').text(parseInt($('#J_cartTotalPrice').text()) -
                            parseInt($(this).parent(
                                '.goods_num').siblings('.danjia').text()))
                    }


                }
            });
            $('.J_plus').click(function () {
                if ($(this).siblings('.shuliang').val() >= 0) {
                    var tr = $(this).parents(".item-box").index('.item-box');
                    shopList[tr].goods_num = shopList[tr].goods_num + 1;
                    localStorage.shopList = JSON.stringify(shopList);
                    $(this).siblings('.shuliang').val($(this).siblings('.shuliang').val() - 0 +
                        1);
                    $(this).parent('.goods_num').siblings('.zongfeiyong').text(parseInt($(this)
                        .parent('.goods_num').siblings(
                            '.zongfeiyong').text().match(/\d+/)) + parseInt($(this).parent(
                        '.goods_num').siblings(
                        '.danjia').text().match(/\d+/)) + '元')
                    if ($(this).parent('.goods_num').siblings('.goods_sel').children(".xuanze")
                        .prop("checked") == true) {
                        $('#J_selTotalNum').text($('#J_selTotalNum').text() - 0 + 1)
                        $('#J_cartTotalPrice').text(parseInt($('#J_cartTotalPrice').text()) +
                            parseInt($(this).parent(
                                '.goods_num').siblings('.danjia').text()))

                    }
                }
            });
            $('.xuanze').click(function () {
                var zzz = 0;
                if (this.checked) {
                    $('#J_cartTotalNum').text($('#J_cartTotalNum').text() - 0 + 1)
                    $('#J_selTotalNum').text($('#J_selTotalNum').text() - 0 + parseInt($(this).parent(
                        '.goods_sel').siblings(
                        '.goods_num').children('.shuliang').val() - 0))
                    $('#J_cartTotalPrice').text(parseInt($('#J_cartTotalPrice').text()) +
                        parseInt($(this).parent(
                            '.goods_sel').siblings('.zongfeiyong').text()))
                } else {
                    $('#J_cartTotalNum').text($('#J_cartTotalNum').text() - 1)
                    $('#J_selTotalNum').text($('#J_selTotalNum').text() - $(this).parent(
                        '.goods_sel').siblings(
                        '.goods_num').children('.shuliang').val())
                    $(".quanxuan").prop("checked", false);
                    $('#J_cartTotalPrice').text(parseInt($('#J_cartTotalPrice').text()) -
                        parseInt($(this).parent(
                            '.goods_sel').siblings('.zongfeiyong').text()))
                }
            })
            $('.shop_content').click(function () {
                if ($('#J_cartTotalPrice').text() != 0) {
                    $('#J_goCheckout').css('background', '#ff6700');
                } else {
                    $('#J_goCheckout').css('background', '#ccc');
                }

            })
        },
        fn: function (goods) {
            for (var w = 0; w < goods.length; w++) {
                var $_div = document.createElement("div")
                console.log(($('.shuliang').val()))
                $_div.innerHTML =
                    ` <div class="item-box goods_con">
            <div class="goods_sel"> <input class="select_box xuanze" type="checkbox"> </div>
            <div class="goods_kg">&nbsp;</div>
            <div class="goods_name"> ${goods[w].goods_name} 屏幕指纹版  ${goods[w].goods_color} ${goods[w].goods_type} </div>
            <div class="goods_price danjia">${goods[w].goods_price}</div>
            <div class="goods_num" style="border: 1px solid #e0e0e0;line-height: 40px;margin-top: 15px;">

                <a class="J_minus"> - </a>
                <input class="shuliang" tyep="text" name="2183600020_0_buy" value="${goods[w].goods_num}">
                <a class="J_plus"> + </a>

            </div>
            <div class="goods_total zongfeiyong">${parseInt(goods[w].goods_num)*parseInt(goods[w].goods_price)+'元'}</div>
            <div class="goods_action">
                <a class="shanchu">x</a>
            </div>
        </div>`
                $('.zhong').append($_div)
            }
        }
    }
}())
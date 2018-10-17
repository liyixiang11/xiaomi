var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// head_menu_con
// 顶部菜单悬停显示下拉商品列表
$(".head_menu").hover(function () {
  $('.head_menu_con').slideDown(300);
}, function () {
  $('.head_menu_con').stop();
  $('.head_menu_con').slideUp(300);
})

$('.head_menu').children().hover(function () {

  $(this).children(".head_menu_con").css("z-index", "1002");
  $(this).siblings().children(".head_menu_con").css("z-index", 999)
}, function () {
  $(this).children(".head_menu_con").css("z-index", "1001");
})



// 右边侧边栏按钮 & 回到顶部
$(window).scroll(function () {
  if ($(window).scrollTop() >= 500) {
    $('.back_top').css('display', 'block');
  } else {
    $('.back_top').css('display', 'none');
  }
});
// 点击回到顶部
$(function () {
  $("._back_top").click(function () {
    $("html").animate({
      scrollTop: 0
    }, 500);
  });
})

// 页面滚动一定距离固定图片
$(window).scroll(function () {
  if ($(window).scrollTop() >= 203) {
    $('.imation').css({
      'position': 'fixed',
      'top': '0',
      'z-index': 9,
      'background-color': '#fff'
    })
    $('.main_left').css({
      'position': 'fixed',
      'top': '63px'
    })
  } else {
    $('.imation').css({
      'position': 'relative',
    })
    $('.main_left').css({
      'position': 'static',
    })
  }
  if ($(window).scrollTop() >= 800) {
    $('.main_left').css({
      'position': 'absolute',
      'top': '810px'
    })
  }
})

// 根据选中的型号切换对应的轮播图 & 改变选中的样式

// 选择型号

$('.show_btn1').click(function () {
  $('.imgshow_box').children().css('z-index', '10');
  $('.imgshow_box1').css('z-index', '100');
  $('.choose_box2').children().removeClass('active');
  $(this).addClass('active');
  $('.color').text($(this).text());
})
$('.show_btn2').click(function () {
  $('.imgshow_box').children().css('z-index', '10');
  $('.imgshow_box2').css('z-index', '100');
  $('.choose_box2').children().removeClass('active');
  $(this).addClass('active');
  $('.color').text($(this).text());
})
$('.show_btn3').click(function () {
  $('.imgshow_box').children().css('z-index', '10');
  $('.imgshow_box3').css('z-index', '100');
  $('.choose_box2').children().removeClass('active');
  $(this).addClass('active');
  $('.color').text($(this).text());
})
$('.show_btn4').click(function () {
  $('.imgshow_box').children().css('z-index', '10');
  $('.imgshow_box4').css('z-index', '100');
  $('.choose_box2').children().removeClass('active');
  $(this).addClass('active');
  $('.color').text($(this).text());
})

// 选择版本
$('.choose_box1').children().click(function () {
  $('.choose_box1').children().removeClass('active');
  $(this).addClass('active');
  // 根据用户所选择的型号和服务 来修改对应的结果
  $('.type').text($(this).parents().find('.main_right_name').text());
  $('.pig').text($(this).find('.name').text());
  $('.zuiPrice').text($(this).find('.price').text());

  // 总价
  var price1 = parseInt($('.zuiPrice').text());
  var price2 = $('.fuwu_price').text();
  console.log(price2, typeof price2);
  if (price2 == '') {
    price2 == 0;
  } else {
    price2 = parseInt(price2);
  }
  var _total_price = price1 + price2;
  $('.total_price').text(_total_price + '元');

  // 改变打折之前的价格 带中划线的价格  
  //   if($(this).find('.price').text() == '849元'){
  //     $('.daZhe').text('999元');  
  //   }
  //   else{
  //     $('.daZhe').text('799元');  
  //   }
})


//购买商品的保障服务 打钩选项
$('.fuwu2').click(function () {
  $('.fuwu3').removeClass('active');
  $('.fuwu3').children('.duigou1').text('');
  $('.fuwu3').find('.name').removeClass('active1');
  $('.fuwu3').find('.duigou2').text('');
  var val1 = $(this).children('.duigou1').text();
  var val2 = $(this).find('.duigou2').text();
  var price1 = parseInt($('.zuiPrice').text());
  if (val1 == '' && val2 == '') {
    $(this).children('.duigou1').text('√');
    $(this).find('.duigou2').text('√');
    $(this).addClass('active');
    $(this).find('.name').addClass('active1');

    // 下方统计保险服务价格
    $('.fuwu_name').text($(this).find('.name').text());
    $('.fuwu_price').text($(this).find('.price').text());

    var price2 = parseInt($('.fuwu_price').text());
    var _total_price = price1 + price2;
    $('.total_price').text(_total_price + '元');
  } else {
    $(this).children('.duigou1').text('');
    $(this).find('.duigou2').text('');
    $(this).removeClass('active');
    $(this).find('.name').removeClass('active1');

    $('.fuwu_name').text('');
    $('.fuwu_price').text('');

    $('.total_price').text(price1 + '元');
  }
})


$('.fuwu3').click(function () {
  $('.fuwu2').removeClass('active');
  $('.fuwu2').children('.duigou1').text('');
  $('.fuwu2').find('.name').removeClass('active1');
  $('.fuwu2').find('.duigou2').text('');
  var val1 = $(this).children('.duigou1').text();
  var val2 = $(this).find('.duigou2').text();
  var price1 = parseInt($('.zuiPrice').text());
  if (val1 == '' && val2 == '') {
    $(this).children('.duigou1').text('√');
    $(this).find('.duigou2').text('√');
    $(this).addClass('active');
    $(this).find('.name').addClass('active1');

    $('.fuwu_name').text($(this).find('.name').text());
    $('.fuwu_price').text($(this).find('.price').text());

    var price2 = parseInt($('.fuwu_price').text());
    var _total_price = price1 + price2;
    $('.total_price').text(_total_price + '元');
  } else {
    $(this).children('.duigou1').text('');
    $(this).find('.duigou2').text('');
    $(this).removeClass('active');
    $(this).find('.name').removeClass('active1');

    $('.fuwu_name').text('');
    $('.fuwu_price').text('');

    $('.total_price').text(price1 + '元');
  }
})


// 点击修改地址
// $('.switch-choose-regions').click(function(){

// })







// 点击加入购物车按钮  创建localStorage
$('.add_goods_btn').click(function () {
  var shopList = localStorage.shopList || '[]';
  shopList = JSON.parse(shopList);
  var goods_obj = {
    'goods_name': $('.type').text(),
    'goods_type': $('.pig').text(),
    'goods_color': $('.color').text(),
    'goods_price': $('.zuiPrice').text(),
    'service_price': $('.fuwu_price').text(),
    "goods_num":1,
  }
  // 判断用户是否购买了保险服务
  if ($('.fuwu2').hasClass('active')) {
    goods_obj.goods_service = $('.fuwu2').find('.name').text();
    goods_obj.service_price = $('.fuwu2').find('.price').text();
  }
  if ($('.fuwu3').hasClass('active')) {
    goods_obj.goods_service = $('.fuwu3').find('.name').text();
    goods_obj.service_price = $('.fuwu2').find('.price').text();
  }

  // 存储前先用JSON.stringify()方法将json对象转换成字符串形式
  // JSON.stringify() 方法可以将任意的 JavaScript 值序列化成 JSON 字符串
  // goods_obj = JSON.stringify(goods_obj);
  // window.localStorage.setItem('goods', goods_obj);

  var add = true;
  for (var i = 0; i < shopList.length; i++) {
    // 判断已添加商品列表中是否含有现添加的商品
    if (goods_obj.goods_name == shopList[i].goods_name &&
      goods_obj.goods_color == shopList[i].goods_color &&
      goods_obj.goods_type == shopList[i].goods_type &&
      goods_obj.goods_price == shopList[i].goods_price) {
      // 如果函数能进来的话，证明现添加的商品，已经存在购物车内，不需要添加新的数据
      add = false
      //商品数量进行累加
      shopList[i].goods_num = shopList[i].goods_num - 0 + 1;
      // 找到商品以后，终止循环
      break;
    }
  }
  if (add) {
    // 如果没找到， 把当前商品数据添加到本地数据库
    console.log(goods_obj)
    shopList.push(goods_obj);
  }
  // 真正意义把数据存储到本地数据库
  console.log(shopList)
  localStorage.shopList = JSON.stringify(shopList);

  // // 商品名称
  // window.localStorage.setItem('goods_name', $('.type').text());
  // // 商品型号
  // window.localStorage.setItem('goods_type', $('.pig').text());
  // // 商品颜色
  // window.localStorage.setItem('goods_color', $('.color').text());
  // // 商品价格
  // window.localStorage.setItem('goods_price', $('.zuiPrice').text());;


  // location.href = 'shop_car.html'

})
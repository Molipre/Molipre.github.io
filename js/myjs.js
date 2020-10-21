//去掉Banner图
// var full_page = document.getElementsByClassName("full_page");
// if (full_page.length != 0) {
//   full_page[0].style.background = "transparent";
// }

//手机侧边栏默认不展开
// var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
// var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
//     "menus_item_child"
// );
// var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
// for (var i = 0; i < menus_item_child.length; i++) {
//     menus_item_child[i].style.display = "none";
//     menus_expand[i].className += " menus-closed";
// }

//分类卡片隐藏
// var card_category_list = document.getElementsByClassName(
//     "card-category-list child"
// );
// var item = document.getElementsByClassName("card-category-list-item");
// function toggle(t) {
//     var display = t.parentElement.nextSibling.style.display;
//     if (display == "none") {
//         t.parentElement.nextSibling.style.display = "block";
//         t.parentElement.nextSibling.style.height = "100%";
//         t.className = t.className.replace("fa-chevron-up", "fa-chevron-down");
//     } else {
//         t.parentElement.nextSibling.style.display = "none";
//         t.className = t.className.replace("fa-chevron-down", "fa-chevron-up");
//     }
// }

// for (var i = 0; i < card_category_list.length; i++) {
//     card_category_list[i].style.display = "none";
//     card_category_list[i].style.transition = "all 1s";
//     card_category_list[i].previousSibling.innerHTML +=
//         '<i class="fa fa-chevron-up menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" onclick="toggle(this)"></i>';
// }

// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/funny.ico");
        document.title = '🥺(っ °Д °;)っ🥺别走别走！再看看呀！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '🥰(●\'◡\'●)🥰你回来啦！ ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

// //获取当前IP地址和浏览器标识
// function getBrowserInfo() {
//     var agent = navigator.userAgent.toLowerCase();
//
//     var regStr_ie = /msie [\d.]+;/gi;
//     var regStr_ff = /firefox\/[\d.]+/gi
//     var regStr_chrome = /chrome\/[\d.]+/gi;
//     var regStr_saf = /safari\/[\d.]+/gi;
//
//     //IE
//     if (agent.indexOf("msie") > 0) {
//         return agent.match(regStr_ie);
//     }
//
//     //firefox
//     if (agent.indexOf("firefox") > 0) {
//         return agent.match(regStr_ff);
//     }
//
//     //Chrome
//     if (agent.indexOf("chrome") > 0) {
//         return agent.match(regStr_chrome);
//     }
//
//     //Safari
//     if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
//         return agent.match(regStr_saf);
//     }
// }
//
// var ip_content = document.querySelector(".ip_content");
//
// if (ip_content != null && typeof (returnCitySN) != undefined) {
//     ip_content.innerHTML = '欢迎来自 <span class="p red">' + returnCitySN["cname"] + "</span> 的小伙伴<br>" + "访问IP为： <span class='p cyan'>" + returnCitySN["cip"] + "</span><br>浏览器版本：<span class='p blue'>" + getBrowserInfo() + '</span>';
// }

// 添加图片top
// var top_up = "<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-70px);' src='https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif' title='回到顶部' >";
// // 添加到返回顶部按钮下
// document.getElementById("go-up").innerHTML += top_up;

//footer心跳
$(document).ready(function(e) {
    $('.copyright').html('©2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heart"></i>  一川');
});

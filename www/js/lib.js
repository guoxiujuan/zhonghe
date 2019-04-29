$(document).ready(function ($) {


    $('.snv .s1').click(function () {
        var sub = $(this).parents('li').find('dl');
        if (!sub.length > 0) {
            return true;
        }
        if (sub.is(':visible')) {
            sub.hide();
            $(this).parent("li").removeClass('on');
        } else {
            $('dl').hide();
            $('.snv li').removeClass('on');
            $(this).parent("li").addClass('on');
            sub.show();
        }
        return false;
    })

    // $('.snv2 .s1').click(function(){
    //         var sub = $(this).parents('li').find('dl');
    //         if( !sub.length > 0){
    //             return true;
    //         }
    //         if(sub.is(':visible')){
    //             sub.hide();
    //             $(this).parent("li").removeClass('on');
    //         }else{
    //             $('dl').hide();
    //             $('.snv2 li').removeClass('on');
    //             $(this).parent("li").addClass('on');
    //             sub.show();
    //         }
    //         return false;
    //     })


    $('.so-btn').click(function (event) {
        $(this).parent('.soBox').addClass('open');
    });
    $('.soBox .close').click(function (event) {
        $(this).parents('.soBox').removeClass('open');
    });

    // 选项卡 鼠标经过切换
    $(".TAB li").mousemove(function () {
        var tab = $(this).parent(".TAB");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
        $(con).eq(on).show().siblings(con).hide();
    });


    $(".sub-list li").each(function () {
        if ($(this).find('dl').length) {
            $(this).addClass('has');
        }
    });
    $('.nav li').hover(function () {
        $(this).parent(".nav").find('.subBox').stop().slideToggle();
        if ($(this).index()) {
            var _con = $(this).find(".img img").attr("src");
            var _hre = $(this).find(".img a").attr("href");
            $(this).parent(".nav").find('.subBox .pic img').attr("src", _con);
            $(this).parent(".nav").find('.subBox .pic a').attr("href", _hre);
        }
    });
    $('.nav li').eq(0).find('.v1').hover(function(){
        var _con = $('.first-img img').attr("src");
        var _hre = $('.first-img a').attr("href");
        $(this).parents(".nav").find('.subBox .pic img').eq(0).attr("src", _con);
        $(this).parents(".nav").find('.subBox .pic a').eq(0).attr("href", _hre);
    });


});


function goUrl(sobj) {
    var docurl = sobj.options[sobj.selectedIndex].value;
    if (docurl != "") {
        open(docurl, '_blank');
        sobj.selectedIndex = 0;
        sobj.blur();
    }
}




/*jslint browser: true*/
/*global $, jQuery*/
jQuery(function () {"use strict";
    if ($(".container").hasClass("home_container")) {$("body").addClass('body_home_page'); }
    $(".sr_table .t_table:contains('تهران')").closest('.sr_table').addClass('sr_table_THR');
    $(".sr_table .t_table:contains('مشهد')").closest('.sr_table').addClass('sr_table_MHD');
    $(".sr_table .t_table:contains('کیش')").closest('.sr_table').addClass('sr_table_KIH');
    $(".sr_table .t_table:contains('اهواز')").closest('.sr_table').addClass('sr_table_AWZ');
    $(".sr_table .t_table:contains('اصفهان')").closest('.sr_table').addClass('sr_table_IFN');
    $(".sr_table .t_table:contains('شیراز')").closest('.sr_table').addClass('sr_table_SYZ');
    $(".sr_table .t_table:contains('تبریز')").closest('.sr_table').addClass('sr_table_TBZ');
    $(".sr_table .t_table:contains('رشت')").closest('.sr_table').addClass('sr_table_RAS');
    $(".sr_table .t_table:contains('نجف')").closest('.sr_table').addClass('sr_table_NJF');
    $(".sr_table .t_table:contains('قشم')").closest('.sr_table').addClass('sr_table_GSM');
    $(".sr_table .t_table:contains('بندرعباس')").closest('.sr_table').addClass('sr_table_BND');
    $(".sr_table .t_table:contains('آبادان')").closest('.sr_table').addClass('sr_table_ABD');
    $(".sr_table .t_table:contains('بغداد')").closest('.sr_table').addClass('sr_table_BGW');
    $(".sr_table .t_table:contains('کرمانشاه')").closest('.sr_table').addClass('sr_table_KSH');
    $(".sr_table .t_table:contains('کرمان')").closest('.sr_table').addClass('sr_table_KER');
    $(".sr_table .t_table:contains('استانبول')").closest('.sr_table').addClass('sr_table_IST');
    $(".sr_table .t_table:contains('دبی')").closest('.sr_table').addClass('sr_table_DBX');
    $(".sr_table .t_table:contains('زاهدان')").closest('.sr_table').addClass('sr_table_ZAH');
    $(".sr_table .t_table:contains('ساری')").closest('.sr_table').addClass('sr_table_SRY');
    $(".sr_table .t_table:contains('ایلام')").closest('.sr_table').addClass('sr_table_IIL');
    $(".body_home_page #wrapper").after("<div id='about_section'><div class='container'></div></div>");
    $(".body_home_page #sidebar .widg_about").appendTo('#about_section .container');
    $(".body_home_page #sidebar .widg_list").appendTo('#about_section .container');
    $("#search_flight").addClass('searchPanel');
    $(".special_route_box").addClass('special_result');
    $(".body_home_page #footer_logo").before("<div id='homelinks_section'><div class='container'>" +
        "<div class='title'><span>مسیرهای پیشنهادی</span></div>" +
        "<ul>" +
        "<li><a href='/Ticket-Tehran-Mashhad-بلیط-هواپیما-چارتر-تهران-مشهد.html' target='_blank' title='بلیط هواپیما تهران به مشهد'>بلیط هواپیما تهران به مشهد</a></li>" +
        "<li><a href='/Ticket-Tehran-Shiraz-بلیط-هواپیما-چارتر-تهران-شیراز.html' target='_blank' title='بلیط هواپیما تهران به شیراز'>بلیط هواپیما تهران به شیراز</a></li>" +
        "<li><a href='/Ticket-Tehran-Isfahan-بلیط-هواپیما-چارتر-تهران-اصفهان.html' target='_blank' title='بلیط هواپیما تهران به اصفهان'>بلیط هواپیما تهران به اصفهان</a></li>" +
        "<li><a href='/Ticket-Tehran-Ahwaz-بلیط-هواپیما-چارتر-تهران-اهواز.html' target='_blank' title='بلیط هواپیما تهران به اهواز'>بلیط هواپیما تهران به اهواز</a></li>" +
        "<li><a href='/Ticket-Tehran-Asalooye-بلیط-هواپیما-چارتر-تهران-عسلویه.html' target='_blank' title='بلیط هواپیما تهران به عسلویه'>بلیط هواپیما تهران به عسلویه</a></li>" +
        "<li><a href='/Ticket-Tehran-Kish-بلیط-هواپیما-چارتر-تهران-کیش.html' target='_blank' title='بلیط هواپیما تهران به کیش'>بلیط هواپیما تهران به کیش</a></li>" +
        "<li><a href='/Ticket-Mashhad-Tehran-بلیط-هواپیما-چارتر-مشهد-تهران.html' target='_blank' title='بلیط هواپیما مشهد به تهران'>بلیط هواپیما مشهد به تهران</a></li>" +
        "<li><a href='/Ticket-Mashhad-Shiraz-بلیط-هواپیما-چارتر-مشهد-شیراز.html' target='_blank' title='بلیط هواپیما مشهد به شیراز'>بلیط هواپیما مشهد به شیراز</a></li>" +
        "<li><a href='/Ticket-Mashhad-Isfahan-بلیط-هواپیما-چارتر-مشهد-اصفهان.html' target='_blank' title='بلیط هواپیما مشهد به اصفهان'>بلیط هواپیما مشهد به اصفهان</a></li>" +
        "<li><a href='/Ticket-Mashhad-Ahwaz-بلیط-هواپیما-چارتر-مشهد-اهواز.html' target='_blank' title='بلیط هواپیما مشهد به اهواز'>بلیط هواپیما مشهد به اهواز</a></li>" +
        "<li><a href='/Ticket-Mashhad-Asalooye-بلیط-هواپیما-چارتر-مشهد-عسلویه.html' target='_blank' title='بلیط هواپیما مشهد به عسلویه'>بلیط هواپیما مشهد به عسلویه</a></li>" +
        "<li><a href='/Ticket-Mashhad-Kish-بلیط-هواپیما-چارتر-مشهد-کیش.html' target='_blank' title='بلیط هواپیما مشهد به کیش'>بلیط هواپیما مشهد به کیش</a></li>" +
        "</ul>" +
        "<div class='clear'></div>" +
        "</div></div>");
    $("#footer .widg1").before("<div class='footer_top'>" +
        "<div class='footer_logo'><a href='/'></a></div></div>");
    $("#footer #social_box").appendTo('.footer_top');
    $("#footer .download_info").appendTo('.footer_top'); });

$('.scrollToTop').click(function () {"use strict"; $('html, body').animate({scrollTop : 0}, 800); return false; });

$(document).on("scroll", function () {"use strict";
    if ($(document).scrollTop() > 80) {
        $("#main_nav").removeClass("header_larg").addClass("header_small");
    } else {
        $("#main_nav").removeClass("header_small").addClass("header_larg");
    }

    if ($(document).scrollTop() > 150) {
        $('.scrollToTop').addClass('active');
    } else {
        $('.scrollToTop').removeClass('active');
    } });

$("#logo").after("<h3 id='shoar_top'> چارتر111 </h3>");
$("#logo").after("<div id='header_phone'><a href='tel:+989120762694'><span> </span> 09120762694 </a></div>");
$("#header_bg").append("<h2 id='shoar'>  سامانه رزرواسیون اینترنتی بلیط هواپیما، قطار و اتوبوس </h2>");
$("#sidebar_inn").after("<div class='clear' style='margin-top: 70px'></div>" + "<div class='ad_sb_top'>" + "<div class='ad_sb_inn_top' style='text-align: center'>" + "<a href='http://sadadpsp.ir/tollpayment' target='_blank'>" + "<img src='https://cdn.jsdelivr.net/gh/syzexecutive/charter111/pics/toll_payment_banner.png' style='padding-left:20px; padding-bottom: 20px'>" + "</a>" + "<a href='http://exitban.ssaa.ir/' target='_blank'>" + "<img src='https://cdn.jsdelivr.net/gh/syzexecutive/charter111/pics/ssaa_banner.png' style='padding-left:20px; padding-bottom: 20px'>" + "</a>" + "<div class='clear'></div>" + "</div>" + "</div>");
$("head").append('<link rel="canonical" href="https://charter111.ir">');
$("head").append('<link rel="apple-touch-icon" sizes="180x180" href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/apple-touch-icon.png">');
$("head").append('<link rel="icon" type="image/png" sizes="192x192" href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/charter111_192.png">');
$("head").append('<link rel="icon" type="image/png" sizes="32x32" href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/favicon-32x32.png">');
$("head").append('<link rel="icon" type="image/png" sizes="16x16" href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/favicon-16x16.png">');
$("head").append('<link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/favicon.ico">');
$("head").append('<link href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/splashscreens/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />');
$("head").append('<link href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/splashscreens/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />');
$("head").append('<link href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/splashscreens/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />');
$("head").append('<link href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/splashscreens/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />');
$("head").append('<link href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/splashscreens/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />');
$("head").append('<link href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/splashscreens/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />');
$("head").append('<link href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/splashscreens/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />');
$("head").append('<link href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/splashscreens/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />');
$("head").append('<link href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/splashscreens/ipadpro3_splash.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />');
$("head").append('<link href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/splashscreens/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />');

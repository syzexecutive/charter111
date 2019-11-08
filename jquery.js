jQuery(function () {
    if (jQuery(".container").hasClass("home_container")) {
        jQuery("body").addClass('body_home_page');
    }
    $( ".sr_table .t_table:contains('تهران')" ).closest('.sr_table').addClass('sr_table_THR');
    $( ".sr_table .t_table:contains('مشهد')" ).closest('.sr_table').addClass('sr_table_MHD');
    $( ".sr_table .t_table:contains('کیش')" ).closest('.sr_table').addClass('sr_table_KIH');
    $( ".sr_table .t_table:contains('اهواز')" ).closest('.sr_table').addClass('sr_table_AWZ');
    $( ".sr_table .t_table:contains('اصفهان')" ).closest('.sr_table').addClass('sr_table_IFN');
    $( ".sr_table .t_table:contains('شیراز')" ).closest('.sr_table').addClass('sr_table_SYZ');
    $( ".sr_table .t_table:contains('تبریز')" ).closest('.sr_table').addClass('sr_table_TBZ');
    $( ".sr_table .t_table:contains('رشت')" ).closest('.sr_table').addClass('sr_table_RAS');
    $( ".sr_table .t_table:contains('نجف')" ).closest('.sr_table').addClass('sr_table_NJF');
    $( ".sr_table .t_table:contains('قشم')" ).closest('.sr_table').addClass('sr_table_GSM');
    $( ".sr_table .t_table:contains('بندرعباس')" ).closest('.sr_table').addClass('sr_table_BND');
    $( ".sr_table .t_table:contains('آبادان')" ).closest('.sr_table').addClass('sr_table_ABD');
    $( ".sr_table .t_table:contains('بغداد')" ).closest('.sr_table').addClass('sr_table_BGW');
    $( ".sr_table .t_table:contains('کرمانشاه')" ).closest('.sr_table').addClass('sr_table_KSH');
    $( ".sr_table .t_table:contains('کرمان')" ).closest('.sr_table').addClass('sr_table_KER');
    $( ".sr_table .t_table:contains('استانبول')" ).closest('.sr_table').addClass('sr_table_IST');
    $( ".sr_table .t_table:contains('دبی')" ).closest('.sr_table').addClass('sr_table_DBX');
    $( ".sr_table .t_table:contains('زاهدان')" ).closest('.sr_table').addClass('sr_table_ZAH');
    $( ".sr_table .t_table:contains('ساری')" ).closest('.sr_table').addClass('sr_table_SRY');
    $( ".sr_table .t_table:contains('ایلام')" ).closest('.sr_table').addClass('sr_table_IIL');
    jQuery( ".body_home_page #wrapper" ).after( "<div id='about_section'><div class='container'></div></div>" );
    jQuery(".body_home_page #sidebar .widg_about").appendTo('#about_section .container');
    jQuery(".body_home_page #sidebar .widg_list").appendTo('#about_section .container');
    jQuery("#search_flight").addClass('searchPanel');
    jQuery(".special_route_box").addClass('special_result');

    var origin   = window.location.origin;   // Returns base URL
    jQuery("#footer_logo img").attr("src","https://charterdesign.ir/templates/05/airports.png");
    jQuery( "#footer_logo img" ).before( "<div class='container'></div>" );
    // var about_section = $('body #sidebar .widg_about').html();
    // jQuery("body #sidebar").appendTo('#header_bg .container');
    jQuery("#content .ad_sb").appendTo('#wrapper .home_container');
    jQuery("#copyright").append("<div class='container'>\
    <div class='design'>design by:\
    <a href='https://t.me/charterdesign' target='_blank' title='طراحی سایت فروش بلیط هواپیما'>charterdesign</a>\
    </div><div class='clear'></div> <br></div>");

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    jQuery( ".body_home_page #footer_logo" ).before( "<div id='homelinks_section'><div class='container'>" +
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
        "</div></div>" );

    jQuery( "#footer .widg1" ).before( "<div class='footer_top'>" +
        "<div class='footer_logo'><a href='/'></a></div></div>" );

    jQuery("#footer #social_box").appendTo('.footer_top ');
    jQuery("#footer .download_info").appendTo('.footer_top ');

});

$(document).on("scroll", function() {
    if ($(document).scrollTop() > 80) {
        $("#main_nav").removeClass("header_larg").addClass("header_small");
    } else {
        $("#main_nav").removeClass("header_small").addClass("header_larg");
    }

    if ($(document).scrollTop() > 150) {
        $('.scrollToTop').addClass('active');
    } else {
        $('.scrollToTop').removeClass('active');
    }
});
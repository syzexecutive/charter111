jQuery(function () {
    jQuery( "#logo" ).after( "<h3 id='shoar_top'> رزرو هتل و تور </h3>" );
    jQuery( "#logo" ).after( "<div id='header_phone'><a href='tel:+989120762694'><span> </span> 09120762694 </a></div>" );
    jQuery( "#header_bg" ).append("<h2 id='shoar'>چارتر111 - سامانه رزرواسیون بلیط هواپیما، قطار و اتوبوس</h2>" );

    jQuery( "#homelinks_section" ).after( "<div id='servicess_section'><div class='container'>" +
        "<div class='title'><span>خدمات ما</span></div>" +
        "<a href='#' target='_blank' class='item item1'>" +
        "<div class='head'><div class='icon'></div>پشتیبانی 24 ساعته </div>" +
        "<p>24 ساعت شبانه روز و 7 روز هفته آماده پاسخگویی به شما هستیم</p>" +
        "</a>" +
        "<a href='#' target='_blank' class='item item2'>" +
        "<div class='head'><div class='icon'></div>ارائه بهترین قیمت بلیط سفر</div>" +
        "<p>بهترین قیمت بلیط هواپیما، بلیط قطار، بلیط اتوبوس و ررزو هتل</p>" +
        "</a>" +
        "<a href='#' target='_blank' class='item item3'>" +
        "<div class='head'><div class='icon'></div>ضمانت ویژه بلیط سفر</div>" +
        "<p>در صورت وجود مشکل هزینه مازاد توسط ما پرداخت می‌شود.</p>" +
        "</a>" +
        "<a href='#' target='_blank' class='item item4'>" +
        "<div class='head'><div class='icon'></div>استرداد آنلاین بلیط سفر</div>" +
        "<p>به راحتی بلیط خریداری شده را بصورت کاملا آنلاین مسترد کنید</p>" +
        "</a>" +
        "<div class='clear'></div>" +
        "</div></div>" );
    jQuery('head').append('<link rel="apple-touch-startup-image" href="https://cdn.jsdelivr.net/gh/syzexecutive/charter111/icons/launch.png" />');
});

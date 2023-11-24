
function DisplayChange(newvalue) {


    var Years = document.getElementById("Years").value;
    var Cost = document.getElementById("Cost").value;
    var PV = document.getElementById("PV").value;
    var inflation = document.getElementById("inflation").value;
    var ror = document.getElementById("ror").value;

    if (newvalue.name === "slideryear") {
        document.getElementById('Years_display').innerHTML = newvalue.value + " Years";
        Years = newvalue.value;

    }

    if (newvalue.name === "slidercost") {
        document.getElementById('Cost_display').innerHTML = "₹ " + newvalue.value;
        Cost = newvalue.value;
    }

    if (newvalue.name === "sliderPV") {
        document.getElementById('FVexisting_display').innerHTML = "₹ " + newvalue.value;
        PV = newvalue.value;
    }

    if (newvalue.name === "sliderInflation") {
        inflation = newvalue.value;
    }


    if (newvalue.name === "sliderror") {
        ror = newvalue.value;
    }

    var Power = Math.pow((1 + (ror / 100)), Years);
    var hike = Math.pow((1 + (inflation / 100)), Years);
    var rounding = (Math.pow((1 + (ror / 100)), 1 / 12)) - 1;
    var Powerr = Math.pow((1 + rounding), Years * 12);


    var CostFV;
    CostFV = Math.round((Cost * hike));

    var FVexisting;
    FVexisting = Math.round(PV * Power);

    var FV;
    FV = (CostFV - FVexisting);

    var SIP;
    SIP = Math.round((Math.round([(FV * rounding) / (Powerr - 1)])) / (1 + rounding));
    document.getElementById('Cost_display').innerHTML = "₹ " + CostFV;
    document.getElementById('SIP_display').innerHTML = "₹ " + SIP;

}


function DisplayChangeeducation(newvalue) {

    var Years = document.getElementById("Years").value;
    var Cost = document.getElementById("Cost").value;
    var PV = document.getElementById("PV").value;
    var inflation = document.getElementById("inflation").value;
    var ror = document.getElementById("ror").value;
    if (newvalue.name === "slideryear") {
        document.getElementById('educationYears_display').innerHTML = newvalue.value + " Years";
        Years = newvalue.value;

    }

    if (newvalue.name === "slidercost") {
        document.getElementById('educationCost_display').innerHTML = "₹ " + newvalue.value;
        Cost = newvalue.value;

    }

    if (newvalue.name === "sliderPV") {
        document.getElementById('educationFVexisting_display').innerHTML = "₹ " + newvalue.value;
        PV = newvalue.value;
    }

    if (newvalue.name === "sliderInflation") {
        inflation = newvalue.value;
    }


    if (newvalue.name === "sliderror") {
        ror = newvalue.value;
    }

    var Power = Math.pow((1 + (ror / 100)), Years);
    var hike = Math.pow((1 + (inflation / 100)), Years);
    var rounding = (Math.pow((1 + (ror / 100)), 1 / 12)) - 1;
    var Powerr = Math.pow((1 + rounding), Years * 12);


    var CostFV;
    CostFV = Math.round((Cost * hike));

    var FVexisting;
    FVexisting = Math.round(PV * Power);

    var FV;
    FV = (CostFV - FVexisting);

    var SIP;
    SIP = Math.round((Math.round([(FV * rounding) / (Powerr - 1)])) / (1 + rounding));

    document.getElementById('educationCost_display').innerHTML = "₹ " + CostFV;

    document.getElementById('educationSIP_display').innerHTML = "₹ " + SIP;

}









$('.basic-slider').owlCarousel({
    loop: true,
    margin: 10,
    navigation: true,
    dots: true,
    autoplay: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplayTimeout: 4500,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
});




$('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 10,
    navigation: false,
    dots: true,
    autoHeight: true,
    autoplay: true,
    nav: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplayTimeout: 4500,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        1000: {
            items: 1,

            loop: true
        }
    }
});










window.addEventListener('scroll', function () {

    if (window.scrollY > 50) {
        document.getElementById('mainNav').classList.add('fixed-top');
        // add padding top to show content behind navbar
        let navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
    } else {
        document.getElementById('mainNav').classList.remove('fixed-top');
        // remove padding top from body
        document.body.style.paddingTop = '0';
    }
});

// DOMContentLoaded  end




$(document).ready(function () {

    $(".final_plan ul li").click(function () {
        $("html, body").delay(500).animate({
            scrollTop: $('.para').offset().top - 250
        }, 500);
    });

    $(".links").click(function (e) {
        $(".links").removeClass("active");
        $(this).addClass("active");
        $('.para p').hide();
        $('#' + $(this).data('rel')).show();
    });

});

// Scroll to Back to Top Btn Show
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 400) {
        $(".backto-top-btn").addClass('backto-top-blk');
    } else {
        $(".backto-top-btn").removeClass('backto-top-blk');
    }
});
// Smooth Scrolling Using jQuery Easing
$(".backto-top-btn a[href^='#']").on('click', function (e) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        $('html, body').animate({
            scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
    }
});
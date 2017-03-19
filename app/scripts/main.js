'use strict';

$(document).ready(function () {

// push menu
var trigger = $('.hamburger'),
	overlay = $('.overlay'),
	isClosed = false;

trigger.click(function () {
	hamburger_cross();      
});

function hamburger_cross() {
	if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
	}else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
	}
}

$('[data-toggle="offcanvas"]').click(function () {
	$('#wrapper').toggleClass('toggled');
});

// push main menu
var main_menu = $('#main-menu').children().clone();
main_menu.each(function() {
	$( this ).addClass('visible-xs');
});
$('#sidebar-wrapper .main-menu').after(main_menu);

// push cart menu
var main_menu = $('#cart-menu').children().clone();
main_menu.each(function() {
	$( this ).addClass('visible-xs');
});
$('#sidebar-wrapper .cart-menu').after(main_menu);

// search form
$('#navbar-search-form .submit-search').on('click', function(e){
	if (!$('#navbar-search-form .search-input').hasClass('active')) {
		e.preventDefault();
		$('#navbar-search-form .search-input').addClass('active').focus();
	}
});

// slider
var slider_carousel = {
    center: true,
    items:2,
    loop:true,
    margin:25,
    autoplay:true,
    dots:false,
    autoWidth:true,
    responsive:{
        0: {
            items:2
        }
    }
};
Pace.once('hide', function(){
    $(".slider-carousel").owlCarousel(slider_carousel);
});

// tooltip
$('[data-toggle="tooltip"]').tooltip();

// add to cart
$('.add-to-cart button').on('click', function(e){
	e.preventDefault();
	var oldValue = parseInt( $(this).parent().find('input').val() );
	if ( $(this).hasClass('remove') ) {
		var newValue = oldValue-1;
	}else {
		var newValue = oldValue+1;
	}
	$(this).parent().find('input').val(newValue);
});

// activate checkout
$('#activate_checkout input').on('change paste keyup', function(){
    if ($('#text_input').val().length !== 0 && $('#text_input2').val().length !== 0) {
        $('#activate_checkout .cart-checkout').attr('disabled', false);
    }
});

// table row link
$(".clickable").click(function() {
    window.location = $(this).data("href");
});

// approval toggle details
$(".toggle-details").click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('is-open')) {
        $(this).removeClass('is-open');
        $(this).parent().find('.toggle-table').fadeOut();
    }else {
        $(this).addClass('is-open');
        $(this).parent().find('.toggle-table').fadeIn();
    }
});


$('.row-eq-height [class*="col-"]').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
});

});

"use strict";$(document).ready(function(){function e(){1==i?(t.hide(),a.removeClass("is-open"),a.addClass("is-closed"),i=!1):(t.show(),a.removeClass("is-closed"),a.addClass("is-open"),i=!0)}var a=$(".hamburger"),t=$(".overlay"),i=!1;a.click(function(){e()}),$('[data-toggle="offcanvas"]').click(function(){$("#wrapper").toggleClass("toggled")});var s=$("#main-menu").children().clone();s.each(function(){$(this).addClass("visible-xs")}),$("#sidebar-wrapper .main-menu").after(s);var s=$("#cart-menu").children().clone();s.each(function(){$(this).addClass("visible-xs")}),$("#sidebar-wrapper .cart-menu").after(s),$("#navbar-search-form .submit-search").on("click",function(e){$("#navbar-search-form .search-input").hasClass("active")||(e.preventDefault(),$("#navbar-search-form .search-input").addClass("active").focus())});var n={center:!0,items:2,loop:!0,margin:25,autoplay:!0,dots:!1,autoWidth:!0,responsive:{0:{items:2}}};Pace.once("hide",function(){$(".slider-carousel").owlCarousel(n)}),$('[data-toggle="tooltip"]').tooltip(),$(".add-to-cart button").on("click",function(e){e.preventDefault();var a=parseInt($(this).parent().find("input").val());if($(this).hasClass("remove"))var t=a-1;else var t=a+1;$(this).parent().find("input").val(t)}),$("#activate_checkout input").on("change paste keyup",function(){0!==$("#text_input").val().length&&0!==$("#text_input2").val().length&&$("#activate_checkout .cart-checkout").attr("disabled",!1)}),$(".clickable").click(function(){window.location=$(this).data("href")}),$(".toggle-details").click(function(e){e.preventDefault(),$(this).hasClass("is-open")?($(this).removeClass("is-open"),$(this).parent().find(".toggle-table").fadeOut()):($(this).addClass("is-open"),$(this).parent().find(".toggle-table").fadeIn())}),$('.row-eq-height [class*="col-"]').matchHeight({byRow:!0,property:"height",target:null,remove:!1})});
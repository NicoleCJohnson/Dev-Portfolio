/*
* ANTHEM - Innovative Coming Soon Template
* Build Date: March 2016
* Last Update: March 2016
* Author: Madeon08 / ThemeHelite
* Copyright (C) 2016 ThemeHelite
* This is a premium product available on theme-market.com
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Action Buttons
    3. Scroll plugins
    4. Newsletter
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function(){
    "use strict";

    setTimeout(function(){
        $("#loading").velocity("fadeOut", {
            duration: 1000,
            easing: [0.7,0,0.3,1],
        });

    },3000);

    setTimeout(function(){

        $('#left-side').velocity({

            opacity : "1",

            complete: function(){

                setTimeout(function() {
                    $('.text-intro').each(function(i) {
                        (function(self) {
                            setTimeout(function() {
                                $(self).addClass('animated-middle fadeInUp').removeClass('opacity-0');
                            },(i*150)+150);
                            })(this);
                        });
                    }, 0);
                }

            },

        {
            duration: 500,
            easing: [0.7,0,0.3,1],
        })
    
    },3600);

    setTimeout(function(){
        $(".btn-intro").addClass('animated-middle flipInY').removeClass('opacity-0');
    },4500);

});

$(document).ready(function(){
    "use strict";

    /* ------------------------------------- */
    /* 2. Action Buttons ................... */
    /* ------------------------------------- */

    $('.more-info-opening').on( "click", function() {
        $(".more-info-right").toggleClass("more-info-opened");
        $(".overlay").toggleClass("skew-part");
        $("#right-side").toggleClass("hide-right");
        // $("#left-side").toggleClass("minimize-left");
        $(".icon-menu i").removeClass("pulsator");
        $('.mCSB_scrollTools').toggleClass('mCSB_scrollTools-left');
        setTimeout(function() {
            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side",{
                scrollInertia:300,
                callbacks:false
            });
        }, 250);
    });

    /* ------------------------------------- */
    /* 3. Scroll plugins ................... */
    /* ------------------------------------- */

    $(function() {
        $('body').bind('mousewheel', function(event) {
          event.preventDefault();
          var scrollTop = this.scrollTop;
          this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
          //console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
        });
    });

    // ScrollBar on Desktop, not on Touch devices for a perfect ergonomy
    function scrollbar(){

        $('body').mCustomScrollbar({
            scrollInertia: 150,
            axis            :"y"
        });  

    }
  
    scrollbar();

    /* ------------------------------------- */
    /* 4. Newsletter ........................ */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    if (document.querySelectorAll('[data-bss-baguettebox]').length > 0) {
        baguetteBox.run('[data-bss-baguettebox]', { animation: 'slideIn' });
     }
}); 

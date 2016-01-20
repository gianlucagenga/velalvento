(function($) {
  
    var App = {
 
    /**
    * Init Function
    */
    init: function() {
        App.HomeOpacity();
        App.ScrollToContact();
        App.ScrollBack();
        App.Preloader();
        App.Animations();
        App.Carousel();
        App.Lightbox();
    },

 
    HomeOpacity: function() {
        var h = window.innerHeight;
        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            $('#home').css('opacity', (1-st/h) );
        });
    },


    /**
    * Scroll To Contact
    */
    ScrollToContact: function() {
        $('#charter_btn').click(function () { $.scrollTo('#charter',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
        $('#weekend_btn').click(function () { $.scrollTo('#weekend',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
        $('#proposte_viaggio_btn').click(function () { $.scrollTo('#proposte_viaggio',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
        $('#chi_siamo_btn').click(function () { $.scrollTo('#chi_siamo',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
        $('#scuola_vela_btn').click(function () { $.scrollTo('#scuola_vela',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});

        $('#charter_btn_xs').click(function () { $.scrollTo('#charter',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
        $('#weekend_btn_xs').click(function () { $.scrollTo('#weekend',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
        $('#proposte_viaggio_btn_xs').click(function () { $.scrollTo('#proposte_viaggio',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
        $('#chi_siamo_btn_xs').click(function () { $.scrollTo('#chi_siamo',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
        $('#scuola_vela_btn_xs').click(function () { $.scrollTo('#scuola_vela',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
        /*$('#button_more').click(function () { $.scrollTo('#about',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#about_arrow_back').click(function () { $.scrollTo('0px',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#about_arrow_next').click(function () { $.scrollTo('#nostri_weekend',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
 //   $('#rotte_classiche_arrow_back').click(function () { $.scrollTo('#about',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
 //   $('#rotte_classiche_arrow_next').click(function () { $.scrollTo('#nostri_weekend',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#nostri_weekend_arrow_back').click(function () { $.scrollTo('#about',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#nostri_weekend_arrow_next').click(function () { $.scrollTo('#features_1',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_1_arrow_back').click(function () { $.scrollTo('#nostri_weekend',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_1_arrow_next').click(function () { $.scrollTo('#features_2',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_2_arrow_back').click(function () { $.scrollTo('#features_1',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_2_arrow_next').click(function () { $.scrollTo('#gallery',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
  //  $('#features_3_arrow_back').click(function () { $.scrollTo('#features_2',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
  //  $('#features_3_arrow_next').click(function () { $.scrollTo('#gallery',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#gallery_arrow_back').click(function () { $.scrollTo('#features_2',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#gallery_arrow_next').click(function () { $.scrollTo('#price',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#price_arrow_back').click(function () { $.scrollTo('#gallery',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#price_arrow_next').click(function () { $.scrollTo('#footer',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});*/
    },

 
 
    /**
    * Scroll Back
    */
    ScrollBack: function() {
        $('#arrow_back').click(function () {
            $.scrollTo('#home',1500,{easing:'easeInOutExpo',offset:0,'axis':'y'});
        });
    },
 
 
    /**
    * Preloader
    */
    Preloader: function() {
        $(window).load(function() {
            $('#status').delay(100).fadeOut('slow');
            $('#preloader').delay(500).fadeOut('slow');
            $('body').delay(500).css({'overflow':'visible'});
            setTimeout(function(){$('#logo').addClass('animated fadeInDown')},500);
            setTimeout(function(){$('#logo_header').addClass('animated fadeInDown')},600);
            setTimeout(function(){$('#slogan').addClass('animated fadeInDown')},700);
            setTimeout(function(){$('#home_image').addClass('animated fadeInUp')},900);
        })
    },


    /**
    * Animations
    */
    Animations: function() {
        $('#about').waypoint(function() {
            setTimeout(function(){$('#about_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#service_1').addClass('animated fadeInDown')},300);
            setTimeout(function(){$('#service_2').addClass('animated fadeInDown')},500);
            setTimeout(function(){$('#service_3').addClass('animated fadeInDown')},700);
        }, { offset: '50%' });

        $('#rotte_classiche').waypoint(function() {
            setTimeout(function(){$('#rotte_classiche_content').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#rotte_classiche_image').addClass('animated fadeInRight')},600);
        }, { offset: '50%' });

        $('#nostri_weekend').waypoint(function() {
            setTimeout(function(){$('#nostri_weekend_content').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#nostri_weekenda_image').addClass('animated fadeInRight')},1100);
            setTimeout(function(){$('#nostri_weekendb_image').addClass('animated fadeInRight')},600);
        }, { offset: '50%' });

        $('#features_1').waypoint(function() {
            setTimeout(function(){$('#features_1_content').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#features1a_image').addClass('animated fadeInRight')},1100);
            setTimeout(function(){$('#features1b_image').addClass('animated fadeInRight')},600);
        }, { offset: '50%' });
 
        $('#features_2').waypoint(function() {
            setTimeout(function(){$('#features_2_content').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#features2a_image').addClass('animated fadeInLeft')},1100);
            setTimeout(function(){$('#features2b_image').addClass('animated fadeInLeft')},600)
        }, { offset: '50%' });
 
        $('#features_3').waypoint(function() {
            setTimeout(function(){$('#features_3_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#features_3_content_left, #features_3_content_right').addClass('animated fadeInUp')},700);
            setTimeout(function(){$('#features_3_content_center').addClass('animated fadeInDown')},600)
        }, { offset: '50%' });
 
        $('#gallery').waypoint(function() {
            setTimeout(function(){$('#gallery_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#gallery_carousel').addClass('animated fadeInUp')},700)
        }, { offset: '50%' });

        $('#price').waypoint(function() {
            setTimeout(function(){$('#priceTitle').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#priceTable').addClass('animated fadeInUp')},700)
            setTimeout(function(){$('#priceConditions').addClass('animated fadeInUp')},1100)
        }, { offset: '50%' });

        $('#dev_blog').waypoint(function() {
            setTimeout(function(){$('#dev_blog_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#dev_blog_content').addClass('animated fadeInDown')},700)
        }, { offset: '50%' });

        $('#blog_header').waypoint(function() {
            setTimeout(function(){$('#title').addClass('animated fadeInDown')},0);
        }, { offset: '50%' });


    },


    /**
    * Carousel
    */
    Carousel: function() {
        $('#owl-gallery').owlCarousel({
            items : 5,
            itemsDesktop : [1199,5],
            itemsDesktopSmall : [980,5],
            itemsTablet: [768,5],
            itemsTabletSmall: [550,2],
            itemsMobile : [480,2]
        });
    },

    /**
    * Nivo Lightbox
    */
    Lightbox: function() {
        $('#owl-gallery a').nivoLightbox({
            effect: 'fall'                             // The effect to use when showing the lightbox
        });
    }
 

 }

$(function() {
  App.init();
  });


})(jQuery);
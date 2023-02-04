/******************************************
    Version: 1.0
/****************************************** */

(function($) {
    "use strict";

	
	/* ==============================================
    scrollIt
    =============================================== */
	var wind = $(window);
	
	// scrollIt
	$.scrollIt({
	  upKey: 38,                // key code to navigate to the next section
	  downKey: 40,              // key code to navigate to the previous section
	  easing: 'swing',         // the easing function for animation
	  scrollTime: 600,          // how long (in ms) the animation takes
	  activeClass: 'active',    // class given to the active nav element
	  onPageChange: null,       // function(pageIndex) that is called when page is changed
	  topOffset: -60            // offste (in px) for fixed top navigation
	});


	// close navbar-collapse when a  clicked
	$(".nav a").on('click', function () {
		$(".navbar-collapse").removeClass("in").addClass("collapse");
	});
	
	 // close navbar-collapse when a  clicked
	$(".nav a").on('click', function () {
		$(".navbar-collapse").removeClass("in").addClass("collapse");
	});


	// navbar scrolling background
	wind.on("scroll",function () {

		var bodyScroll = wind.scrollTop(),
			navbar = $(".navbar-default")

		if(bodyScroll > 100){

			navbar.addClass("nav-scroll");

		}else{

			navbar.removeClass("nav-scroll");
		}
	});

	
     /* ==============================================
    Fixed menu
    =============================================== */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.header_style_01').addClass('fixed-menu');
		} else {
			$('.header_style_01').removeClass('fixed-menu');
		}
	});


    /* ==============================================
		Scroll to top  
	============================================== */
		
	if ($('#scroll-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#scroll-to-top').addClass('show');
				} else {
					$('#scroll-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#scroll-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
	
	/* ==============================================
	Banner slider -->
	=============================================== */
        var banner = $("#main-banner");
        if (banner.length) {
          banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
            height: '870px',
            pagination: true,
            navigation: false,
            thumbnails: false,
            playPause: false,
            pauseOnClick: false,
            autoPlay:true,
            hover: false,
            overlayer: true,
            loader: 'none',
            minHeight: '400px',
            time: 400000,
          });
        };
	
    /* ==============================================
	LOADER -->
	=============================================== */

    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

	/* ==============================================
	Gallery Filter -->
	=============================================== */
        var Container = $('.container');
        Container.imagesLoaded(function () {
            var portfolio = $('.gallery-menu');
            portfolio.on('click', 'button', function () {
                $(this).addClass('active').siblings().removeClass('active');
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.gallery-list').isotope({
                itemSelector: '.gallery-grid'
            });

        });
	
    /* ==============================================
     FUN FACTS -->
     =============================================== */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 50; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 30);
        }
    }
    $(".stat_count, .stat_count_download").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    /* ==============================================
     TOOLTIP -->
     =============================================== */
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

    /* ==============================================
     CONTACT -->
     =============================================== */
    jQuery(document).ready(function() {
        $('#contactform').submit(function() {
            var action = $(this).attr('action');
            $("#message").slideUp(750, function() {
                $('#message').hide();
                $('#submit')
                    .after('<img src="images/ajax-loader.gif" class="loader" />')
                    .attr('disabled', 'disabled');
                $.post(action, {
                        first_name: $('#first_name').val(),
                        last_name: $('#last_name').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        select_service: $('#select_service').val(),
                        select_price: $('#select_price').val(),
                        comments: $('#comments').val(),
                        verify: $('#verify').val()
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#contactform img.loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#contactform').slideUp('slow');
                    }
                );
            });
            return false;
        });
    });

    /* ==============================================
     CODE WRAPPER -->
     =============================================== */

    $('.code-wrapper').on("mousemove", function(e) {
        var offsets = $(this).offset();
        var fullWidth = $(this).width();
        var mouseX = e.pageX - offsets.left;

        if (mouseX < 0) {
            mouseX = 0;
        } else if (mouseX > fullWidth) {
            mouseX = fullWidth
        }

        $(this).parent().find('.divider-bar').css({
            left: mouseX,
            transition: 'none'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(' + (mouseX) + 'px)',
            transition: 'none'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(' + (-1 * mouseX) + 'px)',
            transition: 'none'
        });
    });
    $('.divider-wrapper').on("mouseleave", function() {
        $(this).parent().find('.divider-bar').css({
            left: '50%',
            transition: 'all .3s'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(50%)',
            transition: 'all .3s'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(-50%)',
            transition: 'all .3s'
        });
    });

})(jQuery);
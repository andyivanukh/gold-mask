$( document ).ready(function() {

	owlInit()

	function owlInit() {

		var owl = $('.owl-carousel');
	
		owl.owlCarousel({
			items: 1,
			dots: true,
			nav: true,
			autoplay: false
		});

	}

	$(function(){

		var lazy = $(".lazy");

		lazy.attr('src', 'img/ajax-loader.gif');
		lazy.lazyload();

	});

	$(function(){

		$('.bg-js').removeClass('bg-js');

	});


	$(function(){
		var wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       200,
			mobile:       false,
			live:         true
		});
		wow.init();
	});

	$(function(){

		if($(window).width() < 991) {

			var owlNewClass = ['.complex-list', '.way-step']

			for (i = 0; i < owlNewClass.length; i++) {

				$(owlNewClass[i]).addClass('owl-carousel');

			}

			owlInit()

		}

	});

	$(function(){
		$("[data-toggle=scroll]").on("click", function (event) {
		  event.preventDefault();
		  var id  = $(this).attr('data-id'),
		      top = $(id).offset().top;
		  $('body,html').animate({scrollTop: top}, 1500);
		});
	});

});
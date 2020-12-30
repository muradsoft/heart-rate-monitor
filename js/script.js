
//slider
$(document).ready(function () {
	$('.carousel__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		speed: 1200,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					swipe: true,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: true
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	}
	);

	//catalog tabs 
	$('ul.catalog__tabs').on('click', 'li:not(catalog__tab-active)', function () {
		$(this)
			.addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
			.closest('div.catalog__inner').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
	});

	//catalog descr

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on("click", function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');

			});
		});
	};
	toggleSlide(".catalog-item__link");
	toggleSlide(".catalog-item__back");

	//close modal windows
	function modalClose(item) {
		$(item).on('click', () => {
			$('.overlay, #consultation, #order, #thanks').fadeOut();
		});
	};
	modalClose('.modal__close');
	//modal 

	$('[data-modal=consultation]').on('click', () => {
		$('.overlay, #consultation').fadeIn();
	})
	$('.button-mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('#order, .overlay').fadeIn();
		});
	});
	function validForm(form) {
		$(form).validate({
			rules: {
				name: 'required',
				phone: 'required',
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "*Пожалуйста введите ваше имя",
				phone: "*Пожалуйста введите ваш номер телефона",
				email: {
					required: "*Введите вашу почту",
					email: "*Введите вашу почту в формате  name@domain.com"
				}
			}
		});
	};



	$(function () {
		$("a[href^='#']").click(function () {
			var _href = $(this).attr("href");
			$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
			return false;
		});
	});
	$(window).scroll(function (params) {
		if ($(this).scrollTop() > 1200) {
			$(".pageup").fadeIn();

		} else {
			$(".pageup").fadeOut();
		}

		// $("a[href^='#']").click(function () {
		// 	var _href = $(this).attr("href");
		// 	$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		// 	return false;
		// });

	});



	new WOW().init();

	validForm('#consultation-form');
	validForm('#consultation form');
	validForm('#order form');
});
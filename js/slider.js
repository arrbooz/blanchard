let myImageSlider = new Swiper('.main-swiper', {
  // Optional parameters
  loop: true,

  // And if we need scrollbar
  scrollbar: {
    hide: true,
  },

  autoplay: {
    delay: 7000,
    stopOnLastSlide: false,
    disableOnInteraction: false
    },

});


let sliderGal = document.querySelector(".gallery-slider");
let swiper = new Swiper(sliderGal, {
	// Стрелки
	navigation: {
		nextEl: '.gallery-next',
		prevEl: '.gallery-prev'
	},

	pagination: {
		el: '.gallery-pagination',
		type: 'fraction',
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 3,

	// Отступ между слайдами
	spaceBetween: 50,

	// Количество пролистываемых слайдов
	slidesPerGroup: 3,

	loop: true,

	



});



// accordion 

document.querySelectorAll('.accordion__item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion__item--active')) {
            parent.classList.remove('accordion__item--active')
        } else {
            document.querySelectorAll('.accordion__item')
            .forEach((child) => child.classList.remove('accordion__item--active'))

            parent.classList.add('accordion__item--active')
        }
    })
)

// dropdown 

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header-2__item__btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".container--dropdown");
      
      document.querySelectorAll(".header-2__item__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("active--btn");
        }
      });
      
      document.querySelectorAll(".container--dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-list--item");
        }
      })
      dropdown.classList.toggle("active-list--item");
      btn.classList.toggle("active--btn")
    })
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header-2__nav__list")) {
      document.querySelectorAll(".container--dropdown").forEach(el => {
          el.classList.remove("active-list--item");
      })
       document.querySelectorAll(".header-2__item__btn").forEach(el => {
          el.classList.remove("active--btn");
      });
    }
  })
  })

// map 

type="text/javascript"
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.760495, 37.615022],
            zoom: 14,
            controls: ['zoomControl', 'geolocationControl']
        },
        {
            suppressMapOpenBlock: true,
            geolocationControlSize: "large",
            geolocationControlPosition: { top: "360px", right: "20px"},
            geolocationControlFloat: "none",
            zoomControlSize: "small",
            zoomControlFloat: "none",
            zoomControlPosition: { top: "290px", right: "20px"}
        }
        );
    
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
            type: "Point", 
        }
        });

        var myPlacemark = new ymaps.Placemark([55.760495, 37.615022], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/geo.svg',
            iconImageSize: [20, 20], 
        });        

        myMap.geoObjects.add(myGeoObject);
        myMap.geoObjects.add(myPlacemark);
        myMap.options.set('scrollZoomSpeed', 0.9);
}
       
// nav 

const burger = document.querySelector(".burger");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
});

// select 

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
searchEnabled: false,
itemSelectText: '',
shouldSort: false
});

// swiper 

let myImageSlider = new Swiper('.main-swiper', {
	scrollbar: {
	hide: true,
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false
  },
	loop: true,
});


let sliderGal = new Swiper (".gallery-slider", {
	navigation: {
		nextEl: '.gallery-next',
		prevEl: '.gallery-prev'
	},
	pagination: {
		el: '.gallery-pagination',
		type: 'fraction',
	},
	slidesPerGroup: 3,
	loop: true,
    breakpoints: {
		1010: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
		700: {
            slidesPerView: 2,
			spaceBetween: 30,
        },
        320: {
            slidesPerView: 1,
			spaceBetween: 30,
        },
	},
});


let sliderEvents = new Swiper (".events-slider", {
	navigation: {
		nextEl: '.events-next',
	},
	loop: true,
    breakpoints: {
        1470: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
		1010: {
			slidesPerView: 3,
			spaceBetween: 25,
		},
		650: {
            slidesPerView: 2,
			spaceBetween: 25,
        },
        320: {
            slidesPerView: 1,
			spaceBetween: 25,
        },
	},
});

let sliderProj = new Swiper (".projects-slider", {
	navigation: {
		nextEl: '.projects-next',
		prevEl: '.projects-prev'
	},
	loop: true,
    breakpoints: {
        1470: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
		1010: {
			slidesPerView: 3,
			spaceBetween: 25,
		},
		650: {
            slidesPerView: 2,
			spaceBetween: 25,
        },
        320: {
            slidesPerView: 1,
			spaceBetween: 25,
        },
	},
});


// tabs 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs-btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelectorAll(`[data-target="${path}"]`).forEach(item => item.classList.add('tab-content-active'))
        })
    })
})

// tippy 

tippy('#Button1', {
    content: '<div style="background-color: transparent; text-align: center; padding: 5px; max-width: 264px;" class="tippy-box">Пример современных тенденций - современная методика разработки</div>',
    allowHTML: true,
    theme: 'purple',
});

tippy('#Button2', {
    content: '<div style="background-color: transparent; text-align: center; padding: 5px 0; border-radius: none;" class="tippy-box">Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции</div>',
    allowHTML: true,
    theme: 'purple',
});

tippy('#Button3', {
    content: '<div style="background-color: transparent; text-align: center; padding: 5px 0; border-radius: none;" class="tippy-box">В стремлении повысить качество</div>',
    allowHTML: true,
    theme: 'purple',
});

// validation 

var selectors = document.querySelectorAll(".form__input");
var selector = selectors[1];
var im = new Inputmask("+7 (999) 999 99 99");

im.mask(selector);

new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },

        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },
    messages: {
        name: {
            minLength: 'Минимальная длина имени - 2 символа',
            maxLength: 'Максимальная длина имени - 30 символов',
            required: 'Как вас зовут?'
        },
        tel: {
            required: 'Укажите ваш телефон',
            function: 'Укажите верный телефон'
        },
    },
});
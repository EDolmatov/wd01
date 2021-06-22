//Accordion Init
$( function() {
    $("#accordion").accordion({ heightStyle: "content" });
} );

//CustomSelect
const galleryCustSelect = document.querySelector("#gallery__filter-select");
const galleryChoices = new Choices (galleryCustSelect, {
    itemSelectText: '',
    position: 'bottom',
    placeholder: true,
    placeholderValue: null,
    searchEnabled: false,
    shouldSort: false
});

//simplebar
new SimpleBar(document.getElementById('header__dropdown-1'), { autoHide: false, forceVisible:true, scrollbarMaxSize:28 });
new SimpleBar(document.getElementById('header__dropdown-2'), { autoHide: false, forceVisible:true, scrollbarMaxSize:28 });
new SimpleBar(document.getElementById('header__dropdown-3'), { autoHide: false, forceVisible:true, scrollbarMaxSize:28 });
new SimpleBar(document.getElementById('header__dropdown-4'), { autoHide: false, forceVisible:true, scrollbarMaxSize:28 });
new SimpleBar(document.getElementById('header__dropdown-5'), { autoHide: false, forceVisible:true, scrollbarMaxSize:28 });


// Swiper Init
const gallerySwiper = new Swiper('.gallery__swiper-container', 
    {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerColumnFill: 'row',
        slidesPerView:1,
        slidesPerColumn: 1,
        slidesPerGroup:1,
        spaceBetween:0,
        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.gallery__btn-next',
            prevEl: '.gallery__btn-prev',
        },
        breakpoints: {
            1601: {
                slidesPerView:3,
                slidesPerColumn: 2,
                slidesPerGroup:3
            },
            721: {
                slidesPerView:2,
                slidesPerColumn: 2,
                slidesPerGroup:2
            }
        }

    }
);

const bookSwiper = new Swiper('.editions__swiper-container', 
    {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerColumnFill: 'row',
        slidesPerView:2,
        slidesPerGroup:2,
        slidesPerColumn: 4,
        spaceBetween:0,
        pagination: {
            el: '.editions__pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.editions__btn-next',
            prevEl: '.editions__btn-prev',
        },
        breakpoints: {
            1601: {
                slidesPerView:3,
                slidesPerColumn: 1,
                slidesPerGroup:3
            },
            1021: {
                slidesPerView:2,
                slidesPerColumn: 1,
                slidesPerGroup:2
            },
            721: {
                slidesPerView:2,
                slidesPerColumn: 1,
                slidesPerGroup:2
            }

        }

    }
);

const partnerSwiper = new Swiper('.projects__swiper-container', 
    {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerColumnFill: 'row',
        navigation: {
            nextEl: '.projects__btn-next',
            prevEl: '.projects__btn-prev',
        },
        breakpoints: {
            1601: {
                slidesPerView:3,
                slidesPerGroup:3,
                spaceBetween:50
            },
            1021: {
                slidesPerView:2,
                slidesPerGroup:2,
                spaceBetween:50
            },
            721: {
                slidesPerView:2,
                slidesPerGroup:2,
                spaceBetween:34
            },
            320: {
                slidesPerView:1,
                slidesPerGroup:1,
                spaceBetween:0
            }
        }

    }
);

// YandexMap 
ymaps.ready(init);
function init(){
    
    var myMap = new ymaps.Map("contacts__map-block", {
        center: [55.758463, 37.601079],
        zoom: 15,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {hintContent: 'Леонтьевский переулок, дом 5, строение 1'}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/Map_mark.png',
        iconImageSize: [20, 20],
        iconImageOffset: [-12, -20]
    });

    myMap.geoObjects.add(myPlacemark);
}

//JustValidate

new JustValidate('.contacts__form', {
    rules: {
        name: 
        {
            required: true,
            minLength:2
        },
        phone: 
        {
            required: true,
            function: (name, value) => {
                var selector = document.querySelector("#contacts__phone-field");
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        }
    },
    messages: {
        name: {
            required: 'Поле обязательно для заполнения',
            minLength: 'Должно быть не менее 2-х символов'
        },
        phone: 'Поле обязательно для заполнения'
    }
});

//touchscreen
if (!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
    console.log('this is not a touch device');
    $('body').addClass('notouch');
}
//header dropdown menu
function displayDropdawn(dropdawnId, btnId) {
    $('#'+dropdawnId).toggleClass('header__dropdawn_active');
    $('#'+btnId).toggleClass('header__bottom-menu-item_active');
};

//events
function displayAllEvents() {
    $('.events__card_hidden').removeClass('events__card_hidden');
    $('.events__btn').addClass('events__btn_hidden');
    $('#events__event-list').removeClass('events__event-list_hide-768');
}

function pagesPickEvents(cardId, btnId) {
    $('.events__card,.events__pages-button').removeClass('events__card-700px_visible events__pages-button_active');
    $('#'+cardId).addClass('events__card-700px_visible');
    $('#'+btnId).addClass('events__pages-button_active');
}

function toggleEditionsCaption() {
    $('#editions__caption-categories').toggleClass('editions__caption-700px_open');
}

//event subscript
$('.header__search-open,.header__search-close').click(function(){
    $('#header__search').toggleClass('header__search_visible');
});

$('.header__burger').click(function(){
    $('#header__btn-enter').toggleClass('header__submenu_visible');
    $('#header__top-menu').toggleClass('header__submenu_visible');
});

$('.catalog__flag-button').click(function(){
    $('.catalog__flag-button').removeClass('catalog__flag-button_active');
    $(this).addClass('catalog__flag-button_active');
});

$('.events__btn').click(
    displayAllEvents
);

$('#editions__caption-categories').click(
    toggleEditionsCaption
);

$('#header__bottom-menu-item-1').click(function(){
    displayDropdawn('header__dropdown-1', this.id)
});
$('#header__bottom-menu-item-2').click(function(){
    displayDropdawn('header__dropdown-2', this.id)
});
$('#header__bottom-menu-item-3').click(function(){
    displayDropdawn('header__dropdown-3', this.id)
});
$('#header__bottom-menu-item-4').click(function(){
    displayDropdawn('header__dropdown-4', this.id)
});
$('#header__bottom-menu-item-5').click(function(){
    displayDropdawn('header__dropdown-5', this.id)
});

$('#events__pages-button-1').click(function(){
    pagesPickEvents('events__card-1',this.id)
});
$('#events__pages-button-2').click(function(){
    pagesPickEvents('events__card-2',this.id)
});
$('#events__pages-button-3').click(function(){
    pagesPickEvents('events__card-3',this.id)
});
$('#events__pages-button-4').click(function(){
    pagesPickEvents('events__card-4',this.id)
});
$('#events__pages-button-5').click(function(){
    pagesPickEvents('events__card-5',this.id)
});

//Flags
function resetActiveCountry() {
    $('.catalog__Italy,.catalog__France,.catalog__Russia,.catalog__Germany,.catalog__Belgium').removeClass('catalog__active-country');
}
function clearArtistInfo() {
    $('.catalog__names-list-item').removeClass('catalog__names-list-item_active');
    $('.catalog__author-descr').removeClass('catalog__author-active');
}

$('#catalog__flag-button-1').click(function(){
    resetActiveCountry();
    $('.catalog__France').addClass('catalog__active-country');
});
$('#catalog__flag-button-2').click(function(){
    resetActiveCountry();
    $('.catalog__Germany').addClass('catalog__active-country');
});
$('#catalog__flag-button-3').click(function(){
    resetActiveCountry();
    $('.catalog__Italy').addClass('catalog__active-country');
});
$('#catalog__flag-button-4').click(function(){
    resetActiveCountry();
    $('.catalog__Russia').addClass('catalog__active-country');
});
$('#catalog__flag-button-5').click(function(){
    resetActiveCountry();
    $('.catalog__Belgium').addClass('catalog__active-country');
});

$('.catalog__names-list-item').click( function() {
    var idInfo = '#' + $(this).attr('id') + '-info';
    clearArtistInfo();
    $(idInfo).addClass('catalog__author-active');
    $(this).addClass('catalog__names-list-item_active');
    $(idInfo).get(0).scrollIntoView();
});


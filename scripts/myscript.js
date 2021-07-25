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
const sBar1 = new SimpleBar(document.getElementById('header__dropdown-1'), { autoHide: false, forceVisible:true, scrollbarMaxSize:28 });
const sBar2 = new SimpleBar(document.getElementById('header__dropdown-2'), { autoHide: false, forceVisible:true, scrollbarMaxSize:28 });
const sBar3 = new SimpleBar(document.getElementById('header__dropdown-3'), { autoHide: false, forceVisible:true, scrollbarMaxSize:28 });
const sBar4 = new SimpleBar(document.getElementById('header__dropdown-4'), { autoHide: false, forceVisible:true, scrollbarMaxSize:28 });
const sBar5 = new SimpleBar(document.getElementById('header__dropdown-5'), { autoHide: false, forceVisible:true, scrollbarMaxSize:28 });


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
            1721: {
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
            1721: {
                slidesPerView:3,
                slidesPerColumn: 1,
                slidesPerGroup:3
            },
            1001: {
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
            1721: {
                slidesPerView:3,
                slidesPerGroup:3,
                spaceBetween:50
            },
            1001: {
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

const validateObj = new JustValidate('.contacts__form', {
    rules: {
        name: 
        {
            required: true,
            minLength:2
        },
        phone: 
        {
            required: true,
            function: function () {
                var selector = document.querySelector("#contacts__phone-field");
                const phone = selector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
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
    $('#'+btnId).toggleClass('header__bottom-menu-btn_active');
}

//events
function displayAllEvents() {
    $('.events__btn').addClass('events__btn_hidden');
    $('#events__event-list').removeClass('events__event-list_hide-768');
}

function pagesPickEvents(cardCls, btnCls) {
    $('.events__card,.events__pages-button').removeClass('events__card-700px_visible events__pages-button_active');
    $(cardCls).addClass('events__card-700px_visible');
    $(btnCls).addClass('events__pages-button_active');
}

function toggleEditionsCaption() {
    $('#editions__caption-categories').toggleClass('editions__caption-700px_open');
}

//event subscript
$('.header__search-open,.header__search-close').click(function(){
    $('#header__search').toggleClass('header__search_visible');
});

$('.header__burger,.header__top-menu-close').click(function(){
    $('#header__btn-enter,#header__top-menu-close,#header__top-menu').toggleClass('header__submenu_visible');
});
$('.header__top-menu-item').click(function(){
    $('#header__btn-enter,#header__top-menu-close,#header__top-menu').removeClass('header__submenu_visible');
})

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

$('#header__bottom-menu-btn-1').click(function(){
    displayDropdawn('header__dropdown-1', this.id);
});
$('#header__bottom-menu-btn-2').click(function(){
    displayDropdawn('header__dropdown-2', this.id);
});
$('#header__bottom-menu-btn-3').click(function(){
    displayDropdawn('header__dropdown-3', this.id);
});
$('#header__bottom-menu-btn-4').click(function(){
    displayDropdawn('header__dropdown-4', this.id);
});
$('#header__bottom-menu-btn-5').click(function(){
    displayDropdawn('header__dropdown-5', this.id);
});

$('.events__pages-button:eq(0)').click(function(){
    pagesPickEvents('.events__card:eq(0)', '.events__pages-button:eq(0)');
});
$('.events__pages-button:eq(1)').click(function(){
    pagesPickEvents('.events__card:eq(1)', '.events__pages-button:eq(1)');
});
$('.events__pages-button:eq(2)').click(function(){
    pagesPickEvents('.events__card:eq(2)', '.events__pages-button:eq(2)');
});
$('.events__pages-button:eq(3)').click(function(){
    pagesPickEvents('.events__card:eq(3)', '.events__pages-button:eq(3)');
});
$('.events__pages-button:eq(4)').click(function(){
    pagesPickEvents('.events__card:eq(4)', '.events__pages-button:eq(4)');
});

$('.hero__btn').click(function(){
    $('#contacts__map-block').get(0).scrollIntoView();
});

//Flags
function resetActiveCountry() {
    $('.catalog__Italy,.catalog__France,.catalog__Russia,.catalog__Germany,.catalog__Belgium').removeClass('catalog__active-country');
}
function clearArtistInfo() {
    $('.catalog__names-list-item').removeClass('catalog__names-list-item_active');
    $('.catalog__author-descr').removeClass('catalog__author-active');
}
function hideEmptyNamelists() {
    for (var i = 0; i < 7; i++) {
        var currentNamelist = '#catalog__names' + i;
        var activeArtists = $(currentNamelist + ' .catalog__active-country');
        if ( activeArtists.get(0) ) {
            $(currentNamelist + ' .catalog__names-list').removeClass('catalog__names-list_hidden');
            $(currentNamelist + ' .catalog__names-empty').removeClass('catalog__names-empty_visible');
        }
        else {
            $(currentNamelist + ' .catalog__names-list').addClass('catalog__names-list_hidden');
            $(currentNamelist + ' .catalog__names-empty').addClass('catalog__names-empty_visible');
        }
    }
}
function showFirstArtist() {
    var firstArtist = $('.catalog__active-country:first');
    var parentElem = firstArtist.closest('div.catalog__names');
    var parentElemLastSimbol = parentElem.attr('id').slice(-1);
    $('#catalog__dates-list-text' + parentElemLastSimbol).click();
    firstArtist.click();    
}
function buttonClickFunc(countrySelect) {
    resetActiveCountry();
    $(countrySelect).addClass('catalog__active-country');
    hideEmptyNamelists();
    showFirstArtist();
}

$('#catalog__flag-button-1').click(function(){
    buttonClickFunc('.catalog__France');
});
$('#catalog__flag-button-2').click(function(){
    buttonClickFunc('.catalog__Germany');
});
$('#catalog__flag-button-3').click(function(){
    buttonClickFunc('.catalog__Italy');
});
$('#catalog__flag-button-4').click(function(){
    buttonClickFunc('.catalog__Russia');
});
$('#catalog__flag-button-5').click(function(){
    buttonClickFunc('.catalog__Belgium');
});

$('.catalog__names-list-item').click( function() {
    var idInfo = '#' + $(this).attr('id') + '-info';
    clearArtistInfo();
    
    $(this).addClass('catalog__names-list-item_active');
    if( $(idInfo).get(0) ) {
        $(idInfo).addClass('catalog__author-active');
    } 
    else {
        $('#artist-unknown').addClass('catalog__author-active');
    }
    if ( $( document ).width() <= 1000 ) {
        $('.catalog__authors-left').get(0).scrollIntoView();
    }
    
});

hideEmptyNamelists();




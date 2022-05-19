/* Меню бургер */
$(document).ready(function() {
    $('.menu_burger').click(function(event) {
        $('.menu_burger,.header_menu').toggleClass('active');
    });
    $('.header_menu_exit').click(function(event) {
        $('.menu_burger,.header_menu').toggleClass('active');
    });
    $('.menu_header_item_link').click(function(event) {
        $('.menu_burger,.header_menu').toggleClass('active');
    });
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".header_menu");
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.header_menu').removeClass('active'); 
                        $('.menu_burger').removeClass('active');
    } 
});

/* Pop-up */ 

$(document).ready(function() {
    $('.btm_popup').click(function(event) {
        $('.popup_application').toggleClass('active');
    });
    $('.popup_application_block_close_block').click(function(event) {
        $('.popup_application').removeClass('active');
    });
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".popup_desc");
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.popup_application').removeClass('active'); 
                        
    } 
});

/* слайдер */ 
$(document).ready(function() {
    $('.slider_works').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

/* Анимация как купить */ 

const animsIteams = document.querySelectorAll('.anime_block_item');

if(animsIteams.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animsIteams.length; index++) {
            const animIteam = animsIteams[index];
            const animIteamsHeight = animIteam.offsetHeight;
            const animIteamsOffset = offset(animIteam).top;
            const animStart = 4;
            
            let animItemPoint = window.innerHeight - animIteamsHeight / animStart;

            if (animIteamsHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animIteamsOffset - animItemPoint) && scrollX < (animIteamsOffset + animIteamsHeight)){
                animIteam.classList.add('active_block');
            } 

        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
}
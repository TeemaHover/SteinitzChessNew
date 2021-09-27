const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    mousewheel: true,
});

var nav = document.getElementById("nav");

function slideTo(i) {
    let mql = window.matchMedia('(max-width: 400px)');
    if (mql.matches == true) {
        nav.classList.remove("show");
        nav.classList.toggle("hide");
    }
    swiper.slideTo(i, 1000)

}
const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
    },
});
const swiperTeachers = new Swiper('.swiperTeachers', {
    // Optional parameters
    loop: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

});
const swiperTeachersContent = new Swiper('.swiperTeachersContent', {
    // Optional parameters
    loop: true,
    direction: 'horizontal',

    effect: 'flip',
    flipEffect: {
        slideShadows: false,
    },
    allowTouchMove: false,

});

swiperTeachers.controller.control = swiperTeachersContent
swiperTeachersContent.controller.control = swiperTeachers

const swiperTraining = new Swiper('.swiperTraining', {
    // Optional parameters
    direction: 'vertical',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

function slideToTraining(i) {
    swiperTraining.slideTo(i, 1000)
}
const swiperLessonRight1 = new Swiper('.swiperLessonRight1', {
    direction: 'vertical',
});
const swiperLessonRight2 = new Swiper('.swiperLessonRight2', {
    direction: 'vertical',
});
const swiperLessonRight3 = new Swiper('.swiperLessonRight3', {
    direction: 'vertical',
});
const swiperLessonRight4 = new Swiper('.swiperLessonRight4', {
    direction: 'vertical',
});
const swiperLessonRight5 = new Swiper('.swiperLessonRight5', {
    direction: 'vertical',
});
const swiperLessonRight6 = new Swiper('.swiperLessonRight6', {
    direction: 'vertical',
});


function slideToLesson1(i) {
    swiperLessonRight1.slideTo(i, 1000)
}

function slideToLesson2(i) {
    swiperLessonRight2.slideTo(i, 1000)
}

function slideToLesson3(i) {
    swiperLessonRight3.slideTo(i, 1000)
}

function slideToLesson4(i) {
    swiperLessonRight4.slideTo(i, 1000)

}

function slideToLesson5(i) {
    swiperLessonRight5.slideTo(i, 1000)
}

function slideToLesson6(i) {
    swiperLessonRight6.slideTo(i, 1000)
}
var burgerButton = document.getElementById("burgerBtn");
var closeNav = document.getElementById("closeNav");
var nav = document.getElementById("nav");
burgerButton.onclick = myFunction1;
closeNav.onclick = myFunction2;

function myFunction1(e) {
    e.preventDefault();
    nav.classList.toggle("show");
}

function myFunction2(e) {
    e.preventDefault();
    nav.classList.remove("show");
    nav.classList.toggle("hide");
}


function enterNavigationOnMobile(e) {
    e.preventDefault();
    nav.classList.toggle("show");
}

function exitNavigationOnMobile(e) {
    e.preventDefault();
    nav.classList.toggle("show");
}
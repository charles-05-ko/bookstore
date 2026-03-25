var swiper = new Swiper(".mainadd1Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },


});

var swiper = new Swiper(".mainadd2Swiper", {
    // loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    on: {
        slideChange: function () {
            let index = this.activeIndex;
            const activeDiv = document.querySelectorAll('.add2_textbox div')
            console.log(activeDiv)
            activeDiv.forEach((item) => {
                item.style.opacity = 0;
            });


            if (activeDiv[this.activeIndex]) {
                activeDiv[this.activeIndex].style.opacity = 1;
            }
        },
        slideChange: function () {
            let index = this.activeIndex;
            const activeDiv = document.querySelectorAll('.add2_textbox div');

            activeDiv.forEach((item) => {
                item.style.opacity = 0;
            });

            if (activeDiv[index]) {
                activeDiv[index].style.opacity = 1;
            }
        }
    }
});

var swiper = new Swiper(".todaypickSwiper", {
    loop: true,
    navigation: {
        nextEl: "#today_pick_sub .swiper-button-next",
        prevEl: "#today_pick_sub .swiper-button-prev",
    },
});

var swiper = new Swiper(".todaypickSwiper2", {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: "#today_pick_sub .swiper-button-next",
        prevEl: "#today_pick_sub .swiper-button-prev",
    },
});

var swiper = new Swiper(".morebookSwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#morebook_slider .swiper-button-next",
        prevEl: "#morebook_slider .swiper-button-prev",
    },
});

var swiper = new Swiper(".mdpickSwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#mdpick_slider .swiper-button-next",
        prevEl: "#mdpick_slider .swiper-button-prev",
    },
});
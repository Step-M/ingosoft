$(document).ready(function () {
   $('.search').select2();

    $('.spikers-w').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<div class="arrow-next">➜</div>',
        prevArrow: '<div class="arrow-prew">➜</div>',
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    adaptiveHeight: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    }); //doc readey end


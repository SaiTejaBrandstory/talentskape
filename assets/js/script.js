// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-section');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Success Stories Slick Carousel
$(document).ready(function() {
    $('#successCarousel').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev nav-arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next nav-arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        customPaging: function(slider, i) {
            return '<span class="nav-dot"></span>';
        }
    });
    
    // Testimonial Carousel
    $('#testimonialCarousel').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev testimonial-nav-arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next testimonial-nav-arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        customPaging: function(slider, i) {
            return '<span class="testimonial-nav-dot"></span>';
        }
    });

    // Insights Section Tab Functionality
    $('.tab-button').on('click', function() {
        const targetTab = $(this).data('tab');
        
        // Don't do anything if clicking the same tab
        if ($(this).hasClass('active')) {
            return;
        }
        
        // Remove active class from all tabs and content
        $('.tab-button').removeClass('active');
        $('.tab-content').removeClass('active');
        
        // Add active class to clicked tab
        $(this).addClass('active');
        
        // Get the correct carousel ID based on tab
        let carouselId = targetTab + 'Carousel';
        if (targetTab === 'talent-report') {
            carouselId = 'talentReportCarousel';
        }
        
        // Destroy existing carousel if it exists
        if ($(`#${carouselId}`).hasClass('slick-initialized')) {
            $(`#${carouselId}`).slick('unslick');
        }
        
        // Show the target content with smooth transition
        $(`#${targetTab}`).addClass('active');
        
        // Common carousel settings
        const carouselSettings = {
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            fade: false,
            speed: 300,
            prevArrow: '<button type="button" class="slick-prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            customPaging: function(slider, i) {
                return '<button class="insights-nav-dot"></button>';
            }
        };
        
        // Initialize carousel with a delay to allow CSS transition to complete
        setTimeout(function() {
            if ($(`#${carouselId}`).length > 0) {
                $(`#${carouselId}`).slick(carouselSettings);
            }
        }, 150);
    });
    
    // Initialize all carousels immediately
    function initializeInsightsCarousel(carouselId) {
        // Check if carousel exists and destroy if already initialized
        if ($(`#${carouselId}`).hasClass('slick-initialized')) {
            $(`#${carouselId}`).slick('unslick');
        }
        
        // Initialize the carousel with proper settings
        $(`#${carouselId}`).slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            customPaging: function(slider, i) {
                return '<button class="insights-nav-dot"></button>';
            }
        });
    }
    
    // Initialize all insights carousels with delay to ensure DOM is ready
    setTimeout(function() {
        // Initialize whitepapers carousel (active by default)
        initializeInsightsCarousel('whitepapersCarousel');
        
        // Initialize talent-report carousel
        initializeInsightsCarousel('talentReportCarousel');
        
        // Initialize blogs carousel
        initializeInsightsCarousel('blogsCarousel');
    }, 100);
    
});

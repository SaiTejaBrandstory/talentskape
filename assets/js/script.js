// Header Scroll Effect
function updateHeaderState() {
    const header = document.querySelector('.header-section');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Run on scroll
window.addEventListener('scroll', updateHeaderState);

// Run on page load to set initial state
document.addEventListener('DOMContentLoaded', updateHeaderState);

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

// Country Selector with API and Real Flag Images
let countries = [];
let filteredCountries = [];

// Fetch all countries from API
async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,idd');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!Array.isArray(data)) {
            throw new Error('Invalid data format received from API');
        }
        
        countries = data.map(country => {
            let dialCode = '+1'; // Default fallback
            
            if (country.idd && country.idd.root) {
                dialCode = country.idd.root;
                if (country.idd.suffixes && country.idd.suffixes.length > 0) {
                    dialCode += country.idd.suffixes[0];
                }
            }
            
            return {
                name: country.name?.common || 'Unknown',
                code: country.cca2?.toLowerCase() || 'xx',
                dialCode: dialCode,
                flag: `https://flagcdn.com/w40/${country.cca2?.toLowerCase() || 'xx'}.png`
            };
        }).sort((a, b) => a.name.localeCompare(b.name));
        
        filteredCountries = [...countries];
        renderCountries();
        console.log('Loaded', countries.length, 'countries from API');
    } catch (error) {
        console.error('Error fetching countries:', error);
        // Fallback to static list
        loadFallbackCountries();
    }
}

// Fallback countries if API fails
function loadFallbackCountries() {
    countries = [
        { name: 'India', code: 'in', dialCode: '+91', flag: 'https://flagcdn.com/w40/in.png' },
        { name: 'United States', code: 'us', dialCode: '+1', flag: 'https://flagcdn.com/w40/us.png' },
        { name: 'United Kingdom', code: 'gb', dialCode: '+44', flag: 'https://flagcdn.com/w40/gb.png' },
        { name: 'Canada', code: 'ca', dialCode: '+1', flag: 'https://flagcdn.com/w40/ca.png' },
        { name: 'Australia', code: 'au', dialCode: '+61', flag: 'https://flagcdn.com/w40/au.png' },
        { name: 'Germany', code: 'de', dialCode: '+49', flag: 'https://flagcdn.com/w40/de.png' },
        { name: 'France', code: 'fr', dialCode: '+33', flag: 'https://flagcdn.com/w40/fr.png' },
        { name: 'Japan', code: 'jp', dialCode: '+81', flag: 'https://flagcdn.com/w40/jp.png' },
        { name: 'China', code: 'cn', dialCode: '+86', flag: 'https://flagcdn.com/w40/cn.png' },
        { name: 'Brazil', code: 'br', dialCode: '+55', flag: 'https://flagcdn.com/w40/br.png' },
        { name: 'Russia', code: 'ru', dialCode: '+7', flag: 'https://flagcdn.com/w40/ru.png' },
        { name: 'Italy', code: 'it', dialCode: '+39', flag: 'https://flagcdn.com/w40/it.png' },
        { name: 'Spain', code: 'es', dialCode: '+34', flag: 'https://flagcdn.com/w40/es.png' },
        { name: 'Netherlands', code: 'nl', dialCode: '+31', flag: 'https://flagcdn.com/w40/nl.png' },
        { name: 'Sweden', code: 'se', dialCode: '+46', flag: 'https://flagcdn.com/w40/se.png' },
        { name: 'Norway', code: 'no', dialCode: '+47', flag: 'https://flagcdn.com/w40/no.png' },
        { name: 'Denmark', code: 'dk', dialCode: '+45', flag: 'https://flagcdn.com/w40/dk.png' },
        { name: 'Finland', code: 'fi', dialCode: '+358', flag: 'https://flagcdn.com/w40/fi.png' },
        { name: 'Switzerland', code: 'ch', dialCode: '+41', flag: 'https://flagcdn.com/w40/ch.png' },
        { name: 'Austria', code: 'at', dialCode: '+43', flag: 'https://flagcdn.com/w40/at.png' },
        { name: 'Belgium', code: 'be', dialCode: '+32', flag: 'https://flagcdn.com/w40/be.png' },
        { name: 'Poland', code: 'pl', dialCode: '+48', flag: 'https://flagcdn.com/w40/pl.png' },
        { name: 'South Korea', code: 'kr', dialCode: '+82', flag: 'https://flagcdn.com/w40/kr.png' },
        { name: 'Singapore', code: 'sg', dialCode: '+65', flag: 'https://flagcdn.com/w40/sg.png' },
        { name: 'Thailand', code: 'th', dialCode: '+66', flag: 'https://flagcdn.com/w40/th.png' },
        { name: 'Malaysia', code: 'my', dialCode: '+60', flag: 'https://flagcdn.com/w40/my.png' },
        { name: 'Indonesia', code: 'id', dialCode: '+62', flag: 'https://flagcdn.com/w40/id.png' },
        { name: 'Philippines', code: 'ph', dialCode: '+63', flag: 'https://flagcdn.com/w40/ph.png' },
        { name: 'Vietnam', code: 'vn', dialCode: '+84', flag: 'https://flagcdn.com/w40/vn.png' },
        { name: 'South Africa', code: 'za', dialCode: '+27', flag: 'https://flagcdn.com/w40/za.png' },
        { name: 'Egypt', code: 'eg', dialCode: '+20', flag: 'https://flagcdn.com/w40/eg.png' },
        { name: 'Nigeria', code: 'ng', dialCode: '+234', flag: 'https://flagcdn.com/w40/ng.png' },
        { name: 'Mexico', code: 'mx', dialCode: '+52', flag: 'https://flagcdn.com/w40/mx.png' },
        { name: 'Argentina', code: 'ar', dialCode: '+54', flag: 'https://flagcdn.com/w40/ar.png' },
        { name: 'Chile', code: 'cl', dialCode: '+56', flag: 'https://flagcdn.com/w40/cl.png' },
        { name: 'Turkey', code: 'tr', dialCode: '+90', flag: 'https://flagcdn.com/w40/tr.png' },
        { name: 'Israel', code: 'il', dialCode: '+972', flag: 'https://flagcdn.com/w40/il.png' },
        { name: 'Saudi Arabia', code: 'sa', dialCode: '+966', flag: 'https://flagcdn.com/w40/sa.png' },
        { name: 'United Arab Emirates', code: 'ae', dialCode: '+971', flag: 'https://flagcdn.com/w40/ae.png' },
        { name: 'Qatar', code: 'qa', dialCode: '+974', flag: 'https://flagcdn.com/w40/qa.png' },
        { name: 'Pakistan', code: 'pk', dialCode: '+92', flag: 'https://flagcdn.com/w40/pk.png' },
        { name: 'Bangladesh', code: 'bd', dialCode: '+880', flag: 'https://flagcdn.com/w40/bd.png' },
        { name: 'Sri Lanka', code: 'lk', dialCode: '+94', flag: 'https://flagcdn.com/w40/lk.png' },
        { name: 'Nepal', code: 'np', dialCode: '+977', flag: 'https://flagcdn.com/w40/np.png' }
    ];
    filteredCountries = [...countries];
    renderCountries();
    console.log('Loaded', countries.length, 'fallback countries');
}

// Render countries in dropdown
function renderCountries() {
    const countryList = document.getElementById('countryList');
    if (!countryList) return;
    
    countryList.innerHTML = filteredCountries.map(country => `
        <div class="picker-item" onclick="selectCountry('${country.code}', '${country.dialCode}', '${country.flag}', '${country.name}')">
            <img src="${country.flag}" alt="${country.name}" class="country-flag">
            <span class="country-name">${country.name}</span>
            <span class="country-code">${country.dialCode}</span>
        </div>
    `).join('');
}

// Select country
function selectCountry(code, dialCode, flag, name) {
    document.getElementById('selectedFlag').src = flag;
    document.getElementById('selectedFlag').alt = name;
    document.getElementById('selectedCode').textContent = dialCode;
    document.getElementById('countryCode').value = dialCode;
    document.getElementById('countryPickerDropdown').classList.remove('show');
}

// Toggle dropdown
function toggleDropdown() {
    console.log('toggleDropdown called');
    const dropdown = document.getElementById('countryPickerDropdown');
    const picker = document.getElementById('countryPicker');
    console.log('Dropdown element:', dropdown);
    console.log('Picker element:', picker);
    
    if (dropdown && picker) {
        console.log('Current classes:', dropdown.className);
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            console.log('Removed show class');
        } else {
            // Position the dropdown
            const pickerRect = picker.getBoundingClientRect();
            dropdown.style.top = pickerRect.bottom + 'px';
            dropdown.style.left = pickerRect.left + 'px';
            
            dropdown.classList.add('show');
            console.log('Added show class');
            console.log('Dropdown positioned at:', dropdown.style.top, dropdown.style.left);
            console.log('Picker rect:', pickerRect);
        }
        console.log('New classes:', dropdown.className);
    } else {
        console.error('Dropdown or picker element not found!');
    }
}

// Filter countries
function filterCountries() {
    const searchTerm = document.getElementById('countrySearch').value.toLowerCase();
    filteredCountries = countries.filter(country => 
        country.name.toLowerCase().includes(searchTerm) || 
        country.dialCode.includes(searchTerm)
    );
    renderCountries();
}

// Initialize country selector
function initCountrySelector() {
    console.log('Initializing country selector...');
    
    // Add click event to country picker
    const picker = document.getElementById('countryPicker');
    console.log('Country picker element:', picker);
    
    if (picker) {
        picker.addEventListener('click', function(e) {
            console.log('Country picker clicked!');
            e.stopPropagation();
            toggleDropdown();
        });
        console.log('Click event listener added to country picker');
    } else {
        console.error('Country picker element not found!');
    }
    
    // Add search event
    const searchInput = document.getElementById('countrySearch');
    console.log('Search input element:', searchInput);
    if (searchInput) {
        searchInput.addEventListener('input', filterCountries);
        console.log('Search event listener added');
    }
    
    // Close on outside click
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('countryPickerDropdown');
        const picker = document.getElementById('countryPicker');
        if (dropdown && picker && !picker.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
    
    // Fetch countries from API
    fetchCountries();
}

// Test function for debugging
function testCountryDropdown() {
    console.log('Testing country dropdown...');
    const dropdown = document.getElementById('countryPickerDropdown');
    const picker = document.getElementById('countryPicker');
    
    console.log('Dropdown element:', dropdown);
    console.log('Picker element:', picker);
    
    if (dropdown) {
        dropdown.classList.add('show');
        console.log('Dropdown should be visible now');
        console.log('Dropdown classes:', dropdown.className);
    } else {
        console.error('Dropdown not found');
    }
}

// Make test function available globally
window.testCountryDropdown = testCountryDropdown;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing country selector...');
    initCountrySelector();
});

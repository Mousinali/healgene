var nav = document.querySelector("header");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};


const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const backdrop = document.getElementById("backdrop");
const body = document.body;

openBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    backdrop.classList.remove("opacity-0", "invisible");
    backdrop.classList.add("opacity-100", "visible");

    // Disable scrolling
    body.classList.add("overflow-hidden");
});

closeBtn.addEventListener("click", closeMenuHandler);
backdrop.addEventListener("click", closeMenuHandler);

function closeMenuHandler() {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    backdrop.classList.add("opacity-0", "invisible");
    backdrop.classList.remove("opacity-100", "visible");

    // Re-enable scrolling
    body.classList.remove("overflow-hidden");
}




$('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 text-white p-3 min-w-30 min-h-16"><</button>',
    nextArrow: '<button type="button" class="slick-next absolute top-1/2 right-4 z-10 -translate-y-1/2  text-white p-3 min-w-30 min-h-16">></button>',
    fade: true,
    speed: 800
});

const modal = document.getElementById('bookingModal');

function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Optional: Close modal on background click
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const item = toggle.closest('.faq-item');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.plus-icon');

        document.querySelectorAll('.faq-item').forEach(i => {
            if (i !== item) {
                i.querySelector('.faq-content').style.maxHeight = null;
                i.querySelector('.plus-icon').style.transform = 'rotate(0deg)';
                i.classList.remove('border-blue-400', 'bg-blue-50/40');
            }
        });

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)';
            item.classList.remove('border-blue-400', 'bg-blue-50/40');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.style.transform = 'rotate(45deg)';
            item.classList.add('border-blue-400', 'bg-blue-50/40');
        }
    });
});
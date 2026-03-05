// 1. Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const icon = document.getElementById('mobile-menu-icon');


btn.addEventListener('click', () => {
    // Toggle Animation Classes
    // Logic: remove 'opacity-0 invisible -translate-y-4' to show, add them to hide
    if (menu.classList.contains('opacity-0')) {
        // Open Menu
        menu.classList.remove('opacity-0', 'invisible', '-translate-y-4');
        icon.classList.replace('fa-bars', 'fa-xmark');
        icon.classList.add('rotate-90');
    } else {
        // Close Menu
        menu.classList.add('opacity-0', 'invisible', '-translate-y-4');
        icon.classList.replace('fa-xmark', 'fa-bars');
        icon.classList.remove('rotate-90');
    }
});

// 2. Intersection Observer for Fade-in Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Animacja tylko raz
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
});

// 3. Navbar background change on scroll (Dynamic Transparent Logic)
const navbar = document.getElementById('navbar');
const mobile = document.getElementById('mobile-menu');
const inner = document.getElementById('mobile-menu-inner');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Scrolled state: Solid White
        navbar.classList.add('bg-white', 'text-black', 'shadow-lg', 'py-4');
        navbar.classList.remove('bg-transparent', 'text-white', 'py-6');
/*        mobile.classList.add('bg-white')*/
        mobile.classList.remove('rounded-t-2xl')
    } else {
        // Top state: Transparent with Gradient
        navbar.classList.remove('bg-white', 'text-black', 'shadow-lg', 'py-4');
        navbar.classList.add('bg-transparent', 'text-white', 'py-6');
/*        mobile.classList.remove('bg-white')*/
        mobile.classList.add('rounded-t-2xl')
    }
});

// 4. Skrypt ³aduj¹cy wideo na ¿¹danie(Lazy Loading)
        function loadVideo(container, videoUrl) {
            // Wyczyœæ zawartoœæ kontenera (usuñ obrazek i przycisk play)
            container.innerHTML = '';

        // Stwórz iframe
        const iframe = document.createElement('iframe');
        iframe.className = 'absolute top-0 left-0 w-full h-full';
        iframe.src = videoUrl;
        iframe.title = 'YouTube video player';
        iframe.frameborder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;

        // Dodaj iframe do kontenera
        container.appendChild(iframe);

        // Usuñ obs³ugê klikniêcia i klasy hover, ¿eby nie dublowaæ iframów
        container.onclick = null;
        container.classList.remove('cursor-pointer', 'group');
}

// 5. Logika modala kalkulatora
const calcModal = document.getElementById('calc-modal');
const calcModalContent = document.getElementById('calc-modal-content');

function openCalcModal() {
    calcModal.classList.remove('hidden');
    setTimeout(() => {
        calcModalContent.classList.remove('scale-95', 'opacity-0');
        calcModalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeCalcModal() {
    calcModalContent.classList.remove('scale-100', 'opacity-100');
    calcModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        calcModal.classList.add('hidden');
        document.getElementById('calc-result-box').classList.add('hidden'); // reset wyniku po zamkniêciu
    }, 300);
}

// 6. Logika wyliczania tona¿u
function calculateTonnage() {
    const materialSelect = document.getElementById('calc-material');
    const density = parseFloat(materialSelect.options[materialSelect.selectedIndex].getAttribute('data-density'));
    const materialName = materialSelect.value;

    const length = parseFloat(document.getElementById('calc-length').value) || 0;
    const width = parseFloat(document.getElementById('calc-width').value) || 0;
    const depthCm = parseFloat(document.getElementById('calc-depth').value) || 0;

    if (length > 0 && width > 0 && depthCm > 0) {
        // Wyliczenia (Objêtoœæ m3 -> Waga -> Waga + 10%)
        const volume = length * width * (depthCm / 100);
        const weight = volume * density;
        const totalWeight = weight * 1.10; // +10% zapasu zlecenia

        // Render na widoku
        document.getElementById('calc-result-value').innerText = totalWeight.toFixed(1);
        document.getElementById('calc-result-box').classList.remove('hidden');

        // Tworzenie dynamicznego linku do formularza z parametrami
        const orderBtn = document.getElementById('calc-order-btn');
        const messageTemplate = `Dzieñ dobry,\n\nProszê o wycenê zamówienia z transportem na plac budowy:\nRodzaj materia³u: ${materialName}\nSzacowana iloœæ: ${totalWeight.toFixed(1)} ton (Wyliczenia dla metra¿u: ${length}m x ${width}m o gruboœci ${depthCm}cm).\n\nDok³adny adres dostawy: [Wpisz adres]`;

        // Generowanie URI z zakodowan¹ wiadomoœci¹
        orderBtn.href = `contact.html?subject=Zamowienie%20Kruszywa&message=${encodeURIComponent(messageTemplate)}`;
    } else {
        alert('Aby wykonaæ obliczenia, wype³nij proszê wszystkie wymiary: d³ugoœæ, szerokoœæ oraz gruboœæ.');
    }
}
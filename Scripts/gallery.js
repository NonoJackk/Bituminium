// Database of projects
const galleryProjects = {
    1: {
        title: "Rozbudowa drogi krajowej nr 22",
        location: "Czarlin - Knybawa",
        year: "2025",
        category: "Mieszanki Asfaltowe",
        desc: "Kompleksowa przebudowa strategicznego odcinka drogi krajowej. Wykonaliśmy pełen pakiet warstw bitumicznych (podbudowa, wiążąca, ścieralna). Wykorzystano innowacyjne mieszanki z dodatkiem destruktu asfaltowego (RAP), co znacznie obniżyło ślad węglowy inwestycji przy zachowaniu rygorystycznych parametrów nośności.",
        details: [
            "Inwestor: Zarząd Dróg Wojewódzkich w Gdańsku",
            "Ilość wbudowanej masy: 12 500 ton",
            "Kategoria obciążenia ruchem: KR4",
            "Czas realizacji robót bitumicznych: 3 miesiące"
        ],
        images: [
            "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590240921869-7da2635a9f62?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    2: {
        title: "Nowy odcinek ul. Karnowskiego",
        location: "Wejherowo",
        year: "2024",
        category: "Beton Konstrukcyjny",
        desc: "Realizacja wielkopowierzchniowych płyt z betonu cementowego w rejonie terminala kontenerowego. Inwestycja wymagała zastosowania specjalistycznych betonów o podwyższonej odporności na agresję siarczanową oraz ekstremalne naciski punktowe urządzeń przeładunkowych.",
        details: [
            "Inwestor: Zarząd Morskiego Portu Gdynia",
            "Powierzchnia betonowa: 15 000 m²",
            "Klasa betonu: C35/45 XF4",
            "Technologia układania: Deskowa ze zbrojeniem rozproszonym"
        ],
        images: [
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    3: {
        title: "Realizacja rozbudowy ul. Kartuskiej",
        location: "Gdańsk",
        year: "2024",
        category: "Infrastruktura Specjalna",
        desc: "Jeden z najnowocześniejszych węzłów komunikacyjnych w Trójmieście. Nasze zadanie obejmowało kompleksowe wykonanie dróg dojazdowych, zatok autobusowych w technologii betonu cementowego oraz ścieżek rowerowych z wykorzystaniem czerwonego asfaltu barwionego w masie.",
        details: [
            "Inwestor: Gmina Miasta Gdańska",
            "Zatoki autobusowe: Beton C30/37",
            "Ścieżki rowerowe: 4.5 km (asfalt barwiony)",
            "Pełen nadzór laboratoryjny Bituminium"
        ],
        images: [
            "https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596237583626-d9756a1b023f?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    4: {
        title: "Rozbudowa drogi powiatowej",
        location: "Chmielno – Lipowiec",
        year: "2023",
        category: "Dostawa MMA",
        desc: "Jako kluczowy dostawca mas bitumicznych braliśmy udział w budowie strategicznego odcinka drogi ekspresowej S6. Nasza otaczarnia pracowała w systemie 24/7, zapewniając płynność logistyczną i najwyższe parametry mieszanek typu SMA 11 (Mastyks grysowy) na warstwę ścieralną.",
        details: [
            "Generalny Wykonawca: STRABAG",
            "Status: Główny dostawca masy",
            "Całkowity wolumen: Ponad 40 000 ton MMA",
            "Typ kluczowej mieszanki: SMA 11 PMB (polimeroasfalty)"
        ],
        images: [
            "https://images.unsplash.com/photo-1590240921869-7da2635a9f62?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    5: {
        title: "Rozbudowa drogi powiatowej nr 1410G",
        location: "Bolszewka",
        year: "2025",
        category: "Prace Brukarskie",
        desc: "Prestiżowy projekt urbanistyczny. Zastosowaliśmy połączenie tradycyjnej kostki granitowej z nowoczesnymi elementami z betonu architektonicznego. Wykonaliśmy również system odwodnienia liniowego oraz przygotowaliśmy podbudowy stabilizowane cementem.",
        details: [
            "Inwestor: Urząd Miasta Reda",
            "Powierzchnia prac brukarskich: 6 500 m²",
            "Materiały: Granit szary/szwedzki, płyty betonowe",
            "Współpraca z Konserwatorem Zabytków"
        ],
        images: [
            "https://images.unsplash.com/photo-1596237583626-d9756a1b023f?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1000&auto=format&fit=crop"
        ]
    },
};

// Modal Elements
const modal = document.getElementById('gallery-modal');
const modalContent = document.getElementById('gallery-modal-content');

const gmMainImg = document.getElementById('gm-main-img');
const gmThumbnails = document.getElementById('gm-thumbnails');

const gmTitle = document.getElementById('gm-title');
const gmLocation = document.getElementById('gm-location');
const gmYear = document.getElementById('gm-year');
const gmCategory = document.getElementById('gm-category');
const gmDesc = document.getElementById('gm-desc');
const gmDetails = document.getElementById('gm-details');

// State
let currentImageArray = [];

// Open Modal Function
function openGalleryModal(projectId) {
    const data = galleryProjects[projectId];
    if (!data) return;

    // Populate Text Data
    gmTitle.textContent = data.title;
    gmLocation.textContent = data.location;
    gmYear.textContent = data.year;
    gmCategory.textContent = data.category;
    gmDesc.textContent = data.desc;

    // Populate Details (ul > li)
    gmDetails.innerHTML = '';
    data.details.forEach(detail => {
        const li = document.createElement('li');
        li.className = "flex items-start gap-2";
        li.innerHTML = `<i class="fa-solid fa-check mt-1 text-gray-400"></i> <span>${detail}</span>`;
        gmDetails.appendChild(li);
    });

    // Populate Images
    currentImageArray = data.images;
    changeMainImage(currentImageArray[0]); // Set first image

    gmThumbnails.innerHTML = ''; // Clear old thumbs
    currentImageArray.forEach((imgSrc, index) => {
        const imgWrap = document.createElement('div');
        imgWrap.className = `w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 ${index === 0 ? 'border-brand-red opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`;
        imgWrap.onclick = () => {
            changeMainImage(imgSrc);
            // Update active state visual
            Array.from(gmThumbnails.children).forEach(child => {
                child.classList.remove('border-brand-red', 'opacity-100');
                child.classList.add('border-transparent', 'opacity-60');
            });
            imgWrap.classList.remove('border-transparent', 'opacity-60');
            imgWrap.classList.add('border-brand-red', 'opacity-100');
        };

        const imgTag = document.createElement('img');
        imgTag.src = imgSrc;
        imgTag.className = "w-full h-full object-cover";

        imgWrap.appendChild(imgTag);
        gmThumbnails.appendChild(imgWrap);
    });

    // Show Modal with Animation
    modal.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 50);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close Modal Function
function closeGalleryModal() {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
    }, 300);
}

// Change Main Image
function changeMainImage(src) {
    // simple fade effect
    gmMainImg.classList.add('opacity-50');
    setTimeout(() => {
        gmMainImg.src = src;
        gmMainImg.classList.remove('opacity-50');
    }, 150);
}

// --- Filtering Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update buttons styling
            filterBtns.forEach(b => {
                b.className = "filter-btn px-6 py-2 bg-white text-gray-600 border border-gray-200 hover:border-brand-red hover:text-brand-red rounded-full font-medium text-sm transition shadow-sm";
            });
            btn.className = "filter-btn px-6 py-2 bg-brand-black text-white rounded-full font-medium text-sm transition shadow-md";

            const filterValue = btn.getAttribute('data-filter');

            // Filter items
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});
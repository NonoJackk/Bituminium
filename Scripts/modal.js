// 4. Service Modal Logic with Interactive Gallery
const serviceDetails = {
    'asfalt': {
        title: "Produkcja Mieszanek Bitumicznych",
        icon: "fa-road",
        coverImage: "https://images.unsplash.com/photo-1590240921869-7da2635a9f62?q=80&w=1000&auto=format&fit=crop",
        desc: "Nasza otaczarnia w Gdańsku to jeden z najnowocześniejszych zakładów na Pomorzu. Proces produkcji jest w pełni zautomatyzowany i sterowany komputerowo, co gwarantuje powtarzalność każdej partii materiału.",
        link: "service.html",
        features: [
            "Wydajność produkcyjna: 300 ton/godzinę",
            "Rodzaje mieszanek: SMA, Beton Asfaltowy (AC), Asfalt Porowaty (PA)",
            "Możliwość produkcji asfaltu na zimno i na gorąco",
            "Pełna zgodność z normami PN-EN 13108",
            "Własny system dozowania dodatków uszlachetniających"
        ],
        images: [
            "https://images.unsplash.com/photo-1590240921869-7da2635a9f62?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1625723044792-44de168af926?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1574360778004-633cb8e29202?q=80&w=400&auto=format&fit=crop"
        ],
        highlight: "Ścisła kontrola jakości każdej partii we współpracy z Politechniką Gdańską."
    },
    'nawierzchnie': {
        title: "Układanie Nawierzchni",
        icon: "fa-trowel-bricks",
        coverImage: "https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=1000&auto=format&fit=crop",
        desc: "Dysponujemy wyspecjalizowanymi brygadami bitumicznymi wyposażonymi w najnowszy sprzęt marek Vögele i Hamm. Realizujemy zlecenia od ścieżek rowerowych po autostrady.",
        link: "service.html",
        features: [
            "Rozściełacze z systemami niwelacji 3D (GPS/Laser)",
            "Walce z systemami pomiaru zagęszczenia w czasie rzeczywistym",
            "Bezszwowe łączenie pasów nawierzchni",
            "Wykonywanie warstw ścieralnych, wiążących i podbudowy",
            "Logistyka transportu masy termosami (utrzymanie temperatury)"
        ],
        images: [
            "https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1573075175646-10e3f2255746?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518113262615-56041e204c32?q=80&w=400&auto=format&fit=crop"
        ],
        highlight: "Gwarancja równości podłużnej i poprzecznej przewyższająca standardowe normy odbiorowe."
    },
    'kruszywa': {
        title: "Eksploatacja i Przerób Kruszyw",
        icon: "fa-mountain",
        coverImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
        desc: "Posiadamy własne złoża kruszyw oraz nowoczesne zakłady przeróbcze. Dzięki temu jesteśmy niezależni od dostawców zewnętrznych i gwarantujemy ciągłość dostaw na budowy.",
        link: "service.html",
        features: [
            "Kruszywa łamane granitowe i bazaltowe (wszystkie frakcje)",
            "Piaski i żwiry płukane (do betonu i mas bitumicznych)",
            "Mieszanki kruszyw do stabilizacji mechanicznej",
            "Badania uziarnienia (krzywe przesiewu) na bieżąco",
            "Certyfikaty ZKP (Zakładowa Kontrola Produkcji)"
        ],
        images: [
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1533240232013-44168051e59c?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1599708153386-4f4e15e87c06?q=80&w=400&auto=format&fit=crop"
        ],
        highlight: "Idealna czystość kruszyw dzięki wieloetapowemu procesowi płukania."
    },
    'beton': {
        title: "Mieszanki Betonowe",
        icon: "fa-cubes-stacked",
        coverImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop",
        desc: "Węzeł betoniarski przystosowany do obsługi dużych inwestycji infrastrukturalnych. Produkujemy betony towarowe, drogowe oraz specjalistyczne.",
        link: "service.html",
        features: [
            "Betony klas od C8/10 do C50/60",
            "Betony mrozoodporne i wodoszczelne (W8, F150)",
            "Stabilizacje cementowe o wytrzymałościach od 1,5 do 5,0 MPa",
            "Własna flota betonomieszarek i pomp do betonu",
            "Komputerowy system dozowania domieszek chemicznych"
        ],
        images: [
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558223637-230d5d552825?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=400&auto=format&fit=crop"
        ],
        highlight: "Możliwość produkcji betonu w warunkach zimowych (podgrzewane kruszywa i woda)."
    },
    'bruk': {
        title: "Usługi Brukarskie",
        icon: "fa-user-group",
        coverImage: "https://images.unsplash.com/photo-1596237583626-d9756a1b023f?q=80&w=1000&auto=format&fit=crop",
        desc: "Łączymy estetykę z wytrzymałością. Nasze brygady brukarskie realizują skomplikowane wzory na placach miejskich oraz wielkopowierzchniowe parkingi przemysłowe.",
        link: "service.html",
        features: [
            "Układanie maszynowe (układarki Optimas) - wydajność do 1000m²/dzień",
            "Brukowanie artystyczne z kostki granitowej i szlachetnej",
            "Kompleksowe odwodnienia liniowe i kanalizacja deszczowa",
            "Stabilizacja gruntu spoiwami hydraulicznymi pod podbudowę",
            "Niwelacja terenu z użyciem systemów laserowych"
        ],
        images: [
            "https://images.unsplash.com/photo-1596237583626-d9756a1b023f?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1625841496052-a5676326466f?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621268688566-b3334237937d?q=80&w=400&auto=format&fit=crop"
        ],
        highlight: "Precyzja detalu i trwałość podbudowy, która nie 'siada' po latach."
    },
    'lab': {
        title: "Laboratorium Drogowe",
        icon: "fa-flask",
        coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
        desc: "Oferujemy usługi badawcze dla firm zewnętrznych, inwestorów i nadzoru. Nasze laboratorium posiada akredytację i nowoczesny sprzęt pomiarowy.",
        link: "lab.html",
        features: [
            "Badania zagęszczenia gruntu (Płyta VSS, Lekkia Płyta Dynamiczna)",
            "Odwierty w nawierzchniach bitumicznych i betonowych",
            "Badania składu mieszanek (ekstrakcja asfaltu)",
            "Badania wytrzymałości na ściskanie i zginanie",
            "Opracowywanie Receptur Laboratoryjnych (JMF)"
        ],
        images: [
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=400&auto=format&fit=crop"
        ],
        highlight: "Raporty z badań uznawane przez GDDKiA oraz jednostki samorządowe."
    }
};

function openServiceModal(serviceId) {
    const modal = document.getElementById('service-modal');
    const data = serviceDetails[serviceId];

    if (!data) return;

    // Basic Info
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-description').innerText = data.desc;
    document.getElementById('modal-highlight').innerText = data.highlight;

    // Link Setting (Dynamic Update)
    const actionBtn = document.getElementById('modal-cta-btn');
    if (data.link) {
        actionBtn.href = data.link;
    } else {
        actionBtn.href = "#kontakt"; // Fallback
    }

    // Icon
    const iconContainer = document.getElementById('modal-icon');
    iconContainer.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;

    // Initial Main Image (Cover)
    const mainImage = document.getElementById('modal-main-image');
    mainImage.src = data.coverImage;

    // Features
    const list = document.getElementById('modal-features');
    list.innerHTML = '';
    data.features.forEach(feature => {
        const li = document.createElement('li');
        li.className = "flex items-start text-gray-700 text-sm";
        li.innerHTML = `<span class="text-brand-red mr-3 mt-1 text-xs"><i class="fa-solid fa-circle"></i></span>${feature}`;
        list.appendChild(li);
    });

    // Gallery Injection with Click Logic
    const gallery = document.getElementById('modal-gallery');
    gallery.innerHTML = '';
    if (data.images && data.images.length > 0) {
        // Add cover image to gallery too, so user can revert to it
        const allImages = [data.coverImage, ...data.images];

        allImages.forEach(imgSrc => {
            const imgContainer = document.createElement('div');
            // Zmniejszone kafelki (h-16 na mobile, h-20 na desktop)
            imgContainer.className = "rounded-lg overflow-hidden h-16 md:h-20 shadow-sm border border-gray-100 group cursor-pointer hover:ring-2 hover:ring-brand-red transition-all";
            imgContainer.innerHTML = `
                        <img src="${imgSrc}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" alt="Galeria realizacji">
                    `;

            // Click Event to Swap Image
            imgContainer.onclick = function () {
                // Fade out effect
                mainImage.style.opacity = 0.5;
                setTimeout(() => {
                    mainImage.src = imgSrc;
                    mainImage.style.opacity = 1;
                }, 150);
            };

            gallery.appendChild(imgContainer);
        });
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeServiceModal();
    }
});
// Dane do podmieniania na mapce google
const mapUrls = {
    'siedziba': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.431039445592!2d17.937869077022!3d54.455329091171784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdeb194b672c1f%3A0x692cefb32642af0f!2sBITUMINIUM%20SP%20Z%20O%20O!5e0!3m2!1spl!2spl!4v1772014446381!5m2!1spl!2spl',
    'zwirownia': 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1159.623735720535!2d17.93918889835889!3d54.45856885545843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTTCsDI3JzMwLjgiTiAxN8KwNTYnMjMuNiJF!5e0!3m2!1spl!2spl!4v1772014836238!5m2!1spl!2spl',
    'produkcja': 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2325.191095377212!2d18.50441907701699!3d54.3536040988834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTTCsDIxJzEzLjAiTiAxOMKwMzAnMjUuMiJF!5e0!3m2!1spl!2spl!4v1772014909087!5m2!1spl!2spl',
    'laboratorium': 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2327.1943121731824!2d18.579285077015186!3d54.318196101565306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTTCsDE5JzA1LjUiTiAxOMKwMzQnNTQuNyJF!5e0!3m2!1spl!2spl!4v1772014959089!5m2!1spl!2spl' // Partnerskie lab PG
};


function changeMap(loc, btn) {
    const iframe = document.getElementById('gmap-iframe');

    // Efekt p³ynnego zanikania iframe'a na czas ³adowania (opcjonalny detal UX)
    iframe.style.opacity = '0.5';

    // Podmiana linku do mapy
    setTimeout(() => {
        iframe.src = mapUrls[loc];
        iframe.onload = () => { iframe.style.opacity = '1'; };
    }, 150);

    // Reset stylów dla wszystkich przycisków mapy
    document.querySelectorAll('.map-btn').forEach(b => {
        b.classList.remove('bg-brand-red', 'text-white', 'shadow-md', 'border-transparent', 'font-bold');
        b.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-100', 'border-gray-200', 'font-semibold');
        b.querySelector('.fa-chevron-right').classList.remove('opacity-100', 'text-white');
        b.querySelector('.fa-chevron-right').classList.add('opacity-0', 'text-brand-red');
    });

    // Ustawienie stylów dla aktualnie klikniêtego przycisku
    btn.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-100', 'border-gray-200', 'font-semibold');
    btn.classList.add('bg-brand-red', 'text-white', 'shadow-md', 'border-transparent', 'font-bold');
    btn.querySelector('.fa-chevron-right').classList.remove('opacity-0', 'text-brand-red');
    btn.querySelector('.fa-chevron-right').classList.add('opacity-100', 'text-white');
}
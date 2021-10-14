const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // schimbam tema site-ului
    document.body.classList.toggle('dark');
})
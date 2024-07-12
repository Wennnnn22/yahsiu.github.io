document.addEventListener('DOMContentLoaded', function() {
    fetchContent('About me');

    const toggleDetailsButton = document.getElementById('toggle-details');
    const extraInfo = document.getElementById('extra-info');
    toggleDetailsButton.addEventListener('click', function() {
        if (extraInfo.style.display === 'none') {
            extraInfo.style.display = 'block';
            toggleDetailsButton.textContent = 'Show Less';
        } else {
            extraInfo.style.display = 'none';
            toggleDetailsButton.textContent = 'Show More';
        }
    });

    document.querySelectorAll('.nav-buttons button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.nav-buttons button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            const section = this.innerText.trim().toLowerCase();
            showContent(section);
            scrollToSection(section);
        });
    });
});

function fetchContent(section) {

    document.getElementById('content').innerHTML = `<h1>${section.charAt(0).toUpperCase() + section.slice(1)}</h1><p>${content[section]}</p>`;
}

function scrollToSection(section) {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function sendEmail() {
    window.location.href = 'mailto:wendy82041@gmail.com';
}

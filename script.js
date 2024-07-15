document.addEventListener('DOMContentLoaded', function() {
    const toggleDetailsButton = document.getElementById('toggle-details');
    const extraInfo = document.getElementById('extra-info');

    toggleDetailsButton.addEventListener('click', function() {
        if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
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
            const section = this.innerText.trim().toLowerCase().replace(' ', '-');
            showContent(section);
        });
    });

    // 初始顯示個人信息
    showContent('personal');
});

function showContent(section) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(section).classList.add('active');
    loadTxtContent(section + '.txt', section + '-content');
}

function loadTxtContent(file, elementId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerText = data;
        })
        .catch(error => console.error('Error loading TXT file:', error));
}

function sendEmail() {
    window.location.href = 'mailto:wendy82041@gmail.com';
}

const openButtons = document.getElementsByClassName('open-info-btn');
const infoBoxes = document.getElementsByClassName('open-info-box');
const mainInfoBoxes = document.getElementsByClassName('main-info-box');
const progressBars = document.getElementsByClassName('mn-progress-bar');

Array.from(openButtons).forEach((openButton, index) => {
    openButton.addEventListener('click', () => showOrHide(openButton, infoBoxes[index], mainInfoBoxes[index]));
});

function showOrHide(openButton, infoBox, mainInfoBox){
    if (infoBox.classList.contains('hidden-box')){
        setTimeout(() => {
            openButton.classList.remove('years-horizontal');
            openButton.classList.add('years-vertical');
        },10);
        mainInfoBox.classList.remove('non-open-info');
        infoBox.classList.remove('hidden-box')
        infoBox.classList.add('opened-box')
        infoBox.classList.remove('closed-box')
        mainInfoBox.classList.remove('non-open-info');
    }
    else{
        setTimeout(() => {
            infoBox.classList.add('hidden-box');
            mainInfoBox.classList.add('non-open-info');
            openButton.classList.remove('years-vertical');
            openButton.classList.add('years-horizontal');
        },500);
        infoBox.classList.add('closed-box');
        infoBox.classList.remove('opened-box');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const progressSections = document.querySelectorAll('.progress-section');

    progressSections.forEach(section => {
        const progressBars = section.querySelectorAll('.progress');

        progressBars.forEach(bar => {
            // Встановлюємо початкову ширину з атрибуту data-width
            const width = bar.getAttribute('data-width');
            if (width) {
                bar.style.width = width;
            }
        })
    })
});
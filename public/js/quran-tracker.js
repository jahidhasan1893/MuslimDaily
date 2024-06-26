 /* quran tracker functionality */

 function updateProgress(id, value, goal) {
    value = value.replace(/^0+/, '');
    const inputBox = document.getElementById(id + '-input');
    if (value === "") {
        value = 0;
        inputBox.value = 0;
    }
    else{
        inputBox.value = value;
    }
    const progressBar = document.getElementById(id).querySelector('.progress-bar');
    progressBar.style.width = ((value <= goal ? value : goal) / goal * 100) + '%';
}

function resetCounts() {
    const elements = document.querySelectorAll('.tracker-stats .count');
    elements.forEach(element => {
        element.innerText = 0;
    });
    const progressBars = document.querySelectorAll('.tracker-stats .progress-bar');
    progressBars.forEach(progressBar => {
        progressBar.style.width = '0%';
    });
}
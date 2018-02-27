const main = document.querySelector('main');

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
    navigator.serviceWorker.register('service-worker.js')
    .then(registration => console.log('Service Worker registered'))
    .catch(err => 'SW registration failed'));
}

window.addEventListener('load', e => {
    updateStudent()
})

async function updateStudent() {
    const res = await fetch("http://calendar.ecam.be/list/e")
    const json = await res.json();

    main.innerHTML = json.map(renderStudent).join('\n')
}

function renderStudent(student) {
    return `
    <div class="student">
        ${student.npetu}
    </div>`
}

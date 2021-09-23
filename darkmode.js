const checkbox = document.getElementById('darktoggle');
const storage = window.localStorage;

if (localStorage.getItem('darkmode') == "true") {
    darkOn();
    checkbox.checked = true;
} else {
    checkbox.checked = false;
}

function darkOn() {
    storage.setItem('darkmode', true);
    document.documentElement.classList.add('dark');
    render(window.location.hash);
}

function darkOff() {
    storage.setItem('darkmode', false);
    document.documentElement.classList.remove('dark');
    render(window.location.hash);
}

checkbox.addEventListener('change', (event) => {
    event.currentTarget.checked ? darkOn() : darkOff();
})
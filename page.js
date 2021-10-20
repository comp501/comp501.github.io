// --- LOAD STYLES ---
const src = document.querySelector("script").getAttribute("src");

var link = document.createElement( "link" );
link.href = src.replace("page.js", "styles.css")
link.rel = "stylesheet";

document.getElementsByTagName( "head" )[0].appendChild( link );

// --- DETECT DARKMODE ---
function detectDarkmode() {
    if (window.location.hash == "#dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};

window.onhashchange = evt => detectDarkmode();
detectDarkmode();

// --- REPLACE REF LINKS ---
document.addEventListener("DOMContentLoaded", function(){

    refs = document.getElementsByClassName("ref");

    for (ref of refs) {
        ref.setAttribute('href', ref.innerText);
        ref.setAttribute('target', '_blank');
        ref.setAttribute('rel', 'noopener norefferer');
    };
});
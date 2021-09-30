const src = document.querySelector("script").getAttribute("src");

var link = document.createElement( "link" );
link.href = src.replace("page.js", "styles.css")
link.rel = "stylesheet";

document.getElementsByTagName( "head" )[0].appendChild( link );


function detectDarkmode() {
    if (window.location.hash == "#dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};

window.onhashchange = evt => detectDarkmode();
detectDarkmode();
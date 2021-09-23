const render = path => {
    page = path.replace("#", "");

    if (page == "") {
        page = "home";
    }
    // load page
    document.querySelector("iframe").src = "pages/" + page + ".html";

    // highlight active nav item
    try {document.querySelector(`.active`).classList.remove("active")} catch {};
    document.querySelector(`a[href="#${page}"]`).classList.add("active");
};

window.onhashchange = evt => render(window.location.hash);
render(window.location.hash);
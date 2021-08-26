const render = path => {
    page = path.replace("#", "");

    if (page == "") {
        page = "home";
    }
    document.querySelector("iframe").src = "pages/" + page + ".html";
};

window.onhashchange = evt => render(window.location.hash);
render(window.location.hash);
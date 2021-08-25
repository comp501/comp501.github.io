const render = path => {
    page = path.replace("#", "");

    if (page == "") {
        page = "proposal";
    }
    document.querySelector("iframe").src = "pages/" + page + ".html";
};

window.onhashchange = evt => render(window.location.hash);
render(window.location.hash);


function resizeIFrameToFitContent( iFrame ) {
    iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

window.addEventListener('DOMContentLoaded', function(e) {
    var iFrame = document.querySelector("iframe");
    resizeIFrameToFitContent( iFrame );
} );
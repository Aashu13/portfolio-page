$(document).ready(function () {

    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $("html,body").animate({
                scrollTop: $target.offset().top
            },
            1000,
            "swing"
        );
    });
});





var i = 0;
var text = "Front-end developer, Codenewibe, Free Code Camper, Wanna be full stack developer";

function typeWriter() {
    if (i < text.length) {
        document.getElementById('showText').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}

window.addEventListener("load", typeWriter);
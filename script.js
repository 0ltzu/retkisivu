$(document).ready(function(){
    // Kun navigointilinkkiä klikataan
    $("a").on('click', function(event) {
        // Varmistetaan, että linkin href on oikea
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            // Siirrytään oikeaan kohtaan
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});

function vaihdaReitit(valittu) {
    // Piilotetaan kaikki osiot
    document.querySelectorAll('.reitti-item').forEach(item => {
        item.style.display = 'none';
    });

    // Näytetään vain valittu osio
    document.getElementById(valittu).style.display = 'block';

    // Päivitetään aktiivinen nappi
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

$(document).ready(function () {
    $(".navbar-nav .nav-link").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
});


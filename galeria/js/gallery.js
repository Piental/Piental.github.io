
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('type');
console.log(product);

if (product !== null) {
    $(".filter").not('.' + product).hide('3000');
    $('.filter').filter('.' + product).show('3000');
    $(".filter").not('.' + product).attr('data-lightbox', 'hidden');
    $('.filter').filter('.' + product).attr('data-lightbox', 'gallery');

    $(".filter-button").removeClass("active")
    var buttons = document.getElementsByClassName("filter-button")

    for (i = 0; i < buttons.length; i++) {
        if (buttons[i].getAttribute("data-filter") == product) {
            buttons[i].classList.add("active");
        }
    }

    };



$(document).ready(function () {

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
            $('.filter').attr('data-lightbox', 'gallery')
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
            $(".filter").not('.'+value).attr('data-lightbox', 'hidden');
            $('.filter').filter('.'+value).attr('data-lightbox', 'gallery');
            
        }
            if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
    });
    


});
 
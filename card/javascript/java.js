function toggle() {
    var menubtn = document.querySelector('.hamburgar')
    menubtn.classList.toggle('active')
    var menubtnhaikei = document.querySelector('.menuBtn')
    menubtnhaikei.classList.toggle('active')
    var glass = document.querySelector('.wrap')
    glass.classList.toggle('active')
    var menuOpen = document.querySelector('.nav1')
    menuOpen.classList.toggle('active')
    var blur = document.querySelector('.container .buttonBox')
    blur.classList.toggle('blur')
    var content = document.querySelector('#tel')
    content.classList.toggle('blur')
    var maplocal = document.querySelector('.map')
    maplocal.classList.toggle('blur')
    
}

$(window).on('load', function(event) {
    $('body').removeClass('preloading');
       // $('.load').delay(1000).fadeOut('fast');
    $('.loading').delay(1600).fadeOut('400');
});
 


function initMap() {
    var location = { lat: 35.00095534815659, lng: 135.57408492898983 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    })
}




/*owl carousel script*/





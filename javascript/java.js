function toggle() {
    var menubtn = document.querySelector('.hamburgar')
    menubtn.classList.toggle('active')
    var menubtnhaikei = document.querySelector('.menuBtn')
    menubtnhaikei.classList.toggle('active')
    var glass = document.querySelector('.wrap')
    glass.classList.toggle('active')
    var menuOpen = document.querySelector('.nav1')
    menuOpen.classList.toggle('active')
    var blur = document.querySelector('.lesson .wrap')
    blur.classList.toggle('blur')
    var button = document.querySelector('.challenge button')
    button.classList.toggle('active')
    var buttonNews = document.querySelector('.news')
    buttonNews.classList.toggle('blur')
    var content = document.querySelector('#tel')
    content.classList.toggle('blur')
    var maplocal = document.querySelector('.map')
    maplocal.classList.toggle('blur')
}






$(window).on('load', function(event) {
    $('body').removeClass('preloading');
       // $('.load').delay(1000).fadeOut('fast');
    $('.loading').delay(1500).fadeOut('400');
});
 






document.onload = get();
function get() {
    
var newsList = document.querySelectorAll('.contentBox')
for (let y = 0; y < newsList.length; y++){
    function changeNews() {
        newsList[y].children[2].classList.toggle('active');
        newsList[y].children[1].classList.toggle('active');
    }
    newsList[y].children[0].addEventListener('click', changeNews);
}



var list = document.querySelectorAll('.openBox');
// var n ; 
for (let z = 0; z < list.length; z++){
function change() {
        
    list[z].children[2].classList.toggle('none');
    list[z].children[2].classList.toggle('active');
    list[z].children[1].classList.toggle('active');
    }
    list[z].children[0].addEventListener('click', change);
}





var tableCell = document.querySelectorAll('.table-cell');
for (let v = 0; v < tableCell.length; v++){
    

function opentable(v) {
    var tableMini = document.querySelectorAll('.mini-table');
    var chanceBox = document.querySelectorAll('.table-cell');
    let mangBtn = Array.from(chanceBox).slice();
    let mang = Array.from(tableMini).slice();
    for (let i = 0; i < mang.length; i++){
        mangBtn[i].style.transition = 0.5 + 's';

    }
    if (v == 0) {
        mang[0].style.visibility = 'visible';
        mang[1].style.visibility = 'hidden';
        mang[2].style.visibility = 'hidden';
        mangBtn[0].style.background = '#461E4F';
        mangBtn[1].style.background = ' #BD59D3';
        mangBtn[2].style.background= ' #BD59D3';

    } else if (v == 1) {
        mang[0].style.visibility = 'hidden';
        mang[1].style.visibility = 'visible';
        mang[2].style.visibility = 'hidden';
        mangBtn[1].style.background = '#461E4F';
        mangBtn[0].style.background = ' #BD59D3';
        mangBtn[2].style.background= ' #BD59D3';
    } else {
        mang[0].style.visibility = 'hidden';
        mang[1].style.visibility = 'hidden';
        mang[2].style.visibility = 'visible';
        mangBtn[2].style.background = '#461E4F';
        mangBtn[1].style.background = ' #BD59D3';
        mangBtn[0].style.background= ' #BD59D3';

    }
    // document.querySelector('.table-mini').children[m].classList.toggle('active');

}

    // tableCell[v].addEventListener('click',opentable)
   tableCell[v].onclick = () => {
        setTimeout(opentable(v), 200);
    }

}



}

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





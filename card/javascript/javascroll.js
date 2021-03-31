$('.owl-carousel').owlCarousel({
    items:3,
loop:true,
margin:10,
autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
dots:false,
responsive:{
    0: {
        items: 1,
        nav:false
    },
    600: {
        items: 2,
        nav:false
    },
    1000: {
        items: 3,
        nav:false
    },
},
})
$(window).scroll(function () {

    
        if (this.scrollY > 115) {
            $('.wrap header').addClass("show")
        } else {
            $('.wrap header').removeClass("show")
        }
    
        if (this.scrollY > 115) {
            $('section.flow .max-width h2').addClass("show")
        } else {
            $('section.flow .max-width h2').removeClass("show")
        }
    
        if (this.scrollY > 208) {
            $('section.flow .max-width > p').addClass("show")
        } else {
            $('section.flow .max-width > p').removeClass("show")
        }
        if (this.scrollY > 510) {
            $(' section.flow .max-width .flow-box.flow-box1').addClass("show")
        } else {
            $(' section.flow .max-width .flow-box.flow-box1').removeClass("show")
        }
        if (this.scrollY > 852) {
            $('section.flow .max-width .flow-box.flow-box2').addClass("show")
        } else {
            $('section.flow .max-width .flow-box.flow-box2').removeClass("show")
        }
    
        if (this.scrollY > 1196) {
            $('section.flow .max-width .flow-box.flow-box3').addClass("show")
        } else {
            $('section.flow .max-width .flow-box.flow-box3').removeClass("show")
        }
        if (this.scrollY > 1532) {
            $('section.flow .max-width .flow-box.flow-box4').addClass("show")
        } else {
            $('section.flow .max-width .flow-box.flow-box4').removeClass("show")
        }
    
        if (this.scrollY > 1879) {
            $('.container h2').addClass("show")
        } else {
            $('.container h2').removeClass("show")
        }
    
        if (this.scrollY > 2039) {
            $('.container .imgbox').addClass("show")
        } else {
            $('.container .imgbox').removeClass("show")
        }
    
        if (this.scrollY > 2257) {
            $('.container .buttonBox').addClass("show")
        } else {
            $('.container .buttonBox').removeClass("show")
        }

        if (this.scrollY > 2405) {
            $('.basicInfor h2').addClass("show")
        } else {
            $('.basicInfor h2').removeClass("show")
        }

        if (this.scrollY > 2513) {
            $('.basicInfor .infor-imgBox').addClass("show")
        } else {
            $('.basicInfor .infor-imgBox').removeClass("show")
        }       
        
        if (this.scrollY > 2598) {
            $('.basicInfor p').addClass("show")
        } else {
            $('.basicInfor p').removeClass("show")
        } 
    
        if (this.scrollY > 2865) {
            $('.basicInfor .map').addClass("show")
        } else {
            $('.basicInfor .map').removeClass("show")
        }
    
        if (this.scrollY > 3130) {
            $('footer .mini-nav ul').addClass("show")
        } else {
            $('footer .mini-nav ul').removeClass("show")
        }
        if (this.scrollY > 3266) {
            $('footer .footer-content h2').addClass("show")
        } else {
            $('footer .footer-content h2').removeClass("show")
            }
        if (this.scrollY > 3324) {
            $('footer .footer-content .footer-SNS').addClass("show")
        } else {
            $('footer .footer-content .footer-SNS').removeClass("show")
        }
        if (this.scrollY > 3472) {
            $('footer .footer-content .backBtn').addClass("show")
        } else {
            $('footer .footer-content .backBtn').removeClass("show")
        }
        if (this.scrollY > 3658) {
            $('footer .lastInfor').addClass("show")
        } else {
            $('footer .lastInfor').removeClass("show")
        }
})
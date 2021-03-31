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

        if (this.scrollY > 150) {
            $('.news h3').addClass("show")
        } else {
            $('.news h3').removeClass("show")
        }
        if (this.scrollY > 250) {
            $('.news .newBox h4').addClass("show")
        } else {
            $('.news .newBox h4').removeClass("show")
        }
    
        if (this.scrollY > 270) {
            $('.contentBox').addClass("show")
        } else {
            $('.contentBox').removeClass("show")
        }
    
        if (this.scrollY > 596) {
            $('.news button').addClass("show")
        } else {
            $('.news button').removeClass("show")
        }
    
        if (this.scrollY > 698) {
            $('.about > h2').addClass("show")
        } else {
            $('.about > h2').removeClass("show")
        }
    
        if (this.scrollY > 781) {
            $('.about .about-content h3').addClass("show")
        } else {
            $('.about .about-content h3').removeClass("show")
        }

        if (this.scrollY > 856) {
            $('.about .about-content p').addClass("show")
        } else {
            $('.about .about-content p').removeClass("show")
        }
    
        if (this.scrollY > 1106) {
            $('.about .about-img .about-imgbox:nth-child(1)').addClass("show")
        } else {
            $('.about .about-img .about-imgbox:nth-child(1)').removeClass("show")
        }
    
        if (this.scrollY > 1200) {
            $('.about .about-img .about-imgbox:nth-child(2)').addClass("show")
        } else {
            $('.about .about-img .about-imgbox:nth-child(2)').removeClass("show")
        }
    
        if (this.scrollY > 1514) {
            $('.about .about-item h3').addClass("show")
        } else {
            $('.about .about-item h3').removeClass("show")
        }
    
        if (this.scrollY > 1580) {
            $('.about .about-item ul li').addClass("show")
        } else {
            $('.about .about-item ul li').removeClass("show")
        }
    
        if (this.scrollY > 1818) {
            $('.about .about-members > h2').addClass("show")
        } else {
            $('.about .about-members > h2').removeClass("show")
        }
    
        if (this.scrollY > 2010) {
            $('.about .about-members ul li').addClass("show")
        } else {
            $('.about .about-members ul li').removeClass("show")
        }
    
        if (this.scrollY > 2346) {
            $('.about .about-members p').addClass("show")
        } else {
            $('.about .about-members p').removeClass("show")
        }
    
        if (this.scrollY > 2585) {
            $('.lesson h2').addClass("show")
        } else {
            $('.lesson h2').removeClass("show")
        }
    
        if (this.scrollY > 2682) {
            $('.lesson > p').addClass("show")
        } else {
            $('.lesson > p').removeClass("show")
        }
    
        if (this.scrollY > 2934) {
            $('.lesson .lesson-imgbox').addClass("show")
        } else {
            $('.lesson .lesson-imgbox').removeClass("show")
        }
    
        if (this.scrollY > 3302) {
            $('.lesson .wrap').addClass("show")
        } else {
            $('.lesson .wrap').removeClass("show")
        }
    
        if (this.scrollY > 3616) {
            $('.banner').addClass("show")
        } else {
            $('.banner').removeClass("show")
        }
    

        if (this.scrollY > 4289) {
            $('.challenge h2').addClass("show")
        } else {
            $('.challenge h2').removeClass("show")
        }
    
        if (this.scrollY > 4440) {
            $('.challenge .challenge-content p:nth-child(1)').addClass("show")
        } else {
            $('.challenge .challenge-content p:nth-child(1)').removeClass("show")
        }
    
        if (this.scrollY > 4575) {
            $('.challenge .challenge-content p:nth-child(2)').addClass("show")
        } else {
            $('.challenge .challenge-content p:nth-child(2)').removeClass("show")
        }

        if (this.scrollY > 4690) {
            $('.challenge .challenge-content p:nth-child(3)').addClass("show")
        } else {
            $('.challenge .challenge-content p:nth-child(3)').removeClass("show")
        }
    
        if (this.scrollY > 4827) {
            $('.challenge .challenge-content .challenge-imgbox').addClass("show")
        } else {
            $('.challenge .challenge-content .challenge-imgbox').removeClass("show")
        }
    
        if (this.scrollY > 5237) {
            $('.challenge .challenge-content button').addClass("show")
        } else {
            $('.challenge .challenge-content button').removeClass("show")
        }
    
        if (this.scrollY > 5393) {
            $('.basicInfor h2').addClass("show")
        } else {
            $('.basicInfor h2').removeClass("show")
        }
    
        if (this.scrollY > 5496) {
            $('.basicInfor .infor-imgBox').addClass("show")
        } else {
            $('.basicInfor .infor-imgBox').removeClass("show")
        }
    
        if (this.scrollY > 5577) {
            $('.basicInfor p').addClass("show")
        } else {
            $('.basicInfor p').removeClass("show")
        }

        if (this.scrollY > 5742) {
            $('.basicInfor .map').addClass("show")
        } else {
            $('.basicInfor .map').removeClass("show")
        }
    
        if (this.scrollY > 6122) {
            $('footer .mini-nav ul').addClass("show")
        } else {
            $('footer .mini-nav ul').removeClass("show")
        }
    

        if (this.scrollY > 6267) {
            $('footer .footer-content h2').addClass("show")
        } else {
            $('footer .footer-content h2').removeClass("show")
        }
    
        if (this.scrollY > 6356) {
            $('footer .footer-content .footer-SNS').addClass("show")
        } else {
            $('footer .footer-content .footer-SNS').removeClass("show")
        }
    
        if (this.scrollY > 6450) {
            $('footer .footer-content .backBtn').addClass("show")
        } else {
            $('footer .footer-content .backBtn').removeClass("show")
        }
    
        if (this.scrollY > 6620) {
            $('footer .lastInfor').addClass("show")
        } else {
            $('footer .lastInfor').removeClass("show")
        }
    
        if (this.scrollY > 115) {
            $('.wrap header').addClass("show")
        } else {
            $('.wrap header').removeClass("show")
        }
})
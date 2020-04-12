import $ from 'jquery';
import 'owl.carousel/dist/owl.carousel.min.js';

class OwlGallery{

    constructor(){ 
        $('.owl-carousel').owlCarousel({
            loop:true,
            center: true,
            slideBy:1,
            autoplayHoverPause:true,
            autoplay:true,
            autoplayTimeout:5000,
            responsive:{
                0:{
                    items:1
                }        
            }
        });  
    }  
}

export default OwlGallery;


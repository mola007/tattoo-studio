import $ from 'jquery';
import 'owl.carousel/dist/owl.carousel.min.js';

class AjaxRequest{
    constructor(){ 
        this.navLink = $('.aside-left__list-link');
        this.events();
    }


    events(){
       this.navLink.on('click', this.openNewSite);
    }

    openNewSite(){
        let $this = $(this);
        //złap jego url
        let url =   $this.attr('href');
        //zmień kolor btn
        $('.aside-left__list-link--current').removeClass('aside-left__list-link--current');
        $this.addClass('aside-left__list-link--current');
       //usuń kontener
       $('.container__content').remove();
        // pokaż stronę
        $('.container__section').load(url + ' .container__content', function (responseTxt, statusTxt, xhr) {   
            if(statusTxt == "success"){ 

                window.picturefill();

                let $that = $(this);
                $that.find('*[data-show]').attr('data-show', 'false');  
                setTimeout(function(){
                    $that.find('*[data-show]').each(function(i){
                       setTimeout(() => {  
                       $that.find('*[data-show]').eq(i).attr('data-show', 'true');         
                       }, 400 * (i+1));
                       });   
               },50);

 
                $('.owl-carousel').trigger('destroy.owl.carousel');
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

        }).hide().fadeIn(300);

        return false;     
    }

}

export default AjaxRequest;
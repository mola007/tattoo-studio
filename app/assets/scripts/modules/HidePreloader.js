import $ from 'jquery';

class HidePreloader{
    constructor(){
        this.addHTML();
        this.preloader = $('.preloader');
        this.siteContent = $('.container--home');
        this.events();      
    }

    events(){
        $(window).on('load', this.hideLoader.bind(this));
    }

    hideLoader(){
        setTimeout(() => {
            this.preloader.addClass('preloader--hide');
            this.siteContent.hide().fadeIn(700);
        }, 2000);    
    } 
    
    addHTML(){
        $('body').append(`
        <div class = "preloader">
            <div class = "preloader__loader"></div>
        </div>
        `);   
    } 
}

export default HidePreloader;


import $ from 'jquery';

class ModalGallery{
    constructor(){
        this.containerSection = $('.container__section');
        this.events();
    }
    
    events(){
        this.containerSection.on('click', '.portfolio__img-wrapper', this.openModal);
        this.containerSection.on('click', '.modal__close', this.closeModal);
        this.containerSection.on('click','.modal__btn--next', this.nextSlide);
        this.containerSection.on('click','.modal__btn--prev', this.prevSlide);
        $(document).on('keyup', this.keyPressHandler.bind(this)); 
        }
    
        keyPressHandler(e){
        //jeżeli user nacisnął esc
        if(e.keyCode === 27)this.closeModal();
        }
    
        openModal(e){
            let modal = $('.modal');
            let modalImgWrapper =  $('.modal__img-wrapper');
            let thumbnailImgWrapper = $('.portfolio__img-wrapper');
            
            $('html,body').addClass('body-no-scroll');
            modal.addClass("modal--is-visible");
            let copyColl = thumbnailImgWrapper.find('img').clone();
            modalImgWrapper.append(copyColl);

            let target = $(e.target).closest('img').attr('srcset');
        
            modalImgWrapper.find('img').attr('class', 'modal__img');
            modalImgWrapper.find('img[srcset = "'+target+'"]').addClass('modal__img--current');
              
        }
    
       closeModal(){
            let modal = $('.modal');
            let modalImgWrapper =  $('.modal__img-wrapper');
          
            $('html,body').removeClass('body-no-scroll');
            modal.removeClass("modal--is-visible");
            modalImgWrapper.html("");
        } 

        nextSlide(e){
            let currentImg = $('.modal__img.modal__img--current');
            currentImg.removeClass('modal__img--current');
            let modalImg = $('.modal__img');

            if(currentImg.next().length){
                currentImg.next().addClass('modal__img--current');
                }else{
                    modalImg.eq(0).addClass('modal__img--current');
                }
        }

        prevSlide(e){
            let currentImg = $('.modal__img.modal__img--current');
            currentImg.removeClass('modal__img--current');
            let modalImg = $('.modal__img');
 
            if(currentImg.prev().length){
                currentImg.prev().addClass('modal__img--current');
                }else{
                    modalImg.eq(modalImg.length - 1).addClass('modal__img--current');
                } 
        }    
}

export default ModalGallery;



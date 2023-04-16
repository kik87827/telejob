

function popupShow(item,callback){
    const modalWrap = document.querySelectorAll(".modal-wrap");
    const bodyDom = document.querySelector("body");
    const targetItem = item;
    modalWrap.forEach((item)=>{
        item.classList.remove("active");
    });
    targetItem.classList.add("active");
    bodyDom.classList.add("touchDis");
    if(callback){
        callback();
    }
    targetItem.querySelector(".btn-modal-close").addEventListener("click",(e)=>{
        e.preventDefault();
        item.classList.remove("active");
        bodyDom.classList.remove("touchDis");
    });
}
function popupHide(item){
    const bodyDom = document.querySelector("body");
    const targetItem = item;
    targetItem.classList.remove("active");
    bodyDom.classList.remove("touchDis");
}


function swiperMarqueeCall(){
    let swiperMarquee = null;
    if(swiperMarquee !== null){
        swiperMarquee.update();
        
    }else{
        swiperMarquee = new Swiper('.swiper-marquee', {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 1500,
            freeMode: true,
            autoplay: {
                delay: 1,
                disableOnInteraction: false
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: false,
            disableOnInteraction: true
        });
    }
    window.addEventListener("resize",()=>{
        if(swiperMarquee !== null){
            swiperMarquee.update();
        }
    });
}
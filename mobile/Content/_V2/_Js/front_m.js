

function popupShow(item){
    const modalWrap = document.querySelectorAll(".modal-wrap");
    const bodyDom = document.querySelector("body");
    const targetItem = item;
    modalWrap.forEach((item)=>{
        item.classList.remove("active");
    });
    targetItem.classList.add("active");
    bodyDom.classList.add("touchDis");
    targetItem.querySelector(".btn-modal-close").addEventListener("click",(e)=>{
        e.preventDefault();
        item.classList.remove("active");
        bodyDom.classList.remove("touchDis");
    });
}
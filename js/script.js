// Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter");
    filterBtns=filterContainer.children;
    totalFilterBtn=filterBtns.length;
    portfolioItems=document.querySelectorAll(".portfolio-item");
    totalPortfolioItems=portfolioItems.length;

    for (let i=0; i<totalFilterBtn; i++){
        filterBtns[i].addEventListener("click",function(){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue=this.getAttribute('data-filter');
            for (let k=0; k<totalPortfolioItems; k++){
                if(filterValue === 'all' || filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.add("show");
                    portfolioItems[k].classList.remove("hide");
                } else {
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");
                }
            }

        });
    };

// Portfolio Lightbox

    const lightbox = document.querySelector(".lightbox");
        lightboxImg=document.querySelector(".lightbox-img");
        lightboxClose=document.querySelector(".lightbox-close");
        lightboxText=document.querySelector(".caption-text");
        lightboxCounter=document.querySelector(".caption-counter");
    let itemIndex=0;

    for(let i=0; i<totalPortfolioItems;i++){
        portfolioItems[i].addEventListener("click", function(){
            itemIndex=i;
            changeItem();
            toggleLightbox();
        })
    }

    function prevItem(){
        if(itemIndex === 0){
            itemIndex=totalPortfolioItems-1;
        } else {
            itemIndex--
        }
        changeItem();
    }
    function nextItem(){
        if(itemIndex === totalPortfolioItems-1){
            itemIndex=0;
        } else {
            itemIndex++
        }
        changeItem();
    }

    function toggleLightbox(){
        lightbox.classList.toggle("open");
    }
    function changeItem(){
        imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItems;
    }

// close lightbox

lightbox.addEventListener("click", function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
    // console.log(event.target);
})  
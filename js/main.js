window.onscroll = function() {
    console.log(this.scrollY);
    let scrollUpArrow=document.getElementsByClassName('scroll-up');
    if(this.scrollY >= 2500){
        console.log(scrollUpArrow[0])
        scrollUpArrow[0].style.cssText=' display:flex;';
    }
    else {
        scrollUpArrow[0].style.display='none';
    }
}
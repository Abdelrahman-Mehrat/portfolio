// scroll animation
AOS.init();
// back to top functions
mybutton = document.getElementById("top__page");
window.onscroll = () => scrollFunction();
const scrollFunction = () => {
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    ?
    mybutton.style.display = "block" 
    :
    mybutton.style.display = "none"
};
const topPageFunc = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

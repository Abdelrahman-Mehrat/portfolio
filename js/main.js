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
// 
const cardData =  {
  "data" :[
      {
          "id" :1,
          "title" : "restaurant",
          "repo" : "https://github.com/Abdelrahman-Mehrat/restaurant.git",
          "githubPages": "https://abdelrahman-mehrat.github.io/restaurant/",
          "cardImg" : "restaurant.jpg"
      },
      {
        "id" :2,
        "title" : "a2m-medical",
        "githubPages": "https://www.a2m-medical.com/contactus",
        "cardImg" : "a2m.jpg"

      },  {
        "id" :3,
        "title" : "card game",
        "repo" : "https://github.com/Abdelrahman-Mehrat/memory-cards.git",
        "githubPages": "https://abdelrahman-mehrat.github.io/memory-cards/",
        "cardImg" : "cardgame.jpg"

      },  {
        "id" :4,
        "title" : "Bootstrap template",
        "repo" : "https://github.com/Abdelrahman-Mehrat/bootstrap5.git",
        "githubPages": "https://abdelrahman-mehrat.github.io/bootstrap5/",
        "cardImg" : "bootstrap.jpg"
      }
      ,  {
        "id" :5,
        "title" : "SCSS template",
        "repo" : "https://github.com/Abdelrahman-Mehrat/sass-project.git",
        "githubPages": "https://abdelrahman-mehrat.github.io/sass-project/",
        "cardImg" : "scss.jpg"
      },  {
        "id" :6,
        "title" : "HTML5 CSS3 template",
        "repo" : "https://github.com/Abdelrahman-Mehrat/HTML5--CSS3.git",
        "githubPages": "https://abdelrahman-mehrat.github.io/HTML5--CSS3/",
        "cardImg" : "html5.jpg"
      }
  ]    
};
const cardsParent =document.querySelector(".cards-parent");
cardData.data.forEach(details => { 
  const cardWrapper =
  `
  <div class="project__card mb-4 col-md-6 p-4">
    <div class="p-3 inner__card card__style ${details.id %2 ==0 ? `card_bg_clr2`:`card_bg_clr`}  ${details.id}" >
      <h3 class="card__header">${details.title}</h3>
      <div class="">
        <ul class="list-unstyled p__font">
        <div class="card-img-contain">
        <img class="w-100" src="assets/imgs/cardimgs/${details.cardImg}" alt="">
        </div>
          <li class="mb-3 mt-2 d-flex align-items-center justify-content-center">
            <a class="${details.repo != undefined ?`project__link` : `project__link3` }  " href="${details.githubPages}" target="_blank">Visit Webpage</a>
            ${details.repo != undefined    ? `<a class="project__link2" href="${details.repo}"
            target="_blank"><i class="fab fa-2x fa-github"></i></a>` : ""  }
          </li>
        </ul>
      </div>
    </div>
</div>
  `
  cardsParent.insertAdjacentHTML("beforeend",cardWrapper)
});
console.log(cardData.data);
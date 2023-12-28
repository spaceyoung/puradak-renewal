// visual 섹션 스킵 버튼
let skipBtn = document.querySelector(".visual-skip-btn");
skipBtn.addEventListener("click", function () {
  window.scrollTo({top: window.innerHeight, behavior: "smooth"});
});


// visual 섹션 모바일 height 조정
// window.addEventListener("resize", () => {
//   const vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh*100}px`);
// });


// 메인 페이지 best 섹션 swiper
new Swiper(".bestSwiper", {
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
})


// 메인 페이지 event 섹션 swiper
new Swiper(".eventSwiper", {
  slidesPerView: "auto",
  grabCursor: true,
  preventClicksPropagation: true,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
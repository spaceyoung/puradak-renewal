// gnb 호버 이펙트 및 로고 색상 변경
const header = document.querySelector(".header");
const gnb = document.querySelector(".gnb");
const logo = document.querySelector(".logo > a > img");

gnb.addEventListener("mouseover", () => {
  header.classList.add("on");
  logo.src = "/puradak-renewal/img/logo-k.png";
});
header.addEventListener("mouseout", () => {
  header.classList.remove("on");
  logo.src = "/puradak-renewal/img/logo.png";
});


// 올메뉴 햄버거 버튼
const allMenuOpen = document.querySelector(".allmenu-btn");
const allMenuContainer = document.querySelector(".allmenu-container");
const allMenuClose = document.querySelector(".allmenu-close-btn");
const allMenuBoxs = document.querySelectorAll(".allmenu-depth1 > div");

allMenuOpen.addEventListener("click", () => {
  allMenuContainer.classList.add("on");
  document.documentElement.classList.add("hidden");
});
allMenuClose.addEventListener('click', () => {
  allMenuContainer.classList.remove('on');
  document.documentElement.classList.remove('hidden');
  for (const allMenuBox of allMenuBoxs) {
    allMenuBox.classList.remove('open');
    allMenuBox.nextElementSibling.style.maxHeight = null;
  }
});


// 올메뉴 아코디언
function accordionToggle(content) {
  if (!content.classList.contains('open')) {
    for (const allMenuBox of allMenuBoxs) {
      allMenuBox.classList.remove('open');
      allMenuBox.nextElementSibling.style.maxHeight = null;
    }
    content.classList.add('open');
    content.nextElementSibling.style.maxHeight = `${content.nextElementSibling.scrollHeight}px`;
  } else {
    content.classList.remove('open');
    content.nextElementSibling.style.maxHeight = null;
  };
};

window.addEventListener('resize', () => {
  if (window.innerWidth <= 640) {
    for (const allMenuBox of allMenuBoxs) {
      allMenuBox.addEventListener('click', (e) => {
        e.preventDefault();
        accordionToggle(allMenuBox);
      });
    };
  };
});

if (window.innerWidth <= 640) {
  for (const allMenuBox of allMenuBoxs) {
    allMenuBox.addEventListener('click', (e) => {
      e.preventDefault();
      accordionToggle(allMenuBox);
    });
  };
};


// TOP 버튼
const topBtn = document.querySelector('.quick-top');
topBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
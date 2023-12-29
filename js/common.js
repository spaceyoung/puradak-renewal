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
const allMenuOpenBtn = document.querySelector(".allmenu-btn");
const allMenuContainer = document.querySelector(".allmenu-container");
const allMenuCloseBtn = document.querySelector(".allmenu-close-btn");
const allMenuHeaders = document.querySelectorAll(".allmenu-depth1-header");

allMenuOpenBtn.addEventListener("click", () => {
  document.documentElement.classList.add("hidden");
  allMenuContainer.classList.add("on");
});

allMenuCloseBtn.addEventListener('click', () => {
  document.documentElement.classList.remove('hidden');
  allMenuContainer.classList.remove('on');
  for (const allMenuHeader of allMenuHeaders) {
    allMenuHeader.classList.remove('on');
    allMenuHeader.nextElementSibling.style.maxHeight = null;
  }
});


// 모바일 화면 올메뉴 아코디언 메뉴 토글
function accordionToggle(allMenuHeader) {
  if (!allMenuHeader.classList.contains('on')) {
    for (const allMenuHeader of allMenuHeaders) {
      allMenuHeader.classList.remove('on');
      allMenuHeader.nextElementSibling.style.maxHeight = null;
    }
    allMenuHeader.classList.add('on');
    allMenuHeader.nextElementSibling.style.maxHeight = `${allMenuHeader.nextElementSibling.scrollHeight}px`;
  } else {
    allMenuHeader.classList.remove('on');
    allMenuHeader.nextElementSibling.style.maxHeight = null;
  };
};

window.addEventListener('resize', () => {
  if (window.innerWidth <= 640) {
    for (const allMenuHeader of allMenuHeaders) {
      allMenuHeader.addEventListener('click', (e) => {
        e.preventDefault();
        accordionToggle(allMenuHeader);
      });
    };
  } else {
    for (const allMenuHeader of allMenuHeaders) {
      allMenuHeader.classList.remove('on');
      allMenuHeader.nextElementSibling.style.maxHeight = null;
    };
  };
});

if (window.innerWidth <= 640) {
  for (const allMenuHeader of allMenuHeaders) {
    allMenuHeader.addEventListener('click', (e) => {
      e.preventDefault();
      accordionToggle(allMenuHeader);
    });
  };
};


// TOP 버튼
const topBtn = document.querySelector('.quick-top');
topBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
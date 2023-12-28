// JSON 메뉴 데이터 파싱 후 화면에 메뉴 생성
async function init() {
  const response = await fetch('/puradak-renewal/json/chicken-menu.json');
  const chicken = await response.json();
  const bone = await chicken.bone;
  createMenu(bone);
};


// 메뉴 생성 함수 선언
function createMenu(menus) {
  // 메뉴 리스트 생성 및 추가
  const menuSection = document.querySelector('.menu > .inner');
  const menuList = document.createElement('ul');
  menuList.classList.add("menu-list");
  menuSection.append(menuList);
  
  for (const menu of menus) {
    // 메뉴 아이템 생성 및 추가
    const menuItem = document.createElement('li');
    menuItem.classList.add("menu-item");
    menuList.append(menuItem);
    
    // 메뉴 아티클 생성 및 추가
    const menuContent = document.createElement('article');
    menuContent.classList.add("menu-content");
    menuItem.append(menuContent);

    // 메뉴 이미지 생성 및 추가
    const menuImg = document.createElement('figure');
    const img = document.createElement('img');

    menuImg.classList.add("menu-img");
    
    menuContent.append(menuImg);
    menuImg.append(img);

    img.src = `${menu.img}`;
    img.alt = `${menu.name}`;
    
    // 메뉴 기본정보 생성 및 추가
    const menuTxt = document.createElement('div');
    const menuTitle = document.createElement('h4');
    const menuEng = document.createElement('h5');
    const menuOption = document.createElement('ul');
    
    menuTxt.classList.add("menu-txt");
    menuTitle.classList.add("menu-tit");
    menuEng.classList.add("menu-eng");
    menuOption.classList.add("menu-option");
    
    menuContent.append(menuTxt);
    menuTxt.append(menuTitle, menuEng, menuOption);
    
    menuTitle.textContent = `${menu.name}`;
    menuEng.textContent = `${menu.engname}`;

    for(const optionList of menu.option) {
      const li = document.createElement('li');
      menuOption.append(li);
      li.textContent = `${optionList}`;
    };
    
    if (menu.spicy.level >= 1) {
      const menuSpicy = document.createElement('figure');
      const img = document.createElement('img');
      
      menuSpicy.classList.add("menu-spicy");
      
      menuTxt.append(menuSpicy);
      menuSpicy.append(img);
      
      img.src = `/puradak-renewal/img/menu/menu-spicy0${menu.spicy.level}.png`;
      img.alt = `${menu.spicy.caption}`
    };

    // 클릭시 나타나는 메뉴 상세정보 생성 및 추가
    const menuDetail = document.createElement('div');
    const menuDetailTitle = document.createElement('h4');
    const menuDetailEng = document.createElement('h5');
    const menuDetailPrice = document.createElement('span');
    const menuDetailDesc = document.createElement('p');
    const menuDetailAllergy = document.createElement('p');

    menuDetail.classList.add("menu-detail", "hide");
    menuDetailTitle.classList.add("menu-detail-tit")
    menuDetailEng.classList.add("menu-detail-eng")
    menuDetailPrice.classList.add("menu-detail-price");
    menuDetailDesc.classList.add("menu-detail-desc");
    menuDetailAllergy.classList.add("menu-detail-allergy");
    
    menuContent.append(menuDetail);
    menuDetail.append(menuDetailTitle, menuDetailEng, menuDetailPrice, menuDetailDesc, menuDetailAllergy);
    
    menuDetailTitle.textContent = `${menu.name}`;
    menuDetailEng.textContent = `${menu.engname}`;
    menuDetailPrice.textContent = `${menu.price}`;
    menuDetailDesc.textContent = `${menu.desc}`;
    menuDetailAllergy.textContent =`알레르기 성분 : ${menu.allergy.join(", ")}`;
    
    // 메뉴 상세정보 닫기 버튼
    const menuDetailClose = document.createElement('button');
    const icon = document.createElement('span');

    menuDetailClose.classList.add("menu-detail-close");
    icon.classList.add("material-symbols-outlined");

    menuDetail.append(menuDetailClose);
    menuDetailClose.append(icon);
    
    icon.textContent = `close`;
    
    // 메뉴 상세정보 토글
    menuItem.addEventListener("click", (e) => {
      e.preventDefault();
      menuItem.classList.toggle("on");
      menuDetail.classList.toggle("hide");
    });
  };
};


// 함수 실행
init();
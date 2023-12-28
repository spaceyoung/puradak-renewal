// JSON 매장 데이터 파싱 후 화면에 매장 지도 생성
async function init() {
  const response = await fetch('/puradak-renewal/json/store-location.json');
  const stores = await response.json();


  // 기준 위도, 경도
  const standardLat = `${stores[0].latitude}`;
  const standardLng = `${stores[0].longitude}`;
  
  // 지도 삽입할 위치 및 지도 기본 옵션 설정
  const storeSection = document.querySelector(".store > .inner");
  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map");
  storeSection.append(mapContainer);

  const mapOption = {
      center: new kakao.maps.LatLng(standardLat, standardLng),
      level: 6,
  };
  
  // 지도 생성
  const storeMap = new kakao.maps.Map(mapContainer, mapOption);
  
  // 지도 컨트롤 생성 및 배치
  const mapTypeControl = new kakao.maps.MapTypeControl(); // 지도 타입(일반 지도, 스카이뷰) 전환 컨트롤
  storeMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
  const zoomControl = new kakao.maps.ZoomControl(); // 지도 확대 및 축소 제어 줌 컨트롤
  storeMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


  // 마커 및 마커 인포윈도우 생성
  let markers = [];
  let infoWindows = [];

  for (const store of stores) {
    let marker = new kakao.maps.Marker({
      map: storeMap,
      position: new kakao.maps.LatLng(store.latitude, store.longitude)
    });
    markers.push(marker);

    let infoWindowContent = `
      <div class="store-info">
        <strong class="store-name">${store.name}</strong>
        <ul class="store-info-list">
          <li class="store-address">주소: ${store.address}</li>
          <li class="store-contact">연락처: ${store.contact}</li>
          <li class="store-hours">영업시간: ${store["business hours"]}</li>
        </ul>
      </div>`

    let infoWindow = new kakao.maps.InfoWindow({
      content : infoWindowContent,
      removable : iwRemoveable = true
    });
    infoWindows.push(infoWindow);

    kakao.maps.event.addListener(marker, 'click', closeInfoWindow());
    kakao.maps.event.addListener(marker, 'click', openInfoWindow(storeMap, marker, infoWindow));
  };
  
  // 기준 마커 인포윈도우를 기본으로 표시
  infoWindows[0].open(storeMap, markers[0]);
  
  // 마커 클릭시 인포윈도우를 표시하는 함수
  function openInfoWindow(storeMap, marker, infoWindow) {
    return () => {infoWindow.open(storeMap, marker)};
  };
  
  // 다른 마커 클릭시 기존 마커의 인포윈도우를 닫는 함수
  function closeInfoWindow() {
    return () => {
      for (const infoWindow of infoWindows) {
        infoWindow.close();
      };
    };
  };

  
};


// 매장 지도 생성 함수 실행
init();





// // 인포윈도우에 들어갈 매장 정보 내용 생성
// let infowWindowContents = [];
// function createInfo() {
//   const storeInfo = document.createElement('div');
//   const storeName = document.createElement('strong');
//   const storeInfoList = document.createElement('ul');
//   const storeAddress = document.createElement('li');
//   const storeContact = document.createElement('li');
//   const storeHours = document.createElement('li');

//   storeInfo.classList.add("store-info");
//   storeName.classList.add("store-name");
//   storeInfoList.classList.add("store-info-list");
//   storeAddress.classList.add("store-address");
//   storeContact.classList.add("store-contact");
//   storeHours.classList.add("store-hours");

//   storeInfo.append(storeName, storeInfoList);
//   storeInfoList.append(storeAddress, storeContact, storeHours);
  
//   storeName.textContent = `${store.name}`;
//   storeAddress.textContent = `${store.address}`;
//   storeContact.textContent = `${store.contact}`;
//   storeHours.textContent = `${store["business hours"]}`;
// };

// var infoWindowContent = createInfo();
// infowWindowContents.push(infoWindowContent);
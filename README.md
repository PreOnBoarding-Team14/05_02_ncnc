## 팀원

[유대형, 임보슬]

## 배포 주소

https://ncnc-14-bsa18tus9-ydh94.vercel.app/

## 💻 설치 방법

    npm install
    npm run dev

## 📂 파일 구조

┣ apis  
┃ ┣ contact.ts  
┃ ┗ main.ts  
┣ assets  
┃ ┣ Arrow.svg  
┃ ┣ back.svg  
┃ ┣ enter.svg  
┃ ┗ hamburger.svg  
┣ components  
┃ ┣ BrandItem.tsx  
┃ ┣ ContactsItem.tsx  
┃ ┣ EmptyBox.tsx  
┃ ┣ Grid.tsx  
┃ ┣ ItemList.tsx  
┃ ┣ Layout.tsx  
┃ ┣ MainText.tsx  
┃ ┣ Modal.tsx  
┃ ┣ Navbar.tsx  
┃ ┣ ProductItem.tsx  
┃ ┣ TopCategories.tsx  
┃ ┣ TopCount.tsx  
┃ ┗ Warning.tsx  
┣ config  
┃ ┗ config.ts  
┣ interfaces  
┃ ┗ contact.ts  
┣ pages  
┃ ┣ brands  
┃ ┃ ┗ [id].tsx  
┃ ┣ categories  
┃ ┃ ┗ [id].tsx  
┃ ┣ items  
┃ ┃ ┗ [id].tsx  
┃ ┣ contacts.tsx  
┃ ┣ index.tsx  
┃ ┗ \_app.tsx  
┣ public  
┃ ┣ favicon.ico  
┃ ┗ vercel.svg  
┗ styles  
┃ ┣ common.scss  
┃ ┣ ContactItem.module.scss  
┃ ┣ Contacts.module.scss  
┃ ┣ EmptyBox.module.scss  
┃ ┣ globals.css  
┃ ┣ Grid.module.scss  
┃ ┣ Home.module.scss  
┃ ┣ Index.module.scss  
┃ ┣ Item.module.scss  
┃ ┣ ItemList.module.scss  
┃ ┣ MainText.module.scss  
┃ ┣ Modal.module.scss  
┃ ┣ Nav.module.scss  
┃ ┣ TopCategories.module.scss  
┃ ┣ TopCount.module.scss  
┃ ┗ Warning.module.scss

### 프로젝트 과정 소개

| 슬랙을 이용한 소통                                                                                                             |                                                       게더를 활용한 소통                                                       |
| :----------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------: |
| <img width="auto" src="https://user-images.githubusercontent.com/80146176/153052997-f2ca6637-40f8-4e7f-9609-f4885577706a.png"> | <img width="auto" src="https://user-images.githubusercontent.com/80146176/153053947-7be40938-62f8-4dd9-a54b-7328ea550546.png"> |
| 노션에서의 소통                                                                                                                |                                                     화면공유를 활용한 소통                                                     |
| <img width="auto" src="https://user-images.githubusercontent.com/80146176/153054588-6194940a-a76d-4fde-a164-2efb3989d6e8.png"> | <img width="auto" src="https://user-images.githubusercontent.com/80146176/153054110-d7c4169e-3824-4903-8ca5-fc4aec044055.png"> |

## 📝 기능

### Next.js와 Typescript 사용

### 니콘내콘 모바일 웹 페이지와 같은 라우팅

재사용 가능한 Container

### Header

카테고리, 브랜드 페이지에서 선택한 메뉴를 중앙에 출력

### 홈

- getServerSideProps 사용해 SSR 구성
- 브랜드 메뉴 리스트 출력
- 땡처리 리스트 출력

### 카테고리

- 카테고리 내에서 브랜드 리스트 출력
- 각 카테고리 페이지 생성
- 브랜드 클릭 or 터치 시 해당 브랜드 상세로 이동
- 상품 리스트 출력 (/brands)

### 상품리스트

- 상품 리스트 출력
- 상품 개수 좌측 상단에 출력
- 이미지, 상품명, 할인율, 할인가, 정가
- 상품 상세 정보 출력 (/items)

### 고객 센터

- getStaticProps 로 페이지 정적 생성
- 홈 화면의 좌측 상단 햄버거 메뉴 눌렀을 때 고객 센터 페이지로 이동하는 메뉴 노출
- 상담 시간 안내
- 구매 / 판매 탭 버튼 구현
- 구매 / 판매 각각의 QnA 리스트 조회

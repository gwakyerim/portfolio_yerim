console.log('[common.js] loaded!');


/* 모바일 네비 만들기 */
// 1. 햄버거 메뉴를 클릭한다.
const hamburgerMenu = document.querySelector('.mobile-nav');
hamburgerMenu.addEventListener('click', function() {
    // 2. 모바일용 네비게이션이 오른쪽에서 나온다.
    // 2-1. nav 요소에 class active 붙인다.
    document.querySelector('nav').classList.toggle('active');
    this.classList.toggle('active');
})

const menuList = document.querySelectorAll('.menu-list');
// 1. mobile-menu 를 클릭한다.
for (var i = 0; i < menuList.length; i++) {
    //2. menuList 를 클릭하면 nav창이 닫힌다.
    //3. 햄버거 메뉴에 active 를 삭제시킨다.
    menuList[i].addEventListener('click', function() {
        document.querySelector('nav').classList.remove('active');
        hamburgerMenu.classList.remove('active');
    })
    if (i === 4) {
        break;
    }
}

/* Top Scroll 버튼 스크롤 효과 만들기 */
// 1.윈도우 창 스크롤을 내린다.
const preScrollTop = 100;
window.addEventListener('scroll', function() {
    const nextScrollTop = window.scrollY;
    //2.스크롤 양이 100보다 크면 go-top에 active 클래스를 추가한다.
    //"" header에 active 클래스 추가한다.
    if(preScrollTop < nextScrollTop) {
        document.querySelector('.go-top').classList.add('active');
        document.querySelector('header').classList.add('active');
    }
    //3. 스크롤 양이 100보다 작으면 go-top에 active 클래스를 삭제한다.
    //"" header에 active 클래스 삭제한다.
    else {
        document.querySelector('.go-top').classList.remove('active');
        document.querySelector('header').classList.remove('active');
    }

    preScrollTop = nextScrollTop;
})


/* Home부분 타자효과 만들기 */
const target = document.querySelector('#dynamic');

function blink() {
    target.classList.toggle('on');//dynamic에 active 클래스를 추가-삭제 반복한다.
}
setInterval(blink, 500) // blink 함수를 0.5초마다 실행 

const string = "'안될 게 뭐 있어' 라는 긍정적인 마음으로 오늘도 열심히 일하고 있어요 !"; // 텍스트를 string 변수에 담아준다.
const split = string.split(""); //string내에 텍스트를 여러개의 문자열로 나눈다.

function dynamic(arr) {
    if(arr.length > 0){ //배열의 길이가 0보다 크다면
        target.textContent = target.textContent + arr.shift(); //dynamic textContent에 배열요소를 추가한다.
        setTimeout(function(){
            dynamic(arr)}, 80) //0.08초 후에 dynamic 함수 실행
    }
}
dynamic(split); 

function reset() {
    target.textContent = ""; //textContent의 내용을 없애준다.
    const resplit = string.split(""); //string의 텍스트를 여러 문자열로 나누고 resplit 변수에 할당한다.
    dynamic(resplit); //dynamic함수에 resplit 인자를 넣어 실행한다.
}

function dynamic(arr){
    if(arr.length > 0){
        target.textContent = target.textContent + arr.shift();
        setTimeout(function(){
            dynamic(arr)}, 80)
    } 
}


/* About 영역 스크롤 이벤트 */
const about = document.querySelector('.content-inner.about');

window.addEventListener("scroll", function () {
    const aboutScroll = about.getBoundingClientRect();

    if (aboutScroll.top < window.innerHeight && aboutScroll.bottom >= 0) {
        about.classList.add('active');
    } else {
        about.classList.remove('active');
    }
});

/* Skills 영역 스크롤 이벤트 */
const skillSDesc = document.querySelectorAll('.skill-desc');

window.addEventListener("scroll", function () {
    skillSDesc.forEach(function(skillDesc) {
        const position = skillDesc.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            skillDesc.classList.add('active');
        } else {
            skillDesc.classList.remove('active');
        }
    })
});

/* Contact 영역 스크롤 이벤트 */
const contactTxt = document.querySelector('#contact .text-wrap');

window.addEventListener("scroll", function () {
    const position = contactTxt.getBoundingClientRect();

    if (position.top < window.innerHeight >= 0) {
        contactTxt.classList.add('active');
    } else {
        contactTxt.classList.remove('active');
    }
});

/* 포트폴리오 배열로 담아 화면에 띄우기 */
// const siteNames = ['어뮤즈', '윤슬에게', '삼익가구', '동원제일저축은행', '영원무역', '지그재그', '마켓컬리', '크롬'];
// const ul = document.getElementById('tabContainer');
// siteNames.forEach(function(siteName, index) {
//     if (index === 0) {
//         ul.innerHTML = ul.innerHTML + '<li class="active"><button>' + siteName + '</button></li>';
//     } else {
//         ul.innerHTML = ul.innerHTML + '<li><button>' + siteName + '</button></li>';
//     }
// });

// const viewContainer = document.getElementById('viewContainer');
// const viewItems = [
//     {
//         title : "어뮤즈 (반응형 웹)",
//         desc : "기존사이트에 불편한 점을 찾아,사용자의 입장에서 시각적으로 알아보기 쉽고 사용이 편리하게 사이트를 리뉴얼 해보았습니다.",
//         area : "작업영역 : 메인페이지, 로그인, 메뉴리스트, 제품상세, FnQ 게시판",
//         tool : "사용 툴 : Figma, HTML5, CSS, Brackets, JQuery",
//         time : "제작 기간 : 10일",
//         part : "개인 참여도 : 100%",
//         procedureBtn : "작업과정",
//         siteBtn : "사이트",
//         procedureRoot : "https://www.figma.com/design/N58wN2i5CbuhA4Y5la4Yxy/AMUSE%EB%A6%AC%EB%89%B4%EC%96%BC?node-id=10-3&t=jLLDHvlV18QS5blm-1",
//         siteRoot : "https://gwakyerim.github.io/renewal_amuse/",
//     },
//     {
//         title : "윤슬에게 (반응형 웹)",
//         desc : "웹 사이트 기획부터 디자인,구축까지 손수 하드코딩하여 만든 반응형 사이트 입니다.(SCSS 사용)",
//         area : "작업영역 : 메인페이지",
//         tool : "사용 툴 : Figma, HTML5, SCSS, VS Code, JavaScript",
//         time : "제작 기간 : 5일",
//         part : "개인 참여도 : 100%",
//         procedureBtn : "작업과정",
//         siteBtn : "사이트",
//         procedureRoot : "https://www.figma.com/design/CTQzrNY7bVEGnjV3UUEDpu/%EC%9C%A4%EC%8A%AC%EC%97%90%EA%B2%8C?node-id=0-1&t=pQqyZ8m1ZKG881nf-1",
//         siteRoot : "https://gwakyerim.github.io/dearyunseul",
//     },
//     {
//         title : "삼익가구",
//         desc : "가구 브랜드에 맞게 자연 친화적인 색상을 바탕으로 하여 가구가 주는 모던함을 살려 홈페이지를 리뉴얼 하였습니다.",
//         area : "작업영역 : 메인페이지",
//         tool : "사용 툴 : Figma, HTML5, CSS, JavaScript",
//         time : "제작 기간 : 5일",
//         part : "개인 참여도 : 100%",
//         procedureBtn : "작업과정",
//         siteBtn : "사이트",
//         procedureRoot : "https://www.figma.com/design/fLBOe3lShgMWHkPcPIfkHp/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=0-1&t=Cnorv74536vMusA4-1",
//         siteRoot : "https://gwakyerim.github.io/renewal_samick/",
//     },
//     {
//         title : "동원제일저축은행",
//         desc : "기존 사이트의 대표 컬러는 유지하며,사용자의 접근성을 고려한 레이아웃 재배치를 하여 리뉴얼 제작하였습니다.",
//         area : "작업영역 : 메인페이지 (+ 전체메뉴)",
//         tool : "사용 툴 : Figma, HTML5, CSS, VsCode, JQuery",
//         time : "제작 기간 : 5일",
//         part : "개인 참여도 : 100%",
//         procedureBtn : "작업과정",
//         siteBtn : "사이트",
//         procedureRoot : "https://www.figma.com/design/t6Vrx1WnhiIQnrwJBtTSTV/DW%EB%8F%99%EC%9B%90%EC%A0%80%EC%B6%95%EC%9D%80%ED%96%89?node-id=0-1&t=t10Vn9W1Encf0oMt-1",
//         siteRoot : "https://gwakyerim.github.io/renewal_dongwonbank/",
//     },
//     {
//         title : "영원무역 (반응형 웹)",
//         desc : "기존 사이트의 대표 컬러는 유지하며, 사용자의 접근성을 고려한 레이아웃 재배치를 하여 리뉴얼 제작하였습니다.",
//         area : "작업영역 : 메인페이지 (+ 전체메뉴)",
//         tool : "사용 툴 : Figma, HTML5, SCSS, VS Code, JavaScript, JQuery",
//         time : "제작 기간 : 10일",
//         part : "개인 참여도 : 100%",
//         procedureBtn : "작업과정",
//         siteBtn : "사이트",
//         procedureRoot : "https://www.figma.com/design/9u0ekqlqM4RI1tkIWmeXAU/%EC%98%81%EC%9B%90%EB%AC%B4%EC%97%AD-%EB%B0%98%EC%9D%91%ED%98%95?node-id=0-1&t=qV3HQbpjAx0cMzTO-1",
//         siteRoot : "https://gwakyerim.github.io/renewal-youngwon/",
//     },
//     {
//         title : "지그재그 (모바일 웹)",
//         desc : "평소 모바일 사이트에서 사용하며 느꼈던 불편한 점들을 찾아 리뉴얼하여 직접 만든 모바일 웹 페이지 입니다.",
//         area : "작업영역 : 프리로딩, 메인페이지, 로그인, 회원가입, 카테고리",
//         tool : "사용 툴 : Figma, HTML5, SCSS, VS Code, JavaScript",
//         time : "제작 기간 : 10일",
//         part : "개인 참여도 : 100%",
//         procedureBtn : "작업과정",
//         siteBtn : "사이트",
//         procedureRoot : "",
//         siteRoot : "https://gwakyerim.github.io/renewal-zigz/",
//     },
//     {
//         title : "마켓컬리 (모바일 웹)",
//         desc : "평소 모바일 사이트에서 사용하며 느꼈던 불편한 점들을 찾아 리뉴얼하여 직접 만든 모바일 웹 페이지 입니다.",
//         area : "작업영역 : 메인페이지, 로그인, 회원가입, 제품 상세, 카테고리, 검색 페이지, 마이 페이지,장바구니",
//         tool : "사용 툴 : Figma, HTML5, SCSS, VS Code, JQuery",
//         time : "제작 기간 : 28일",
//         part : "개인 참여도 : 100%",
//         procedureBtn : "작업과정",
//         siteBtn : "사이트",
//         procedureRoot : "https://www.figma.com/design/Gvs1xaWwhH3AaxQW3k94p3/%EB%A7%88%EC%BC%93%EC%BB%AC%EB%A6%AC-%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%8B%B1?node-id=0-1&t=zXacuO9nh0jfgFDB-1",
//         siteRoot : "https://gwakyerim.github.io/kurly/",
//     },
//     {
//         title : "크롬 (클론 코딩)",
//         desc : "크롬 홈페이지를 보며 하드코딩한 반응형 클롭 웹 사이트 입니다.",
//         area : "작업영역 : 메인페이지",
//         tool : "사용 툴 : Figma, HTML5, CSS, VS Code, JQuery",
//         time : "제작 기간 : 1일",
//         part : "개인 참여도 : 100%",
//         procedureBtn : "작업과정",
//         siteBtn : "사이트",
//         procedureRoot : "",
//         siteRoot : "https://gwakyerim.github.io/demo_chrome/",
//     },
// ]
// viewItems.forEach(function(viewItem, index) {
//     if (index === 0) {
//         viewContainer.innerHTML = viewContainer.innerHTML + `<li class="list-item active">
//                             <div class="desc">
//                                 <h1>${viewItem.title}</h1>
//                                 <p>
//                                     ${viewItem.desc}
//                                 </p>
//                                 <ul>
//                                     <li>
//                                         ${viewItem.area}
//                                     </li>
//                                     <li>
//                                         ${viewItem.tool}
//                                     </li>
//                                     <li>
//                                         ${viewItem.time}
//                                     </li>
//                                     <li>
//                                         ${viewItem.part}
//                                     </li>
//                                 </ul>
//                                 <div class="btn-wrap">
//                                     <a class="view-btn" target="_blank" href=${viewItem.procedureRoot}>${viewItem.procedureBtn}</a>
//                                     <a class="view-btn" target="_blank" href=${viewItem.siteRoot}>${viewItem.siteBtn}</a>
//                                 </div>
//                             </div>
//                             <div class="img-prev">
//                             </div>
//                         </li>`
//     } else {
//         viewContainer.innerHTML = viewContainer.innerHTML + `<li class="list-item">
//                             <div class="desc">
//                                 <h1>${viewItem.title}</h1>
//                                 <p>
//                                     ${viewItem.desc}
//                                 </p>
//                                 <ul>
//                                     <li>
//                                         ${viewItem.area}
//                                     </li>
//                                     <li>
//                                         ${viewItem.tool}
//                                     </li>
//                                     <li>
//                                         ${viewItem.time}
//                                     </li>
//                                     <li>
//                                         ${viewItem.part}
//                                     </li>
//                                 </ul>
//                                 <div class="btn-wrap">
//                                     <a class="view-btn" target="_blank" href=${viewItem.procedureRoot}>${viewItem.procedureBtn}</a>
//                                     <a class="view-btn" target="_blank" href=${viewItem.siteRoot}>${viewItem.siteBtn}</a>
//                                 </div>
//                             </div>
//                             <div class="img-prev">
//                             </div>
//                         </li>`
//     }
// })

const tabList = document.querySelectorAll('.content-site .tab li');
const siteList = document.querySelectorAll('.content-site .view .list-item');
//1.tab > li 의 인덱스 번호를 찾는다.
tabList.forEach(function(tab_btn, index){
    //2. tab > li 메뉴들 중 하나를 누른다.
    tab_btn.addEventListener('click', function() {
        //3.tab > li 모든 li에 들어간 active를 삭제한다.
        tabList.forEach(function(tab_other) {
            tab_other.classList.remove('active');
        });
        //4.모든 list-item에 들어간 active를 삭제한다.
        siteList.forEach(function(site_other) {
            site_other.classList.remove('active');
        })
        //5. 클릭한 요소에만 active를 추가한다.
        tabList[index].classList.add('active');
        siteList[index].classList.add('active');
    });
});

const modal = document.querySelector('.modal');
// const openBtn = document.querySelector('.modal-open');
const closeBtn = document.querySelector('.modal-close');
const modalOverlay =document.querySelector('.modal-overlay');

// //1.modal-open 버튼을 클릭한다.
// //2. modal 에 active를 추가한다.
// openBtn.addEventListener('click', function() {
//     modal.classList.add('active');
// })
//3.modal-colse 버튼을 클릭한다.
//4. modal 에 display를 감춘다.
closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
})
//5. modal-overlay 창을 클릭한다.
//6. modal 에 display를 감춘다.
modalOverlay.addEventListener('click', function() {
    modal.classList.remove('active');
})

const designList = document.querySelectorAll('.design-list');
// 디자인 배너 리스트중 하나를 선택하면 
// 거기 안에있는 이미지가 모달에 있는 컨텐츠 이미지로 들어가야 함.

// 1. 배너 리스트 하나하나 마다를 클릭한다 (addEventListener) (click event)
designList.forEach(function(banner){
    banner.addEventListener('click', function() {
        const bannerImg = this.querySelector('img');
        // 2. 디자인 배너 안에 있는 이미지 태그 src 주소를 저장해서
        const modalImg = document.querySelector('.content-design .modal-content img');
        // 3. 모달안에 컨텐츠 안에 이미지 태그의 src 주소에 할당한다.
        modalImg.src = bannerImg.src;

        document.querySelector('.content-design .modal').classList.add('on');
    })
})
document.querySelector('.content-design .modal').addEventListener('click', function() {
    this.classList.remove('on');
})


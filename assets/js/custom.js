history.scrollRestoration = "manual"

// $(function() {
// $(window).resize(function() {
//   location.reload(); 
//     });
// });

//a태그 기본동작 제어
$(function(){
    $("a").on("click",function(e){
        e.preventDefault();
    });
 });

gsap.registerPlugin(ScrollTrigger);

//헤더 로고 오파시티
gsap.to(".header .headertxt", {
    opacity:0,
    x:-30,
    scrollTrigger: {
        trigger:".header",
        start:"130% top",
        end:"150% top",
        scrub: 1,
        // markers:true,
    }
});


// sc_home
//메인 이미지 pin
gsap.to(".sc_home .group_main", {
    scrollTrigger: {
        trigger:".group_main",
        start:"0% top",
        end:"50% top",
        pin: true,
        // markers:true
    }
});
//메인 타이틀 pin
gsap.to(".sc_home .group_title", {
    scrollTrigger: {
        trigger:".sc_home",
        start:"0% top",
        end:"60% top",
        pin: ".group_title",
        // markers:true
    }
});


//메인 이미지들 슬라이드 업
const homeMotion = gsap.timeline({scrollTrigger: {
    trigger:".sc_home",
    start:"0% top",
    end:"70% top",
    scrub: 1,
    // pin:".group_title .title_box",
    // markers: true,
}});
homeMotion
.addLabel('a')
.to(".sc_home .group_main", {width:"49%"},'a')
.to(".sc_home .group_sub1", {y:"-80%"},'a')
.to(".sc_home .group_sub1 .home_bg", {opacity:0.4},'a')
.addLabel('b')
.fromTo(".sc_home .group_sub2", {y:"30%"},{y:"-30%"},'b-=0.3')
.to(".sc_home .group_sub2 .home_bg", {opacity:0.4},'b-=0.3')
.addLabel('c')
.fromTo(".sc_home .group_sub3", {y:"30%"},{y:"-30%"},'c-=0.3')
.to(".sc_home .group_sub3 .home_bg", {opacity:0.4},'c-=0.3');


/*sc_round */
// top round 모션
const roundMotion = gsap.timeline({scrollTrigger: {
    trigger:".sc_round.r_top",
    start:"0% 20%",
    end:"8% top",
    pin:true,
    pinSpacing: false,//pin으로 고정 시키고 밑에 알수 없는 공간(여백이)이 생겨서 도대체 뭐지 한참을 이것 저것 수정하고 밑에 텍스트를 올려도 보고 원을 y좌표 내려도 보고 했는데, 알고보니 pin고정 후 생긴 여백 때문이였음;;;;;
    scrub: 1,
    // markers: true,
}});
roundMotion
.addLabel('d')
.to(".sc_round.r_top .round_inner", {paddingBottom:"175%", width:"175%"},'d')
.to(".sc_round.r_top .first",{paddingBottom:"69.9%", width:"69.9%", top:"15.1%", left:"15.1%"},'d')
.to(".sc_round.r_top .third",{paddingBottom:"39.9%", width:"39.9%", top:"30.1%", left:"30.1%"},'d')
.to(".sc_round.r_top .fifth",{paddingBottom:"9.9%", width:"9.9%", top:"45.1%", left:"45.1%"},'d')


/*sc_work*/
//content_inner 슬라이드업 공통 모션
let i = 0;
slideTxtEl = document.querySelectorAll('.content_inner');
slideTxtEl.forEach(l => {

    //공통 애니메이션 줄건데 첫번째 content_inner에만 스타트/엔드 지점을 다르게 해줄거라 조건문 추가---dataset.start가 있으면dataset.start 없다면 "-2% 88%"---
gsap.set(l, {y:"-8vw"})
    const slideUpTxt = gsap.timeline({scrollTrigger: {
        trigger: l,
        start: "-20% 88%",
        end: "0% 68%",
        scrub: 1,
        // markers:true,
    }});

    if(i === 0){                      
        slideUpTxt.from(l, {y:"8vw", opacity:0})
        
    }else{
        slideUpTxt.from(l, {y:"10vw", opacity:0})
    }
    i++;
    // console.log(i)
});


//hide_box 공통 모션
workimageEl = document.querySelectorAll('.sc_work .hide_box');
let i2 = 0;
workimageEl.forEach(l2 => {
    const hideBoxMotion = gsap.timeline({scrollTrigger: {
        trigger: l2,
        start: "0% 92%",
        end: "10% 92%",
        // markers:true,
    }});

    if(i2 === 2){                      
        hideBoxMotion.to(l2, 1.5, {height:0, ease: Power3.easeInOut})
    }else{
        hideBoxMotion.to(l2, 1.5, {width:0, ease: Power3.easeInOut})
    }
    i2++;
});


//group_bottom 프로젝트 stagger
gsap.to(".sc_work .project_inner", {
    opacity:1,
    y:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger:".sc_work .group_bottom",
        start:"-9% 70%",
        end:"20% 70%",
        // markers:true,
    }
});


//more_area 공통 스크롤 애니메이션
moreScaleEl = document.querySelectorAll('.sc_work .more_area');
moreScaleEl.forEach(l3 => {
        gsap.to(l3,{
        scale:1.4,
        scrollTrigger: {
            trigger: l3,
            start:"15% 80%",
            end:"105% 80%",
            toggleActions: "play reverse play reverse",
            // markers:true,
        }
    });
});


//activity 
gsap.from(".activity_inner2", {
    y:"10vw", 
    opacity:0,
    scrollTrigger: {
        trigger: ".activity_inner2",
        start: "-20% 88%",
        end: "5% 68%",
        scrub: 1,
        // markers: true
    }
});


//가로스크롤
const horizontalScroll = gsap.timeline({
    ease:'none',
    scrollTrigger: {
    trigger: ".activity_inner1",
    pin: true,
    // pinSpacing: false,
    scrub: 1,
    start: "45% 40%",//20%
    end: "100% -40%",
    // end: "0 100%",
    // markers: true
}});
horizontalScroll
.addLabel('f')
.to('.slide_inner2', {xPercent:-60},'f')
.to(".sc_activity .group_text", {duration:0.1, y:"-30vh"},'f');


//bottom 라운드
const roundMotion2 = gsap.timeline({scrollTrigger: {
    trigger:".sc_round.r_bottom ",
    start:"0% 20%",
    end:"8% top",
    pin:true,
    pinSpacing: false,
    scrub: 1,
    // markers: true,
}});
roundMotion2
.addLabel('d')
.to(".sc_round.r_bottom .round_inner", {paddingBottom:"175%", width:"175%"},'d')
.to(".sc_round.r_bottom .first",{paddingBottom:"69.9%", width:"69.9%", top:"15.1%", left:"15.1%"},'d')
.to(".sc_round.r_bottom .third",{paddingBottom:"39.9%", width:"39.9%", top:"30.1%", left:"30.1%"},'d')
.to(".sc_round.r_bottom .fifth",{paddingBottom:"9.9%", width:"9.9%", top:"45.1%", left:"45.1%"},'d');


//sc_relation
gsap.set(".relation_inner", {y:"-10vw"})
const relationTitleMotion = gsap.timeline({scrollTrigger: {
    trigger:".relation_inner",
    start: "-50% bottom",
    end: "20% bottom",
    scrub:1,
    // markers: true
    },
});
relationTitleMotion
.from(".relation_inner", {y:"10vw", opacity:0})

const relationListMotion = gsap.timeline({scrollTrigger: {
    trigger:".relation_inner",
    start:"0% 80%",
    end:"30% 80%",
    // markers: true,
    },
});
relationListMotion
.to(".relation_wrap", {y:0, opacity:1, stagger:0.2});






////////////////////////////////////////////////반응형

ScrollTrigger.matchMedia({
    // large
    "(max-width: 1300px)": function() {
        //메인 이미지 height
        const homeMotion = gsap.timeline({scrollTrigger: {
            trigger:".sc_home",
            start:"0% top",
            end:"70% top",
            scrub: 1,
            // pin:".group_title .title_box",
            // markers: true,
        }});
        homeMotion.to(".sc_home .group_main", {width:"49%", height:"30%"},'a');

    },
    // medium
    "(min-width: 768px) and (max-width: 1023px)": function() {

    },
    // small
    "(max-width: 767px)": function() {
    },
    // all
    "all": function() {
        
    }
    
  });


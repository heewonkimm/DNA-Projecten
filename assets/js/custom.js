
function init() {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.saveStyles(".sc_round.r_top, .group_main, .slide_inner2, .group_text, .cover");
    
    ScrollTrigger.matchMedia({
    
        "(min-width: 1301px)": function() {
    
            //hmoe 모션
            const homeMotion = gsap.timeline({
                scrollTrigger: {
                trigger:".sc_home",
                start:"0% top",
                end:"70% top",
                scrub: 1,
                },
            });
            homeMotion
            .addLabel('a')
            .fromTo(".sc_home .group_main",{width:"100vw"}, {width:"49vw"},'a')
            .to(".sc_home .group_sub1", {y:"-80%"},'a')
            .to(".sc_home .group_sub1 .home_bg", {opacity:0.4},'a')
            .addLabel('b')
            .fromTo(".sc_home .group_sub2", {y:"30%"},{y:"-30%"},'b-=0.3')
            .to(".sc_home .group_sub2 .home_bg", {opacity:0.4},'b-=0.3')
            .addLabel('c')
            .fromTo(".sc_home .group_sub3", {y:"30%"},{y:"-30%"},'c-=0.3')
            .to(".sc_home .group_sub3 .home_bg", {opacity:0.4},'c-=0.3');
    
    
            //top 라운드
            const roundMotion = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_top",
                start:"0% 20%",
                end:"30% 0%",
                pin:true,
                scrub: 1,
            }});
            roundMotion
            .addLabel('d')
            .to(".sc_round.r_top .round_inner", {paddingBottom:"175%", width:"175%"},'d')
            .to(".sc_round.r_top .first",{paddingBottom:"69.9%", width:"69.9%", top:"15.1%", left:"15.1%"},'d')
            .to(".sc_round.r_top .third",{paddingBottom:"39.9%", width:"39.9%", top:"30.1%", left:"30.1%"},'d')
            .to(".sc_round.r_top .fifth",{paddingBottom:"9.9%", width:"9.9%", top:"45.1%", left:"45.1%"},'d')
    
            const roundMotionEnd = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_top",
                    start:"-5.5% 11%",
                    end:"200%",
                    scrub:true,
                },
                ease:'none'
            });
            roundMotionEnd
            .to(".sc_round.r_top",{yPercent:30});
    
            //가로스크롤
            const horizontalScroll = gsap.timeline({
                ease:'none',
                scrollTrigger: {
                trigger: ".activity_inner1",
                pin: true,
                scrub: 1,
                start: "50% 40%",
                end: "100% -40%",
            }});
            horizontalScroll
            .addLabel('f')
            .to('.slide_inner2', {xPercent:-60},'f')
    
    
            //bottom 라운드
            const roundMotion2 = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_bottom",
                start:"0% 20%",
                end:"30% 0%",
                pin:true,
                scrub: 1,
            }});
            roundMotion2
            .addLabel('d')
            .to(".sc_round.r_bottom .round_inner", {paddingBottom:"175%", width:"175%"},'d')
            .to(".sc_round.r_bottom .first",{paddingBottom:"69.9%", width:"69.9%", top:"15.1%", left:"15.1%"},'d')
            .to(".sc_round.r_bottom .third",{paddingBottom:"39.9%", width:"39.9%", top:"30.1%", left:"30.1%"},'d')
            .to(".sc_round.r_bottom .fifth",{paddingBottom:"9.9%", width:"9.9%", top:"45.1%", left:"45.1%"},'d')
    
            const roundMotionEnd2 = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_bottom",
                    start:"-5.5% 11%",
                    end:"200%",
                    scrub:true,
                },
                ease:'none'
            });
            roundMotionEnd2
            .to(".sc_round.r_bottom",{yPercent:30});
    
    
        },
        "(min-width: 768px) and (max-width: 1300px)": function() {
    
            //hmoe 모션
            const homeMotion = gsap.timeline({
                scrollTrigger: {
                trigger:".sc_home",
                start:"1% top",
                end:"69% top",
                scrub: 1,
                },
            });
            homeMotion
            .addLabel('d')
            .set(".sc_home .group_main", {height:"100vh"})
            .fromTo(".sc_home .group_main",{width:"100vw", height:"100vh"}, {width:"55vw", height:"50vh"},'d')
            .to(".sc_home .group_sub1", {y:"-80%"},'d')
            .to(".sc_home .group_sub1 .home_bg", {opacity:0.4},'d')
            .addLabel('e')
            .fromTo(".sc_home .group_sub2", {y:"30%"},{y:"-30%"},'e-=0.3')
            .to(".sc_home .group_sub2 .home_bg", {opacity:0.4},'e-=0.3')
            .addLabel('f')
            .fromTo(".sc_home .group_sub3", {y:"30%"},{y:"-30%"},'f-=0.3')
            .to(".sc_home .group_sub3 .home_bg", {opacity:0.4},'f-=0.3');
    
    
            //top 라운드
            const roundMotion = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_top",
                start:"-20% 20%",
                end:"10% 30%",
                pin:true,
                scrub: 1,
             }});
            roundMotion
            .addLabel('f')
            .to(".sc_round.r_top .round_inner", {paddingBottom:"175%", width:"175%"},'f')
            .to(".sc_round.r_top .first",{paddingBottom:"69.9%", width:"69.9%", top:"15.1%", left:"15.1%"},'f')
            .to(".sc_round.r_top .third",{paddingBottom:"39.9%", width:"39.9%", top:"30.1%", left:"30.1%"},'f')
            .to(".sc_round.r_top .fifth",{paddingBottom:"9.9%", width:"9.9%", top:"45.1%", left:"45.1%"},'f')
    
            const roundMotionEnd = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_top",
                    start:"-5.5% 51%",
                    end:"201%",
                    scrub:true,
                },
                ease:'none'
            });
            roundMotionEnd
            .to(".sc_round.r_top",{yPercent:40});
            
            //가로스크롤
            const horizontalScroll = gsap.timeline({
                ease:'none',
                scrollTrigger: {
                trigger: ".activity_inner1",
                pin: true,
                scrub: 1,
                start: "53% 41%",
                end: "101% -41%",
            }});
            horizontalScroll
            .addLabel('q')
            .to('.slide_inner2', {xPercent:-61},'q')
    
    
            //bottom 라운드
            const roundMotion2 = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_bottom",
                start:"-20% 20%",
                end:"10% 30%",
                pin:true,
                scrub: 1,
            }});
            roundMotion2
            .addLabel('d')
            .to(".sc_round.r_bottom .round_inner", {paddingBottom:"175%", width:"175%"},'d')
            .to(".sc_round.r_bottom .first",{paddingBottom:"69.9%", width:"69.9%", top:"15.1%", left:"15.1%"},'d')
            .to(".sc_round.r_bottom .third",{paddingBottom:"39.9%", width:"39.9%", top:"30.1%", left:"30.1%"},'d')
            .to(".sc_round.r_bottom .fifth",{paddingBottom:"9.9%", width:"9.9%", top:"45.1%", left:"45.1%"},'d')
    
            const roundMotionEnd2 = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_bottom",
                    start:"-20% 11%",
                    end:"200%",
                    scrub:true,
                },
                ease:'none'
            });
            roundMotionEnd2
            .to(".sc_round.r_bottom",{yPercent:50});
    
    
        },
        "(max-width: 767px)": function() {
            
            //hmoe 모션
            const homeMotion = gsap.timeline({
                scrollTrigger: {
                trigger:".sc_home",
                start:"0% top",
                end:"70% top",
                scrub: 1,
                },
            });
    
            homeMotion
            .addLabel('g')
            .set(".sc_home .group_main", {height:"100vh"})
            .fromTo(".sc_home .group_main",{width:"100vw", height:"100vh"}, {width:"80vw", height:"60vh"},'g')
            .to(".sc_home .group_sub1", {y:"-80%"},'d')
            .to(".sc_home .group_sub1 .home_bg", {opacity:0.4},'d')
            .addLabel('h')
            .fromTo(".sc_home .group_sub2", {y:"30%"},{y:"-30%"},'h-=0.3')
            .to(".sc_home .group_sub2 .home_bg", {opacity:0.4},'h-=0.3')
            .addLabel('i')
            .fromTo(".sc_home .group_sub3", {y:"30%"},{y:"-30%"},'i-=0.3')
            .to(".sc_home .group_sub3 .home_bg", {opacity:0.4},'i-=0.3');
    
    
            //top 라운드
            const roundMotion = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_top",
                start:"-19% 40%",
                end:"5% 50%",
                pin:true,
                scrub: 1,
             }});
            roundMotion
            .addLabel('f')
            .to(".sc_round.r_top .round_inner", {paddingBottom:"175%", width:"175%"},'f')
            .to(".sc_round.r_top .first",{paddingBottom:"69.9%", width:"69.9%", top:"15.1%", left:"15.1%"},'f')
            .to(".sc_round.r_top .third",{paddingBottom:"39.9%", width:"39.9%", top:"30.1%", left:"30.1%"},'f')
            .to(".sc_round.r_top .fifth",{paddingBottom:"9.9%", width:"9.9%", top:"45.1%", left:"45.1%"},'f')
    
            const roundMotionEnd = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_top",
                    start:"-5.3% 52%",
                    end:"199%",
                    scrub:true,
                },
                ease:'none'
            });
            roundMotionEnd
            .to(".sc_round.r_top",{yPercent:25});
    
            //group_bottom 프로젝트 stagger
            gsap.to(".sc_work .project_inner", {
                opacity:1,
                y:0,
                stagger: false,
                scrollTrigger: {
                    trigger:".sc_work .group_bottom",
                    start:"0% 70%",
                    end:"25% 60%",
                }
            });
    
            //가로스크롤
            const horizontalScroll = gsap.timeline({
                ease:'none',
                scrollTrigger: {
                trigger: ".activity_inner1",
                pin: true,
                scrub: 1,
                start: "54% 41%",
                end: "100% -41%",
            }});
            horizontalScroll
            .to('.slide_inner2', {xPercent:-83});
    
    
            //bottom 라운드
            const roundMotion2 = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_bottom",
                start:"0% 65%",
                end:"15% 80%",
                pin:true,
                scrub: 1,
            }});
    
            roundMotion2
            .addLabel('d')
            .to(".sc_round.r_bottom .round_inner", {paddingBottom:"205%", width:"205%"},'d')
            .to(".sc_round.r_bottom .first",{paddingBottom:"69.9%", width:"69.9%", top:"15.1%", left:"15.1%"},'d')
            .to(".sc_round.r_bottom .third",{paddingBottom:"39.9%", width:"39.9%", top:"30.1%", left:"30.1%"},'d')
            .to(".sc_round.r_bottom .fifth",{paddingBottom:"9.9%", width:"9.9%", top:"45.1%", left:"45.1%"},'d')
    
            const roundMotionEnd2 = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_bottom",
                    start:"-20% 10%",
                    end:"230%",
                    scrub:true,
                },
                ease:'none'
            });
            roundMotionEnd2
            .to(".sc_round.r_bottom",{yPercent:60});
    
            
    
        },
        "all": function(){
    
            //a태그 기본동작 제어
            $(function(){
                $("a").on("click",function(e){
                    e.preventDefault();
                });
            });
    
            // 로드 애니메이션
            const loadAni2 = gsap.timeline();
    
            loadAni2
            .addLabel('d')
            .to(".title_box .alp1_left span:nth-child(1)", {x:0, opacity:1},'d')
            .to(".title_box .alp1_left span:nth-child(2)", {x:0, opacity:1},'d+=0.05')
            .to(".title_box .alp1_left span:nth-child(3)", {x:0, opacity:1},'d+=0.1')
            .to(".title_box .alp1_left span:nth-child(4)", {x:0, opacity:1},'d+=0.15')
            .to(".title_box .alp1_left span:nth-child(5)", {x:0, opacity:1},'d+=0.2')
            .to(".title_box .alp1_left span:nth-child(6)", {x:0, opacity:1},'d+=0.25')
    
            .to(".title_box .alp1_right span:nth-child(1)", {x:0, opacity:1},'d+=0.3')
            .to(".title_box .alp1_right span:nth-child(2)", {x:0, opacity:1},'d+=0.35')
            .to(".title_box .alp1_right span:nth-child(3)", {x:0, opacity:1},'d+=0.4')
    
            .to(".title_box .alp2 span:nth-child(1)", {x:0, opacity:1},'d+=0.45')
            .to(".title_box .alp2 span:nth-child(2)", {x:0, opacity:1},'d+=0.5')
            .to(".title_box .alp2 span:nth-child(3)", {x:0, opacity:1},'d+=0.55')
            .to(".title_box .alp2 span:nth-child(4)", {x:0, opacity:1},'d+=0.6')
            .to(".title_box .alp2 span:nth-child(5)", {x:0, opacity:1},'d+=0.65')
            .to(".title_box .alp2 span:nth-child(6)", {x:0, opacity:1},'d+=0.7')
            .to(".title_box .alp2 span:nth-child(7)", {x:0, opacity:1},'d+=0.75')
            .to(".title_box .alp2 span:nth-child(8)", {x:0, opacity:1},'d+=0.8')
            .to(".title_box .alp2 span:nth-child(9)", {x:0, opacity:1},'d+=0.85')
    
            //header 로고 오파시티
            gsap.to(".header .headertxt", {
                opacity:0,
                x:-30,
                scrollTrigger: {
                    trigger:".header",
                    start:"130% top",
                    end:"150% top",
                    scrub: 1,
                }
            });
    
            // //home 메인 이미지 pin
            gsap.set(".sc_home .cover", {height:"100vh"});
            gsap.to(".sc_home .cover", {
                scrollTrigger: {
                  trigger: ".cover",
                  start: "0% top",
                  end: "50% top",
                  pin: true,
                },
            });
            
            //home 메인 타이틀 pin
            gsap.to(".sc_home .group_title", {
                scrollTrigger: {
                    trigger:".sc_home",
                    start:"0% top",
                    end:"60% top",
                    pin: ".group_title",
                }
            });
    
            //hide_box 공통 모션
            workimageEl = document.querySelectorAll('.sc_work .hide_box');
            let i2 = 0;
            workimageEl.forEach(l2 => {
                const hideBoxMotion = gsap.timeline({scrollTrigger: {
                    trigger: l2,
                    start: "0% 92%",
                    end: "10% 92%",
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
                    start:"25% 70%",
                    end:"35% 60%",
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
                    }
                });
            });
    
            //sc_work content_inner 슬라이드업 공통 모션
            let i = 0;
            slideTxtEl = document.querySelectorAll('.content_inner');
            slideTxtEl.forEach(l => {
                gsap.set(l, {y:"-8vw"})
                const slideUpTxt = gsap.timeline({scrollTrigger: {
                    trigger: l,
                    start: "-20% 88%",
                    end: "0% 68%",
                    scrub: 1,
                }});
    
                if(i === 0){                      
                    slideUpTxt.from(l, {y:"8vw", opacity:0})
                    
                }else{
                    slideUpTxt.from(l, {y:"12vw", opacity:0})
                }
                i++;
            });
    
            //relation
            gsap.set(".relation_inner", {y:"-10vw"})
            const relationTitleMotion = gsap.timeline({scrollTrigger: {
                trigger:".relation_inner",
                start: "-50% bottom",
                end: "20% bottom",
                scrub:1,
                },
            });
            relationTitleMotion
            .from(".relation_inner", {y:"10vw", opacity:0})
    
            const relationListMotion = gsap.timeline({scrollTrigger: {
                trigger:".relation_inner",
                start:"0% 80%",
                end:"30% 80%",
                },
            });
            relationListMotion
            .to(".relation_wrap", {y:0, opacity:1, stagger:0.2});
    
        }
        
    });
    
    window.addEventListener("resize", ScrollTrigger.update);
  }
  
  init();




$(function(){
    //a태그 기본동작 제어
    $(function(){
        $("a").on("click",function(e){
            e.preventDefault();
        });
    });

    gsap.registerPlugin(ScrollTrigger);

    // 로드 애니메이션
    const loadAni2 = gsap.timeline();

    loadAni2
    .addLabel('a')
    .to(".page_load .ring.second", {duration:1.2, width:"22vw", height:"22vw", opacity:0, delay:0.5},'a')
    .to(".page_load .ring.third", {duration:1.2, width:"22vw", height:"22vw", opacity:0, delay:0.9},'a')
    .addLabel('b')
    .to(".page_load .ring.fourth", {duration:1.2, width:"22vw", height:"22vw", opacity:0, delay:0.5},'b-=0.7')
    .to(".page_load .ring.fifth", {duration:1.2, width:"22vw", height:"22vw", opacity:0, delay:0.9},'b-=0.7')

    .addLabel('c')
    .to(".mask",{opacity:1},'c-=0.8')
    .to(".mask",{duration:1.3, maskSize:"120vw", ease: Power4.easeIn},'c-=0.5')
    .to(".page_load .ring.first", {duration:1.3, scale:32, ease: Power4.easeIn},'c-=0.5')

    .addLabel('d')
    .to(".title_box .alp1_left span:nth-child(1)", {x:0, opacity:1},'d-=0.5')
    .to(".title_box .alp1_left span:nth-child(2)", {x:0, opacity:1},'d-=0.45')
    .to(".title_box .alp1_left span:nth-child(3)", {x:0, opacity:1},'d-=0.4')
    .to(".title_box .alp1_left span:nth-child(4)", {x:0, opacity:1},'d-=0.35')
    .to(".title_box .alp1_left span:nth-child(5)", {x:0, opacity:1},'d-=0.3')
    .to(".title_box .alp1_left span:nth-child(6)", {x:0, opacity:1},'d-=0.25')

    .to(".title_box .alp1_right span:nth-child(1)", {x:0, opacity:1},'d-=0.2')
    .to(".title_box .alp1_right span:nth-child(2)", {x:0, opacity:1},'d-=0.15')
    .to(".title_box .alp1_right span:nth-child(3)", {x:0, opacity:1},'d-=0.1')

    .to(".title_box .alp2 span:nth-child(1)", {x:0, opacity:1},'d-=0.05')
    .to(".title_box .alp2 span:nth-child(2)", {x:0, opacity:1},'d')
    .to(".title_box .alp2 span:nth-child(3)", {x:0, opacity:1},'d+=0.05')
    .to(".title_box .alp2 span:nth-child(4)", {x:0, opacity:1},'d+=0.1')
    .to(".title_box .alp2 span:nth-child(5)", {x:0, opacity:1},'d+=0.15')
    .to(".title_box .alp2 span:nth-child(6)", {x:0, opacity:1},'d+=0.2')
    .to(".title_box .alp2 span:nth-child(7)", {x:0, opacity:1},'d+=0.25')
    .to(".title_box .alp2 span:nth-child(8)", {x:0, opacity:1},'d+=0.3')
    .to(".title_box .alp2 span:nth-child(9)", {x:0, opacity:1},'d+=0.35')

    .to(".mask", {width:"inherit", height:"inherit", overflow:"visible"},'d')
    .to(".mask", {maskImage:"none"},'d')
    .to(".page_load", {display:"none"},'d');


    //header 로고 오파시티
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

    //home 메인 이미지 pin
    gsap.to(".sc_home .group_main", {
        scrollTrigger: {
            trigger:".group_main",
            start:"0% top",
            end:"50% top",
            pin: true,
            // markers:true
        }
    });

    //home 메인 타이틀 pin
    gsap.to(".sc_home .group_title", {
        scrollTrigger: {
            trigger:".sc_home",
            start:"0% top",
            end:"60% top",
            pin: ".group_title",
            // markers:true
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
            start:"25% 70%",
            end:"35% 60%",
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
            start: "10% 88%",
            end: "45% 50%",
            scrub: 1,
            // markers: true
        }
    });



    //반응형
    ScrollTrigger.saveStyles(".sc_home .group_main,.sc_home");

    ScrollTrigger.matchMedia({
        "(min-width: 1300px)": function() {

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
            .to(".sc_activity .group_text", {duration:0.1, y:"-30vh"},'f');
        
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
        "(max-width: 1299px)": function() {
            gsap.set(".sc_round.r_top",{yPercent:20});

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
            .set(".sc_home .group_main", {height:"100vh"})
            .to(".sc_home .group_main", {width:"49%",height:"30%"});
        
            //top 라운드
            const roundMotion = gsap.timeline({scrollTrigger: {
                trigger:".sc_round.r_top",
                start:"-20% 20%",
                end:"10% 30%",
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
            .to(".sc_round.r_top",{yPercent:50});

            //가로스크롤
            const horizontalScroll = gsap.timeline({
                ease:'none',
                scrollTrigger: {
                trigger: ".activity_inner1",
                pin: true,
                scrub: 1,
                start: "55% 40%",
                end: "100% -40%",
            }});
            horizontalScroll
            .addLabel('f')
            .to('.slide_inner2', {xPercent:-74},'f')
            .to(".sc_activity .group_text", {duration:0.1, y:"-30vh"},'f');
                
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
        
            homeMotion.scrollTrigger.refresh();

        },
        "(max-width: 767px)": function() {

            // 로드 애니메이션
            const loadAni2 = gsap.timeline();

            loadAni2
            .addLabel('a')
            .to(".page_load .ring.second", {duration:1.2, width:"50vw", height:"50vw", opacity:0, delay:0.5},'a')
            .to(".page_load .ring.third", {duration:1.2, width:"50vw", height:"50vw", opacity:0, delay:0.9},'a')
            .addLabel('b')
            .to(".page_load .ring.fourth", {duration:1.2, width:"50vw", height:"50vw", opacity:0, delay:0.5},'b-=0.7')
            .to(".page_load .ring.fifth", {duration:1.2, width:"50vw", height:"50vw", opacity:0, delay:0.9},'b-=0.7')

            .addLabel('c')
            .to(".mask",{opacity:1},'c-=0.8')
            .to(".mask",{duration:1.3, maskSize:"170vw", ease: Power4.easeIn},'c-=0.5')
            .to(".page_load .ring.first", {duration:1.3, scale:25, ease: Power4.easeIn},'c-=0.5')

            .addLabel('d')
            .to(".title_box .alp1_left span:nth-child(1)", {x:0, opacity:1},'d-=0.5')
            .to(".title_box .alp1_left span:nth-child(2)", {x:0, opacity:1},'d-=0.45')
            .to(".title_box .alp1_left span:nth-child(3)", {x:0, opacity:1},'d-=0.4')
            .to(".title_box .alp1_left span:nth-child(4)", {x:0, opacity:1},'d-=0.35')
            .to(".title_box .alp1_left span:nth-child(5)", {x:0, opacity:1},'d-=0.3')
            .to(".title_box .alp1_left span:nth-child(6)", {x:0, opacity:1},'d-=0.25')

            .to(".title_box .alp1_right span:nth-child(1)", {x:0, opacity:1},'d-=0.2')
            .to(".title_box .alp1_right span:nth-child(2)", {x:0, opacity:1},'d-=0.15')
            .to(".title_box .alp1_right span:nth-child(3)", {x:0, opacity:1},'d-=0.1')

            .to(".title_box .alp2 span:nth-child(1)", {x:0, opacity:1},'d-=0.05')
            .to(".title_box .alp2 span:nth-child(2)", {x:0, opacity:1},'d')
            .to(".title_box .alp2 span:nth-child(3)", {x:0, opacity:1},'d+=0.05')
            .to(".title_box .alp2 span:nth-child(4)", {x:0, opacity:1},'d+=0.1')
            .to(".title_box .alp2 span:nth-child(5)", {x:0, opacity:1},'d+=0.15')
            .to(".title_box .alp2 span:nth-child(6)", {x:0, opacity:1},'d+=0.2')
            .to(".title_box .alp2 span:nth-child(7)", {x:0, opacity:1},'d+=0.25')
            .to(".title_box .alp2 span:nth-child(8)", {x:0, opacity:1},'d+=0.3')
            .to(".title_box .alp2 span:nth-child(9)", {x:0, opacity:1},'d+=0.35')

            .to(".mask", {width:"inherit", height:"inherit", overflow:"visible"},'d')
            .to(".mask", {maskImage:"none"},'d')
            .to(".page_load", {display:"none"},'d')
            

            
            //group_bottom 프로젝트 stagger
            gsap.to(".sc_work .project_inner", {
                opacity:1,
                y:0,
                stagger: false,
                scrollTrigger: {
                    trigger:".sc_work .group_bottom",
                    start:"0% 70%",
                    end:"25% 60%",
                    // markers:true,
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
            .addLabel('f')
            .to('.slide_inner2', {xPercent:-83},'f')
                
      },
        // all
        "all": function() {

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
            .to(".sc_home .group_main", {width:"49%"},'a')
            .to(".sc_home .group_sub1", {y:"-80%"},'a')
            .to(".sc_home .group_sub1 .home_bg", {opacity:0.4},'a')
            .addLabel('b')
            .fromTo(".sc_home .group_sub2", {y:"30%"},{y:"-30%"},'b-=0.3')
            .to(".sc_home .group_sub2 .home_bg", {opacity:0.4},'b-=0.3')
            .addLabel('c')
            .fromTo(".sc_home .group_sub3", {y:"30%"},{y:"-30%"},'c-=0.3')
            .to(".sc_home .group_sub3 .home_bg", {opacity:0.4},'c-=0.3');


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

    $(window).resize(function(){
        location.reload();
        scrollTrigger.refresh();
    });

    $(window).scroll(function(){
        ScrollTrigger.refresh(true)
    });

});
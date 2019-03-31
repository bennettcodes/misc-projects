$(window).load(function() {
    
    var pathObj = {
    "sig": {
        "strokepath": [
            {
                "path": "M3.2,243.3c0,0,242.2-195.8,239.5-235.6S92.5,113.9,120.6,191.9S253.3,87.7,243,138.1s-75.6,76.7,137.4,82.8  c212.8,6.1,394-1.7,530.3,16.9",
                "duration": 1200
            },
            {
                "path": "M0.9,166.6c0,0,26.6-55.7,153.6-15.5s223.4,42.8,304.2,39.1",
                "duration": 800
            }
        ],
        "dimensions": {
            "width": 911,
            "height": 245
        }
    }
};
    

    
    container.velocity({
        opacity:['1','0']
    }, {
        duration:500
    });

    if ($(window).width() >= 769) {
    
    circle.hover(function() {
        continents.velocity({
            opacity:'0.6'
        }, {
            duration:500,
            easing:'swing',
            queue:false
        });
    }, function() {
        continents.velocity({
            opacity:'0.2'
        }, {
            duration:500,
            easing:'swing',
            queue:false
        });
    })
        
    $('#sig').lazylinepainter( 
     {
        "svgData": pathObj,
        "strokeWidth": 4,
        "strokeColor": "#ffffff",
        "ease": "easeInOutQuart"
    }).lazylinepainter('paint');
        blemishCover.stop(1,0).show(0).velocity({
            opacity:['0','1']
        }, {
            duration:850,
            easing:'easeInExpo',
            complete:function(){
                $(this).fadeOut(0);
            }
        });
    } else {
    
    logoWritten.css('opacity','0');
    
    $('#sig').show(0).lazylinepainter( 
     {
        "svgData": pathObj,
        "strokeWidth": 4,
        "strokeColor": "#000000",
        "ease": "easeInOutQuart"
    }).lazylinepainter('paint');
    }
    
    contentContainer.velocity({
        opacity:['1','0']
    }, {
        duration:1000,
        easing:'swing',
        complete:function(){
            if($(window).width() < 769) {
            $('#sig svg path').stop(1,0).velocity({
                opacity:'0'
            }, {
                duration:1000,
                easing:'swing',
                complete:function(){
                    logoWritten.stop(1,0).velocity({
                        translateX:[
                            ($(window).width() * 0.05) + 'px)',
                            ($(window).width() * 0.05) + 'px)'
                        ],
                        translateY:['0','5vw'],
                        opacity:['1','0']
                    }, {
                        duration:1000,
                        easing:'spring'
                    });
                }
            });
            }
            if ($(window).width() >= 769){
            $('#sig svg path').stop(1,0).velocity({
                stroke:'#000000'
            }, {
                duration:500,
                easing:'swing'
            });
            
            }

            root.css('overflowY','visible').velocity({
                backgroundColor:"#ffffff"
            }, {
                duration:500,
                easing:'swing'
            });
            sectionContainer.velocity({
                opacity:['1','0']
            }, {
                duration:500,
                easing:'swing',
                function() {
                    sectionHomeOffset = sectionHome.offset().top,
                    sectionAboutOffset = sectionAbout.offset().top,
                    sectionResumeOffset = sectionResume.offset().top,
                    sectionPortfolioOffset = sectionPortfolio.offset().top,
                    sectionContactOffset = sectionPortfolio.offset().top;
                }
            });
            sideMenu.velocity({
                opacity:['1','0']
            }, {
                duration:500,
                easing:'swing',
                delay:500
            });
    
            if ((window.location.hash === '') || (window.location.hash === '#') || (window.location.hash === '#/')) {
                
                menuItemTrackerIndex = 0;

                sectionAbout.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );

                sectionResume.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );

                sectionPortfolio.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );

                sectionContact.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );
                
                circle.stop(1,0).velocity({
                   opacity:['1', 'spring', '0'],
                   scale:['1', 'spring', '0']
                }, {
                    duration:1000,
                    complete:function(){
                        circle.velocity({
                            backgroundColor:'#ffffff'
                        }, {
                            duration:1000,
                            easing:'easeInQuart'
                        });
                        circleInner.velocity({
                            opacity:'1'
                        }, {
                            duration:1000,
                            easing:'easeOutQuart'
                        });
                        circleItem.velocity({
                            opacity:'1'
                        }, {
                            duration:1000,
                            easing:'easeOutQuart'
                        });
                    }
                });
                sectionMasthead.css('opacity','1');
                sectionBody.css('opacity','1');
                cubeInnerContainerAbout.css('opacity','1');
                rectangleFrontBack.css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:0,
                    delay:0
                });
                rectangleTopBottom.css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:0,
                    delay:0
                });
            }
    
            if (window.location.hash === '#/about') {
                
                menuItemTrackerIndex = 1;

                sectionAbout.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialAnimated
                );

                sectionResume.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );

                sectionPortfolio.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );

                sectionContact.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );
                
                sectionAboutMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['1deg','-90deg']
                }, {
                    duration:sectionMastheadDuration,
                    delay:sectionMastheadFirstDelay,
                    easing:sectionMastheadEase
                })  .parent(sectionContent).parent(section).siblings(section).find(sectionMasthead).css('opacity','1');
                sectionAboutBody.stop(1,0).css('opacity','0').velocity({
                    opacity:['1','0'],
                    translateY:['0px','100px']
                }, {
                    duration:sectionBodyDuration,
                    delay:sectionBodyFirstDelay,
                    easing:sectionBodyEase }).parent(sectionContent).parent(section).siblings(section).find(sectionBody).css('opacity','1');
                cubeInnerContainerAbout.stop(1,1).css('opacity','0').velocity({
                    opacity:['1', 'easeOutExpo', ,'0'],
                    rotateX:['1deg','60deg'],
                    rotateY:['1deg','-35deg']
                }, {
                    duration:sectionCubeDuration,
                    delay:sectionCubeFirstDelay,
                    easing:sectionCubeEase
                }).parent(cubeContainer).parent(section).siblings(section).find(cubeInnerContainer).css('opacity','1');
                
 cubeInnerContainerAbout.parent(cubeContainer).parent(section).siblings(section).find(cubeInnerContainer).find(rectangleFrontBack).css({opacity:'1',width:'115vh'});
                
 cubeInnerContainerAbout.parent(cubeContainer).parent(section).siblings(section).find(cubeInnerContainer).find(rectangleTopBottom).css({opacity:'1',width:'115vh'});
                cubeInnerContainerAbout.find(rectangleFrontBack).stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
                cubeInnerContainerAbout.find(rectangleTopBottom).stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
            
            if ($(window).width() >= 769){
                sectionAbout.velocity(
                    'scroll', {
                    duration:0
                });
            }
                menuItemTrackerContainer.stop(1,0).velocity({
                   translateY:($(window).height() * 0.1) * 1
                }, {
                    duration:0
                });
            }
    
            if (window.location.hash === '#/resume') {
                
                menuItemTrackerIndex = 2;

                sectionAbout.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );

                sectionResume.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialAnimated
                );

                sectionPortfolio.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );

                sectionContact.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );
                
                sectionResumeMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['1deg','-90deg']
                }, {
                    duration:sectionMastheadDuration,
                    delay:sectionMastheadFirstDelay,
                    easing:sectionMastheadEase }).parent(sectionContent).parent(section).siblings(section).find(sectionMasthead).css('opacity','1');
                sectionResumeBody.stop(1,0).css('opacity','0').velocity({
                    opacity:['1','0'],
                    translateY:['0px','100px']
                }, {
                    duration:sectionBodyDuration,
                    delay:sectionBodyFirstDelay,
                    easing:sectionBodyEase }).parent(sectionContent).parent(section).siblings(section).find(sectionBody).css('opacity','1');
                cubeInnerContainerResume.stop(1,1).css('opacity','0').velocity({
                    opacity:['1', 'easeOutExpo', ,'0'],
                    rotateX:['1deg','60deg'],
                    rotateY:['1deg','-35deg']
                }, {
                    duration:sectionCubeDuration,
                    delay:sectionCubeFirstDelay,
                    easing:sectionCubeEase
                }).parent(cubeContainer).parent(section).siblings(section).find(cubeInnerContainer).css('opacity','1');
                
 cubeInnerContainerResume.parent(cubeContainer).parent(section).siblings(section).find(cubeInnerContainer).find(rectangleFrontBack).css({opacity:'1',width:'115vh'});
                
 cubeInnerContainerResume.parent(cubeContainer).parent(section).siblings(section).find(cubeInnerContainer).find(rectangleTopBottom).css({opacity:'1',width:'115vh'});
                cubeInnerContainerResume.find(rectangleFrontBack).stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
                cubeInnerContainerResume.find(rectangleTopBottom).stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
            
            if ($(window).width() >= 769){
                sectionResume.velocity(
                    'scroll', {
                    duration:0
                });
            }
                menuItemTrackerContainer.stop(1,0).velocity({
                   translateY:($(window).height() * 0.1) * 2
                }, {
                    duration:0
                });
            }
    
            if (window.location.hash === '#/portfolio') {
                
                menuItemTrackerIndex = 3;

                sectionAbout.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );

                sectionResume.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );

                sectionPortfolio.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialAnimated
                );

                sectionContact.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );
                
                sectionPortfolioMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['1deg','-90deg']
                }, {
                    duration:sectionMastheadDuration,
                    delay:sectionMastheadFirstDelay,
                    easing:sectionMastheadEase }).parent(sectionContent).parent(section).siblings(section).find(sectionMasthead).css('opacity','1');
                sectionPortfolioBody.stop(1,0).css('opacity','0').velocity({
                    opacity:['1','0'],
                    translateY:['0px','100px']
                }, {
                    duration:sectionBodyDuration,
                    delay:sectionBodyFirstDelay,
                    easing:sectionBodyEase }).parent(sectionContent).parent(section).siblings(section).find(sectionBody).css('opacity','1');
                cubeInnerContainerPortfolio.stop(1,1).css('opacity','0').velocity({
                    opacity:['1', 'easeOutExpo', ,'0'],
                    rotateX:['1deg','60deg'],
                    rotateY:['1deg','-35deg']
                }, {
                    duration:sectionCubeDuration,
                    delay:sectionCubeFirstDelay,
                    easing:sectionCubeEase
                }).parent(cubeContainer).parent(section).siblings(section).find(cubeInnerContainer).css('opacity','1');
                
 cubeInnerContainerPortfolio.parent(cubeContainer).parent(section).siblings(section).find(cubeInnerContainer).find(rectangleFrontBack).css({opacity:'1',width:'115vh'});
                
 cubeInnerContainerPortfolio.parent(cubeContainer).parent(section).siblings(section).find(cubeInnerContainer).find(rectangleTopBottom).css({opacity:'1',width:'115vh'});
                cubeInnerContainerPortfolio.find(rectangleFrontBack).stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
                cubeInnerContainerPortfolio.find(rectangleTopBottom).stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
            
            if ($(window).width() >= 769){
                sectionPortfolio.velocity(
                    'scroll', {
                    duration:0
                });
            }
                
                menuItemTrackerContainer.stop(1,0).velocity({
                   translateY:($(window).height() * 0.1) * 3
                }, {
                    duration:0
                });
            }
    
            if (window.location.hash === '#/contact') {
                
                menuItemTrackerIndex = 4;

                sectionAbout.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );

                sectionResume.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );

                sectionPortfolio.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialNotAnimated
                );

                sectionContact.find(sectionTitle).velocity(
                    titleFlyIn.p,
                    titleFlyIn.o.initialAnimated
                );
                
                sectionContactMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['1deg','-90deg']
                }, {
                    duration:sectionMastheadDuration,
                    delay:sectionMastheadFirstDelay,
                    easing:sectionMastheadEase }).parent(sectionContent).parent(section).siblings(section).find(sectionMasthead).css('opacity','1');
                sectionContactBody.stop(1,0).css('opacity','0').velocity({
                    opacity:['1','0'],
                    translateY:['0px','100px']
                }, {
                    duration:sectionBodyDuration,
                    delay:sectionBodyFirstDelay,
                    easing:sectionBodyEase }).parent(sectionContent).parent(section).siblings(section).find(sectionBody).css('opacity','1');
                cubeInnerContainerContact.stop(1,1).css('opacity','0').velocity({
                    opacity:['1', 'easeOutExpo', ,'0'],
                    rotateX:['1deg','60deg'],
                    rotateY:['1deg','-35deg']
                }, {
                    duration:sectionCubeDuration,
                    delay:sectionCubeFirstDelay,
                    easing:sectionCubeEase
                }).parent(cubeContainer).parent(section).siblings(section).find(cubeInnerContainer).css('opacity','1');
                
 cubeInnerContainerContact.parent(cubeContainer).parent(section).siblings(section).find(cubeInnerContainer).find(rectangleFrontBack).css({opacity:'1',width:'115vh'});
                
 cubeInnerContainerContact.parent(cubeContainer).parent(section).siblings(section).find(cubeInnerContainer).find(rectangleTopBottom).css({opacity:'1',width:'115vh'});
                cubeInnerContainerContact.find(rectangleFrontBack).stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
                cubeInnerContainerContact.find(rectangleTopBottom).stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
            
            if ($(window).width() >= 769){
                sectionContact.velocity(
                    'scroll', {
                    duration:0
                });
            }
                
                menuItemTrackerContainer.stop(1,0).velocity({
                   translateY:($(window).height() * 0.1) * 4
                }, {
                    duration:0
                });
            }
        }
    });
    
    circleGradientMove();
    
    menuItem.mouseover(function() {
        
        if (($(window).width() >= 769) && (unclicked)) {
        noHover = false;
            
        $(this).stop(1,0).addClass('active').css('zIndex','995').siblings(menuItem).css('zIndex','990').removeClass('active');
        $(this).find(menuItemInner).stop(1,0).velocity({
            rotateY:['-45deg', '-0deg']
        }, {
            duration:500,
            easing:'easeOutCirc'
        });
        $(this).find(menuItemShadow).stop(1,0).velocity({
            opacity:['1','0']
        }, {
            duration:250,
            easing:'swing'
        });
        
        currentMenuItem = $(this);
        
        switch(true) {
        case currentMenuItem.hasClass('home'):
                
        circleInnerHome.addClass('circle-active').velocity({
            opacity:'1'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
            break;
                
        case currentMenuItem.hasClass('about'):
                
        circleInnerAbout.addClass('circle-active').velocity({
            opacity:'1'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
            break;
                
        case currentMenuItem.hasClass('resume'):
                
        circleInnerResume.addClass('circle-active').velocity({
            opacity:'1'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
            break;
                
        case currentMenuItem.hasClass('portfolio'):
                
        circleInnerPortfolio.addClass('circle-active').velocity({
            opacity:'1'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
            break;
                
        case currentMenuItem.hasClass('contact'):
                
        circleInnerContact.addClass('circle-active').velocity({
            opacity:'1'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
            break;
                
        }
            
        }
        
    });
    
    menuItem.mouseout(function() {
        
        if (($(window).width() >= 769) && (unclicked)) {
            
        $(this).find(menuItemInner).stop(1,0).velocity({
            rotateY:['-0deg', '-45deg']
        }, {
            duration:500,
            easing:'easeOutCirc',
            complete:function() {
                noHover = true;
            }
        }).parent(menuItem).removeClass('active');
        $(this).find(menuItemShadow).stop(1,0).velocity({
            opacity:['0','1']
        }, {
            duration:250,
            easing:'swing'
        });
        
        switch(true) {
        case currentMenuItem.hasClass('home'):
                
        circleInnerHome.removeClass('circle-active').velocity({
            opacity:'0'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
            break;
                
        case currentMenuItem.hasClass('about'):
                
        circleInnerAbout.removeClass('circle-active').velocity({
            opacity:'0'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
            break;
                
        case currentMenuItem.hasClass('resume'):
                
        circleInnerResume.removeClass('circle-active').velocity({
            opacity:'0'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
            break;
                
        case currentMenuItem.hasClass('portfolio'):
                
        circleInnerPortfolio.removeClass('circle-active').velocity({
            opacity:'0'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
            break;
                
        case currentMenuItem.hasClass('contact'):
                
        circleInnerContact.removeClass('circle-active').velocity({
            opacity:'0'
        }, {
            duration:250,
            easing:'swing',
            queue:false
        });
            break;
                
        }
            
        } else {
            unclicked = true;
        }
        
    });
    
    logoContainer.mouseup(function() {
        
        window.location.hash = '#/'
            
        if (menuItemTrackerIndex !== 0) {
            sectionHome.stop(1,0).velocity({
                opacity:['1','0']
            }, {
                duration:1000,
                easing:'easeInCirc',
                complete:function(){
                    $(this).siblings(section).css('opacity','1');
                }
            }).siblings(section).stop(1,0).velocity({
                opacity:['0','1']
            }, {
                duration:750
            });
        }
        
        homeclicked = true;
                
        sectionHome.stop(1,0).velocity(
            'scroll', {
            duration:1000,
            easing:'easeInOutCirc'
        });
       
       panelRight.eq(0).stop(1,0).velocity({
           backgroundColor:[primaryColorHome,primaryColorHome]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(1).stop(1,0).velocity({
           backgroundColor:[primaryColorAbout,primaryColorHome]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(2).stop(1,0).velocity({
           backgroundColor:[primaryColorResume,primaryColorHome]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(3).stop(1,0).velocity({
           backgroundColor:[primaryColorPortfolio,primaryColorHome]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(4).stop(1,0).velocity({
           backgroundColor:[primaryColorContact,primaryColorHome]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
                
        circleInnerHome.removeClass('circle-active').velocity({
            opacity:'0'
        }, {
            duration:250,
            easing:'swing'
        });
    });
    
    menuItem.mouseup(function() {
        
        unclicked = false;
        
        if ($(window).width() >= 769) {
            
        $(this).find(menuItemInner).stop(1,0).velocity({
            rotateY:['-0deg', '-45deg']
        }, {
            duration:500,
            easing:'easeOutCirc',
            complete:function() {
                noHover = true;
                unclicked = true;
            }
        }).parent(menuItem).removeClass('active');
        $(this).find(menuItemShadow).stop(1,0).velocity({
            opacity:['0','1']
        }, {
            duration:250,
            easing:'swing'
        });
        
        switch(true) {
        case currentMenuItem.hasClass('home'):
        
        window.location.hash = '#/'
            
        if (menuItemTrackerIndex !== 0) {
            sectionHome.stop(1,0).velocity({
                opacity:['1','0']
            }, {
                duration:1000,
                easing:'easeInCirc',
                complete:function(){
                    $(this).siblings(section).css('opacity','1');
                }
            }).siblings(section).stop(1,0).velocity({
                opacity:['0','1']
            }, {
                duration:750
            });
        }
        
        homeclicked = true;
                
        sectionHome.stop(1,0).velocity(
            'scroll', {
            duration:1000,
            easing:'easeInOutCirc'
        });
       
       panelRight.eq(0).stop(1,0).velocity({
           backgroundColor:[primaryColorHome,primaryColorHome]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(1).stop(1,0).velocity({
           backgroundColor:[primaryColorAbout,primaryColorHome]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(2).stop(1,0).velocity({
           backgroundColor:[primaryColorResume,primaryColorHome]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(3).stop(1,0).velocity({
           backgroundColor:[primaryColorPortfolio,primaryColorHome]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(4).stop(1,0).velocity({
           backgroundColor:[primaryColorContact,primaryColorHome]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
                
        circleInnerHome.removeClass('circle-active').velocity({
            opacity:'0'
        }, {
            duration:250,
            easing:'swing'
        });
            break;
                
        case currentMenuItem.hasClass('about'):
        
        window.location.hash = '#/about'
            
        if (menuItemTrackerIndex === 0) {
            sectionHome.siblings(section).stop(1,0).velocity({
                opacity:['0','1']
            }, {
                duration:750,
                easing:'swing'
            });
                
            sectionAbout.stop(1,0).velocity(
                'scroll', {
                duration:1000,
                easing:'easeInOutCirc',
                complete:function(){
                    backgroundColorInProgress = false;
                }
            });

           panelRight.eq(0).stop(1,0).velocity({
               backgroundColor:[primaryColorHome,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(1).stop(1,0).velocity({
               backgroundColor:[primaryColorAbout,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(2).stop(1,0).velocity({
               backgroundColor:[primaryColorResume,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(3).stop(1,0).velocity({
               backgroundColor:[primaryColorPortfolio,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(4).stop(1,0).velocity({
               backgroundColor:[primaryColorContact,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

            circleInnerAbout.removeClass('circle-active').velocity({
                opacity:'0'
            }, {
                duration:250,
                easing:'swing'
            });
            
        if (menuItemTrackerIndex !== 1) {
            sectionAbout.stop(1,0).velocity({
                opacity:['1','0']
            }, {
                duration:1000,
                easing:'easeInCirc',
                complete:function(){
                    $(this).siblings(section).css('opacity','1');
                }
            });
            sectionAboutMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['1deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });

            sectionAbout.find(sectionTitle).stop(1,1).css('opacity','0').velocity(
                titleFlyIn.p,
                titleFlyIn.o.menuClick
            );
            
            sectionAboutBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
            cubeInnerContainerAbout.stop(1,1).css('opacity','0').velocity({
                opacity:['1', 'easeOutExpo', ,'0'],
                rotateX:['1deg','60deg'],
                rotateY:['1deg','-35deg']
            }, {
                duration:sectionCubeDuration,
                delay:sectionCubeDelay,
                easing:sectionCubeEase
            });
            cubeInnerContainerAbout.find(rectangleFrontBack).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
            cubeInnerContainerAbout.find(rectangleTopBottom).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
        }
        } else {
            
        if (menuItemTrackerIndex !== 1) {
            sectionAbout.stop(1,0).velocity({
                opacity:['1','0']
            }, {
                duration:1000,
                easing:'easeInCirc',
                complete:function(){
                    $(this).siblings(section).css('opacity','1'); 
                }
            }).siblings(section).stop(1,0).velocity({
                opacity:['0','1']
            }, {
                duration:750
            });
            sectionAboutMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['1deg','45deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });

            sectionAbout.find(sectionTitle).stop(1,1).css('opacity','0').velocity(
                titleFlyIn.p,
                titleFlyIn.o.menuClick
            );
            
            sectionAboutBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
            cubeInnerContainerAbout.stop(1,1).css('opacity','0').velocity({
                opacity:['1', 'easeOutExpo', ,'0'],
                rotateX:['1deg','60deg'],
                rotateY:['1deg','-35deg']
            }, {
                duration:sectionCubeDuration,
                delay:sectionCubeDelay,
                easing:sectionCubeEase
            });
            cubeInnerContainerAbout.find(rectangleFrontBack).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
            cubeInnerContainerAbout.find(rectangleTopBottom).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
        }
        
        console.log('item 2');
                
        sectionAbout.stop(1,0).velocity(
            'scroll', {
            duration:1000,
            easing:'easeInOutCirc',
            complete:function(){
                backgroundColorInProgress = false;
            }
        });
       
       panelRight.eq(0).stop(1,0).velocity({
           backgroundColor:[primaryColorHome,primaryColorAbout]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(1).stop(1,0).velocity({
           backgroundColor:[primaryColorAbout,primaryColorAbout]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(2).stop(1,0).velocity({
           backgroundColor:[primaryColorResume,primaryColorAbout]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(3).stop(1,0).velocity({
           backgroundColor:[primaryColorPortfolio,primaryColorAbout]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(4).stop(1,0).velocity({
           backgroundColor:[primaryColorContact,primaryColorAbout]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
                
        circleInnerAbout.removeClass('circle-active').velocity({
            opacity:'0'
        }, {
            duration:250,
            easing:'swing'
        });
        }
            break;
                
        case currentMenuItem.hasClass('resume'):
        
        window.location.hash = '#/resume'
            
        if (menuItemTrackerIndex === 0) {
            sectionHome.siblings(section).stop(1,0).velocity({
                opacity:['0','1']
            }, {
                duration:750,
                easing:'swing'
            });
                
            sectionResume.stop(1,0).velocity(
                'scroll', {
                duration:1000,
                easing:'easeInOutCirc',
                complete:function(){
                    backgroundColorInProgress = false;
                }
            });

           panelRight.eq(0).stop(1,0).velocity({
               backgroundColor:[primaryColorHome,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(1).stop(1,0).velocity({
               backgroundColor:[primaryColorAbout,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(2).stop(1,0).velocity({
               backgroundColor:[primaryColorResume,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(3).stop(1,0).velocity({
               backgroundColor:[primaryColorPortfolio,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(4).stop(1,0).velocity({
               backgroundColor:[primaryColorContact,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

            circleInnerResume.removeClass('circle-active').velocity({
                opacity:'0'
            }, {
                duration:250,
                easing:'swing'
            });
            
        if (menuItemTrackerIndex !== 2) {
            sectionResume.stop(1,0).velocity({
                opacity:['1','0']
            }, {
                duration:1000,
                easing:'easeInCirc',
                complete:function(){
                    $(this).siblings(section).css('opacity','1');
                }
            });
            sectionResumeMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['1deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });

            sectionResume.find(sectionTitle).stop(1,1).css('opacity','0').velocity(
                titleFlyIn.p,
                titleFlyIn.o.menuClick
            );
            
            sectionResumeBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
            cubeInnerContainerResume.stop(1,1).css('opacity','0').velocity({
                opacity:['1', 'easeOutExpo', ,'0'],
                rotateX:['1deg','60deg'],
                rotateY:['1deg','-35deg']
            }, {
                duration:sectionCubeDuration,
                delay:sectionCubeDelay,
                easing:sectionCubeEase
            });
            cubeInnerContainerResume.find(rectangleFrontBack).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
            cubeInnerContainerResume.find(rectangleTopBottom).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
        }
        } else {
            
        if (menuItemTrackerIndex !== 2) {
            sectionResume.stop(1,0).velocity({
                opacity:['1','0']
            }, {
                duration:1000,
                easing:'easeInCirc',
                complete:function(){
                    $(this).siblings(section).css('opacity','1');
                }
            }).siblings(section).stop(1,0).velocity({
                opacity:['0','1']
            }, {
                duration:750
            });
            sectionResumeMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['1deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });

            sectionResume.find(sectionTitle).stop(1,1).css('opacity','0').velocity(
                titleFlyIn.p,
                titleFlyIn.o.menuClick
            );
            
            sectionResumeBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
            cubeInnerContainerResume.stop(1,1).css('opacity','0').velocity({
                opacity:['1', 'easeOutExpo', ,'0'],
                rotateX:['1deg','60deg'],
                rotateY:['1deg','-35deg']
            }, {
                duration:sectionCubeDuration,
                delay:sectionCubeDelay,
                easing:sectionCubeEase
            });
            cubeInnerContainerResume.find(rectangleFrontBack).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
            cubeInnerContainerResume.find(rectangleTopBottom).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
        }
                
        backgroundColorInProgress = true;
        
        console.log('item 3');
                
        sectionResume.stop(1,0).velocity(
            'scroll', {
            duration:1000,
            easing:'easeInOutCirc',
            complete:function(){
                backgroundColorInProgress = false;
            }
        });
       
       panelRight.eq(0).stop(1,0).velocity({
           backgroundColor:[primaryColorHome,primaryColorResume]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(1).stop(1,0).velocity({
           backgroundColor:[primaryColorAbout,primaryColorResume]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(2).stop(1,0).velocity({
           backgroundColor:[primaryColorResume,primaryColorResume]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(3).stop(1,0).velocity({
           backgroundColor:[primaryColorPortfolio,primaryColorResume]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(4).stop(1,0).velocity({
           backgroundColor:[primaryColorContact,primaryColorResume]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
                
        circleInnerResume.removeClass('circle-active').velocity({
            opacity:'0'
        }, {
            duration:250,
            easing:'swing'
        });
        }
            break;
                
        case currentMenuItem.hasClass('portfolio'):
        
        window.location.hash = '#/portfolio'
            
        if (menuItemTrackerIndex === 0) {
            sectionHome.siblings(section).stop(1,0).velocity({
                opacity:['0','1']
            }, {
                duration:750,
                easing:'swing'
            });
                
            sectionPortfolio.stop(1,0).velocity(
                'scroll', {
                duration:1000,
                easing:'easeInOutCirc',
                complete:function(){
                    backgroundColorInProgress = false;
                }
            });

           panelRight.eq(0).stop(1,0).velocity({
               backgroundColor:[primaryColorHome,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(1).stop(1,0).velocity({
               backgroundColor:[primaryColorAbout,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(2).stop(1,0).velocity({
               backgroundColor:[primaryColorResume,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(3).stop(1,0).velocity({
               backgroundColor:[primaryColorPortfolio,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(4).stop(1,0).velocity({
               backgroundColor:[primaryColorContact,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

            circleInnerPortfolio.removeClass('circle-active').velocity({
                opacity:'0'
            }, {
                duration:250,
                easing:'swing'
            });
            
        if (menuItemTrackerIndex !== 3) {
            sectionPortfolio.stop(1,0).velocity({
                opacity:['1','0']
            }, {
                duration:1000,
                easing:'easeInCirc',
                complete:function(){
                    $(this).siblings(section).css('opacity','1');
                }
            });
            sectionPortfolioMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['1deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });

            sectionPortfolio.find(sectionTitle).stop(1,1).css('opacity','0').velocity(
                titleFlyIn.p,
                titleFlyIn.o.menuClick
            );
            
            sectionPortfolioBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
            cubeInnerContainerPortfolio.stop(1,1).css('opacity','0').velocity({
                opacity:['1', 'easeOutExpo', ,'0'],
                rotateX:['1deg','60deg'],
                rotateY:['1deg','-35deg']
            }, {
                duration:sectionCubeDuration,
                delay:sectionCubeDelay,
                easing:sectionCubeEase
            });
            cubeInnerContainerPortfolio.find(rectangleFrontBack).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
            cubeInnerContainerPortfolio.find(rectangleTopBottom).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
        }
        } else {
            
        if (menuItemTrackerIndex !== 3) {
            sectionPortfolio.stop(1,0).velocity({
                opacity:['1','0']
            }, {
                duration:1000,
                easing:'easeInCirc',
                complete:function(){
                    $(this).siblings(section).css('opacity','1');
                }
            }).siblings(section).stop(1,0).velocity({
                opacity:['0','1']
            }, {
                duration:750
            });
            sectionPortfolioMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['1deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });

            sectionPortfolio.find(sectionTitle).stop(1,1).css('opacity','0').velocity(
                titleFlyIn.p,
                titleFlyIn.o.menuClick
            );
            
            sectionPortfolioBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
            cubeInnerContainerPortfolio.stop(1,1).css('opacity','0').velocity({
                opacity:['1', 'easeOutExpo', ,'0'],
                rotateX:['1deg','60deg'],
                rotateY:['1deg','-35deg']
            }, {
                duration:sectionCubeDuration,
                delay:sectionCubeDelay,
                easing:sectionCubeEase
            });
            cubeInnerContainerPortfolio.find(rectangleFrontBack).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
            cubeInnerContainerPortfolio.find(rectangleTopBottom).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
        }
                
        backgroundColorInProgress = true;
        
        console.log('item 4');
                
        sectionPortfolio.stop(1,0).velocity(
            'scroll', {
            duration:1000,
            easing:'easeInOutCirc',
            complete:function(){
                backgroundColorInProgress = false;
            }
        });
       
       panelRight.eq(0).stop(1,0).velocity({
           backgroundColor:[primaryColorHome,primaryColorPortfolio]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(1).stop(1,0).velocity({
           backgroundColor:[primaryColorAbout,primaryColorPortfolio]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(2).stop(1,0).velocity({
           backgroundColor:[primaryColorResume,primaryColorPortfolio]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(3).stop(1,0).velocity({
           backgroundColor:[primaryColorPortfolio,primaryColorPortfolio]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(4).stop(1,0).velocity({
           backgroundColor:[primaryColorContact,primaryColorPortfolio]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
                
        circleInnerPortfolio.removeClass('circle-active').velocity({
            opacity:'0'
        }, {
            duration:250,
            easing:'swing'
        });
        }
            break;
                
        case currentMenuItem.hasClass('contact'):
        
        window.location.hash = '#/contact';
            
        if (menuItemTrackerIndex === 0) {
            sectionHome.siblings(section).stop(1,0).velocity({
                opacity:['0','1']
            }, {
                duration:750,
                easing:'swing'
            });
                
            sectionContact.stop(1,0).velocity(
                'scroll', {
                duration:1000,
                easing:'easeInOutCirc',
                complete:function(){
                    backgroundColorInProgress = false;
                }
            });

           panelRight.eq(0).stop(1,0).velocity({
               backgroundColor:[primaryColorHome,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(1).stop(1,0).velocity({
               backgroundColor:[primaryColorAbout,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(2).stop(1,0).velocity({
               backgroundColor:[primaryColorResume,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(3).stop(1,0).velocity({
               backgroundColor:[primaryColorPortfolio,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

           panelRight.eq(4).stop(1,0).velocity({
               backgroundColor:[primaryColorContact,primaryColorAbout]
            }, {
                duration:500,
                easing:'easeInCirc'
            });

            circleInnerContact.removeClass('circle-active').velocity({
                opacity:'0'
            }, {
                duration:250,
                easing:'swing'
            });
            
        if (menuItemTrackerIndex !== 4) {
            sectionContact.stop(1,0).velocity({
                opacity:['1','0']
            }, {
                duration:1000,
                easing:'easeInCirc',
                complete:function(){
                    $(this).siblings(section).css('opacity','1');
                }
            });
            sectionContactMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['1deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });

            sectionContact.find(sectionTitle).stop(1,1).css('opacity','0').velocity(
                titleFlyIn.p,
                titleFlyIn.o.menuClick
            );
            
            sectionContactBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
            cubeInnerContainerContact.stop(1,1).css('opacity','0').velocity({
                opacity:['1', 'easeOutExpo', ,'0'],
                rotateX:['1deg','60deg'],
                rotateY:['1deg','-35deg']
            }, {
                duration:sectionCubeDuration,
                delay:sectionCubeDelay,
                easing:sectionCubeEase
            });
            cubeInnerContainerContact.find(rectangleFrontBack).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
            cubeInnerContainerContact.find(rectangleTopBottom).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
        }
        } else {
            
        if (menuItemTrackerIndex !== 4) {
            sectionContact.stop(1,0).velocity({
                opacity:['1','0']
            }, {
                duration:1000,
                easing:'easeInCirc',
                complete:function(){
                    $(this).siblings(section).css('opacity','1');
                }
            }).siblings(section).stop(1,0).velocity({
                opacity:['0','1']
            }, {
                duration:750
            });
            sectionContactMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['1deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });

            sectionContact.find(sectionTitle).stop(1,1).css('opacity','0').velocity(
                titleFlyIn.p,
                titleFlyIn.o.menuClick
            );
            sectionContactBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
            cubeInnerContainerContact.stop(1,1).css('opacity','0').velocity({
                opacity:['1', 'easeOutExpo', ,'0'],
                rotateX:['1deg','60deg'],
                rotateY:['1deg','-35deg']
            }, {
                duration:sectionCubeDuration,
                delay:sectionCubeDelay,
                easing:sectionCubeEase
            });
            cubeInnerContainerContact.find(rectangleFrontBack).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
            cubeInnerContainerContact.find(rectangleTopBottom).stop(1,1).css('width','40vh').velocity({
                width:['115vh','40vh']
            }, {
                duration:1000,
                easing:'easeInOutCirc',
                delay:1250
            });
        }
        backgroundColorInProgress = true;
        
        console.log('item 5');
                
        sectionContact.stop(1,0).velocity(
            'scroll', {
            duration:1000,
            easing:'easeInOutCirc',
            complete:function(){
                backgroundColorInProgress = false;
            }
        });
       
       panelRight.eq(0).stop(1,0).velocity({
           backgroundColor:[primaryColorHome,primaryColorContact]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(1).stop(1,0).velocity({
           backgroundColor:[primaryColorAbout,primaryColorContact]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(2).stop(1,0).velocity({
           backgroundColor:[primaryColorResume,primaryColorContact]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(3).stop(1,0).velocity({
           backgroundColor:[primaryColorPortfolio,primaryColorContact]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
       
       panelRight.eq(4).stop(1,0).velocity({
           backgroundColor:[primaryColorContact,primaryColorContact]
        }, {
            duration:500,
            easing:'easeInCirc'
        });
                
        circleInnerContact.removeClass('circle-active').velocity({
            opacity:'0'
        }, {
            duration:250,
            easing:'swing'
        });
        }
            break;
                
        }
            
        }
        
    });

    function circleGradientMove() {
$(document).mousemove(function(event) {
    
        currentMousePos.x = event.pageX,
        currentMousePos.y = event.pageY,
        circleInnerInitialGradientXRate = circleInnerInitialGradientX - (currentMousePos.x / 100),
        circleInnerInitialGradientYRate = circleInnerInitialGradientY - (currentMousePos.y / 100);

        circleInner.css({
           backgroundImage:
            'radial-gradient(34px at ' +
            circleInnerInitialGradientXRate +
            '% ' +
            circleInnerInitialGradientYRate +
            '% , #ffffff 0%, #00c7eb 21vw, #00c7eb 0%)'
        });

        circleInnerHome.css({
           backgroundImage:
            'radial-gradient(34px at ' +
            circleInnerInitialGradientXRate +
            '% ' +
            circleInnerInitialGradientYRate +
            '% , #ffffff 0%, #00c7eb 21vw, #00c7eb 0%)'
        });

        circleInnerAbout.css({
           backgroundImage:
            'radial-gradient(34px at ' +
            circleInnerInitialGradientXRate +
            '% ' +
            circleInnerInitialGradientYRate +
            '% , #ffffff 0%, #ff005a 21vw, #ff005a 0%)'
        });

        circleInnerResume.css({
           backgroundImage:
            'radial-gradient(34px at ' +
            circleInnerInitialGradientXRate +
            '% ' +
            circleInnerInitialGradientYRate +
            '% , #ffffff 0%, #00ff96 21vw, #00ff96 0%)'
        });

        circleInnerPortfolio.css({
           backgroundImage:
            'radial-gradient(34px at ' +
            circleInnerInitialGradientXRate +
            '% ' +
            circleInnerInitialGradientYRate +
            '% , #ffffff 0%, #ffd800 21vw, #ffd800 0%)'
        });

        circleInnerContact.css({
           backgroundImage:
            'radial-gradient(34px at ' +
            circleInnerInitialGradientXRate +
            '% ' +
            circleInnerInitialGradientYRate +
            '% , #ffffff 0%, #fc00ff 21vw, #fc00ff 0%)'
        });

    });
    }
    
    //Scroll
    $(window).scroll(function() {
    if ($(window).width() >= 769) {
    scrollTop = $(window).scrollTop(),
    homeDistance = sectionHome.offset().top,
    aboutDistance = sectionAbout.offset().top,
    resumeDistance = sectionResume.offset().top,
    portfolioDistance = sectionPortfolio.offset().top,
    contactDistance = sectionContact.offset().top,
    scrollTop2 = $(window).scrollTop(),
    scrollTop2MinusSection = ($(window).scrollTop() - (sectionAbout2.height())),
        
    cubeAboutRotateXRateFirst = cubeAboutRotateXFirst + (scrollTop2 / 10),
    cubeAboutRotateXRateSecond = cubeAboutRotateXSecond + (scrollTop2 / 50),
    cubeAboutRotateYRateFirst = cubeAboutRotateYFirst + (scrollTop2 / 50),
    cubeAboutRotateYRateSecond = cubeAboutRotateYSecond + (scrollTop2 / 50),
        
    cubeResumeRotateXRateFirst = cubeResumeRotateXFirst + (scrollTop2 / 10),
    cubeResumeRotateXRateSecond = cubeResumeRotateXSecond + (scrollTop2 / 50),
    cubeResumeRotateYRateFirst = cubeResumeRotateYFirst + (scrollTop2 / 50),
    cubeResumeRotateYRateSecond = cubeResumeRotateYSecond + (scrollTop2 / 50),
        
    cubePortfolioRotateXRateFirst = cubePortfolioRotateXFirst + (scrollTop2 / 10),
    cubePortfolioRotateXRateSecond = cubePortfolioRotateXSecond + (scrollTop2 / 50),
    cubePortfolioRotateYRateFirst = cubePortfolioRotateYFirst + (scrollTop2 / 50),
    cubePortfolioRotateYRateSecond = cubePortfolioRotateYSecond + (scrollTop2 / 50),
        
    cubeContactRotateXRateFirst = cubeContactRotateXFirst + (scrollTop2 / 10),
    cubeContactRotateXRateSecond = cubeContactRotateXSecond + (scrollTop2 / 50),
    cubeContactRotateYRateFirst = cubeContactRotateYFirst + (scrollTop2 / 50),
    cubeContactRotateYRateSecond = cubeContactRotateYSecond + (scrollTop2 / 50),
        
    cubeOpacityRateToShow = cubeOpacity + ((scrollTop2 * 0.007) - (scrollTop2 * 0.004)),
    cubeOpacityRateToHide = cubeOpacityVisible - ((scrollTop2 * 0.007) - (scrollTop2 * 0.0045)),
    cubeOpacityRateToHide2 = cubeOpacityVisible - ((scrollTop2MinusSection * 0.007) - (scrollTop2MinusSection * 0.0035));

    sectionMastheadImage.css({
        transform:'translateY(' + scrollTop * 0.3 + 'px)'
    });

    switch(true) {

       //if user scrolls to where Home Bottom/About Top meet in middle
       case (scrollTop >= 0) && (scrollTop < (aboutDistance - ($(window).height() / 2))):

        if (sectionHomeVisible === false) {  
        sectionHomeVisible = true,
        sectionAboutVisible = false,
        sectionResumeVisible = false,
        sectionPortfolioVisible = false,
        sectionContactVisible = false, 

        sectionHomeVisible2 = true,
        sectionAboutVisible2 = false,
        sectionResumeVisible2 = false,
        sectionPortfolioVisible2 = false,
        sectionContactVisible2 = false,
        menuItemTrackerIndex = 0;
        menuItemTrackerContainer.stop(1,0).velocity({
           translateY:'0px' 
        }, {
            duration:1000,
            easing:'easeOutCirc'
        });

        circle.stop(1,1).css('opacity','0').velocity({
                    opacity:'1',
                   scale:['1','0'] 
                }, {
                    duration:500,
                    easing:'easeInCirc',
                    complete:function(){
                        circle.velocity({
                            backgroundColor:'#ffffff'
                        }, {
                            duration:1000,
                            easing:'easeInQuart'
                        });
                        circleInner.velocity({
                            opacity:'1'
                        }, {
                            duration:500,
                            easing:'easeOutQuart'
                        });
                        circleItem.velocity({
                            opacity:'1'
                        }, {
                            duration:500,
                            easing:'easeOutQuart'
                        });
                    }
                });
            circleInner.stop(1,1).css('opacity','0');
            circleItem.stop(1,1).css('opacity','0');

        sectionHomeBackgroundColor.stop(1,0).css('zIndex','-4').velocity({
            opacity:['1','0']
        }, {
            duration:250,
            easing:'swing'
        });
    sectionAboutBackgroundColor.stop(1,0).css('zIndex','-5');
    sectionResumeBackgroundColor.stop(1,0).css('zIndex','-6');
    sectionPortfolioBackgroundColor.stop(1,0).css('zIndex','-7');
    sectionContactBackgroundColor.stop(1,0).css('zIndex','-8');
            
        innerPagePanel.stop(1,0).velocity(
            menuLinkColor.p.home,
            menuLinkColor.o
        );

        }

           break;
       case (scrollTop >= (aboutDistance - ($(window).height() / 2))) && (scrollTop < (resumeDistance - ($(window).height() / 2))):

        if (sectionAboutVisible === false) {  
        sectionHomeVisible = false,
        sectionAboutVisible = true,
        sectionResumeVisible = false,
        sectionPortfolioVisible = false,
        sectionContactVisible = false, 
        homeclicked = false,

        sectionHomeVisible2 = false,
        sectionAboutVisible2 = true,
        sectionResumeVisible2 = false,
        sectionPortfolioVisible2 = false,
        sectionContactVisible2 = false,
        menuItemTrackerIndex = 1;
        menuItemTrackerContainer.stop(1,0).velocity({
           translateY:($(window).height() * 0.1) * 1
        }, {
            duration:1000,
            easing:'easeOutCirc'
        });

        circle.stop(1,0).velocity({
            opacity:'0',
            scale:'0'
        }, {
            duration:500,
            easing:'easeOutCirc',
            complete:function(){
                circle.css('backgroundColor','#00c7eb');
                circleInner.css('opacity','0');
                circleItem.css('opacity','0');
            }
        });
             sectionAboutBackgroundColor.stop(1,0).css('zIndex','-3').velocity({
            opacity:['1','0']
        }, {
            duration:250,
            easing:'swing'
        });
    sectionHomeBackgroundColor.stop(1,0).css('zIndex','-8');
    sectionResumeBackgroundColor.stop(1,0).css('zIndex','-5');
    sectionPortfolioBackgroundColor.stop(1,0).css('zIndex','-6');
    sectionContactBackgroundColor.stop(1,0).css('zIndex','-7');
            
        innerPagePanel.stop(1,0).velocity(
            menuLinkColor.p.about,
            menuLinkColor.o
        );

        }

           break;
       case (scrollTop >= (resumeDistance - (sectionResume.height() / 2))) && (scrollTop < (portfolioDistance - ($(window).height() / 2))):

        if (sectionResumeVisible === false) {  
        sectionHomeVisible = false,
        sectionAboutVisible = false,
        sectionResumeVisible = true,
        sectionPortfolioVisible = false,
        sectionContactVisible = false,
        homeclicked = false,

        sectionHomeVisible2 = false,
        sectionAboutVisible2 = false,
        sectionResumeVisible2 = true,
        sectionPortfolioVisible2 = false,
    cubeOpacityRateToHide = cubeOpacityVisible - ((scrollTop2 * 0.007) - (scrollTop2 * 0.0045)),
        sectionContactVisible2 = false, 
        menuItemTrackerIndex = 2;
        menuItemTrackerContainer.stop(1,0).velocity({
           translateY:($(window).height() * 0.1) * 2
        }, {
            duration:1000,
            easing:'easeOutCirc'
        });

        circle.stop(1,0).velocity({
            opacity:'0',
            scale:'0'
        }, {
            duration:500,
            easing:'easeOutCirc',
            complete:function(){
                circle.css('backgroundColor','#00c7eb');
                circleInner.css('opacity','0');
                circleItem.css('opacity','0');
            }
        });
             sectionResumeBackgroundColor.stop(1,0).css('zIndex','-3').velocity({
            opacity:['1','0']
        }, {
            duration:250,
            easing:'swing'
        });
    sectionHomeBackgroundColor.stop(1,0).css('zIndex','-8');
    sectionAboutBackgroundColor.stop(1,0).css('zIndex','-5');
    sectionContactBackgroundColor.stop(1,0).css('zIndex','-6');
    sectionPortfolioBackgroundColor.stop(1,0).css('zIndex','-7');
            
        innerPagePanel.stop(1,0).velocity(
            menuLinkColor.p.resume,
            menuLinkColor.o
        );

        }

           break;
       case (scrollTop >= (portfolioDistance - (sectionPortfolio.height() / 2))) && (scrollTop < (contactDistance - ($(window).height() / 2))):

        if (sectionPortfolioVisible === false) {  
        sectionHomeVisible = false,
        sectionAboutVisible = false,
        sectionResumeVisible = false,
        sectionPortfolioVisible = true,
        sectionContactVisible = false, 

        sectionHomeVisible2 = false,
        sectionAboutVisible2 = false,
        sectionResumeVisible2 = false,
        sectionPortfolioVisible2 = true,
        sectionContactVisible2 = false,
        menuItemTrackerIndex = 3,
        homeclicked = false;
        menuItemTrackerContainer.stop(1,0).velocity({
           translateY:($(window).height() * 0.1) * 3
        }, {
            duration:1000,
            easing:'easeOutCirc'
        });

        circle.stop(1,0).velocity({
            opacity:'0',
            scale:'0'
        }, {
            duration:500,
            easing:'easeOutCirc',
            complete:function(){
                circle.css('backgroundColor','#00c7eb');
                circleInner.css('opacity','0');
                circleItem.css('opacity','0');
            }
        });
             sectionPortfolioBackgroundColor.stop(1,0).css('zIndex','-3').velocity({
            opacity:['1','0']
        }, {
            duration:250,
            easing:'swing'
        });
    sectionHomeBackgroundColor.stop(1,0).css('zIndex','-8');
    sectionAboutBackgroundColor.stop(1,0).css('zIndex','-5');
    sectionResumeBackgroundColor.stop(1,0).css('zIndex','-6');
    sectionContactBackgroundColor.stop(1,0).css('zIndex','-7');
            
        innerPagePanel.stop(1,0).velocity(
            menuLinkColor.p.portfolio,
            menuLinkColor.o
        );

        }

           break;
       case (scrollTop >= (contactDistance - ($(window).height() / 2))) && (scrollTop < contactDistance):

        if (sectionContactVisible === false) {  
        sectionHomeVisible = false,
        sectionAboutVisible = false,
        sectionResumeVisible = false,
        sectionPortfolioVisible = false,
        sectionContactVisible = true,

        sectionHomeVisible2 = false,
        sectionAboutVisible2 = false,
        sectionResumeVisible2 = false,
        sectionPortfolioVisible2 = false,
        sectionContactVisible2 = true, 
        menuItemTrackerIndex = 4,
        homeclicked = false;
        menuItemTrackerContainer.stop(1,0).velocity({
           translateY:($(window).height() * 0.1) * 4
        }, {
            duration:1000,
            easing:'easeOutCirc'
        });

        circle.stop(1,0).velocity({
            opacity:'0',
            scale:'0'
        }, {
            duration:500,
            easing:'easeOutCirc',
            complete:function(){
                circle.css('backgroundColor','#00c7eb');
                circleInner.css('opacity','0');
                circleItem.css('opacity','0');
            }
        });
            sectionContactBackgroundColor.stop(1,0).css('zIndex','-4').velocity({
            opacity:['1','0']
        }, {
            duration:250,
            easing:'swing'
        });
    sectionHomeBackgroundColor.stop(1,0).css('zIndex','-8');
    sectionAboutBackgroundColor.stop(1,0).css('zIndex','-5');
    sectionResumeBackgroundColor.stop(1,0).css('zIndex','-5');
    sectionPortfolioBackgroundColor.stop(1,0).css('zIndex','-5');

        cubeOpacityRateToShow = cubeOpacityRateToHide;
            
        innerPagePanel.stop(1,0).velocity(
            menuLinkColor.p.contact,
            menuLinkColor.o
        );

        }

           break;
    }

        cubeAbout.css({
           transform:
            'translateZ(-' + cubeTranslateZ + 'px) ' +
            'rotateX(' + (cubeAboutRotateXRateFirst + section.height()) + 'deg) ' +
            'rotateY(-' + cubeAboutRotateYRateFirst + 'deg)'
        });

        cubeResume.css({
           transform:
            'translateZ(-' + cubeTranslateZ + 'px) ' +
            'rotateX(' + (cubeAboutRotateXRateFirst + (section.height() / 5)) + 'deg) ' +
            'rotateY(-' + (cubeAboutRotateYRateFirst + section.height()) + 'deg)'
        });

        cubePortfolio.css({
           transform:
            'translateZ(-' + cubeTranslateZ + 'px) ' +
            'rotateX(' + (cubeAboutRotateXRateFirst + (section.height() / 10)) + 'deg) ' +
            'rotateY(-' + (cubeAboutRotateYRateFirst + section.height()) + 'deg)'
        });

        cubeContact.css({
           transform:
            'translateZ(-' + cubeTranslateZ + 'px) ' +
            'rotateX(' + (cubeAboutRotateXRateFirst + (section.height() / 20)) + 'deg) ' +
            'rotateY(-' + (cubeAboutRotateYRateFirst + section.height()) + 'deg)'
        });
        
    }
    });
        
    function startRotation() {
        continentRotation = setInterval(function initial() {
            continentsContainer.velocity({
                translateX:[
                    '-' + continents.width() + 'px',
                    '0px'
                ]
            }, {
                duration:5000,
                easing:'linear'
            });
            return initial;

        }(), 5000);
    }

    startRotation();
        
    //Loading Animation
    /*loading.mousemove(function(event) {
        currentMousePos.x = event.pageX,
        currentMousePos.y = event.pageY,
        loadingTextTranslateXRate = loadingTextTranslateX - ((currentMousePos.x / 100) * 10),
        loadingTextTranslateYRate = loadingTextTranslateY - ((currentMousePos.y / 100) * 10),
        loadingTextTranslateZRate = '',
        loadingTextRotateXRate = loadingTextRotateX + (currentMousePos.y / 100),
        loadingTextRotateYRate = loadingTextRotateY + (currentMousePos.x / 100),
        loadingTextRotateZRate = '';

        loadingText.css({
           transform:
            'translateX(' + loadingTextTranslateX + 'px)' +
            'translateY(' + loadingTextTranslateY + 'px)' +
            'translateZ(' + loadingTextTranslateZ + 'px)' +
            'rotateX(' + loadingTextRotateXRate + 'deg)' +
            'rotateY(' + loadingTextRotateYRate + 'deg)' +
            'rotateZ(' + loadingTextRotateZ + 'deg)'
        });

    });*/
    
});
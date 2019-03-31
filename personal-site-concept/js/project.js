    var 
    root = $('html, body'),
    loading = $("#loading"),
    loadingText = $("#loading-text"),
        
    blemishCover = $('#blemish-cover'),
        
    //Loading Text Initial Transforms
    loadingTextTranslateX = ($(window).width() / 2) - (loadingText.width() / 2),
    loadingTextTranslateY = ($(window).height() / 2) - (loadingText.height() / 2),
    loadingTextTranslateZ = '-' + 50,
    loadingTextRotateX = 55,
    loadingTextRotateY = 15,
    loadingTextRotateZ = '-' + 26,
        
    //Loading Text Transform Move Rates
    loadingTextTranslateXRate = '',
    loadingTextTranslateYRate = '',
    loadingTextTranslateZRate = '',
    loadingTextRotateXRate = '',
    loadingTextRotateYRate = '',
    loadingTextRotateZRate = '',
        
    container = $('#container'),
        
    //Logo
    logoContainer = $('#logo-container'),
    sig = $('#sig'),
    sigSVGStroke = $('#sig svg path'),
    logoWritten = $('#logo-written'),
    logoComp = $('#logo-comp'),
    logoBackgroundMobile = $('#logo-bg-mobile'),
        
    //Navigation Menu
    sideMenu=$('#side-menu'),
    menuItems = $('#menu-items'),
    menuItem = $('.menu-item'),
    menuItemInner = $('.menu-item-inner'),
    menuItemShadow = $('.menu-item-shadow'),
    menuItemPanel = $('.menu-item-panel'),
    panelFront = $('.panel-front'),
    panelRight = $('.panel-right'),
        
    unclicked = true,
    homeclicked = true,
        
    //Tracker
    menuItemTrackerIndex = 0,
    menuItemTrackerContainer = $('#menu-item-tracker-container'),
    menuItemTracker = $('#menu-item-tracker'),
    menuItemTrackerDefaultColor = '#000000',
       
    //Page Colors
    primaryColorHome = '#2ad0ee',
    primaryColorAbout = '#ff2865',
    primaryColorResume = '#00ff96',
    primaryColorPortfolio = '#ffdf48',
    primaryColorContact = '#ff40fd',
       
    //Page Link Colors
    primaryColorHomeLink = '#b1afaf',
    primaryColorAboutLink = '#ff2865',
    primaryColorResumeLink = '#14c97f',
    primaryColorPortfolioLink = '#e8a919',
    primaryColorContactLink = '#ff40fd',
        
    currentMenuItem = '',
    homeItem = menuItem.eq(0),
    aboutItem = menuItem.eq(1),
    resumeItem = menuItem.eq(2),
    portfolioItem = menuItem.eq(3),
    contactItem = menuItem.eq(4),
        
    noHover = true,
    backgroundColorInProgress = false,
        
    contentContainer = $('#content-container'),
    content = $('#content'),
    contentBackgroundColor = $('.content-background-color'),
    contentBackgroundImage = $('#content-background-image'),
        
    //Sections
    section = $('section'),
    sectionContainer = $('#section-container'),
    sectionContainerHeight = section.length * section.height() + 'px',
    sectionContent = $('.section-content'),
    sectionMasthead = $('.section-masthead'),
    sectionBody = $('.section-body'),
        
    backgroundLayer = $('.bg-layer'),
        
    sectionHome = $('#home'),
    sectionAbout = $('#about'),
    sectionAboutMasthead = $('.about-masthead'),
    sectionAboutBody = $('.about-body'),
    sectionResume = $('#resume'),
    sectionResumeMasthead = $('.resume-masthead'),
    sectionResumeBody = $('.resume-body'),
    sectionPortfolio = $('#portfolio'),
    sectionPortfolioMasthead = $('.portfolio-masthead'),
    sectionPortfolioBody = $('.portfolio-body'),
    sectionContact = $('#contact'),
    sectionContactMasthead = $('.contact-masthead'),
    sectionContactBody = $('.contact-body'),
        
    sectionHomeVisible = true,
    sectionAboutVisible = false,
    sectionResumeVisible = false,
    sectionPortfolioVisible = false,
    sectionContactVisible = false,
        
    sectionMastheadDuration = 1500,
    sectionMastheadFirstDelay = 750,
    sectionMastheadDelay = 1250,
    sectionMastheadEase = 'spring',
    sectionMastheadImage = $('.masthead-img'),
        
    sectionBodyDuration = 1000,
    sectionBodyFirstDelay = 600,
    sectionBodyDelay = 1100,
    sectionBodyEase = 'easeOutCirc',
        
    sectionCubeDuration = 1000,
    sectionCubeFirstDelay = 1000,
    sectionCubeDelay = 1000,
    sectionCubeEase = 'easeOutQuart',
        
    //Section Background Colors
    sectionHomeBackgroundColor = $('.home-bg-color'),
    sectionAboutBackgroundColor = $('.about-bg-color'),
    sectionResumeBackgroundColor = $('.resume-bg-color'),
    sectionPortfolioBackgroundColor = $('.portfolio-bg-color'),
    sectionContactBackgroundColor = $('.contact-bg-color'),
        
    //Section Y Positions
    sectionHomeInitialPositionY = '0px',
    sectionAboutInitialPositionY = '-' + section.height() + 'px',
    sectionResumeInitialPositionY = '-' + (section.height() * 2) + 'px',
    sectionPortfolioInitialPositionY = '-' + (section.height() * 3) + 'px',
    sectionContactInitialPositionY = '-' + (section.height() * 4) + 'px',
        
    //Circle
    circle = $('.circle'),
    circleInner = $('.circle-inner'),
    circleInnerHome = $('.circle-inner-home'),
    circleInnerAbout = $('.circle-inner-about'),
    circleInnerResume = $('.circle-inner-resume'),
    circleInnerPortfolio = $('.circle-inner-portfolio'),
    circleInnerContact = $('.circle-inner-contact'),
        
    circleItem = $('.circle-item'),
        
    continentsContainer = $('#continents-container'),
    continents = $('.continents'),
        
    //Circle Inner Initial Gradients
    circleInnerInitialGradientX = 70,
    circleInnerInitialGradientY = 18,
        
    //Circle Inner Gradient Move Rates
    circleInnerInitialGradientXRate = '',
    circleInnerInitialGradientYRate = '',
        
    //Cube
    cubeContainer = $('#cube-container'),
    cubeInnerContainer = $('.container'),
        
    square = $('.square'),
    rectangleFrontBack = $('.rectangle-front-back'),
    rectangleTopBottom = $('.rectangle-top-bottom'),
    rectangleSides = $('.rectangle-sides'),
        
    frontSide = $('.front'),
    backSide = $('.back'),
    leftSide = $('.left'),
    rightSide = $('.right'),
    topSide = $('.top'),
    bottomSide = $('.bottom'),
    
    currentMousePos = { x: -1, y: -1 },
    scrollTop ='',
    sectionHomeOffset = '',
    homeDistance = '',
    sectionAboutOffset = '',
    aboutDistance = '',
    sectionResumeOffset = '',
    resumeDistance = '',
    sectionPortfolioOffset = '',
    portfolioDistance = '',
    sectionContactOffset = '',
    contactDistance = '',
    distance = '',
    dNow = new Date()
    ; /* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 


    loadingText.css({
       transform:
        'translateX(' + loadingTextTranslateX + 'px)' +
        'translateY(' + loadingTextTranslateY + 'px)' +
        'translateZ(' + loadingTextTranslateZ + 'px)' +
        'rotateX(' + loadingTextRotateXRate + 'deg)' +
        'rotateY(' + loadingTextRotateYRate + 'deg)' +
        'rotateZ(' + loadingTextRotateZ + 'deg)'
    });

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

    menuItems.css({
        top:($(window).height() / 2) - (menuItems.height() / 2)
    });

    menuItemTracker.css({
        height:menuItem.height() 
    });

    menuItemTrackerContainer.css({
       height:menuItem.height(),
       top:($(window).height() / 2) - (menuItems.height() / 2),
       left:sideMenu.width()
    });

    sectionContainer.css({
        height:sectionContainerHeight
    });

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
    
   $(window).resize(function initial() {
       
/*       sectionHome.css({
           backgroundColor:'transparent'
        });
        sectionAbout.css({
           backgroundColor:primaryColorAbout
        });
        sectionResume.css({
           backgroundColor:primaryColorResume
        });
        sectionPortfolio.css({
           backgroundColor:primaryColorPortfolio
        });
        sectionContact.css({
           backgroundColor:primaryColorContact
        });*/
       
       sectionContainerHeight = section.length * section.height() + 'px';
       
       $(document).scroll(function() {
        if ($(window).width() > 1080) {
        scrollTop = $(window).scrollTop(),
        homeDistance = sectionHome.offset().top,
        aboutDistance = sectionAbout.offset().top,
        resumeDistance = sectionResume.offset().top,
        portfolioDistance = sectionPortfolio.offset().top,
        contactDistance = sectionContact.offset().top;
    
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
            
            }
               
               break;
           case (scrollTop >= (aboutDistance - ($(window).height() / 2))) && (scrollTop < (resumeDistance - ($(window).height() / 2))):
            
            if (sectionAboutVisible === false) {  
            sectionHomeVisible = false,
            sectionAboutVisible = true,
            sectionResumeVisible = false,
            sectionPortfolioVisible = false,
            sectionContactVisible = false, 
            menuItemTrackerIndex = 1,
            homeclicked = false;
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
                                                     
            }
               
               break;
           case (scrollTop >= (resumeDistance - (sectionResume.height() / 2))) && (scrollTop < (portfolioDistance - ($(window).height() / 2))):
            
            if (sectionResumeVisible === false) {  
            sectionHomeVisible = false,
            sectionAboutVisible = false,
            sectionResumeVisible = true,
            sectionPortfolioVisible = false,
            sectionContactVisible = false, 
            menuItemTrackerIndex = 2,
            homeclicked = false;
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
            }
               
               break;
           case (scrollTop >= (portfolioDistance - (sectionPortfolio.height() / 2))) && (scrollTop < (contactDistance - ($(window).height() / 2))):
            
            if (sectionPortfolioVisible === false) {  
            sectionHomeVisible = false,
            sectionAboutVisible = false,
            sectionResumeVisible = false,
            sectionPortfolioVisible = true,
            sectionContactVisible = false, 
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
                
            }
                
               break;
           case (scrollTop >= (contactDistance - ($(window).height() / 2))) && (scrollTop < contactDistance):
            
            if (sectionContactVisible === false) {  
            sectionHomeVisible = false,
            sectionAboutVisible = false,
            sectionResumeVisible = false,
            sectionPortfolioVisible = false,
            sectionContactVisible = true, 
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
                
            }
               
               break;
       }
       }
       });

        sectionContainer.css({
            height:sectionContainerHeight
        });

        menuItemTracker.css({
          height:menuItem.height()
        });
       
       panelRight.eq(0).css({
           backgroundColor:primaryColorHome
       });
       
       panelRight.eq(1).css({
           backgroundColor:primaryColorAbout
       });
       
       panelRight.eq(2).css({
           backgroundColor:primaryColorResume
       });
       
       panelRight.eq(3).css({
           backgroundColor:primaryColorPortfolio
       });
       
       panelRight.eq(4).css({
           backgroundColor:primaryColorContact
       });

        menuItemTrackerContainer.css({
          height:menuItem.height(),
          top:($(window).height() / 2) - (menuItems.height() / 2),
          left:sideMenu.width()
        });
       
        sectionMasthead.css({
           height:((sideMenu.height() - menuItems.height()) / 2) + menuItem.height()
        });
       
        //DESKTOP
        if ($(window).width() > 1080) {
            
           sectionMastheadImage.css({
              width:sectionMasthead.width() + 'px',
              top:'-' + sectionMastheadImage.height() / 8 + 'px'
           });
       
           switch(true) {
               case menuItemTrackerIndex === 0:
                sectionHome.stop(1,0).velocity(
                    'scroll', {
                    duration:0
                });
                menuItemTrackerContainer.stop(1,0).velocity({
                   translateY:0
                }, {
                    duration:0
                });
                   break;
               case menuItemTrackerIndex === 1:
                sectionAbout.stop(1,0).velocity(
                    'scroll', {
                    duration:0
                });
                menuItemTrackerContainer.stop(1,0).velocity({
                   translateY:($(window).height() * 0.1) * 1
                }, {
                    duration:0
                });
                   break;
               case menuItemTrackerIndex === 2:
                sectionResume.stop(1,0).velocity(
                    'scroll', {
                    duration:0
                });
                menuItemTrackerContainer.stop(1,0).velocity({
                   translateY:($(window).height() * 0.1) * 2
                }, {
                    duration:0
                });
                   break;
               case menuItemTrackerIndex === 3:
                sectionPortfolio.stop(1,0).velocity(
                    'scroll', {
                    duration:0
                });
                menuItemTrackerContainer.stop(1,0).velocity({
                   translateY:($(window).height() * 0.1) * 3
                }, {
                    duration:0
                });
                   break;
               case menuItemTrackerIndex === 4:
                sectionContact.stop(1,0).velocity(
                    'scroll', {
                    duration:0
                });
                menuItemTrackerContainer.stop(1,0).velocity({
                   translateY:($(window).height() * 0.1) * 4
                }, {
                    duration:0
                });
                   break;
               default:
                   break;
           }
       
           sig.css({
              width:sideMenu.width() * 0.8,
              height:(sideMenu.height() - menuItems.height()) / 4,
              left:sideMenu.width() * 0.1,
              top:((sideMenu.height() - menuItems.height()) / 4) - ((sideMenu.height() - menuItems.height()) / 8)
           });
            
            blemishCover.css({
              height:(sideMenu.height() - menuItems.height()) / 2,
              left:(sideMenu.width() * 0.1) - (blemishCover.width() - 2)
            });
    
            $('#sig svg path').css({
                opacity:'1'
            });

            menuItems.css({
                top:($(window).height() / 2) - (menuItems.height() / 2)
            });
       
           circle.css({
              top:(section.height() / 2) - (circle.height() / 2), 
              right:((section.width() * 0.8) / 2) - (circle.width() / 2) 
           });
            
/*             continents.css({
               height:circle.height()
            });*/
            
            continentsContainer.css({
               width:continents.length * continents.width()
            });
       
            logoContainer.css({
               width:sideMenu.width(),
               height:(sideMenu.height() - menuItems.height()) / 2
            });

        }

        //MOBILE
        if ($(window).width() < 1080) {

            menuItems.css({
                top:($(window).height() / 2) - (menuItems.height() / 2)
            });
       
           circle.css({
              top:0 - (circle.height() / 2), 
              right:($(window).width() / 2) - (circle.width() / 2) 
           });
            
           section.eq(0).css({
              height:circle.height(),
              minHeight:'0px'
           });
            
            sectionHome.css({
                opacity:'0'
            });
       
            logoContainer.css({
               width:sideMenu.width(),
              height:circle.height()
            });
       
           sig.css({
              width:$(window).width(),
              height:circle.height(),
              left:'0',
              top:'0'
           });
       
           logoWritten.css({
              height:'auto',
              top:(circle.height() / 2) - (logoWritten.height() / 2)
           });

            loading.fadeOut(1000);

        }

        return initial;
   }());  
    
    container.velocity({
        opacity:['1','0']
    }, {
        duration:500
    });

    if ($(window).width() > 1080) {
    
    var contentRotation;
        
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
        blemishCover.velocity({
            opacity:['0','1']
        }, {
            duration:850,
            easing:'easeInExpo',
            queue:false,
            complete:function(){
                $(this).fadeOut(0);
            }
        });
    }

    if ($(window).width() < 1080) {
    $('#sig').lazylinepainter( 
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
            if($(window).width() < 1080) {
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
            if ($(window).width() > 1080){
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
                easing:'swing'
            });
    
            if ((window.location.hash === '') || (window.location.hash === '#') || (window.location.hash === '#/')) {
                
                menuItemTrackerIndex = 0;
                
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
            }
    
            if (window.location.hash === '#/about') {
                
                menuItemTrackerIndex = 1;
                
                sectionAboutMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['0deg','-90deg']
                }, {
                    duration:sectionMastheadDuration,
                    delay:sectionMastheadFirstDelay,
                    easing:sectionMastheadEase }).parent(sectionContent).parent(section).siblings(section).find(sectionMasthead).css('opacity','1');
                sectionAboutBody.stop(1,0).css('opacity','0').velocity({
                    opacity:['1','0'],
                    translateY:['0px','100px']
                }, {
                    duration:sectionBodyDuration,
                    delay:sectionBodyFirstDelay,
                    easing:sectionBodyEase }).parent(sectionContent).parent(section).siblings(section).find(sectionBody).css('opacity','1');
                cubeInnerContainer.stop(1,1).css('opacity','0').velocity({
                    opacity:['1', 'easeOutExpo', ,'0'],
                    rotateX:['0deg','60deg'],
                    rotateY:['0deg','-35deg']
                }, {
                    duration:sectionCubeDuration,
                    delay:sectionCubeFirstDelay,
                    easing:sectionCubeEase
                });
                rectangleFrontBack.stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
                rectangleTopBottom.stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
                
                rightSide.velocity({
                    rotateY:['90deg','90deg'],
                    translateX:[
                        ((rectangleFrontBack.width() - (rectangleSides.width() / 2)) + ($(window).height() * 0.75)) + 'px)',
                        (rectangleFrontBack.width() - (rectangleSides.width() / 2)) + 'px)'
                    ]
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
            
            if ($(window).width() > 1080){
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
                
                sectionResumeMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['0deg','-90deg']
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
                cubeInnerContainer.stop(1,1).css('opacity','0').velocity({
                    opacity:['1', 'easeOutExpo', ,'0'],
                    rotateX:['0deg','60deg'],
                    rotateY:['0deg','-35deg']
                }, {
                    duration:sectionCubeDuration,
                    delay:sectionCubeFirstDelay,
                    easing:sectionCubeEase
                });
                rectangleFrontBack.stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
                rectangleTopBottom.stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
            
            if ($(window).width() > 1080){
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
                
                sectionPortfolioMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['0deg','-90deg']
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
                cubeInnerContainer.stop(1,1).css('opacity','0').velocity({
                    opacity:['1', 'easeOutExpo', ,'0'],
                    rotateX:['0deg','60deg'],
                    rotateY:['0deg','-35deg']
                }, {
                    duration:sectionCubeDuration,
                    delay:sectionCubeFirstDelay,
                    easing:sectionCubeEase
                });
                rectangleFrontBack.stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
                rectangleTopBottom.stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
            
            if ($(window).width() > 1080){
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
                
                sectionContactMasthead.stop(1,0).css('opacity','0').velocity({
                opacity:['1', 'easeOutCirc', ,'0'],
                rotateX:['0deg','-90deg']
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
                cubeInnerContainer.stop(1,1).css('opacity','0').velocity({
                    opacity:['1', 'easeOutExpo', ,'0'],
                    rotateX:['0deg','60deg'],
                    rotateY:['0deg','-35deg']
                }, {
                    duration:sectionCubeDuration,
                    delay:sectionCubeFirstDelay,
                    easing:sectionCubeEase
                });
                rectangleFrontBack.stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
                rectangleTopBottom.stop(1,1).css('opacity','1').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250,
                    queue:false
                });
            
            if ($(window).width() > 1080){
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
        
        if (($(window).width() > 1080) && (unclicked)) {
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
        
        if (($(window).width() > 1080) && (unclicked)) {
            
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
        
        if ($(window).width() > 1080) {
            
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
                rotateX:['0deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });
            sectionAboutBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
                cubeInnerContainer.stop(1,1).css({opacity:'0',transform:'rotateX(60deg) rotateY(-35deg)'}).velocity({
                    opacity:['1', 'easeOutExpo', ,'0'],
                    rotateX:['0deg','60deg'],
                    rotateY:['0deg','-35deg']
                }, {
                    duration:sectionCubeDuration,
                    delay:sectionCubeDelay,
                    easing:sectionCubeEase
                });
                rectangleFrontBack.stop(1,1).css('width','40vh').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250
                });
                rectangleTopBottom.stop(1,1).css('width','40vh').velocity({
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
                rotateX:['0deg','45deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });
            sectionAboutBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
                cubeInnerContainer.stop(1,1).css({opacity:'0',transform:'rotateX(60deg) rotateY(-35deg)'}).velocity({
                    opacity:['1', 'easeOutExpo', ,'0'],
                    rotateX:['0deg','60deg'],
                    rotateY:['0deg','-35deg']
                }, {
                    duration:sectionCubeDuration,
                    delay:sectionCubeDelay,
                    easing:sectionCubeEase
                });
                rectangleFrontBack.stop(1,1).css('width','40vh').velocity({
                    width:['115vh','40vh']
                }, {
                    duration:1000,
                    easing:'easeInOutCirc',
                    delay:1250
                });
                rectangleTopBottom.stop(1,1).css('width','40vh').velocity({
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
                rotateX:['0deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });
            sectionResumeBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
                cubeInnerContainer.stop(1,1).css({opacity:'0',transform:'rotateX(60deg) rotateY(-35deg)'});
                rectangleFrontBack.stop(1,1).css('width','40vh');
                rectangleTopBottom.stop(1,1).css('width','40vh');
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
                rotateX:['0deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });
            sectionResumeBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
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
                rotateX:['0deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });
            sectionPortfolioBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
                cubeInnerContainer.stop(1,1).css({opacity:'0',transform:'rotateX(60deg) rotateY(-35deg)'});
                rectangleFrontBack.stop(1,1).css('width','40vh');
                rectangleTopBottom.stop(1,1).css('width','40vh');
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
                rotateX:['0deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });
            sectionPortfolioBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
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
                rotateX:['0deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });
            sectionContactBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
            });
                cubeInnerContainer.stop(1,1).css({opacity:'0',transform:'rotateX(60deg) rotateY(-35deg)'});
                rectangleFrontBack.stop(1,1).css('width','40vh');
                rectangleTopBottom.stop(1,1).css('width','40vh');
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
                rotateX:['0deg','-90deg']
            }, {
                duration:sectionMastheadDuration,
                delay:sectionMastheadDelay,
                easing:sectionMastheadEase
            });
            sectionContactBody.stop(1,0).css('opacity','0').velocity({
                opacity:['1','0'],
                translateY:['0px','100px']
            }, {
                duration:sectionBodyDuration,
                delay:sectionBodyDelay,
                easing:sectionBodyEase
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
    
});
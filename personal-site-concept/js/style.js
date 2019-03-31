$(window).resize(function initial() {
    
    aboutHeading3.css({
        color:primaryColorAboutLink
    });
    
    resumeHeading3.css({
        color:primaryColorResumeLink
    });
    
    portfolioHeading3.css({
        color:primaryColorPortfolioLink
    });
    
    contactHeading3.css({
        color:primaryColorContactLink
    });
    
    loadingText.css({
       transform:
        'translateX(' + loadingTextTranslateX + 'px)' +
        'translateY(' + loadingTextTranslateY + 'px)' +
        'translateZ(' + loadingTextTranslateZ + 'px)' +
        'rotateX(' + loadingTextRotateXRate + 'deg)' +
        'rotateY(' + loadingTextRotateYRate + 'deg)' +
        'rotateZ(' + loadingTextRotateZ + 'deg)'
    });

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

   sectionContainerHeight = section.length * section.height() + 'px';

    sectionContainer.css({
        height:sectionContainerHeight
    });

    menuItemTracker.css({
      height:menuItem.height()
    });
    
    homePagePanel.css({
        color:primaryColorHomeLinkBlack
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

    sideMenuPush.css({
       minHeight:$(window).height() - sectionMasthead.height()
    });
    
    //DESKTOP
    if ($(window).width() >= 1024) {
        skillSetColumn.css({
           minHeight:
            (skillSetColumn.siblings(rowColumn).find(rowColumnText).outerHeight()) -
            (skillSetColumn.siblings(rowColumn).find(rowColumnText).outerHeight() - skillSetColumn.siblings(rowColumn).find(rowColumnText).innerHeight())
        });
    } else {
        skillSetColumn.css({
           minHeight: '0px'
        });
    }

    //DESKTOP AND TABLET
    if ($(window).width() >= 769) {

    sectionHome.css({
      height:$(window).height()
    });

    sectionHome.css({
        display:'block'
    });

   sig.css({
      width:$(window).width(),
      height:circle.height(),
      left:'0',
      top:'0',
      display:'block'
   });
    
    emphasisBlock.each(function() {
        var p = $(this).parent();
        $(this).height(p.height() - ($(this).offset().top - p.offset().top));
    });

       sectionMastheadImage.css({
          width:sectionMasthead.width() + 'px',
          top:'-' + sectionMastheadImage.height() / 8 + 'px'
       });

    sectionMastheadBlurred.css({
       width:sideMenu.width()
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
        
        sectionTitle.css({
        });

        cubeContainer.css({
           opacity:'1'
        });

       frontSide.css({
           transform:
           'rotateY(0deg) ' +
           'translateZ(' + leftSide.width() / 2 + 'px)'
       });

       backSide.css({
           transform:
           'rotateX(180deg) ' +
           'translateZ(' + leftSide.width() / 2 + 'px) ' +
           'rotateZ(180deg)'
       });

       leftSide.css({
           transform:
           'rotateY(-90deg) ' +
           'translateZ(' + rectangleSides.width() / 2 + 'px)'
       });

       rightSide.css({
           transform:
           'rotateY(90deg) ' +
           'translateZ(' + (rectangleFrontBack.width() - (rectangleSides.width() / 2)) + 'px)'
       });

       rectangleTopBottom.css({
           width:frontSide.width(),
           height:leftSide.width()
       });

       topSide.css({
           transform:
           'rotateX(90deg) ' +
           'translateZ(' + leftSide.width() / 2 + 'px)'
       });

       bottomSide.css({
           transform:
           'rotateX(-90deg) ' +
           'translateZ(' + (frontSide.height() - (leftSide.width() / 2)) + 'px)'
       });

    }

    //MOBILE
    if ($(window).width() < 769) {

        menuItems.css({
            top:($(window).height() / 2) - (menuItems.height() / 2)
        });

       circle.css({
          top:0 - (circle.height() / 2), 
          right:($(window).width() / 2) - (circle.width() / 2) 
       });

        logoContainer.css({
           width:sideMenu.width(),
          height:circle.height()
        });
        
        section.css({
            minHeight:'0px'
        });

        sectionHome.css({
          height:circle.height()
        });

       logoWritten.stop(1,0).css({
          height:circle.height() / 2,
          lineHeight:circle.height() / 2 + 'px',
          top:circle.height() / 4,
          opacity:'1'
       });

       sig.css({
          width:$(window).width(),
          height:circle.height(),
          left:'0',
          top:'0',
          display:'none'
       });

        loading.fadeOut(1000);

    }

    return initial;
}());  
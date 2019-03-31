$(window).on('load',function(e) {
    var x = -e.pageX / 60;
    var y = -e.pageY / 60;
    $('#left-blurred-bg').css('background-position', x + 'px center');
    $('#left-bg').css('background-position', x + 'px center');
    $('#right-blurred-bg').css('background-position', x + 'px center');
    $('#right-bg').css('background-position', x + 'px center');

var
container = $('#container');
    
    container.show(0,function() {
        var
        screenWidth = $(window).width(),
        screenHalfWidth = screenWidth / 2,
        screenHeight = $(window).height(),
        screenHalfHeight = screenHeight / 2,
        circleBlack = $('#circle'),
        circleWhite = $('#circle-alt'),
        windowWidth = $(window).width(),
        windowWidthHalf = windowWidth / 2,
        windowHeight = $(window).height(),
        windowHeightHalf = windowHeight / 2,
        circleTop = windowHeightHalf - 150,
        circleLeft = windowWidthHalf - 150,
        brainOverlay = $('#brain-overlay'),
        brainBlack = $('#brain.black'),
        brainWhite = $('#brain.white'),
        left = $('#left'),
        leftBlurredBG = $('#left-blurred-bg'),
        leftBG = $('#left-bg'),
        middleVerticalBreakTop = $('#middle-vertical-break-top'),
        middleVerticalBreakBottom = $('#middle-vertical-break-bottom'),
        middleVerticalBreakTopWhite = $('#middle-vertical-break-top-white'),
        middleVerticalBreakBottomWhite = $('#middle-vertical-break-bottom-white'),
        right = $('#right'),
        rightBlurredBG = $('#right-blurred-bg'),
        rightBG = $('#right-bg'),
        newLocationX = 'undefined',
        newLocationY = 'undefined',
        clicked = false;
        
        $( window ).resize(function() {
        var
        screenWidth = $(window).width(),
        screenHalfWidth = screenWidth / 2,
        screenHeight = $(window).height(),
        screenHalfHeight = screenHeight / 2,
        circleBlack = $('#circle'),
        circleWhite = $('#circle-alt'),
        windowWidth = $(window).width(),
        windowWidthHalf = windowWidth / 2,
        windowHeight = $(window).height(),
        windowHeightHalf = windowHeight / 2,
        circleTop = windowHeightHalf - 150,
        circleLeft = windowWidthHalf - 150,
        brainOverlay = $('#brain-overlay'),
        brainBlack = $('#brain.black'),
        brainWhite = $('#brain.white'),
        left = $('#left'),
        leftBlurredBG = $('#left-blurred-bg'),
        leftBG = $('#left-bg'),
        middleVerticalBreakTop = $('#middle-vertical-break-top'),
        middleVerticalBreakBottom = $('#middle-vertical-break-bottom'),
        middleVerticalBreakTopWhite = $('#middle-vertical-break-top-white'),
        middleVerticalBreakBottomWhite = $('#middle-vertical-break-bottom-white'),
        right = $('#right'),
        rightBlurredBG = $('#right-blurred-bg'),
        rightBG = $('#right-bg'),
        newLocationX = 'undefined',
        newLocationY = 'undefined',
        clicked = false;
            
        circleBlack.css({'top':circleTop,'left':circleLeft});
        circleWhite.css({'top':circleTop,'left':circleLeft});
        middleVerticalBreakTop.css({'width':'1px','height':windowHeightHalf,'top':'0','left':windowWidthHalf});
        middleVerticalBreakBottom.css({'width':'1px','height':windowHeightHalf,'bottom':'0','left':windowWidthHalf});
        });
        function leftBackgroundParallax() {
			
		
    container.mousemove(function(e){
    var x = -e.pageX / 60,
        y = -e.pageY / 60,
        backgroundPosition = 'background-position',
        backgroundPositionValue = x + 'px center';
    leftBlurredBG.css(backgroundPosition, backgroundPositionValue);
    leftBG.css(backgroundPosition, backgroundPositionValue);
    rightBlurredBG.css(backgroundPosition, backgroundPositionValue);
    rightBG.css(backgroundPosition, backgroundPositionValue);
          
  });

			
		};
        
        function brainCursor() {
			
		
	container.mousemove(function(e){
    var x = e.pageX;
    var y = e.pageY;
    circleBlack.css({'top':y - 150,'left':x - 150});
    circleWhite.css({'top':y - 150,'left':x - 150});
    newLocationX = x - 150;
    newLocationY = y - 150;
          
  });

			
		};
        
        leftBackgroundParallax();
        
        circleBlack.fadeIn(0).css({'top':'50vh','opacity':'0'}).animate({
            top:circleTop + "px",
            opacity:'1'
        },500,'easeOutCirc',function() {
            middleVerticalBreakTop.css({'opacity':'1','height':'0'}).animate({height:circleTop},750,'easeInOutCirc');
            middleVerticalBreakBottom.css({'opacity':'1','height':'0'}).animate({height:circleTop},750,'easeInOutCirc');
            middleVerticalBreakTopWhite.css({'opacity':'0','height':'0'}).animate({height:circleTop},750,'easeInOutCirc');
            middleVerticalBreakBottomWhite.css({'opacity':'0','height':'0'}).animate({height:circleTop},750,'easeInOutCirc');
        });
            left.fadeIn(0).css({'top':'500px','opacity':'0'}).animate({
                top:'0',
                opacity:'1'
            },1500,'easeInOutQuart',function() {
                brainOverlay.css('cursor','pointer').mouseover(function() {
                    
                    if (!clicked) {
                    circleBlack.stop(1,0).animate({
                        opacity:'0'
                    },250,'swing');
                    circleWhite.stop(1,0).animate({
                        opacity:'1'
                    },250,'swing');
                leftBG.stop(1,0).animate({opacity:'1'},250,'linear');
                rightBG.stop(1,0).animate({opacity:'1'},250,'linear');
				middleVerticalBreakTopWhite.stop(1,0).animate({opacity:'1'},250,'linear');
				middleVerticalBreakBottomWhite.stop(1,0).animate({opacity:'1'},250,'linear');
                    }
                    
                });
                
                brainOverlay.css('cursor','pointer').mouseout(function() {
                    if (!clicked) {
                    circleBlack.stop(1,0).animate({
                        opacity:'1'
                    },250,'swing');
                    circleWhite.stop(1,0).animate({
                        opacity:'0'
                    },250,'swing');
                leftBG.stop(1,0).animate({opacity:'0'},250,'linear');
                rightBG.stop(1,0).animate({opacity:'0'},250,'linear');
				middleVerticalBreakTopWhite.stop(1,0).animate({opacity:'0'},250,'linear');
				middleVerticalBreakBottomWhite.stop(1,0).animate({opacity:'0'},250,'linear');
                }
                                                              
                });
                
                brainOverlay.mousedown(function() {
                    clicked = true;
            middleVerticalBreakTop.stop(1,0).animate({height:'0',bottom:'100%'},1000,'easeInOutCirc');
            middleVerticalBreakBottom.stop(1,0).animate({height:'0',top:'100%'},1000,'easeInOutCirc');
                    $('*').css('cursor','none');
                    left.css('backgroundColor','black');
                    right.css('backgroundColor','black');
                    leftBG.stop(1,0).fadeIn(250,'linear',function(){leftBlurredBG.fadeOut(0);}).animate({opacity:'0.5'},750,'easeOutCirc');
                    rightBG.stop(1,0).fadeIn(250,'linear',function(){rightBlurredBG.fadeOut(0);}).animate({opacity:'0.5'},750,'easeOutCirc');
				middleVerticalBreakTop.stop(1,0).css('opacity','0').animate({height:'0'},1000,'easeOutCirc');
				middleVerticalBreakBottom.stop(1,0).css('opacity','0').animate({height:'0'},1000,'easeOutCirc');
				middleVerticalBreakTopWhite.stop(1,0).animate({height:'0',opacity:'0'},1000,'easeOutCirc');
				middleVerticalBreakBottomWhite.stop(1,0).animate({height:'0',opacity:'0'},1000,'easeOutCirc');
                    brainCursor();
                });
                
                brainOverlay.mouseup(function() {
                $(document).off("mousemove", brainCursor());
                });
            });
            right.fadeIn(0).css({'top':'-500px','opacity':'0'}).animate({
                top:'0',
                opacity:'1'
            },1500,'easeInOutQuart',function(){});
        circleWhite.fadeIn(0).css({'top':'50vh','opacity':'0'}).animate({
            top:circleTop + "px",
            opacity:'1'
        },500,'easeOutCirc',function() {});
    });
});
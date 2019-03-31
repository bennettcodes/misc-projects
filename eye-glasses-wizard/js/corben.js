window.onload = function() {
    
    var delay = 0,
        closeActive = undefined,
        optionActive = undefined,
        brandActive = undefined,
        mastheadButtonActive = true,
        selections = [];
    
$('#loading-container').fadeOut(500);

$('#nav').delay(1000).animate({
	opacity:'1'
},500,'swing');

$(window).scroll(function(e){
  parallax();
});
    
	positionInfo = $('.position-info');
    scrolled = $(window).scrollTop(),
            windowHeight = $(window).height(),
    photoScrolled = $(window).scrollTop() - 1075,
    scrollTrackerHeight = $('.scroll-tracker').height(),
    originX = scrollTrackerHeight / 2,
    originXCurrentLocation = scrolled + originX,
    fullOpacityEndLocation = scrolled - originX,
    fullOpacityOriginX = fullOpacityEndLocation + originX,
    positionInfoHeight = positionInfo.height(),
    positionInfoHeightHalf = positionInfoHeight / 2,
    positionInfoCenteredY = originX - positionInfoHeightHalf,
    scrollDestinationOne = $('.scroll-destination').eq(0).find('p');

    positionInfo.html(
    'scrolled: '+scrolled+
    '<br>photoScrolled: '+photoScrolled+
    '<br>scrollTrackerHeight: '+scrollTrackerHeight+
    '<br>originX: '+originX+
    '<br>originXCurrentLocation: '+originXCurrentLocation+
    '<br>fullOpacityEndLocation: '+fullOpacityEndLocation+
    '<br>fullOpacityOriginX: '+fullOpacityOriginX+
    '<br>positionInfoHeight: '+positionInfoHeight+
    '<br>positionInfoCenteredY: '+positionInfoCenteredY+
    '<br>windowHeight: '+windowHeight
    );

	if ($(window).width() < 1024) {
	positionInfo.css('bottom','0');
} else {
	positionInfo.css('top',/* originX - positionInfoHeightHalf */'right');
};
	

function parallax(){

/*if (($('.scroll-destination-inner').eq(4).css('opacity') !== 0) && ($('.scroll-destination-inner').eq(4).hasClass('run-once'))) {
    for (i=0; i <= $('.scroll-destination-inner').eq(4).find('.glasses-tile').length - 1; i++) {
        var current = $('.scroll-destination-inner').eq(4).find('.glasses-tile').eq(i);
        
        current.css({'opacity':'0','marginLeft':'25px'}).delay(delay).animate({
            opacity:'1',
            marginLeft:'2px'
        },500,'easeOutExpo',function(){});
        delay+=250;
};
    $('scroll-destination-inner').eq(4).removeClass('run-once');
}*/
    positionInfo = $('.position-info');
	
    positionInfo.html(
    'scrolled: '+scrolled+
    '<br>photoScrolled: '+photoScrolled+
    '<br>scrollTrackerHeight: '+scrollTrackerHeight+
    '<br>originX: '+originX+
    '<br>originXCurrentLocation: '+originXCurrentLocation+
    '<br>fullOpacityEndLocation: '+fullOpacityEndLocation+
    '<br>fullOpacityOriginX: '+fullOpacityOriginX+
    '<br>positionInfoHeight: '+positionInfoHeight+
    '<br>positionInfoCenteredY: '+positionInfoCenteredY+
    '<br>windowHeight: '+windowHeight
    );
	
            scrolled = $(window).scrollTop(),
            photoScrolled = $(window).scrollTop() - 1075,
            windowHeight = $(window).height(),
            scrollTrackerHeight = $('.scroll-tracker').height(),
            scrollTrackerHeightDividedBy4 = scrollTrackerHeight / 4,
            scrollTrackerHeightHalf = scrollTrackerHeight / 2,
            scrollTrackerHeightMinusAQuarter = scrollTrackerHeight * 0.75,
            originX = scrollTrackerHeight / 2,
            originXCurrentLocation = scrolled + originX,
            fullOpacityEndLocation = scrolled - originX,
            fullOpacityOriginX = fullOpacityEndLocation + originX,
            positionInfoHeight = positionInfo.height(),
            positionInfoHeightHalf = positionInfoHeight / 2,
            positionInfoCenteredY = originX - positionInfoHeightHalf,
			glassesMobile = $('.main-photo-bg-mobile > img'),
			glassesMobileTop = glassesMobile.css('top'),
            scrollDestination = $('.scroll-destination'),
            scrollDestinationInner = $('.scroll-destination-inner'),
            scrollDestinationTileRowOne = $('.scroll-destination-tile-row-1'),
            scrollDestinationTileRowTwo = $('.scroll-destination-tile-row-2'),
            scrollDestinationTileRowThree = $('.scroll-destination-tile-row-3'),
            scrollDestinationTileRowFour = $('.scroll-destination-tile-row-4'),
            scrollDestinationInnerOne = $('.scroll-destination-inner').eq(0),
            scrollDestinationInnerPosition = $('.scroll-destination-inner').offset(),
            scrollDestinationInnerPositionY = scrollDestinationInnerPosition.top,
            destinationStart = scrollDestinationInnerPositionY - scrollTrackerHeightMinusAQuarter,
            destinationFinish = scrollDestinationInnerPositionY + scrollTrackerHeightMinusAQuarter;
   
    if (scrolled > 0) {

	if ($(window).width() < 1024) {
	positionInfo.css('bottom','0');
} else {
	positionInfo.css('top',/* originX - positionInfoHeightHalf */'right');
};
    
for (i=0; i <= scrollDestinationInner.length - 1; i++) {
        var current = scrollDestinationInner.eq(i),
            currentOffset = current.offset(),
            currentOffsetTop = currentOffset.top,
            start = currentOffsetTop - scrollTrackerHeightMinusAQuarter;
    
        if (scrolled > start) {
            current.animate({opacity:1},500,'swing',function(){});
        };
};
    
var delayRowOne = 0;
for (i=0; i <= scrollDestinationTileRowOne.length - 1; i++) {
        var current = scrollDestinationTileRowOne.eq(i),
            currentOffset = current.offset(),
            currentOffsetTop = currentOffset.top,
            start = currentOffsetTop - scrollTrackerHeightMinusAQuarter;
    
        if (scrolled > start) {
            current.delay(delayRowOne).animate({opacity:1,marginLeft:'2px'},500,'easeOutCirc',function(){});
            delayRowOne += 100;
        };
};
    
var delayRowTwo = 0;
for (i=0; i <= scrollDestinationTileRowTwo.length - 1; i++) {
        var current = scrollDestinationTileRowTwo.eq(i),
            currentOffset = current.offset(),
            currentOffsetTop = currentOffset.top,
            start = currentOffsetTop - scrollTrackerHeightMinusAQuarter;
    
        if (scrolled > start) {
            current.delay(delayRowTwo).animate({opacity:1,marginLeft:'2px'},500,'easeOutCirc',function(){});
            delayRowTwo += 100;
        };
};
    
var delayRowThree = 0;
for (i=0; i <= scrollDestinationTileRowThree.length - 1; i++) {
        var current = scrollDestinationTileRowThree.eq(i),
            currentOffset = current.offset(),
            currentOffsetTop = currentOffset.top,
            start = currentOffsetTop - scrollTrackerHeightMinusAQuarter;
    
        if (scrolled > start) {
            current.delay(delayRowThree).animate({opacity:1,marginLeft:'2px'},500,'easeOutCirc',function(){});
            delayRowThree += 100;
        };
};
    
var delayRowFour = 0;
for (i=0; i <= scrollDestinationTileRowFour.length - 1; i++) {
        var current = scrollDestinationTileRowFour.eq(i),
            currentOffset = current.offset(),
            currentOffsetTop = currentOffset.top,
            start = currentOffsetTop - scrollTrackerHeightMinusAQuarter;
    
        if (scrolled > start) {
            current.delay(delayRowFour).animate({opacity:1,marginLeft:'2px'},500,'easeOutCirc',function(){});
            delayRowFour += 100;
        };
};

        
    $('#masthead-content').find('.masthead-bg').css('top',(scrolled*0.5)+'px');

    $('#masthead-content')
        .find('.masthead-bg-shadow')
        .css('boxShadow','inset 0 '+(-50-(scrolled*0.5))+'px '+'175px rgba(0,0,0,0.5)');

    $('.main-photo')
        .find('.main-photo-bg')
        .css('top',(photoScrolled*0.2)+'px');
		
    glassesMobile
    .css('bottom',(scrolled*0.2-400)+'px');
		
    glassesMobile = $('.main-photo-bg-mobile > img');
	} else {
        
            scrolled = $(window).scrollTop(),
            photoScrolled = $(window).scrollTop() - 1075,
            scrollTrackerHeight = $('.scroll-tracker').height(),
            originX = scrollTrackerHeight / 2,
            windowHeight = $(window).height(),
            originXCurrentLocation = scrolled + originX,
            fullOpacityEndLocation = scrolled - originX,
            fullOpacityOriginX = fullOpacityEndLocation + originX,
            positionInfoHeight = positionInfo.height(),
            positionInfoHeightHalf = positionInfoHeight / 2,
            positionInfoCenteredY = originX - positionInfoHeightHalf,
			glassesMobile = $('.main-photo-bg-mobile > img'),
			glassesMobileTop = glassesMobile.css('top'),
            scrollDestinationOne = $('.scroll-destination').eq(0).find('p');
        
    $('.masthead-bg').css('top','0');

    $('#masthead-content')
        .find('.masthead-bg-shadow')
        .css('boxShadow','inset 0 -50px 175px rgba(0,0,0,0.5)');
	
    positionInfo.html(
    'scrolled: '+scrolled+
    '<br>photoScrolled: '+photoScrolled+
    '<br>scrollTrackerHeight: '+scrollTrackerHeight+
    '<br>originX: '+originX+
    '<br>originXCurrentLocation: '+originXCurrentLocation+
    '<br>fullOpacityEndLocation: '+fullOpacityEndLocation+
    '<br>fullOpacityOriginX: '+fullOpacityOriginX+
    '<br>positionInfoHeight: '+positionInfoHeight+
    '<br>positionInfoCenteredY: '+positionInfoCenteredY+
    '<br>windowHeight: '+windowHeight
    );

	if ($(window).width() < 1024) {
	positionInfo.css('bottom','0');
} else {
	positionInfo.css('top',/* originX - positionInfoHeightHalf */'right');
};
        
    }
}
$('#masthead-text').css({'right':'0','opacity':'0'}).delay(250).animate({opacity:'1',right:'76px'},1000,'easeOutExpo',function(){});
$('#masthead-button').css({'right':'0','opacity':'0'}).delay(500).animate({opacity:'1',right:'76px'},1000,'easeOutExpo',function(){});

if ($(window).height() > 866) {
$('.main-heading-text').eq(0).delay(1250).css({'right':'-100px','opacity':'0'}).animate({opacity:'1',right:'18px'},1000,'easeOutExpo',function(){});
$('.main-description').eq(0).delay(1000).css({'bottom':'-25px','opacity':'0'}).animate({opacity:'1',bottom:'0'},1000,'easeOutExpo',function(){});
} else {
$('.main-heading-text').eq(0).addClass('scroll-destination-inner');
$('.main-description').eq(0).addClass('scroll-destination-inner');
}

if ($(window).height() > 1140) {
$('.main-description2').eq(0).delay(1250).css({'top':'-25px','opacity':'0'}).fadeIn(0).animate({opacity:'1',top:'0'},1000,'easeOutExpo',function(){});
} else {
$('.main-description2').eq(0).addClass('scroll-destination-inner');
}

$('.glasses-tile').hover(function() {
	$(this).find('.glasses-tile-bg2').stop(1,1).fadeIn(1000,'easeOutExpo');
    $(this).find('img').stop(1,1).animate({
        width:'125%',
        left:'-12%'
    },1000,'easeOutExpo',function(){});
}, function() {
	$(this).find('.glasses-tile-bg2').stop(1,1).fadeOut(1000,'easeOutExpo');
    $(this).find('img').stop(1,1).animate({
        width:'90%',
        left:'5%'
    },1000,'easeOutExpo',function(){});
});

//for (i = 0; i < $('.glasses-tile').length; i++) {
//
//    if (i % 2 === 0) {
//        $('.glasses-tile-row').find('.glasses-tile').eq(i).css(
//        'backgroundColor','rgba(255,255,255,0.7)'
//        )
//    } else {
//        $('.glasses-tile-row').find('.glasses-tile').eq(i).css(
//        'backgroundColor','rgba(255,255,255,0.9)'
//        )
//    }
//
//    if (i % 2 === 0) {
//        $('.glasses-tile-row2').find('.glasses-tile').eq(i).css(
//        'backgroundColor','rgba(255,255,255,0.9)'
//        )
//    } else {
//        $('.glasses-tile-row2').find('.glasses-tile').eq(i).css(
//        'backgroundColor','rgba(255,255,255,0.7)'
//        )
//    }
//
//    if (i % 2 === 0) {
//        $('.glasses-tile-row3').find('.glasses-tile').eq(i).css(
//        'backgroundColor','rgba(255,255,255,0.7)'
//        )
//    } else {
//        $('.glasses-tile-row3').find('.glasses-tile').eq(i).css(
//        'backgroundColor','rgba(255,255,255,0.9)'
//        )
//    }
//
//    if (i % 2 === 0) {
//        $('.glasses-tile-row4').find('.glasses-tile').eq(i).css(
//        'backgroundColor','rgba(255,255,255,0.9)'
//        )
//    } else {
//        $('.glasses-tile-row4').find('.glasses-tile').eq(i).css(
//        'backgroundColor','rgba(255,255,255,0.7)'
//        )
//    }
//    
//
//}
    
    
//**********START PERFECT PAIR**********//
    
    
    $('#masthead-button').hover(function() { "use strict";
    if (mastheadButtonActive) {
    $(this).find('#masthead-button-bg').stop(1,0).animate({
        opacity:'0'
    },500,'easeOutCirc',function(){});
    $(this).find('#masthead-button-text').stop(1,0).animate({
		paddingRight:'28px',
		width:'234px'
    },500,'easeOutCirc',function(){});
    }
}, function() { "use strict";
    if (mastheadButtonActive) {
    $(this).find('#masthead-button-bg').stop(1,0).animate({
        opacity:'1',
    },500,'easeOutCirc',function(){});
    $(this).find('#masthead-button-text').stop(1,0).animate({
		paddingRight:'14px',
		width:'248px'
    },500,'easeOutCirc',function(){});
    }
});

/* $('#masthead-button').mousedown(function() { "use strict";
    if (mastheadButtonActive) {
    $(this).find('#masthead-button-bg').stop(1,0).animate({
        opacity:'0',
    },500,'easeOutCirc',function(){});
    $(this).find('#masthead-button-text').stop(1,0).animate({
		paddingRight:'14px',
		width:'248px',
        opacity:'0'
    },500,'easeOutCirc',function(){});
    $('#masthead-button-bg2').stop(1,1).animate({
        backgroundColor:'#ffffff'
    },500,'easeOutCirc',function(){});
    }
}); */

$('#masthead-button').mouseup(function() { "use strict";
                                          
    mastheadButtonActive = false;
    closeActive = true;
    optionActive = true;
    brandActive = true;
    $('#perfect-pair-content').fadeIn(0);
    $(this).stop(1,1).fadeOut(500,'easeOutCirc');
    $('#masthead-text').stop(1,1).fadeOut(500,'easeOutCirc');
    $('.black-fadeover').stop(1,1).animate({
        left:'0'
    },1000,'swing',function() {});
	$.ajax({
	type: 'GET',
	url:'perfect-pair.html',
	success:function(perfect) {
		$('#perfect-pair-content').stop(1,1).html(perfect, function(){});
	},
	cache: false,
	complete: function(){
    window.location.hash='perfect-pair';
    var progressChecker = $('#progress-checker');
    $('.gender-section').fadeIn(0);
    $('.perfect-pair-close').stop(1,1).html('x').fadeIn(1000,'swing',function(){
    $('#masthead-button-bg').css('opacity','1');
    $('#masthead-button-text').css({
		'paddingRight':'14px',
		'width':'248px',
        opacity:'1'
    });
    });
        
    var genderSection = $('.gender-section'),
        perfectPairHeading = $('.perfect-pair-heading'),
        sectionHeading = $('.section-heading'),
        progressContainer = $('.progress-container'),
        progressInner = $('.progress-inner'),
        perfectPairOption1 = $('#perfect-pair-option1'),
        perfectPairOption2 = $('#perfect-pair-option2'),
        perfectPairOption3 = $('#perfect-pair-option3');
        


        
//**********START PERFECT PAIR PROGRESS**********//
        
    progressContainer.stop(1,1).fadeIn(0).css('opacity','0').delay(250).animate({
        opacity:'1'
    },500,'swing',function(){
        
        
    progressInner.stop(1,1).css('width','0').animate({
        width:'100px'
    },500,'easeOutCirc',function(){
    });
    });
        
    function progressContainerForward(callback) {
    $('.progress-inner').delay(500).animate({
        left:'+=100px'
    },500,'easeOutCirc');
    $('.progress-fill').delay(500).animate({
        marginLeft:'-=100px'
    },500,'easeOutCirc', callback);
    };
        
    function progressContainerBackward(callback) {
    $('.progress-inner').delay(500).animate({
        left:'-=100px'
    },500,'easeOutCirc');
    $('.progress-fill').delay(500).animate({
        marginLeft:'+=100px'
    },500,'easeOutCirc', callback);
    };
        
//**********END PERFECT PAIR PROGRESS**********//      
        
     
    perfectPairHeading.stop(1,1).fadeIn(0).css({'opacity':'0','left':'-100px'}).animate({
        opacity:'1',
        left:'0'
    },1000,'easeOutCirc');
    
    sectionHeading.stop(1,1).fadeIn(0).css({'opacity':'0','left':'-100px'}).delay(750).animate({
        opacity:'1',
        left:'0'
    },1000,'easeOutCirc');
    
    perfectPairOption1.stop(1,1).css('opacity','0').delay(750).animate({
        opacity:'1'
    },500,'swing')
    
    perfectPairOption2.stop(1,1).css('opacity','0').delay(850).animate({
        opacity:'1'
    },500,'swing');
    
    perfectPairOption3.stop(1,1).css('opacity','0').delay(950).animate({
        opacity:'1'
    },500,'swing',function(){
        
        
        //**********START PERFECT PAIR OPTION**********//
    
$('.pp-option').hover(function() {
    if (optionActive) {
   $(this).stop(1,1).animate({
       backgroundColor:'rgba(43,193,246,1)'
   },250,'linear'); 
    }
},function() {
    if (optionActive) {
   $(this).stop(1,1).animate({
       backgroundColor:'transparent'
   },250,'linear'); 
    }
});
    
/*$('.pp-option').mousedown(function() {
    if (optionActive) {
   $(this).stop(1,0).animate({
       backgroundColor:'rgba(255,255,255,0.6)'
   },500,'swing',function(){}); 
    }
});*/

$('.pp-option').mouseup(function() {
        var current = $(this);
            switch(true) {
    case (current.is($('.pp-option').eq(0))):
        selections.push("Men's Brands");
        break;
    case (current.is($('.pp-option').eq(1))):
        selections.push("Women's Brands");
        break;
    case (current.is($('.pp-option').eq(2))):
        selections.push("Children's Brands");
        break;
    default:
        console.log('Hmm. Nothing.');
        break;
}
            console.log(selections);
    if (optionActive) {
    progressContainerForward();
    optionActive = false;
    if ($(this).hasClass('man')) {
        progressChecker.addClass('man');
    } else if ($(this).hasClass('woman')) {
        progressChecker.addClass('woman');
    } else if ($(this).hasClass('child')) {
        progressChecker.addClass('child');
    }
    $(this).stop(1,1).css('backgroundColor','rgba(43,193,246,1)').delay(250).fadeOut(750,function(){
        
        if (progressChecker.hasClass('man')) {
            
    $('.brands-man-section').fadeIn(0);
    
    sectionHeading.eq(1).stop(1,1).fadeIn(0).css({'opacity':'0','left':'-100px'}).animate({
        opacity:'1',
        left:'0'
    },1000,'easeOutCirc',function(){});
            
        }
        
        if (progressChecker.hasClass('woman')) {
            
    $('.brands-woman-section').fadeIn(0);
    
    sectionHeading.eq(2).stop(1,1).fadeIn(0).css({'opacity':'0','left':'-100px'}).animate({
        opacity:'1',
        left:'0'
    },1000,'easeOutCirc');
        }
        
        if (progressChecker.hasClass('child')) {
            
    $('.brands-child-section').fadeIn(0);
    
    sectionHeading.eq(3).stop(1,1).fadeIn(0).css({'opacity':'0','left':'-100px'}).animate({
        opacity:'1',
        left:'0'
    },1000,'easeOutCirc');
        }
    });
    $(this).siblings('.pp-option').stop(1,1).animate({opacity:'0'},500,'swing',function(){$(this).fadeOut(500)});
    sectionHeading.eq(0).stop(1,1).fadeOut(500,function(){}).delay(500,function(){
        
        
    
//**********START PERFECT PAIR BRAND**********//
    
    var brandOrb = $('.orb'),
        brandOrbWidth = brandOrb.width(),
        brandOrbWidthHalf = brandOrbWidth / 2,
        brandOrbHeight = brandOrb.height(),
        brandOrbHeightHalf = brandOrbHeight / 2,
        brandOrbInner = $('.orb-inner'),
        brandOrbLogo = $('.orb-logo'),
        brandOrbLogoAlt = $('.orb-logo-alt'),
        brandOrbLogoWidth = brandOrbLogo.width(),
        brandOrbLogoWidthHalf = brandOrbLogoWidth / 2,
        brandOrbLogoHeight = brandOrbLogo.height(),
        brandOrbLogoHeightHalf = brandOrbLogoHeight / 2,
        brandOrbLogoHeightBigger = brandOrbLogoHeight * 1.6,
        brandOrbLogoHeightBiggerHalf = brandOrbLogoHeightBigger / 2,
        brandOrbLogoTop = brandOrbHeightHalf - brandOrbLogoHeightHalf,
        brandOrbLogoLeft = brandOrbWidthHalf - brandOrbLogoWidthHalf,
        brandOrbLogoHeightBiggerTop = brandOrbHeightHalf - brandOrbLogoHeightBiggerHalf,
        mensBrandOrb = $('.pp-mens-brand-orb'),
        womensBrandOrb = $('.pp-womens-brand-orb'),
        childrensBrandOrb = $('.pp-childrens-brand-orb'),
        delayMensBrandOrb = 1000,
        delayWomensBrandOrb = 1000,
        delayChildrensBrandOrb = 1000,
        i = undefined;
        
        brandOrbLogo.css({'top':brandOrbLogoTop,'left':'25%'});
        brandOrbLogoAlt.css({'top':brandOrbLogoTop,'left':'25%'});
    
for (i=0; i <= mensBrandOrb.length - 1; i++) {
        var current = mensBrandOrb.eq(i),
            delayi = 350 / (i + 1);
            current.delay(delayMensBrandOrb).animate({opacity:1,width:'148px',height:'148px',top:'16px',left:'44px'},1000,'easeOutElastic',function(){});
            delayMensBrandOrb += delayi;
};
    
for (i=0; i <= womensBrandOrb.length - 1; i++) {
        var current = womensBrandOrb.eq(i),
            delayi = 350 / (i + 1);
            current.delay(delayWomensBrandOrb).animate({opacity:1,width:'148px',height:'148px',top:'16px',left:'44px'},1000,'easeOutElastic',function(){});
            delayWomensBrandOrb += delayi;
};
    
for (i=0; i <= childrensBrandOrb.length - 1; i++) {
        var current = childrensBrandOrb.eq(i),
            delayi = 350 / (i + 1);
            current.delay(delayChildrensBrandOrb).animate({opacity:1,width:'148px',height:'148px',top:'16px',left:'44px'},1000,'easeOutElastic',function(){});
            delayChildrensBrandOrb += delayi;
};
        
      brandOrb.hover(function() {
    if (brandActive) {
         $(this).children('.orb-inner').stop(1,0).css('opacity','1').animate({
             borderWidth:'80px',
             width:'0',
             height:'0'
         },500,'easeOutCirc',function(){}); 
          $(this).children('.orb-logo').stop(1,0).css('opacity','1').animate({
              opacity:'0',
              width:'80%',
              top:'35px',
              left:'10%'
         },500,'easeOutCirc',function(){}); 
          $(this).children('.orb-logo-alt').stop(1,0).css('opacity','0').animate({
              opacity:'1',
              width:'80%',
              top:'35px',
              left:'10%'
         },500,'easeOutCirc',function(){}); 
    }
      },function(){
    if (brandActive) {
         $(this).children('.orb-inner').stop(1,0).css('opacity','1').animate({
             borderWidth:'1px',
             width:'158px',
             height:'158px'
         },500,'easeOutCirc',function(){$(this).css('opacity','0');}); 
          $(this).children('.orb-logo').stop(1,0).css('opacity','0').animate({
              opacity:'1',
              width:'50%',
              top:brandOrbLogoTop,
              left:'25%'
         },500,'easeOutCirc',function(){}); 
          $(this).children('.orb-logo-alt').stop(1,0).css('opacity','1').animate({
              opacity:'0',
              width:'50%',
              top:brandOrbLogoTop,
              left:'25%'
         },500,'easeOutCirc',function(){}); 
    }
      });
        
        brandOrb.mouseup(function() {
        var current = $(this);
        
            switch(true) {
    case (current.is(mensBrandOrb.eq(0))):
        selections.push('Emporio Armani');
        break;
    case (current.is(mensBrandOrb.eq(1))):
        selections.push('Tag Heuer');
        break;
    case (current.is(mensBrandOrb.eq(2))):
        selections.push('Tom Ford');
        break;
    case (current.is(mensBrandOrb.eq(3))):
        selections.push('Barton Perreira');
        break;
    case (current.is(mensBrandOrb.eq(4))):
        selections.push('Maui Jim');
        break;
    case (current.is(mensBrandOrb.eq(5))):
        selections.push('Oakley');
        break;
    case (current.is(mensBrandOrb.eq(6))):
        selections.push('Polo Ralph Lauren');
        break;
                    
    case (current.is(womensBrandOrb.eq(0))):
        selections.push('Dior');
        break;
    case (current.is(womensBrandOrb.eq(1))):
        selections.push('Fendi');
        break;
    case (current.is(womensBrandOrb.eq(2))):
        selections.push('Juicy Couture');
        break;
    case (current.is(womensBrandOrb.eq(3))):
        selections.push('Tom Ford');
        break;
    case (current.is(womensBrandOrb.eq(4))):
        selections.push('Tiffany & Co.');
        break;
    case (current.is(womensBrandOrb.eq(5))):
        selections.push('Tory Burch');
        break;
    case (current.is(womensBrandOrb.eq(6))):
        selections.push('Valentino');
        break;
    case (current.is(womensBrandOrb.eq(7))):
        selections.push('Michael Kors');
        break;
                    
    case (current.is(childrensBrandOrb.eq(0))):
        selections.push('Barbie');
        break;
    case (current.is(childrensBrandOrb.eq(1))):
        selections.push('Converse');
        break;
    case (current.is(childrensBrandOrb.eq(2))):
        selections.push('IZOD');
        break;
    case (current.is(childrensBrandOrb.eq(3))):
        selections.push('Juicy Couture');
        break;
    case (current.is(childrensBrandOrb.eq(4))):
        selections.push('Lucky Brand');
        break;
    case (current.is(childrensBrandOrb.eq(5))):
        selections.push('Sketchers');
        break;
    case (current.is(childrensBrandOrb.eq(6))):
        selections.push('Timex');
        break;
    default:
        console.log('Hmm. Nothing.');
        break;
}
            console.log(selections);
    if (brandActive) {
    progressContainerForward();
    brandActive = false;
                
    current.parent('.pp-brand').siblings('.pp-brand').stop(1,1).animate({opacity:'0'},500,'swing',function(){$(this).fadeOut(500)});
    sectionHeading.stop(1,1).fadeOut(500,function(){}).delay(500,function(){});
        
        
    $(this).stop(1,1).delay(250).fadeOut(750,function(){
            
    $('.plan-section').fadeIn(0,function(){
        
            var planSelections = $('.pp-plan-selections');
            var planSelectionsInner = $('.pp-plan-selections-inner');
        planSelections.css({'opacity':'0','marginTop':'30px'}).delay(500).animate({opacity:'1',marginTop:'0'},1000,'easeOutCirc',function(){});
        
    });
        
    $('.pp-plan-selections').html(selections[0] + " > " + selections[1]);
    
    sectionHeading.eq(4).stop(1,1).fadeIn(0).css({'opacity':'0','left':'-100px'}).animate({
        opacity:'1',
        left:'0'
    },1000,'easeOutCirc',function(){});
    });
        
    }
        });
        
//**********END PERFECT PAIR BRAND**********//
        
    })
    }
});
    
//**********END PERFECT PAIR OPTION**********//
        
    });
        
    }
    });
});
    
  
    
    
    
//**********START PERFECT PAIR CLOSE**********//

$('.perfect-pair-close').hover(function() {
    if (closeActive) {
   $(this).stop(1,1).animate({
       backgroundColor:'rgba(255,255,255,0.3)',
       fontSize:'125px'
   },250,'easeOutCirc'); 
    }
},function() {
    if (closeActive) {
   $(this).stop(1,1).animate({
       backgroundColor:'rgba(255,255,255,0.05)',
       fontSize:'50px'
   },250,'easeOutCirc'); 
    }
});
    
/* $('.perfect-pair-close').mousedown(function() {
    if (closeActive) {
   $(this).stop(1,0).animate({
       backgroundColor:'rgba(255,255,255,0.6)'
   },500,'swing',function(){}); 
    }
}); */

$('.perfect-pair-close').mouseup(function() {
    if (closeActive) {
    window.location.hash='';
    closeActive = false;
    mastheadButtonActive = true;
	selections.length = 0;
    if ($('#progress-tracker').hasClass('man')) {
        $(this).removeClass('man');
    }
    if ($('#progress-tracker').hasClass('woman')) {
        $(this).removeClass('woman');
    }
    if ($('#progress-tracker').hasClass('child')) {
        $(this).removeClass('child');
    }
    $('#perfect-pair-content').fadeOut(500);
    $(this).stop(1,1).animate({
       fontSize:'0',
       backgroundColor:'transparent'
   },500,'easeOutCirc',function(){
       $('#masthead-text').css({'right':'0','opacity':'0'}).fadeIn(0).delay(0).animate({opacity:'1',right:'76px'},1000,'easeOutExpo',function(){});
       $('#masthead-button').css({'right':'0','opacity':'0'}).fadeIn(0).delay(250).animate({opacity:'1',right:'76px'},1000,'easeOutExpo',function(){});
       $('#masthead-button-bg2').css('backgroundColor','#2bc1f6');
       $(this).stop(1,1).fadeOut(0).css({
           'backgroundColor':'rgba(255,255,255,0.05)',
           'fontSize':'50px'
       });
       $('.black-fadeover').fadeOut(1000,'swing',function(){
           $('#perfect-pair-content').empty();
           $('.perfect-pair-close').empty();
           $(this).css('left','-2560px').fadeIn(0);
       });
   }); 
    }
});
    
//**********END PERFECT PAIR CLOSE**********//
    
    
    
//**********END PERFECT PAIR**********//
    
    
    
    
};
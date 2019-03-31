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

$('#masthead-button').mousedown(function() { "use strict";
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
});

$('#masthead-button').mouseup(function() { "use strict";
    
    $('#perfect-pair-content').fadeIn(0);
    mastheadButtonActive = false;
    closeActive = true;
    $(this).stop(1,1).fadeOut(500,'easeOutCirc');
    $('#masthead-text').stop(1,1).fadeOut(500,'easeOutCirc');
    $('.black-fadeover').animate({
        left:'0'
    },1000,'swing',function() {});
    $('.perfect-pair-close').fadeIn(1000,'swing',function(){
    $('#masthead-button-bg').css('opacity','1');
    $('#masthead-button-text').css({
		'paddingRight':'14px',
		'width':'248px',
        opacity:'1'
    });
    });
	$.ajax({
	type: 'GET',
	url:'perfect-pair.html',
	success:function(perfect) {
		$('#perfect-pair-content').html(perfect, function(){});
	},
	cache: false,
	complete: function(){
        
    var perfectPairHeading = $('.perfect-pair-heading'),
        progressContainer = $('.progress-container');
    
    perfectPairHeading.stop(1,1).fadeIn(0).css({'opacity':'0','left':'-100px'}).animate({
        opacity:'1',
        left:'0'
    },1000,'easeOutCirc');
    
    progressContainer.stop(1,1).fadeIn(0).css({'opacity':'0','left':'-100px'}).delay(250).animate({
        opacity:'1',
        left:'calc(50% - 250px)'
    },1000,'easeOutCirc');
        
}
    });
});

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
    
$('.perfect-pair-close').mousedown(function() {
   $(this).stop(1,0).animate({
       backgroundColor:'rgba(255,255,255,0.4)',
       fontSize:'150px'
   },500,'easeOutCirc',function(){}); 
});

$('.perfect-pair-close').mouseup(function() {
    closeActive = false;
    mastheadButtonActive = true;
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
           $(this).css('left','-2560px').fadeIn(0);
       });
   }); 
});
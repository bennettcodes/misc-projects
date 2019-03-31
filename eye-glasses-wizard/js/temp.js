<script>
  
    $(function() {
      
	$(".program-title").hover(function() {
		$(this).find(".program-expand").stop(true,true).fadeIn(0,"linear");
	},function() {
		$(this).find(".program-expand").stop(true,true).fadeOut(0,"linear");
	});
	
	$(".program-expand").hover(function() {
      $(this).parent(".program-title").find(".program-description").stop(true,true).fadeIn(500);
	},function() {
      $(this).parent(".program-title").find(".program-description").stop(true,true).fadeOut(500);
	});
	
	$("#click-here-stories").hover(function() {
		$(this).stop(false,true)
  .css({
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 0, 
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 20 })
  .animate({
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 0}, 500,"swing");
	},function() {
		$(this).stop(true,true)
  .css({
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 0 })
  .animate({
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 0, 
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 20}, 500,"swing");
	});
	
	$(function() {
    $('#click-here-stories').click(function() {
        $('html, body').animate({
    scrollTop: $("#success-stories").offset().top
}, 1000,"easeInQuint");
    });
});
	
	$("span.question").hover(function() {
		$("#disclaimer-popup").css("display","inline");
	}, function() {
		$("#disclaimer-popup").css("display","none");
	});
	
      function desktopCommercialRollover() {
if ($(window).width() > 768) {

  
  
  	$( "#commercial-thumb1" ).hover(function() {
	$(this).animate({
		opacity: "0",
		width: "508px",
		height: "287px",
		left: "-25px",
		top: "-14px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
    }, function() {
	$(this).animate({
		opacity: "1",
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
	
	$( "#commercial-thumb1" ).hover(function() {
	$( '#commercial-thumb-red-glow' ).animate({
		opacity: "1",
		width: "508px",
		height: "287px",
		left: "-25px",
		top: "-14px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	}, function() {
	$( '#commercial-thumb-red-glow' ).animate({
		opacity: "0",
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
	
	$( "#commercial-thumb1" ).hover(function() {
	$( "#commercial-thumb2" ).animate({
		width: "508px",
		height: "287px",
		left: "-25px",
		top: "-14px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	}, function() {
	$( "#commercial-thumb2" ).animate({
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
  
  
    }
};
      
desktopCommercialRollover();
	
	$( "#video-close-btn" ).click(function() {
      $(this).stop(true,false).fadeToggle(500);
      $( "#commercial-player-bg" ).stop(true,false).fadeToggle(500);
      if ($( "#story-player1" ).is(':visible')) {
      $( "#story-player1" ).stop(true,false).fadeToggle(500, function(){$(this).empty().css('width','0');});
          }
      if ($( "#story-player2" ).is(':visible')) {
      $( "#story-player2" ).stop(true,false).fadeToggle(500, function(){$(this).empty().css('width','0');});
          }
      if ($( "#story-player3" ).is(':visible')) {
      $( "#story-player3" ).stop(true,false).fadeToggle(500, function(){$(this).empty().css('width','0');});
          }
      if ($( "#commercial-player" ).is(':visible')) {
      $( "#commercial-player" ).stop(true,false).fadeToggle(500, function(){$(this).empty().css('width','0');});
          }
    });
	
	$( ".story1" ).click(function() {
      $( "#commercial-player-bg" ).fadeToggle(500);
      $( "#video-close-btn" ).stop(true,false).fadeToggle(500);
      $( "#story-player1" ).stop(true,false).empty().fadeToggle(0).animate({
      width:"950px"
	},1000,"easeOutQuint",function(){$(this).html('<iframe width="950" height="534" src="https://www.youtube.com/embed/heQMRHJ0bGc?autoplay=1" frameborder="0" allowfullscreen></iframe>');
       });
	});
	
	$( ".story2" ).click(function() {
      $( "#commercial-player-bg" ).fadeToggle(500);
      $( "#video-close-btn" ).stop(true,false).fadeToggle(500);
      $( "#story-player2" ).stop(true,false).empty().fadeToggle(0).animate({
      width:"950px"
	},1000,"easeOutQuint",function(){$(this).html('<iframe width="950" height="534" src="https://www.youtube.com/embed/fIb_mpx29TI?autoplay=1" frameborder="0" allowfullscreen></iframe>');
       });
	});
	
	$( ".story3" ).click(function() {
      $( "#commercial-player-bg" ).fadeToggle(500);
      $( "#video-close-btn" ).stop(true,false).fadeToggle(500);
      $( "#story-player3" ).stop(true,false).empty().fadeToggle(0).animate({
      width:"950px"
	},1000,"easeOutQuint",function(){$(this).html('<iframe width="950" height="534" src="https://www.youtube.com/embed/lYO3HGPX53o?autoplay=1" frameborder="0" allowfullscreen></iframe>');
       });
	});
	
	$( "#commercial-thumb1" ).click(function() {
      $( "#commercial-player-bg" ).fadeToggle(500);
      $( "#video-close-btn" ).stop(true,false).fadeToggle(500);
      $( "#commercial-player" ).stop(true,false).empty().fadeToggle(0).animate({
      width:"950px"
	},1000,"easeOutQuint",function(){$(this).html('<iframe width="950" height="534" src="https://www.youtube.com/embed/LAPW9_HGbbM?autoplay=1" frameborder="0" allowfullscreen></iframe>');
       });
	});
	
	$( "#commercial-thumb1" ).click(function() {
	$( this ).animate({
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
	
	$( "#commercial-thumb1" ).click(function() {
	$( "#commercial-thumb2" ).animate({
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
	
	$( "#commercial-thumb1" ).click(function() {
	$( "#commercial-thumb-red-glow" ).animate({
		width: "458px",
		height: "259px",
		left: "0px",
		top: "0px",
		opacity: "0"
	}, {
      duration:500,
      easing:"swing",
      queue:false,
      complete:function(){}
    });
	});
	
      
function desktopSuccessRollover() {
if ($(window).width() > 768) {
$( ".success-stories-thumb" ).hover(function() {
		$( this ).stop(true,true).animate({
			marginTop: "-30px",
			height: "232px"
		}, 500, "easeOutCirc", function() {
		});
}, function() {
		$( this ).stop(false,true).animate({
			marginTop: "0px",
			height: "202px"
		}, 500, "easeOutCirc", function() {
			$(this).stop(500);
		});
		});
    }
};
      
desktopSuccessRollover();
      
      
	
	$( "img.thumb1" ).hover(function() {
		$( this ).stop(true,true).fadeTo( 500, 0, function() {
		});
		
}, function() {
	
		$( this ).stop(true,true).fadeTo( 500, 1, function() {
			$(this);	
		});
		});
		
$('.cell-short').hover(function(){
  $(this).prev('div').stop(true,true).css('zIndex','10').animate({
    'width': '+=20px',
    'height': '+=20px',
    'left': '-=10px',
    'top': '-=10px'
  },{
      duration:200,
      easing:'swing',
      queue:true,
      complete:function(){}
  });
  },function(){
  $(this).prev('div').stop(true,true).animate({
    'width': '-=20px',
    'height': '-=20px',
    'left': '+=10px',
    'top': '+=10px'
  },{
      duration:200,
      easing:'swing',
      queue:true,
      complete:function(){$(this).css('zIndex','5');}
      
  });
});
		
$('.cell-long').hover(function(){
  $(this).prev('div').stop(true,true).css('zIndex','10').animate({
    'width': '+=20px',
    'height': '+=20px',
    'left': '-=10px',
    'top': '-=10px'
  },{
      duration:200,
      easing:'swing',
      queue:true,
      complete:function(){}
  });
  },function(){
  $(this).prev('div').stop(true,true).animate({
    'width': '-=20px',
    'height': '-=20px',
    'left': '+=10px',
    'top': '+=10px'
  },{
      duration:200,
      easing:'swing',
      queue:true,
      complete:function(){$(this).css('zIndex','5');}
      
  });
});

(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));
		
$('#map-img2').click(function(){
  $('#location').animate({
    'width': '948px'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$('#map-img2').click(function(){
  $('#gmap').animate({
    'margin-left': '0'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$( "#map-img2" ).click(function() {
  $( "#map-close" ).fadeTo( 500 , 1, function() {
    $("#map-close").css("display","inline");
  });
});
		
$( "#map-img2" ).click(function() {
  $( this ).fadeTo( 500 , 0, function() {
    $(this).css("display","none");
  });
});
		
$( "#map-img2" ).click(function() {
  $( "#fields" ).fadeTo( 1000 , 0.5, function() {
    //
  });
});
		
$('#map-img2').click(function(){
  $('#fields-header').animate({
    'margin-left': '50px'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$('#map-img2').click(function(){
  $('#fields-bullets').animate({
    'margin-left': '50px'
  },1000, "easeInOutCubic", function() {
  });
  });
	
$('#map-close').click(function(){
  $('#location').animate({
    'width': '343px'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$('#map-close').click(function(){
  $('#gmap').animate({
    'margin-left': '-50px'
  },1000, "easeInOutCubic", function(){
  });
  });
		
$( "#map-close" ).click(function() {
  $( "#map-img2" ).fadeTo( 500 , 1, function() {
    $("#map-img2").css("display","inline");
  });
});
		
$( "#map-close" ).click(function() {
  $( this ).fadeTo( 500 , 0, function() {
    $(this).css("display","none");
  });
});
		
$( "#map-close" ).click(function() {
  $( "#fields" ).fadeTo( 1000 , 1, function() {
	  //
  });
});
		
$('#map-close').click(function(){
  $('#fields-header').animate({
    'margin-left': '0px'
  },1000, "easeInOutCubic", function() {
  });
  });
		
$('#map-close').click(function(){
  $('#fields-bullets').animate({
    'margin-left': '0px'
  },1000, "easeInOutCubic", function() {
  });
  });
	
	$('#thank-you-message').delay(250).animate({
		width: "300",
		height: "220",
		left: "325",
		top: "142",
		paddingTop: "80",
		opacity: "1"
	},1000, "easeInOutBack", function() {
		//
	}).animate({
		width: "250",
		height: "195",
		left: "350",
		top: "167",
		paddingTop: "55",
		opacity: "1"
	},2000, "linear", function() {
		//
	}).animate({
		width: "0",
		height: "0",
		left: "475",
		top: "256",
		paddingTop: "0",
		opacity: "0"
	},1000, "easeInOutBack", function() {
		//
	});
	
	$('.thank-you').delay(3000).animate({
		opacity: "0"
	},1000, "easeInOutBack", function() {
		//
	});
	
	$('#thank-you-fade').animate({
		opacity: "1"
	},1000, "linear", function() {
		//
	}).delay(2000).animate({
		opacity: "0"
	},1000, "linear", function() {
		//
	});
	
	$('#thank-you-progress-bar').delay(1000).animate({
		width: "950px"
	},2000, "linear", function() {
		//
	}).animate({
		opacity: "0"
	},1000, "linear", function() {
		//
	});
	
	$('.fadein img:gt(0)').hide();
	setInterval(function(){$('.fadein :first-child').fadeOut(1000).next('img').fadeIn(1000).end().appendTo('.fadein');}, 5000);
	
});
  
</script>
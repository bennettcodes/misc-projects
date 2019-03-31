	$(window).bind('load', function()
{
	
percent = 0.5;
halfWidthTotal = (percent*$("#wrapper-overlay").width());
halfHeightTotal = (percent*$("#wrapper-overlay").height());
halfWidth = (percent*$("#profile-circle").width());
halfHeight = (percent*$("#profile-circle").height());
halfNameHeight = (percent*$("#name").height());
halfNameWidth = (percent*$("#name").width());
profileWidth = $("#profile-circle").width();
profileHeight = $("#profile-circle").height();
nameHeight = $("#name").height();
subtext1Height = $("#subtext1").height();
subtext1Vertical = halfHeightTotal + nameHeight;
middleVertical =halfHeightTotal - halfHeight;
nameMiddleVertical =halfHeightTotal - halfNameHeight;



$("#wrapper").fadeIn(2000);
$('#profile-circle').delay(250).toggle( "puff", 750, "easeInOutBack", function(){}).animate({
		marginLeft:"-=300"
		},1500,"easeInOutBack", function(){
			$(this).delay(2250).animate({
		marginLeft:"+=300"
		},1750,"easeInOutBack", function(){});
		}).animate({
		boxShadow: "0 0 70px rgba(0,0,0,1)"
	}, {
    duration: 500,
    queue: false,
	easing: "swing",
    complete: function(){}});
	
	$("#name").css({"display":"inline","opacity":"0"}).delay(1750).animate({
		marginLeft:"+=262",
		opacity:"1"
		},{
    duration: 1000,
	queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).animate({
		marginBottom:"+=37"
		},{
    duration: 500,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).animate({
		marginBottom:"+=37"
		},{
    duration: 500,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).animate({
		marginBottom:"+=37"
		},{
    duration: 500,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).delay(250).animate({
		marginLeft:"-=170",
		marginBottom:"-=220",
		fontSize: "0",
		opacity: "0"
		},{
    duration: 1250,
		queue: true,
	easing: "easeInBack",
    complete: function(){}}).fadeOut(0);
	
	
	/* Circular Path
	
	.animate(
		{marginBottom: "+=57px", marginLeft: "+=20px"}, {
     	 duration: 250, 
     	 specialEasing: {marginBottom: 'easeOutCirc', marginLeft: 'easeInCirc'}, 
      	complete: function () { 
        	$("#name").animate({marginBottom: "-=57px", marginLeft: "+=20px"}, {
          		duration: 500, 
          		specialEasing: {marginBottom: 'easeInCirc', marginLeft: 'easeOutCirc'},
          		complete: function() {
			  
			  
			  		$("#name").animate({marginBottom: "-=227px", marginLeft: "-=390px"}, {
      					duration: 1000, 
     					 specialEasing: {marginBottom: 'easeOutCirc', marginLeft: 'easeInCirc'}, 
      					 complete: function () { 
        				 	$("#name").animate({marginBottom: "+=0", marginLeft: "-=0"}, {
          						duration: 250, 
          						specialEasing: {marginBottom: 'easeInCirc', marginLeft: 'easeOutCirc'},
          						complete: function(){}
								})
						 }
					})
				}
			})
		}
	})
								
	;
	
	
	
	*/

	
	
	
	/*
	$("#name").animate({
		marginBottom:"+=57"
		},{
    duration: 1000,
		queue: true,
	easing: "easeOutCirc",
    complete: function(){}}).animate({
		marginLeft:"+=20"
		},{
    duration: 1000,
		queue: true,
	easing: "easeOutCirc",
    complete: function(){}}).animate({
		marginLeft:"-=170",
		marginBottom:"-=220",
		fontSize: "0",
		opacity: "0"
		},{
    duration: 1000,
		queue: true,
	easing: "easeInBack",
    complete: function(){}}).fadeOut(0);
	*/
	
	
	
	
$("#logo").delay(5750).fadeIn(0).animate({
		left:"-=300",
		opacity:"1"
	},1250,"easeOutQuint",function(){});
	
	$("#logo").hover(function() {
	$(this).stop().animate({
		color:"#fff2b3"
	},1000,"easeOutQuint",function(){});
}, function() {
	$("#logo").stop().animate({
		color:"#ffffff"
	},1000,"easeOutQuint",function(){});
});
  
$( "#logo" ).mouseover(function() {
  $( "#wrapper-overlay" ).stop().animate({
	  backgroundColor:"#000000"
  },1000,"easeOutQuint",function(){});
});
$( "#logo" ).mouseout(function() {
  $( "#wrapper-overlay" ).stop().animate({
	  backgroundColor:"#525252"
  },1000,"easeOutQuint",function(){});
});

$( "#logo" ).click(function() {
  $("#wrapper-overlay").stop().animate({
	  backgroundColor:"#525252"
  },1000,"easeOutQuint",function(){});
	  });
	
	//$( ".navitem" ).eq(1)
	
	$( ".navitem" ).eq(0).delay(6250).animate({
		bottom:"+=100",
		opacity:"1"
	},1250,"easeOutQuint",function(){});
	
	$( ".navitem" ).eq(1).delay(6500).animate({
		bottom:"+=100",
		opacity:"1"
	},1250,"easeOutQuint",function(){});
	
	$( ".navitem" ).eq(2).delay(6750).animate({
		bottom:"+=100",
		opacity:"1"
	},1250,"easeOutQuint",function(){});
	
	
	$("#subtext1")
	.css({"display":"inline","opacity":"0", "left":"+=212px","margin-left":"-255px"}).delay(2750).animate({
		marginBottom:"-=37",
		opacity:"1"
		},{
    duration: 500,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).animate({
		marginBottom:"-=37",
		opacity:"1"
		},{
    duration: 500,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).animate({
		marginBottom:"-=32",
		opacity:"1"
		},{
    duration: 500,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).delay(1000).animate({
		marginLeft:"-=150",
		marginBottom:"+=100",
		fontSize: "0",
		opacity: "0"
		},{
    duration: 500,
		queue: true,
	easing: "easeInBack",
    complete: function(){}}).fadeOut(0);
	
	$("#wrapper-overlay").delay(1750).animate({
		backgroundColor:"#525252"
		},{
    duration: 1000,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).animate({
		backgroundColor:"green"
		},{
    duration: 500,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).animate({
		backgroundColor:"blue"
		},{
    duration: 500,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).animate({
		backgroundColor:"purple"
		},{
    duration: 500,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).animate({
		backgroundColor:"#525252"
		},{
    duration: 2250,
		queue: true,
	easing: "linear",
    complete: function(){}});
	
	
	$("#subtext2")
	.css({"display":"inline","opacity":"0", "left":"+=212px","margin-left":"-255px"}).delay(3250).animate({
		marginBottom:"-=37",
		opacity:"1"
		},{
    duration: 500,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).animate({
		marginBottom:"-=27",
		opacity:"1"
		},{
    duration: 500,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).delay(750).animate({
		marginLeft:"-=150",
		marginBottom:"+=50",
		fontSize: "0",
		opacity: "0"
		},{
    duration: 750,
		queue: true,
	easing: "easeInBack",
    complete: function(){}}).fadeOut(0);
	
	
	$("#subtext3")
	.css({"display":"inline","opacity":"0", "left":"+=212px","margin-left":"-255px"}).delay(3750).animate({
		marginBottom:"-=37",
		opacity:"1"
		},{
    duration: 500,
		queue: true,
	easing: "easeOutQuint",
    complete: function(){}}).delay(500).animate({
		marginLeft:"-=150",
		fontSize: "0",
		opacity: "0"
		},{
    duration: 1000,
		queue: true,
	easing: "easeInBack",
    complete: function(){
		$("#skip-btn-container").animate({opacity:"0"},1000,"swing",function(){}).fadeOut();
		}}).fadeOut();
	
	var all = $("*");
	
	  all.mousemove(function(e){
	
	
	var wrapper = $("#wrapper");
    var x = -(e.pageX + this.offsetLeft) / 30;
    var y = -(e.pageY + this.offsetTop) / 30;
    wrapper.css('background-position', x + 'px ' + y + 'px');
	
  });    
  
  /*
  $('*').mousemove(function( event ) {
     
var containerWidth = $(this).innerWidth(),
    containerHeight = $(this).innerHeight(),
    mousePositionX = (event.pageX / containerWidth) * 100,
    mousePositionY = (event.pageY /containerHeight) * 100;
 
$('#wrapper').css('background-position', mousePositionX + '%' + ' ' + mousePositionY + '%');
 
});
  */
  
  $("#navlight").delay(3500).animate({
	  marginLeft: "+=5000"
  },4000,"easeInOutQuint",function(){});
  
  $("#nav-bg").delay(5250).animate({
	  opacity:"1"
  },1000,"swing",function(){});
  
  $("#navitems").delay(6250).fadeIn(0);


$( ".navitem" ).click(function() {
  $("#wrapper-overlay").stop().animate({
	  backgroundColor:"#525252"
  },1000,"easeOutQuint",function(){});
	  });


//nav1 hover
  
$( ".navitem:first" ).mouseover(function() {
  $( ".navitem-hover1" ).css("height","0").stop().animate({
	  opacity:"1",
	  height:"197"
  },1000,"easeOutQuint",function(){});
});
$( ".navitem:first" ).mouseout(function() {
  $( ".navitem-hover1" ).stop().animate({
	  opacity:"0",
	  height:"0"
  },1000,"easeOutQuint",function(){});
});
  
$( ".navitem:first" ).mouseover(function() {
  $( "#wrapper-overlay" ).stop().animate({
	  backgroundColor:"green"
  },1000,"easeOutQuint",function(){});
});
$( ".navitem:first" ).mouseout(function() {
  $( "#wrapper-overlay" ).stop().animate({
	  backgroundColor:"#525252"
  },1000,"easeOutQuint",function(){});
});
  
  //nav2 hover
  
$( ".navitem" ).eq(1).hover(function() {
  $( ".navitem-hover2" ).css("height","0").stop().animate({
	  opacity:"1",
	  height:"197"
  },1000,"easeOutQuint",function(){});
}, function() {
  $( ".navitem-hover2" ).css("height","197").stop().animate({
	  opacity:"0",
	  height:"0"
  },1000,"easeOutQuint",function(){});
});
  
$( ".navitem" ).eq(1).hover(function() {
  $( "#wrapper-overlay" ).stop().animate({
	  backgroundColor:"blue"
  },1000,"easeOutQuint",function(){});
}, function() {
  $( "#wrapper-overlay" ).stop().animate({
	  backgroundColor:"#525252"
  },1000,"easeOutQuint",function(){});
});
  
//nav3 hover  
  
$( ".navitem" ).eq(2).hover(function() {
  $( ".navitem-hover3" ).css("height","0").stop().animate({
	  opacity:"1",
	  height:"197"
  },1000,"easeOutQuint",function(){});
}, function() {
  $( ".navitem-hover3" ).css("height","197").stop().animate({
	  opacity:"0",
	  height:"0"
  },1000,"easeOutQuint",function(){
	  });
});

  
$( ".navitem" ).eq(2).hover(function() {
  $( "#wrapper-overlay" ).stop().animate({
	  backgroundColor:"purple"
  },1000,"easeOutQuint",function(){});
}, function() {
  $( "#wrapper-overlay" ).stop().animate({
	  backgroundColor:"#525252"
  },1000,"easeOutQuint",function(){});
});

$(".navitem").click(function() {
	
	
	if ($("#logo").hasClass("home")) {
		$("#logo").removeClass("home", function() {
			
		$("#profile-circle").stop().animate({
		bottom: "-=50%",
		width:"0",
		height:"0",
		marginBottom:"+=200",
		marginLeft:"0",
	}, {
    duration: 750,
    queue: false,
	easing: "easeInBack",
    complete: function(){
		
		$("#page").stop().fadeIn(1000);
		
		}
			
		});
		
		
		});
	
	}
		
		
		
});

$("#logo").click(function() {
	if (!$(this).hasClass("home")) {
	
	$(this).addClass("home", function() {
		
	$("#page").stop().fadeOut(1000, function(){
			
			$("#profile-circle").stop().animate({
		bottom: "50%",
		left:"50%",
		width:"400",
		height:"400",
		marginBottom:"-200",
		marginLeft:"-200",
	}, {
    duration: 750,
    queue: false,
	easing: "easeOutBack",
    complete: function(){}});
			
			});	
		
	}).parents().find(".navitem-text").removeClass("navitem-active", 1000, "swing");
		
	}
});

$("#copyright").delay(7250).fadeIn(1000);

});
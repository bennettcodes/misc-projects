$(window).load(function() {
	
	
	var container = $('#container'),
		header = $('#header'),
		logoContainer = $('#logo-container'),
		logo = $('.logo'),
		
		phoneTopContainer = $('#phone-top-container'),
		phoneTop = $('.phone-top'),
		phoneTopText = $('.phone-top-text'),
		phoneTopBackground = $('.phone-top-background'),
		phoneTopBackgroundImage = $('.phone-top-background-image'),
		
		navItemContainer = $('#nav-item-container'),
		navItem = $('.nav-item'),
		navItemText = $('.nav-item-text'),
		navItemBackground = $('.nav-item-background'),
		content = $('#content'),
        
        thankYouTextContainer = $('#thank-you-text-container'),
        thankYouText = $('#thank-you-text'),
        thankYouTextTrackbar = $('#thank-you-text-trackbar'),
        thankYouTextSkipButton = $('#thank-you-text-skip-btn'),
		
		contactTopContainer = $('#contact-top-container'),
		contactTopContainerBackground = $('#contact-top-container-background'),
		contactTop = $('.contact-top'),
		
		smartForms = $('.smart-forms').eq(0),
		smartFormsBottom = $('.smart-forms').eq(1),
		
		slideCounter = 0,
		slideTextDuration = 1000,
		slideDuration = 6000,
		slideTextSpeed = 1000,
		slideSpeed = 1000,
		slideHeight = ($(window).height() * 0.75) - 150,
		slideTextEase = 'easeInOutQuart',
		slideEase = 'easeInOutQuart',
        
		sliderTextContainer = $('#slider-text-container'),
		sliderText = $('#slider-text'),
		slideText = $('.slide-text'),
		slideTextHeader1 = $('.slide-text h1'),
		slideTextHeader3 = $('.slide-text h3'),
        
		sliderContainer = $('#slider-container'),
		slider = $('#slider'),
		slide = $('.slide'),
		
		contentSectionCounter = 0,
		contentSection = $('.content-section'),
		contentSectionBackground = $('.content-section-background'),
		contentSectionInner = $('.content-section-inner')
	;
    
        if (thankYouTextContainer) {
        thankYouTextContainer.delay(500).fadeIn(0);
                
        thankYouText.delay(1000).velocity({
            opacity:['1','0'],
            translateY:['0','100px']
        }, {
            duration:1000,
            easing:'easeOutCirc'
        });
                
        thankYouTextSkipButton.delay(1000).velocity({
            opacity:['1','0'],
            translateY:['0','-100px']
        }, {
            duration:1000,
            easing:'easeOutCirc'
        });
          
		if ($(window).width() > 1024) {      
        thankYouTextTrackbar.delay(1000).fadeIn(0).velocity({
            width:['50vw','0vw']
        }, {
            duration:2500,
            easing:'linear',
            complete:function() {
                $(this).fadeOut(1000, 'easeOutCirc');
                thankYouTextSkipButton.velocity({
                    opacity:['0','1'],
                    translateY:['-50px','0']
                }, {
                    duration:1000,
                    easing:'easeOutCirc'
        });
                thankYouText.velocity({
                    opacity:['0','1'],
                    translateY:['50px','0']
                }, {
                    duration:1000,
                    easing:'easeOutCirc'
        });
                thankYouTextContainer.delay(500).fadeOut(500);
            }
        });
		} else {
        thankYouTextTrackbar.delay(1000).fadeIn(0).velocity({
            width:['100vw','0vw']
        }, {
            duration:2500,
            easing:'linear',
            complete:function() {
                $(this).fadeOut(1000, 'easeOutCirc');
                thankYouTextSkipButton.velocity({
                    opacity:['0','1'],
                    translateY:['-50px','0']
                }, {
                    duration:1000,
                    easing:'easeOutCirc'
        });
                thankYouText.velocity({
                    opacity:['0','1'],
                    translateY:['50px','0']
                }, {
                    duration:1000,
                    easing:'easeOutCirc'
        });
                thankYouTextContainer.delay(500).fadeOut(500);
            }
        });
		}
            thankYouTextSkipButton.click(function() {
				if ($(window).width() > 1024) {
                thankYouTextTrackbar.stop(1,1).velocity({
                    opacity:'0',
                    width:'50vw'
                }, {
                    duration:1000,
                    easing:'easeOutCirc'
                });
				} else {
                thankYouTextTrackbar.stop(1,1).velocity({
                    opacity:'0',
                    width:'100vw'
                }, {
                    duration:1000,
                    easing:'easeOutCirc'
                });
				}
                $(this).stop(1,1).velocity({
                    opacity:['0','1'],
                    translateY:['-50px','0']
                }, {
                    duration:1000,
                    easing:'easeOutCirc'
        });
                thankYouText.stop(1,1).velocity({
                    opacity:['0','1'],
                    translateY:['50px','0']
                }, {
                    duration:1000,
                    easing:'easeOutCirc'
        });
                thankYouTextContainer.stop(1,1).delay(500).fadeOut(500);
            });
		}
	
	$(window).resize(function initial() {
	
	if ($(window).width() > 1024) {
	
	contentSection.velocity({
		opacity:'0',
		scale:'125%',
		translateY:'100px',
		rotateX:'-15deg'
	}, {
		duration:0
	});
	
	logo.velocity({
		top:(logoContainer.height() / 2) - (logo.height() / 2)
	}, {
		duration:0
	});
	phoneTopContainer.velocity({
		translateX:'0px'
	}, {
		duration:0
	});
		
	navItemContainer.velocity({
		translateX:'0px'
	}, {
		duration:0
	});
	phoneTopText.velocity({
		translateX:'-45%',
		translateY:'35px'
	}, {
		duration:0
	});
	sliderContainer.css({
		height:$(window).height() * 0.75
	});
    sliderTextContainer.css({
        top:header.height(),
        bottom:''
    });
	sliderText.css({
		width:sliderContainer.width() * 0.5,
		height:sliderContainer.height() - 150
	});
    slideText.css({
        width:'auto'
    }).velocity({
        paddingLeft:'50px',
        paddingRight:''
    }, {
        duration:0
    });
    slideText.eq(slideCounter).velocity({
        translateY:((sliderContainer.height() / 2) - (slideText.eq(slideCounter).height() / 2)) - 75
    }, {
        duration:0
    });
	slide.css({
		width:$(window).width()
	});
		
	slider.css({
		width:slide.length * slide.width(),
		height:sliderContainer.height()
	});
	contactTopContainer.css({
		width: $(window).width() / 2,
		height: sliderContainer.height() - 150
	});
	contactTopContainerBackground.css({
		width: $(window).width(),
		height: sliderContainer.height() - 150
	});
	contactTop.velocity({
	}, {
		duration:0
	});
	smartForms.css({
		width: '100%',
		right:'130px'
	}).velocity({
	}, {
		duration:0
	});
	smartFormsBottom.css({
		width: '100%',
		left:'0px'
	}).velocity({
	}, {
		duration:0
	});
	smartForms.velocity({
		translateY:((sliderContainer.height() / 2) - (smartForms.height() / 2)) - 79
	}, {
		duration:0
	});
	contactTop.css({
		width:'440px'
	});
	$('.smart-forms .form-footer .button').eq(0).css({
		width:phoneTopBackgroundImage.width() - 31
	});
	contentSection.each(function() {
		$(this).css({
			height:$(this).find(contentSectionInner).height() + 'px'
		});
	});
	contentSectionBackground.each(function() {
		$(this).css({
			width:$(this).parent(contentSection).outerWidth() + 'px',
			height:$(this).parent(contentSection).outerHeight() + 'px'
		});
	});
	contentSectionInner.css({
		marginLeft:($(window).width() / 2) - (contentSectionInner.width() / 2) + 'px'
	});
	} else {
	logo.velocity({
		top:(logoContainer.height() / 2) - (logo.height() / 2)
	}, {
		duration:0
	});
	phoneTopText.velocity({
		translateX:'',
		translateY:''
	}, {
		duration:0
	});
	phoneTopBackground.velocity({
		translateX:'',
		skewX:''
	}, {
		duration:0
	});
	phoneTopBackgroundImage.velocity({
		skewX:'-15deg'
	}, {
		duration:0
	});
		
	sliderContainer.css({
		height:$(window).height() * 0.75
	});
        
    sliderTextContainer.css({
        top:150 + phoneTop.outerHeight() + phoneTop.innerHeight() + 'px',
        bottom: ''
    })
		
	slide.css({
		width:$(window).width()
	});
		
	slider.css({
		width:slide.length * slide.width()
	});
    sliderText.css({
        width:$(window).width(),
		height:sliderContainer.height() - 150
    });
    slideText.css({
        width:$(window).width() - 100
    }).velocity({
        paddingLeft:'50px',
        paddingRight:'50px'
    }, {
        duration:0
    });
    slideText.eq(slideCounter).velocity({
        translateY:((sliderContainer.height() / 2) - (slideText.eq(slideCounter).height() / 2)) - 75
    }, {
        duration:0
    });
	contactTopContainer.css({
		width: $(window).width() / 2,
		height: sliderContainer.height() - 150
	});
	contactTopContainerBackground.css({
		width: $(window).width(),
		height: sliderContainer.height() - 150
	});
	contactTop.velocity({
	}, {
		duration:0
	});
	smartForms.css({
		width: '100%',
		right:'130px'
	}).velocity({
	}, {
		duration:0
	});
	smartFormsBottom.css({
		width: '100%',
		left:'0'
	}).velocity({
	}, {
		duration:0
	});
	smartForms.velocity({
		translateY:((sliderContainer.height() / 2) - (smartForms.height() / 2)) - 95
	}, {
		duration:0
	});
	$('.smart-forms .form-footer .button').eq(0).css({
		width:$(window).width() - 60
	});
	contentSection.each(function() {
		$(this).css({
			height:$(this).find(contentSectionInner).height() + 'px'
		});
	});
	contentSectionBackground.each(function() {
		$(this).css({
			width:$(this).parent(contentSection).outerWidth() + 'px',
			height:$(this).parent(contentSection).outerHeight() + 'px'
		});
	});
	contentSection.eq(0).velocity({
		scale:'100%',
		translateY:'0px',
		rotateX:'0deg'
	}, {
		duration:0
	});
	 contentSection.slice( 1, contentSection.length ).velocity({
		scale:'100%',
		translateY:'0px',
		rotateX:'0deg'
	}, {
		duration:0
	}); 
	contentSectionInner.css({
		marginLeft:''
	});
	}
		
		return initial;
	}());
    
    header.velocity({
        opacity:['1','0']
    }, {
        duration:500
    });
	
	function slideAnimation() {
		var slideInterval = setInterval(function() {
            slide.eq(slideCounter).velocity({
                marginLeft:'-=' + 100 / slide.length + '%'
            }, {
                duration:slideSpeed,
                easing:slideEase
            });

            slideCounter++;

            if (slideCounter === slide.length - 1) {
            slide.velocity({
                marginLeft:''
            }, {
                duration:0
            });
                slideCounter = 0;
            }

    }, slideDuration);
	}
	
	function slideTextAnimation() {
		var textInterval = setInterval(function slideTextStart() {
            
		  slideText.eq(slideCounter).css('opacity','1').velocity({
            translateY:[
                ((sliderContainer.height() / 2) - (slideText.eq(slideCounter).height() / 2)) - 75,
                ((sliderContainer.height() / 2) - (slideText.eq(slideCounter).height() / 2)) - 75
            ]
            }, {
                duration:slideTextSpeed - 100,
                easing:slideTextEase,
                delay:100
            }).siblings(slideText).velocity({
			  opacity:'0'
		  }, {
			  duration:500
		  });
		  slideText.eq(slideCounter).find(slideTextHeader1).css('opacity','0').velocity({
            opacity:['1','0'],
            translateX:['0px','500px']
            }, {
                duration:slideTextSpeed - 100,
                easing:slideTextEase,
                delay:100
            });
		  slideText.eq(slideCounter).find(slideTextHeader3).css('opacity','0').velocity({
            opacity:['1','0'],
            translateX:['0px','500px']
            }, {
                duration:slideTextSpeed - 200,
                easing:slideTextEase,
                delay:200
            });
            
            return slideTextStart;

		}(), slideDuration);
	}
	
	slideAnimation();
    slideTextAnimation();
    
	if ($(window).width() > 1024) {
	slider.velocity({
		opacity:['1','0'],
		scale:['100%','125%'],
		translateY:['0px','-200px'],
		rotateX:['0deg','-15deg']
	}, {
		duration:1000,
		easing:'swing',
		complete:function() {
			container.css({
				height:'auto',
				overflowY:''
			});
		}
	});
	contactTopContainerBackground.velocity({
		opacity:['1','0'],
		scale:['100%','125%'],
		translateY:['0px','-200px'],
		rotateX:['0deg','-15deg']
	}, {
		duration:1000,
		easing:'swing'
	});
	} else {
	slider.velocity({
		opacity:['1','0']
	}, {
		duration:1000,
		easing:'swing',
		complete:function() {
			container.css({
				height:'auto',
				overflowY:''
			});
		}
	});
	contactTopContainerBackground.velocity({
		opacity:['1','0']
	}, {
		duration:1000,
		easing:'swing'
	});
	}
    
	/* Check the location of each desired element */
        contentSection.each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_quarter_object = $(this).offset().top + ($(this).outerHeight() * 0.25);
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
			if ($(window).width() > 1024) {
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_quarter_object ){
			
				$(this).velocity({
					opacity:['1','swing'],
					scale:'100%',
					translateY:'0px',
					rotateX:'0deg'
				}, {
					duration:1000,
					easing:'easeOutCirc'
				});
					
                contentSectionCounter++;
            }
			}/* else {
             If the top of object is visible in the window, fade it in 
            if( bottom_of_window > top_of_object ){
			
				$(this).velocity({
					opacity:['1','swing'],
					scale:'100%',
					translateY:'0px',
					rotateX:'0deg'
				}, {
					duration:1000,
					easing:'easeOutCirc'
				});
					
                contentSectionCounter++;
            }
			} */
            
        }); 
	
        /* Every time the window is scrolled ... */
    $(window).scroll( function(){
		
//		if ($(window).width() > 1024) {
        /* Check the location of each desired element */
        contentSection.each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_quarter_object = $(this).offset().top + ($(this).outerHeight() * 0.25);
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
			if ($(window).width() > 1024) {
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_quarter_object ){
			
				$(this).velocity({
					opacity:['1','swing'],
					scale:'100%',
					translateY:'0px',
					rotateX:'0deg'
				}, {
					duration:1000,
					easing:'easeOutCirc'
				});
					
                contentSectionCounter++;
            }
			}/* else {
             If the top of object is visible in the window, fade it in 
            if( bottom_of_window > top_of_object ){
			
				$(this).velocity({
					opacity:['1','swing'],
					scale:'100%',
					translateY:'0px',
					rotateX:'0deg'
				}, {
					duration:1000,
					easing:'easeOutCirc'
				});
					
                contentSectionCounter++;
            } 
			} */
            
        }); 
//	}
    
    });
	
});
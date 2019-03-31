sectionBackground.css({

});

function elementCenterX(element) {
    var elementParent = element.parent('div');
    var result = (elementParent.width() / 2) - (element.outerWidth() / 2);

    return result;
};

function elementCenterY(element) {
    var elementParent = element.parent('div');
    var result = (elementParent.height() / 2) - (element.outerHeight() / 2);

    return result;
};

logoInitialFirstNameLetterLast.find('.logo-initial-letter-header').css({
    letterSpacing: '0'
});

logoInitialLastNameLetterLast.find('.logo-initial-letter-header').css({
    letterSpacing: '0'
});

for (i = 0; i < logoInitialFirstNameLetterLength - 1; i++) {
    currentInitialFirstNameLetter = logoInitialFirstNameLetter.eq(i);

    totalCurrentInitialFirstNameWidth += Math.ceil(currentInitialFirstNameLetter.outerWidth());
};

for (i = 0; i < logoInitialLastNameLetterLength - 1; i++) {
    currentInitialLastNameLetter = logoInitialLastNameLetter.eq(i);

    totalCurrentInitialLastNameWidth += Math.ceil(currentInitialLastNameLetter.outerWidth());
};

function cssDefinitions() {
    proceedButton.css({
        top: elementCenterY(proceedButton),
        left: elementCenterX(proceedButton)
    });
    logoContainer.css({
        bottom: '0',
        left: elementCenterX(logoContainer)
    });
    sectionBackground.css({
        top: elementCenterY(sectionBackground),
        left: elementCenterX(sectionBackground)
    });
    activePageSection.css({
        opacity: '1'
    });
    svgElement.css({
        opacity: 0
    });
    logoInitialFirstName.css({
        width: 'auto',
        height: logoInitialFirstNameLetter.height()
    });
    logoInitialFirstName.css({
        bottom: logoInitialFirstNameLetter.height(),
        left: elementCenterX(logoInitialFirstName)
    });
    logoInitialLastName.css({
        width: 'auto',
        height: logoInitialLastNameLetter.height()
    });
    logoInitialLastName.css({
        bottom: 0,
        left: elementCenterX(logoInitialLastName)
    });
};

function introTimeline() {

    introTl.timeScale(1);

};

var logoInitialStaggerDelay = 0.1;

var logoInitialLetterDuration = 2;

function logoInitialFirstNameTimeline() {

    logoInitialFirstNameTl.staggerFrom(logoInitialLetter, logoInitialLetterDuration, {
        rotationY: 40,
        z: 500,
        opacity: 0,
        ease: Circ.easeOut
    }, logoInitialStaggerDelay, 1);

    /*logoInitialFirstNameTl.staggerTo(logoInitialLastNameLetter, logoInitialLetterDuration, {
        rotationY: 0,
        x: 0,
        y: 0,
        z: 0,
        opacity: 1,
        ease: Circ.easeOut
    }, logoInitialStaggerDelay,  1.1);*/

    logoInitialFirstNameTl.to(logoContainerBackgroundFirst, 0.5, {
        y: '0vw',
        ease: Quad.easeInOut
    }, 3.6);

    logoInitialFirstNameTl.to(logoContainerBackgroundSecond, 0.5, {
        y: '0vw',
        ease: Quad.easeInOut
    }, 3.7);

    logoInitialFirstNameTl.to(logoContainerBackground, 0.5, {
        y: '0vw',
        ease: Quad.easeInOut
    }, 3.8);

    logoInitialFirstNameTl.to(logoInitialContainer, 0.1, {
        opacity: 0
    }, 3.9);

    logoInitialFirstNameTl.to(logoContainerBackgroundFirst, 0.5, {
        height: '10vw',
        ease: Quad.easeInOut
    }, 3.9);

    logoInitialFirstNameTl.to(logoContainerBackgroundSecond, 0.5, {
        height: '10vw',
        ease: Quad.easeInOut
    }, 3.9);

    logoInitialFirstNameTl.to(logoContainerBackground, 0.5, {
        height: '10vw',
        ease: Quad.easeInOut
    }, 3.9);

    logoInitialFirstNameTl.staggerTo(logoFirstNameLetter, logoLetterDuration * 0.35, {
        y: 0,
        ease: Back.easeOut
    }, logoStaggerDelay,  '-=' + logoStaggerDelay * 7);

    logoInitialFirstNameTl.staggerTo(logoLastNameLetter, logoLetterDuration * 0.35, {
        y: 0,
        ease: Back.easeOut
    }, logoStaggerDelay, '-=' + logoStaggerDelay * 3);

    logoInitialFirstNameTl.timeScale(1);

    logoInitialFirstNameTl.yoyo(false);

    logoInitialFirstNameTl.repeat(0);

};

function logoInitialLastNameTimeline() {

    logoInitialLastNameTl.timeScale(1);

    logoInitialLastNameTl.yoyo(false);

    logoInitialLastNameTl.repeat(0);

};

$(window).load(function () {

    cssDefinitions();
    svgElement.css({
        opacity: 1
    });
    
    //using TweenMax.set() takes care of all vendor-prefixes

        TweenMax.set(sectionBackgroundContainer, {
            scale: 1.3
        });

        TweenMax.set(sectionMidgroundContainer, {
            scale: 4,
            y:$(window).height() * 0.5
        });

        TweenMax.set(sectionForegroundContainer, {
            scale: 8,
            y:$(window).height() * 0.5
        });

        TweenMax.set(logoContainerBackgroundFirst, {
            height: '40vw',
            y: logoContainer.height(),
            opacity: 1,
        });

        TweenMax.set(logoContainerBackgroundSecond, {
            height: '40vw',
            y: logoContainer.height(),
            opacity: 1,
        });

        TweenMax.set(logoContainerBackground, {
            height: '40vw',
            y: logoContainer.height(),
            opacity: 1,
        });

        TweenMax.set(loadingOverlay, {
            perspective: 800,
            perspectiveOrigin: 'center',
            transformStyle: 'preserve-3d'
        });
        TweenMax.set(loadingTextContainer, {
            transformOrigin: 'center',
            transformStyle: 'preserve-3d',
            scale: 1,
            opacity: 1
        });
        TweenMax.set(proceedButton, {
            perspective: 800,
            perspectiveOrigin: 'center',
            transformStyle: 'preserve-3d',
            scale: 1.5,
            opacity: 0
        });
        TweenMax.set(proceedButton.find('.loading-text'), {
            transformOrigin: 'center',
            transformStyle: 'preserve-3d'
        });
        TweenMax.set(logoInitialContainer, {
            perspective: 900,
            perspectiveOrigin: 'center',
            transformStyle: 'preserve-3d'
        });

    TweenMax.set(logoContainerBackground, {
        perspectiveOrigin: 'center',
        transformStyle: 'preserve-3d',
        transformOrigin: 'left center',
        height: '40vw',
        y: logoContainer.height(),
        opacity: 1,
    });

    TweenMax.set(logoInitialLastName, {
        transformStyle: 'preserve-3d',
        perspective: 800,
        perspectiveOrigin: 'center'
    });

    TweenMax.set(logoInitialLastNameLetter, {
        transformOrigin: 'center',
        transformStyle: 'preserve-3d',
        perspective: 800
    });

    TweenMax.set(logoInitialFirstName, {
        transformStyle: 'preserve-3d',
        perspective: 800,
        perspectiveOrigin: 'center'
    });

    TweenMax.set(logoInitialFirstNameLetter, {
        transformOrigin: 'center',
        transformStyle: 'preserve-3d',
        perspective: 800
    });
    TweenMax.set(pageSection, {
        perspective: 800,
        perspectiveOrigin: 'center',
        transformStyle: 'preserve-3d',
        z: 0
    });
    TweenMax.set(logoFirstNameLetter, {
        y: '-' + logoContainerInner.height(),
        opacity: 1,
    });
    TweenMax.set(logoLastNameLetter, {
        y: '-' + logoContainerInner.height(),
        opacity: 1,
    });
    TweenMax.set(sectionForeground, {
        transformOrigin: 'center',
        transformStyle: 'preserve-3d'
    });
    TweenMax.set(sectionMidground, {
        transformOrigin: 'center',
        transformStyle: 'preserve-3d'
    });
    TweenMax.set(sectionBackground, {
        transformOrigin: 'center',
        transformStyle: 'preserve-3d'
    });
    TweenMax.set(logoContainerInner, {
        perspective: 800,
        perspectiveOrigin: 'center',
        transformStyle: 'preserve-3d'
    });
    TweenMax.set(logoInitialContainerInner, {
        perspective: 800,
        perspectiveOrigin: 'center',
        transformStyle: 'preserve-3d'
    });
    TweenMax.set(loadingOverlay, {
        perspective: 800,
        perspectiveOrigin: 'center',
        transformStyle: 'preserve-3d',
        z: 1000
    });

    TweenMax.set(logoInitialContainer, {
        perspective: 900,
        z: 1000,
        opacity: 1
    });

    TweenMax.set(logoContainer, {
        perspective: 900,
        z: 1000,
        opacity: 1
    });

    svgElement.imagesLoaded(function () {

        TweenMax.to(loadingTextContainer, 1, {
            opacity: 0,
            scale: 0.5,
            ease: Quad.easeInOut
        });

        TweenMax.to(proceedButton, 1, {
            opacity: 1,
            scale: 1,
            ease: Quart.easeInOut
        });

        proceedButton.on('touchstart', function (e) {
            if (!buttonBeingPressed) {
                e.preventDefault();
                TweenMax.to(proceedButton, 0.5, {
                    backgroundColor: '#ffffff',
                    ease: Circ.easeOut
                });
                TweenMax.to(loadingText, 0.5, {
                    scale: 0.85,
                    color: '#000000',
                    ease: Circ.easeOut
                });
            }
        });

        proceedButton.on('touchend', function (e) {
            buttonBeingPressed = true;
            e.preventDefault();
            TweenMax.to(proceedButton, 0.5, {
                backgroundColor: '',
                opacity: 0,
                ease: Circ.easeOut
            });
            TweenMax.to(loadingText, 0.5, {
                scale: 1,
                color: '#ffffff',
                ease: Circ.easeOut,
                onComplete: function () {
                    buttonBeingPressed = false;
                    TweenMax.to(loadingOverlay, 1, {
                        opacity: 0,
                        ease: 'swing',
                        onComplete: function () {
                            $(this).hide();
                        }
                    });

                    TweenMax.to(sectionBackgroundContainer, introDuration, {
                        scale:1,
                        y:0,
                        ease: introEase
                    }, 0);

                    TweenMax.to(sectionMidgroundContainer, introDuration, {
                        scale:1,
                        y:0,
                        ease: introEase
                    }, 0);

                    TweenMax.to(sectionForegroundContainer, introDuration, {
                        scale:1,
                        y:0,
                        ease: introEase
                    }, 0);

                    /*introTimeline();*/

                    /*logoBackgroundTimeline();*/

                    logoInitialFirstNameTimeline();

                    /*logoInitialLastNameTimeline();*/
                }
            });
        });

        $(window).resize(function() {
            cssDefinitions();
            svgElement.css({
                opacity: 1
            });
        });

    });

});
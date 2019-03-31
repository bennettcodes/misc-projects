/*mainApp.factory('userRepository', function () {

    return {

        getAllUsers: function () {

            return [
                {
                    firstName: 'Jane',
                    lastName: 'Doe',
                    age: 29
 },
                {
                    firstName: 'John',
                    lastName: 'Doe',
                    age: 32
 }
 ];

        }
    };

});*/

mainApp.factory('gsap', function () {

    return {

        init: function () {
            TweenMax.set(mainScope.pageContainerOuterOuter, {
                perspective: 800,
                perspectiveOrigin: 'center',
                transformStyle: 'flat'
            });
            TweenMax.set(mainScope.pageContainerOuter, {
                transformOrigin: 'center'
            });

        }
    };

});

mainApp.factory('fadeHalf', function () {

    return {

        out: function () {

            TweenMax.to(mainScope.pageHoverRegion, 0.25, {
                backgroundColor: 'rgba(0,0,0,0.1`)',
                ease: Circ.easeOut
            }, 0);

            TweenMax.to(mainScope.pageContainerOuter, 0.25, {
                /*opacity:0.25,*/
                z: -300,
                ease: Circ.easeOut
            }, 0);

        },
        in : function () {

            TweenMax.to(mainScope.pageHoverRegion, 0.25, {
                backgroundColor: 'rgba(0,0,0,0)',
                ease: Circ.easeOut
            }, 0);

            TweenMax.to(mainScope.pageContainerOuter, 0.25, {
                /*opacity:1,*/
                z: 0,
                ease: Circ.easeOut
            }, 0);

        }
    };

});

mainApp.factory('fadeFull', function () {

    return {

        out: function () {

            TweenMax.to(mainScope.pageHoverRegion, 0.25, {
                backgroundColor: 'rgba(0,0,0,0.1)',
                ease: Circ.easeOut
            }, 0);

            TweenMax.to(mainScope.pageContainerOuter, 0.25, {
                /*opacity:0,*/
                z: -300,
                ease: Circ.easeOut
            }, 0);

        },
        in : function () {

            TweenMax.to(mainScope.pageContainerOuter, 0.25, {
                backgroundColor: 'rgba(0,0,0,0)',
                ease: Circ.easeOut
            }, 0);

            TweenMax.to(mainScope.pageContainerOuter, 0.25, {
                /*opacity:1,*/
                z: 0,
                ease: Circ.easeOut
            }, 0);

        }
    };

});

mainApp.factory('makePageActive', function () {

    return {

        home: function () {

            pagesScope.homeContainer.className = 'inner-page-container page-active';

            pagesScope.aboutContainer.className = 'inner-page-container page-inactive';

            pagesScope.workContainer.className = 'inner-page-container page-inactive';

            pagesScope.contactContainer.className = 'inner-page-container page-inactive';
        },

        about: function () {

            pagesScope.homeContainer.className = 'inner-page-container page-inactive';

            pagesScope.aboutContainer.className = 'inner-page-container page-active';

            pagesScope.workContainer.className = 'inner-page-container page-inactive';

            pagesScope.contactContainer.className = 'inner-page-container page-inactive';
        },

        work: function () {

            pagesScope.homeContainer.className = 'inner-page-container page-inactive';

            pagesScope.aboutContainer.className = 'inner-page-container page-inactive';

            pagesScope.workContainer.className = 'inner-page-container page-active';

            pagesScope.contactContainer.className = 'inner-page-container page-inactive';
        },

        contact: function () {

            pagesScope.homeContainer.className = 'inner-page-container page-inactive';

            pagesScope.aboutContainer.className = 'inner-page-container page-inactive';

            pagesScope.workContainer.className = 'inner-page-container page-inactive';

            pagesScope.contactContainer.className = 'inner-page-container page-active';
        }

    }

});
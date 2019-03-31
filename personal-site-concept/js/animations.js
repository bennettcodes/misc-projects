var fadeIn = {
    p: {
        opacity:['1','0']
    },
    o: {
        duration:500,
        easing:'easeOutCirc',
        queue:false
    }
    
};

var titleFlyIn = {
    p: {
        opacity:['1','0'],
        translateX:['0px','200px']
    },
    o: {
        initialAnimated: {
            duration:sectionTitleDuration,
            easing:sectionTitleEase,
            delay:sectionTitleFirstDelay
        },
        initialNotAnimated: {
            duration:0
        },
        menuClick: {
            duration:sectionTitleDuration,
            easing:sectionTitleEase,
            delay:sectionTitleDelay
        }
    }
};

var menuLinkColor = {
    p: {
        home: {
            color: primaryColorHomeLink
        },
        about: {
            color: primaryColorAboutLink
        },
        resume: {
            color: primaryColorResumeLink
        },
        portfolio: {
            color: primaryColorPortfolioLink
        },
        contact: {
            color: primaryColorContactLink
        }
    },
    o: {
        duration:500,
        easing:'swing'
    }
};
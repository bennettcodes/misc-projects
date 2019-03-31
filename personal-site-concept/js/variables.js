    var 
    root = $('html, body'),
    loading = $("#loading"),
    loadingText = $("#loading-text"),
        
    blemishCover = $('#blemish-cover'),
        
    //Loading Text Initial Transforms
    loadingTextTranslateX = ($(window).width() / 2) - (loadingText.width() / 2),
    loadingTextTranslateY = ($(window).height() / 2) - (loadingText.height() / 2),
    loadingTextTranslateZ = '-' + 50,
    loadingTextRotateX = 55,
    loadingTextRotateY = 15,
    loadingTextRotateZ = '-' + 26,
        
    //Loading Text Transform Move Rates
    loadingTextTranslateXRate = '',
    loadingTextTranslateYRate = '',
    loadingTextTranslateZRate = '',
    loadingTextRotateXRate = '',
    loadingTextRotateYRate = '',
    loadingTextRotateZRate = '',
        
    container = $('#container'),
        
    //Logo
    logoContainer = $('#logo-container'),
    sig = $('#sig'),
    sigSVGStroke = $('#sig svg path'),
    logoWritten = $('#logo-written'),
    logoComp = $('#logo-comp'),
    logoBackgroundMobile = $('#logo-bg-mobile'),
        
    //Navigation Menu
    sideMenu=$('#side-menu'),
    menuItems = $('#menu-items'),
    menuItem = $('.menu-item'),
    menuItemInner = $('.menu-item-inner'),
    menuItemShadow = $('.menu-item-shadow'),
    menuItemPanel = $('.menu-item-panel'),
    panelFront = $('.panel-front'),
    homePagePanel = $('.home-page-panel'),
    innerPagePanel = $('.inner-page-panel'),
    panelRight = $('.panel-right'),
        
    unclicked = true,
    homeclicked = true,
        
    //Tracker
    menuItemTrackerIndex = 0,
    menuItemTrackerContainer = $('#menu-item-tracker-container'),
    menuItemTracker = $('#menu-item-tracker'),
    menuItemTrackerDefaultColor = '#000000',
        
    //Headings
    heading1 = $('h1'),
    heading2 = $('h2'),
    heading3 = $('h3'),
    heading4 = $('h4'),
    heading5 = $('h5'),
    heading6 = $('h6'),
        
    //Section Headings
    aboutHeading1 = $('#about h1'),
    aboutHeading2 = $('#about h2'),
    aboutHeading3 = $('#about h3'),
    aboutHeading4 = $('#about h4'),
    aboutHeading5 = $('#about h5'),
    aboutHeading6 = $('#about h6'),
        
    resumeHeading1 = $('#resume h1'),
    resumeHeading2 = $('#resume h2'),
    resumeHeading3 = $('#resume h3'),
    resumeHeading4 = $('#resume h4'),
    resumeHeading5 = $('#resume h5'),
    resumeHeading6 = $('#resume h6'),
        
    portfolioHeading1 = $('#portfolio h1'),
    portfolioHeading2 = $('#portfolio h2'),
    portfolioHeading3 = $('#portfolio h3'),
    portfolioHeading4 = $('#portfolio h4'),
    portfolioHeading5 = $('#portfolio h5'),
    portfolioHeading6 = $('#portfolio h6'),
        
    contactHeading1 = $('#contact h1'),
    contactHeading2 = $('#contact h2'),
    contactHeading3 = $('#contact h3'),
    contactHeading4 = $('#contact h4'),
    contactHeading5 = $('#contact h5'),
    contactHeading6 = $('#contact h6'),
       
    //Page Colors
    primaryColorHome = '#000000',
    primaryColorHomeOld = '#2ad0ee',
    primaryColorAbout = '#ff2865',
    primaryColorResume = '#00ff96',
    primaryColorPortfolio = '#ff40fd',
    primaryColorContact = '#ffdf48',
       
    //Page Link Colors
    primaryColorHomeLink = '#b1afaf',
    primaryColorHomeLinkBlack = '#000000',
    primaryColorAboutLink = '#ff2865',
    primaryColorResumeLink = '#14c97f',
    primaryColorPortfolioLink = '#ff40fd',
    primaryColorContactLink = '#e8a919',
        
    currentMenuItem = '',
    homeItem = menuItem.eq(0),
    aboutItem = menuItem.eq(1),
    resumeItem = menuItem.eq(2),
    portfolioItem = menuItem.eq(3),
    contactItem = menuItem.eq(4),
        
    noHover = true,
    backgroundColorInProgress = false,
        
    contentContainer = $('#content-container'),
    content = $('#content'),
    contentBackgroundColor = $('.content-background-color'),
    contentBackgroundImage = $('#content-background-image'),
        
    //Sections
    section = $('section'),
    sectionContainer = $('#section-container'),
    sectionContainerHeight = section.length * section.height() + 'px',
    sectionContent = $('.section-content'),
    sectionMasthead = $('.section-masthead'),
    sectionMastheadBlurred = $('.blurred-masthead'),
    sectionBody = $('.section-body'),
        
    sectionTitle = $('.title'),
    sectionTitleAbout = $('.about-title'),
        
    backgroundLayer = $('.bg-layer'),
        
    sectionHome = $('#home'),
    sectionAbout = $('#about'),
    sectionAboutMasthead = $('.about-masthead'),
    sectionAboutBody = $('.about-body'),
    sectionResume = $('#resume'),
    sectionResumeMasthead = $('.resume-masthead'),
    sectionResumeBody = $('.resume-body'),
    sectionPortfolio = $('#portfolio'),
    sectionPortfolioMasthead = $('.portfolio-masthead'),
    sectionPortfolioBody = $('.portfolio-body'),
    sectionContact = $('#contact'),
    sectionContactMasthead = $('.contact-masthead'),
    sectionContactBody = $('.contact-body'),
        
    sectionBodyRow = $('.section-body-row'),
    sideMenuPush = $('.side-menu-push'),
    rowColumn = $('.row-col'),
    rowColumnFirst = $('.row-col-first'),
    rowColumn10 = $('.row-col-10'),
    rowColumn20 = $('.row-col-20'),
    rowColumn25 = $('.row-col-25'),
    rowColumn30 = $('.row-col-30'),
    rowColumn50 = $('.row-col-50'),
    rowColumn70 = $('.row-col-70'),
    rowColumn75 = $('.row-col-75'),
    rowColumn80 = $('.row-col-80'),
    rowColumn100 = $('.row-col-100'),
    rowColumnText = $('.row-col-text'),
        
    skillSetColumn = $('.skill-set-column'),
        
    emphasisBlock = $('.emphasis-block'),
    blackBackground = $('.black-bg'),
        
    sectionHomeVisible = true,
    sectionAboutVisible = false,
    sectionResumeVisible = false,
    sectionPortfolioVisible = false,
    sectionContactVisible = false,
        
    sectionMastheadDuration = 1500,
    sectionMastheadFirstDelay = 750,
    sectionMastheadDelay = 1250,
    sectionMastheadEase = 'easeOutCirc',
    sectionMastheadImage = $('.masthead-img'),
        
    sectionTitleDuration = 2000,
    sectionTitleFirstDelay = 750,
    sectionTitleDelay = 1750,
    sectionTitleEase = 'easeOutExpo',
        
    sectionBodyDuration = 1000,
    sectionBodyFirstDelay = 600,
    sectionBodyDelay = 1100,
    sectionBodyEase = 'easeOutCirc',
        
    sectionCubeDuration = 1000,
    sectionCubeFirstDelay = 1000,
    sectionCubeDelay = 1000,
    sectionCubeEase = 'easeOutQuart',
        
    //Section Background Colors
    sectionHomeBackgroundColor = $('.home-bg-color'),
    sectionAboutBackgroundColor = $('.about-bg-color'),
    sectionResumeBackgroundColor = $('.resume-bg-color'),
    sectionPortfolioBackgroundColor = $('.portfolio-bg-color'),
    sectionContactBackgroundColor = $('.contact-bg-color'),
        
    //Section Y Positions
    sectionHomeInitialPositionY = '0px',
    sectionAboutInitialPositionY = '-' + section.height() + 'px',
    sectionResumeInitialPositionY = '-' + (section.height() * 2) + 'px',
    sectionPortfolioInitialPositionY = '-' + (section.height() * 3) + 'px',
    sectionContactInitialPositionY = '-' + (section.height() * 4) + 'px',
        
    //Circle
    circle = $('.circle'),
    circleInner = $('.circle-inner'),
    circleInnerHome = $('.circle-inner-home'),
    circleInnerAbout = $('.circle-inner-about'),
    circleInnerResume = $('.circle-inner-resume'),
    circleInnerPortfolio = $('.circle-inner-portfolio'),
    circleInnerContact = $('.circle-inner-contact'),
        
    circleItem = $('.circle-item'),
        
    continentsContainer = $('#continents-container'),
    continents = $('.continents'),
        
    //Circle Inner Initial Gradients
    circleInnerInitialGradientX = 70,
    circleInnerInitialGradientY = 18,
        
    //Circle Inner Gradient Move Rates
    circleInnerInitialGradientXRate = '',
    circleInnerInitialGradientYRate = '',
        
    //Cube
    cubeContainer = $('.cube-container'),
    cubeInnerContainer = $('.cube-inner-container'),
    cube = $('.cube'),
    side = $('.cube figure'),
    square = $('.square'),
    rectangleFrontBack = $('.rectangle-front-back'),
    rectangleTopBottom = $('.rectangle-top-bottom'),
    rectangleSides = $('.rectangle-sides'),
        
    frontSide = $('.front'),
    backSide = $('.back'),
    leftSide = $('.left'),
    rightSide = $('.right'),
    topSide = $('.top'),
    bottomSide = $('.bottom'),
    sectionHomeVisible2 = false,
    sectionAboutVisible2 = false,
    sectionResumeVisible2 = false,
    sectionPortfolioVisible2 = false,
    sectionContactVisible2 = false,
        
    cubeRotateXFirst = -110,
    cubeRotateXSecond = -15,
    cubeRotateYFirst = 10,
    cubeRotateYSecond = 30,
        
    cubeRotateXRateFirst = '',
    cubeRotateXRateSecond = '',
    cubeRotateYRateFirst = '',
    cubeRotateYRateSecond = '',
        
    //About Cube
    cubeContainerAbout = $('.about-cube'),
    cubeInnerContainerAbout = $('.about-cube .cube-inner-container'),
    cubeAbout = $('.about-cube .cube'),
    side = $('.about-cube figure'),
        
    cubeAboutRotateXFirst = -110,
    cubeAboutRotateXSecond = -15,
    cubeAboutRotateYFirst = 10,
    cubeAboutRotateYSecond = 30,
    cubeAboutTranslateY = cube.height() / 2,
        
    cubeAboutRotateXRateFirst = '',
    cubeAboutRotateXRateSecond = '',
    cubeAboutRotateYRateFirst = '',
    cubeAboutRotateYRateSecond = '',
        
    //Resume Cube
    cubeContainerResume = $('.resume-cube'),
    cubeInnerContainerResume = $('.resume-cube .cube-inner-container'),
    cubeResume = $('.resume-cube .cube'),
    side = $('.resume-cube figure'),
        
    cubeResumeRotateXFirst = -110,
    cubeResumeRotateXSecond = -15,
    cubeResumeRotateYFirst = 10,
    cubeResumeRotateYSecond = 30,
    cubeResumeTranslateY = cube.height() / 2,
        
    cubeResumeRotateXRateFirst = '',
    cubeResumeRotateXRateSecond = '',
    cubeResumeRotateYRateFirst = '',
    cubeResumeRotateYRateSecond = '',
        
    //Portfolio Cube
    cubeContainerPortfolio = $('.portfolio-cube'),
    cubeInnerContainerPortfolio = $('.portfolio-cube .cube-inner-container'),
    cubePortfolio = $('.portfolio-cube .cube'),
    side = $('.portfolio-cube figure'),
        
    cubePortfolioRotateXFirst = -110,
    cubePortfolioRotateXSecond = -15,
    cubePortfolioRotateYFirst = 10,
    cubePortfolioRotateYSecond = 30,
    cubePortfolioTranslateY = cube.height() / 2,
        
    cubePortfolioRotateXRateFirst = '',
    cubePortfolioRotateXRateSecond = '',
    cubePortfolioRotateYRateFirst = '',
    cubePortfolioRotateYRateSecond = '',
        
    //Contact Cube
    cubeContainerContact = $('.contact-cube'),
    cubeInnerContainerContact = $('.contact-cube .cube-inner-container'),
    cubeContact = $('.contact-cube .cube'),
    side = $('.contact-cube figure'),
        
    cubeContactRotateXFirst = -110,
    cubeContactRotateXSecond = -110,
    cubeContactRotateYFirst = 10,
    cubeContactRotateYSecond = 30,
    cubeContactTranslateY = cube.height() / 2,
        
    cubeContactRotateXRateFirst = '',
    cubeContactRotateXRateSecond = '',
    cubeContactRotateYRateFirst = '',
    cubeContactRotateYRateSecond = '',
        
    //Cube Misc.
    cubeOpacity = -0.32,
    cubeOpacityVisible = 3.85,
    cubeOpacityRateToShow = '',
    cubeOpacityRateToHide = '',
    cubeTop = cube.height() * 2,
    cubeTranslateY = cube.height() / 2,
        
    cubeTranslateZ = 800,
    cubeRotateXRate = '',
    cubeRotateYRate = '',
        
    scrollTop2 = '',
    sectionHome2 = $('#home'),
    sectionAbout2 = $('#about'),
    sectionResume2 = $('#resume'),
    sectionPortfolio2 = $('#portfolio'),
    sectionContact2 = $('#contact'),
    homeDistance2 = '',
    aboutDistance2 = '',
    resumeDistance2 = '',
    portfolioDistance2 = '',
    contactDistance2 = '',
        
    frontTranslateZ = 43,
        
    square = $('.square'),
    rectangleFrontBack = $('.rectangle-front-back'),
    rectangleTopBottom = $('.rectangle-top-bottom'),
    rectangleSides = $('.rectangle-sides'),
        
    frontSide = $('.front'),
    backSide = $('.back'),
    leftSide = $('.left'),
    rightSide = $('.right'),
    topSide = $('.top'),
    bottomSide = $('.bottom'),
        
    //Function names
    continentRotation = '',
    
    currentMousePos = { x: -1, y: -1 },
    scrollTop ='',
    sectionHomeOffset = '',
    homeDistance = '',
    sectionAboutOffset = '',
    aboutDistance = '',
    sectionResumeOffset = '',
    resumeDistance = '',
    sectionPortfolioOffset = '',
    portfolioDistance = '',
    sectionContactOffset = '',
    contactDistance = '',
    distance = '',
    dNow = new Date()
    ;
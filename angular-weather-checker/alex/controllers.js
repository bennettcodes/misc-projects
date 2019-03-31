mainApp.controller('mainCtrl', function($scope, gsap, fadeHalf, fadeFull, $timeout /*, userRepository*/) {
    /*$scope.users = 
        userRepository.getAllUsers;
    
    $scope.changeFirstUsersFirstName = function() {
        $scope.users[0].firstName = 'Jill'
    };*/
    
    mainScope = $scope;
    
    $scope.faderHalf = fadeHalf;
    
    $scope.faderFull = fadeFull;
    
    $scope.ready = false;
    
    $scope.pageContainerOuterOuter = document.getElementById('page-container-outer-outer');
    
    $scope.pageContainerOuter = document.getElementById('page-container-outer');
    
    $scope.pageHoverRegion = document.getElementById('page-hover-region');
    
    gsap.init();
    
    $timeout(function() {
        $scope.ready = true;
    }, 500);

});

mainApp.controller('pagesCtrl', function($scope, makePageActive) {
    
    pagesScope = $scope;
    
    $scope.activatePage = makePageActive;
    
    $scope.homeContainer = document.getElementById('home-page-container');
    
    $scope.aboutContainer = document.getElementById('about-page-container');
    
    $scope.workContainer = document.getElementById('work-page-container');
    
    $scope.contactContainer = document.getElementById('contact-page-container');

});

mainApp.controller('homeCtrl', function($scope) {
    
    homeScope = $scope;
    
    $scope.page = document.getElementById('home-page');

});

mainApp.controller('aboutCtrl', function($scope) {
    
    aboutScope = $scope;
    
    $scope.page = document.getElementById('about-page');

});

mainApp.controller('workCtrl', function($scope) {
    
    workScope = $scope;
    
    $scope.page = document.getElementById('work-page');

});

mainApp.controller('contactCtrl', function($scope) {
    
    contactScope = $scope;
    
    $scope.page = document.getElementById('contact-page');

});
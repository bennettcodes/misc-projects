var nav = $('#nav'),
    navList = $('#nav > ul'),
    navListItem = $('#nav > ul > li');

navListItem.hover(function() {
   $(this).stop(1,1).animate({
       backgroundColor:'rgb(43,193,246)'
   },500,'easeOutCirc'); 
},function() {
   $(this).stop(1,1).animate({
       backgroundColor:'transparent'
   },500,'easeOutCirc'); 
});
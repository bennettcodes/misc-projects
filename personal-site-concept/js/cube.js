$(window).resize(function initial() {
                
    cubeContainer.css({
       opacity:'1'
    });

   cube.css({
       top:'-' + cubeTop + 'px'
   });

   cubeInnerContainer.css({
      left: circle.width() / 4 + 'px',
      top: circle.height() / 5 + 'px'
   });

   frontSide.css({
       transform:
       'rotateY(0deg) ' +
       'translateZ(' + leftSide.width() / 2 + 'px)'
   });

   backSide.css({
       transform:
       'rotateX(180deg) ' +
       'translateZ(' + leftSide.width() / 2 + 'px) ' +
       'rotateZ(180deg)'
   });

   leftSide.css({
       transform:
       'rotateY(-90deg) ' +
       'translateZ(' + rectangleSides.width() / 2 + 'px)'
   });

   rightSide.css({
       transform:
       'rotateY(90deg) ' +
       'translateZ(' + (rectangleFrontBack.width() - (rectangleSides.width() / 2)) + 'px)'
   });

   rectangleTopBottom.css({
       width:frontSide.width(),
       height:leftSide.width()
   });

   topSide.css({
       transform:
       'rotateX(90deg) ' +
       'translateZ(' + leftSide.width() / 2 + 'px)'
   });

   bottomSide.css({
       transform:
       'rotateX(-90deg) ' +
       'translateZ(' + (frontSide.height() - (leftSide.width() / 2)) + 'px)'
   });

/*$(document).mousemove(function(event) {
    currentMousePos.x = event.pageX,
    currentMousePos.y = event.pageY,
    cubeRotateXRate = cubeRotateX + (currentMousePos.y / 200),
    cubeRotateYRate = cubeRotateY + (currentMousePos.x / 100);
    
    cube.css({
       transform:
        'rotateX(-' + cubeRotateXRate + 'deg)' +
        'rotateY(-' + cubeRotateYRate + 'deg)'
    });

    });*/
    
    return initial;
    
}());

/*    function cubeMouseRotate() {
        $(document).mousemove(function(event) {

                currentMousePos.x = event.pageX,
                currentMousePos.y = event.pageY,
                cubeInitialRotateXRate = cubeInitialRotateXRate += (currentMousePos.x / 2),
                cubeInitialRotateYRate = cubeInitialRotateYRate += (currentMousePos.y / 2);


                cube.css({
                   transform:
                    'rotateX(' +
                    cubeInitialRotateXRate +
                    'deg) ' +
                    'rotateY(' +
                    cubeInitialRotateYRate +
                    'deg)'
                });

            });
    }

cubeMouseRotate();*/
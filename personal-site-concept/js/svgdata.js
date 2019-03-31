/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "sig": {
        "strokepath": [
            {
                "path": "M3.2,243.3c0,0,242.2-195.8,239.5-235.6S92.5,113.9,120.6,191.9S253.3,87.7,243,138.1s-75.6,76.7,137.4,82.8  c212.8,6.1,394-1.7,530.3,16.9",
                "duration": 600
            },
            {
                "path": "M0.9,166.6c0,0,26.6-55.7,153.6-15.5s223.4,42.8,304.2,39.1",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": $('#side-menu').width() * 0.8,
            "height": 245
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('#logo-signature').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#e09b99"
}).lazylinepainter('paint'); 
 });
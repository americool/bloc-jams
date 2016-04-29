var animatePoints = function()  {  
    var revealPoint = function (index) {
            points[index].style.opacity = 1;
            points[index].styletransform = "scaleX(1) translateY(0)";
            points[index].style.msTransform = "scaleX(1) translateY(0)";
            points[index].style.webkitTransform = "scalex(1) translateY(0)";
    };
    for (x = 0; x<points.length; x++){
        revealPoint(index)
    };
};

//I liked this way better             
//  var revealPoint = function() {            
//    var points = document.getElementsByClassName('point')
//    for (x=0; x <=2; x++){
//            points[x].style.opacity = 1;
//            points[x].styletransform = "scaleX(1) translateY(0)";
//            points[x].style.msTransform = "scaleX(1) translateY(0)";
//            points[x].style.webkitTransform = "scalex(1) translateY(0)";
//        };
//};
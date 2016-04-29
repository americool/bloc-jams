var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points)  {  
    var revealPoint = function (index) {
            points[index].style.opacity = 1;
            points[index].styletransform = "scaleX(1) translateY(0)";
            points[index].style.msTransform = "scaleX(1) translateY(0)";
            points[index].style.webkitTransform = "scalex(1) translateY(0)";
    };
    for (x = 0; x<points.length; x++){
        revealPoint(x);
    };
};

window.onload = function(){
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200; 
    window.addEventListener('scroll', function(event) {
       if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance){
           animatePoints(pointsArray)
       }
           });
}


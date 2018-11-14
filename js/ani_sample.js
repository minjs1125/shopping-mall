var pages = new SpaAni(".page", ".ani", 500)

$(".page").eq(3).mousemove(function(evt){
    var delta = 30;
    /* console.log(evt.clientX, evt.clientY); 마우스 커서 위치 */
    var cX = evt.clientX;
    var cY = evt.clientY;
    var iX = $(this).find(".chair").width()/2;
    var iY = $(this).find(".chair").height()/2;
    //중심iX보다 적을때는 +쪽으로 밀어내고 iX보다 클때는 -쪽으로 밀어냄
    var mX = (iX - cX)/delta;
    var mY = (iY - cY)/delta;
    $(this).find(".chair").css("transform","translate("+mX+"px, "+mY+"px)")
});
$(".searchs .hand").click(function () {
    $(".search_catelist").stop().slideToggle(100);
});
//클릭할때마다 애니메이션을 반복하면 열번누르면 애니메이션 10번 재생되는 경우가 생김
//그것을 막는것 : .stop -> 이전에 하기로 된 애니메이션을 스탑하고 뒤의 애니메이션을 하겟다

$(".menu li").hover(function () {
    $(".menu_modal").stop().fadeOut(0);
    $(this).children(".menu_modal").stop().fadeIn(100);
}, function () {
    $(".menu_modal").stop().fadeOut(0);
});

//*this = 이 함수의 주인 : li, this는 ""안에 넣지 않는다!*/
//hover는 함수가 2개 실행 =  1.마우스를 올렸을때 , 2.마우스를 뗐을때!

//var homes = new Array();
//새로운 배열을 만들겠다. = 반복
//var homes = [];
/*
homes[0] = [];
homes[1] = [];
homes[2] = [];
homes[0][0] = "신소율"
homes[0][1] = 25
homes[0][2] = "F"
homes[1][0] = "신민서"
homes[1][1] = 21
homes[1][2] = "F"
homes[2][0] = "신민준"
homes[2][1] = 15
homes[2][2] = "M"
*/
$(".menu_modal").eq(0).mouseover(function(){
    var demo = [];
    for (i = 0; i < 10; i++) {
        demo[i] = [];
        demo[i][0] = '\"../img/main/site' + i + '.jpg\"';
        demo[i][1] = "Demo";

        str = '<ul>';
        str += '<li><img src =' + demo[i][0] + 'class="img"></li>';
        str += '<li>' + demo[i][1] + 'Defualt' + '</li>';
        str += '</ul>';
        $(".menu_modal").eq(0).append(str);

    }
})
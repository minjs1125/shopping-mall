//속성과 메서드를 갖고 있는 것 = 객체
var SpaAni = (function () {
    function SpaAni(_page, _elem, _gap) {
        //새로 만들때(=var pages = new SpaAni(".page",".ani")), _page : 실행 페이지를 받아옴, _elem : ani라는 클래스를 받아옴
        //속성
        var obj = this;
        this.page = $(_page);
        //123페이지를 this.page에 넣었으니 각각의 페이지의 높이를 배열에 넣음
        this.elem = _elem;
        this.scTop = 0;
        this.pos = [];
        this.now = 0;
        this.gap = _gap;
        
        $(window).resize(function () {
            for (var i = 0; i < obj.page.length; i++) {
                obj.pos[i] = $(obj.page[i]).position().top;
                //top에서 얼마나 떨어져 있는지 찾아냄
                console.log(obj.pos);
            }
        }).trigger("resize");
        $(window).scroll(function(){
            obj.scTop = $(this).scrollTop();
            obj.init(obj);//스크롤이 변화댈때마다 실행
            console.log(obj.scTop);
        }).trigger("scroll");
    }
    //prototype동작, 메서드
    SpaAni.prototype.init = function(obj){
        for(var i=0; i < obj.page.length; i++){
            if(obj.scTop + obj.gap > obj.pos[i]) obj.now = i;
        }
        console.log(obj.now)
        $(obj.page[obj.now]).find(obj.elem).each(function(){
           var cls = $(this/*=ani*/).data("ani");
           $(this).addClass(cls);
        })
    }
    return SpaAni;
}());
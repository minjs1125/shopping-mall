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
/*
var homes = new Array();
//새로운 배열을 만들겠다. = 반복
var homes = [];

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
/********modal0*********/
function modalMake0() {
    var html = '';
    var sites = [];
    for (var i = 0; i < 10; i++) {
        sites[i] = []
        sites[i][2] = '#';
        sites[i][0] = '<li><img src="../img/main/site' + i + '.jpg" class="img" onclick="goUrl(' + i + ');"></li>';
    }
    sites[0][1] = '<li>Demo Default</li>';
    sites[1][1] = '<li>Demo Decor</li>';
    sites[2][1] = '<li>Demo Retail</li>';
    sites[3][1] = '<li>Demo Books</li>';
    sites[4][1] = '<li>Demo Fashion Color</li>';
    sites[5][1] = '<li>Demo Lingerie</li>';
    sites[6][1] = '<li>Demo Handmade</li>';
    sites[7][1] = '<li>Demo Fashion</li>';
    sites[8][1] = '<li>Demo Fashion Flat</li>';
    sites[9][1] = '<li>Demo Electronics</li>';

    for (i = 0; i < sites.length; i++) {
        html = '<ul>' + sites[i][0] + sites[i][1] + '</ul>'
        $("#modal0").append(html);
    }
}
modalMake0();

function goUrl(n) {
    location.href = sites[n][2];
}


/****카테고리 모달1****/
var cates = [
    {/*cates는 main과 sub라는 속성를 공통으로 가지는 객체가 6번 반복 => 배열안에 6개의 객체*/
    main:{title:"SHOP PAGES",icon:"",link:"#"}/*main은 속성이 3개지만 하나니까 배열x 객체*/,
    sub:[/*sub는 속성이 3개인 객체가 11번 반복되니까 배열!*/
        {title: "Filters area",icon: "",link: "#"}, 
        {title: "Hidden sidebar",icon: "HOT",color:"green",link: "#"}, 
        {title: "No page heading",icon: "",link: "#"}, 
        {title: "Small categories menu",icon: "",link: "#"}, 
        {title: "Masonry grid", icon: "",link: "#"}, 
        {title: "Products list view",icon: "",link: "#"},
        {title: "With background",icon: "",link: "#" },
        {title: "Category description",icon: "",link: "#"}, 
        {title: "Only categories",icon: "",link: "#"}, 
        {title: "Header overlap", icon: "", link: "#"},
        {title: "Default shop",icon: "", link: "#"}
    ]},
    {
    main:{title:"PRODUCT HOVERS",icon:"EFFECTS",color:"orange",link:"#"},
    sub:[
        {title: "Summary on hover",icon: "",link: "#"}, 
        {title: "Icons on hover",icon: "",link: "#"}, 
        {title: "Icons & Add to cart",icon: "",link: "#"}, 
        {title: "Full info on image",icon: "",link: "#"}, 
        {title: "All info on hover", icon: "",link: "#"}, 
        {title: "Button on image",icon: "",link: "#"},
        {title: "Standard button",icon: "",link: "#" },
        {title: "Quick shop",icon: "",link: "#"}, 
        {title: "Tiled hover",icon: "",link: "#"}, 
        {title: "Categories hover #1", icon: "", link: "#"},
        {title: "Categories hover #2",icon: "", link: "#"}
    ]},
    {
    main:{title:"PRODUCT PAGES",icon:"UNLIMITED",color:"red",link:"#"},
    sub:[
        {title: "Default",icon: "",link: "#"}, 
        {title: "Centered",icon: "hot",link: "#"}, 
        {title: "Sticky description",icon: "",link: "#"}, 
        {title: "With shadow",icon: "",link: "#"}, 
        {title: "With background", icon: "",link: "#"}, 
        {title: "Accordion tabs",icon:"NEW",color:"orange",link: "#"},
        {title: "Accordion in content",icon: "",link: "#" },
        {title: "Sticky add to cart",icon: "",link: "#"}, 
        {title: "With sidebar",icon: "",link: "#"}, 
        {title: "Extra content #1", icon: "", link: "#"},
        {title: "Extra content #2",icon: "", link: "#"}
    ]
},{
    main:{title:"PRODUCT IMAGES",icon:"",link:"#"},
    sub:[
        {title: "Thumbnails left",icon: "",link: "#"}, 
        {title: "Thumbnails bottom",icon: "HOT",color:"green",link: "#"}, 
        {title: "Sticky images",icon: "",link: "#"}, 
        {title: "One column",icon: "",link: "#"}, 
        {title: "Two columns", icon: "",link: "#"}, 
        {title: "Combined grid",icon:"",link: "#"},
        {title: "Images full-width",icon: "",link: "#" },
        {title: "Zoom image",icon: "",link: "#"}, 
        {title: "Images size - small",icon: "",link: "#"}, 
        {title: "Images size - large", icon: "", link: "#"},
        {title: "Without thumbnails",icon: "", link: "#"}
    ]
},{
    main:{title:"WOOCOMMERCE",icon:"",link:"#"},
    sub:[
        {title: "Simple product",icon: "",link: "#"}, 
        {title: "Variable product",icon: "",link: "#"}, 
        {title: "External product",icon: "",link: "#"}, 
        {title: "Grouped product",icon: "",link: "#"}, 
        {title: "Shopping Cart", icon: "",link: "#"}, 
        {title: "Checkout",icon:"",link: "#"},
        {title: "My account",icon: "",link: "#" },
        {title: "Wishlist",icon: "",link: "#"}, 
        {title: "Track order",icon: "",link: "#"}, 
        {title: "Custom 404 page #1", icon: "", link: "#"},
        {title: "Custom 404 page #2",icon: "", link: "#"}
    ]
},{
    main:{title:"FEATURES",icon:"BEST",color:"red",link:"#"},
    sub:[
        {title: "360° product viewer",icon: "",link: "#"}, 
        {title: "With video",icon: "",link: "#"}, 
        {title: "With instagram",icon: "",link: "#"}, 
        {title: "With countdown timer",icon: "",link: "#"}, 
        {title: "Product presentation", icon: "",link: "#"}, 
        {title: "Variations swatches",icon:"",link: "#"},
        {title: "Infinit scrolling",icon: "NEW",color:"red",link: "#" },
        {title: "Load more button",icon: "",link: "#"}, 
        {title: "Catalog mode",icon: "",link: "#"}, 
        {title: "Cookies law info", icon: "", link: "#"},
        {title: "Parallax scrolling",icon: "", link: "#"}
    ]
}];
function modalMake1(){
    var html/*임의의 이름*/ = '';
    var wid = 100/cates.length + "%";
    for(var i=0; i<cates.length; i++){
        html = '<ul style="width:'+wid+'">';
        html += '<li class="title">';
        html += '<a href="'+cates[i].main.link+'">'+cates[i].main.title+'</a>';
        if(cates[i].main.icon != ""/*!= ""이 아니면 true*/){
            html += '<div class="tooltip"  style="background:'+cates[i].main.color+'">';
            html += cates[i].main.icon;
            html += '<div style="background:'+cates[i].main.color+'"></div>';
            html += '</div>';
        }
        html += '</li>';
        for(var j=0; j<cates[i].sub.length; j++){
            html += '<li class="cont">';
            html += '<a href="' +cates[i].sub[j].link+ '">' +cates[i].sub[j].title+ '</a>';
            if(cates[i].sub[j].icon != ""){
                html += '<div class="tooltip" style="background:'+cates[i].sub[j].color+'">';
                html += cates[i].sub[j].icon;
                html += '<div style="background:'+cates[i].sub[j].color+'"></div>';
                html +='</div>';
            }
            html += '</li>'
        }
        html += '</ul>';
        $("#modal1").append(html);
    }
    $("#modal1 .tooltip").each(function(){
        var n = $(this).prev().html().length;
        $(this).css({"left" : n*5.5+"px"});
    });
}
modalMake1();
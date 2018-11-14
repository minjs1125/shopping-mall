$(".searchs .hand").click(function () {
    $(".search_catelist").stop().slideToggle(100);
});
//클릭할때마다 애니메이션을 반복하면 열번누르면 애니메이션 10번 재생되는 경우가 생김
//그것을 막는것 : .stop -> 이전에 하기로 된 애니메이션을 스탑하고 뒤의 애니메이션을 하겟다

$(".menu>ul>li").hover(function () {
    $(".menu_modal").stop().fadeOut(0); ///??????
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


/*
var imgcate = [
    {
        img:"../img/main/site0.jpg",
        title:"Demo Default",
        link:"#"
    },
    {
        img:"../img/main/site1.jpg",
        title:"Demo Decor",
        link:"#"
    },
    {
        img:"../img/main/site2.jpg",
        title:"Demo Retail",
        link:"#"
    },
    {
        img:"../img/main/site3.jpg",
        title:"Demo Books",
        link:"#"
    },
    {
        img:"../img/main/site4.jpg",
        title:"Demo Fashion Color",
        link:"#"
    },
    {
        img:"../img/main/site5.jpg",
        title:"Demo Lingerie",
        link:"#"
    },
    {
        img:"../img/main/site6.jpg",
        title:"Demo Handmade",
        link:"#"
    },
    {
        img:"../img/main/site7.jpg",
        title:"Demo Fashion",
        link:"#"
    },
    {
        img:"../img/main/site8.jpg",
        title:"Demo Fashion Flat",
        link:"#"
    },
    {
        img:"../img/main/site9.jpg",
        title:"Demo Electronics",
        link:"#"
    }
]
console.log(JSON.stringify(imgcate));


/********modal0*********/
$.ajax({
    url: "../json/cate0.json",
    type: "get",
    dataType: "json",
    data: {},
    success: function (data) {
        for (i = 0; i < data.result.length; i++) {
            html = '<ul>';
            html += '<li><img src="';
            html += data.result[i].img;
            html += '" class="img" onclick="goUrl(\'' + data.result[i].link + '\')">';
            html += '</li>';
            html += '<li>';
            html += '<a>' + data.result[i].title + '</a>';
            html += '</li>';
            html += '</ul>';
            $("#modal0").append(html);
        };
    },
    error: function (error) {
        console.log(error);
    }
});



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
    //console.log(sites);
    //console.log(JSON.stringify(sites));

}

//modalMake0();

/*function goUrl(n) {
    location.href = sites[n][2];
}*/


/****카테고리 모달1****/

//jQuery.ajax(); 아래와 같은형태
$.ajax({ /*에이젝스실행*/
    url: "../json/cate1.json",
    /*얘한테*/
    type: "get",
    /*방식으로*/
    dataType: "json",
    data: {} /*회원등록을 하는것이 아니라 등록된 파일을 받으니 빈 데이터{}*/ ,
    success: function (data) {
        /*통신이 성공한다면 이 함수를 실행*/
        var cnt = data.result.length;
        var style = 'style="width:' + (100 / cnt + '%') + ';"';
        for (var i = 0; i < 6; i++) {
            //console.log(data.result[i].main.title);
            html = '<ul ' + style + '>';
            html += '<li class="title">';
            html += '<a href="' + data.result[i].main.link + '">';
            html += data.result[i].main.title;
            html += '</a>';
            html += '<div class="tooltip" style="background:' + data.result[i].main.color + '">';
            html += data.result[i].main.icon;
            html += '<div style="background:' + data.result[i].main.color + '"></div>';
            html += '</div>';
            html += '</li>';

            for (var j = 0; j < data.result[i].sub.length; j++) {
                //console.log(data.result[i].sub[j].title);
                html += '<li class="cont">';
                html += '<a href="' + data.result[i].sub[j].link + '">';
                html += data.result[i].sub[j].title;
                html += '</a>';
                html += '<div class="tooltip" style="background:' + data.result[i].sub[j].color + '">';
                html += data.result[i].sub[j].icon;
                html += '<div style="background:' + data.result[i].sub[j].color + '"></div>';
                html += '</div>';
                html += '</li>';
            }
            html += '</ul>';
            $("#modal1").append(html);
        }
    },
    error: function (xhr, status, error) {
        /*통신이 실패한다면 이 함수를 실행*/
        console.log(xhr, status, error);
    }

});

/*
var cates = [
    {/*cates는 main과 sub라는 속성를 공통으로 가지는 객체가 6번 반복 => 배열안에 6개의 객체*/
/*main:{title:"SHOP PAGES",icon:"",link:"#"}/*main은 속성이 3개지만 하나니까 배열x 객체*/
/*,
    sub:[/*sub는 속성이 3개인 객체가 11번 반복되니까 배열!*/
/*
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
*/
//console.log(cates);
//console.log(JSON.stringify(cates));
/*
function modalMake1(){
    var html/*임의의 이름*/
/* = '';
    var wid = 100/cates.length + "%";
    for(var i=0; i<cates.length; i++){
        html = '<ul style="width:'+wid+'">';
        html += '<li class="title">';
        html += '<a href="'+cates[i].main.link+'">'+cates[i].main.title+'</a>';
        if(cates[i].main.icon != ""/*!= ""이 아니면 true*/
/*){
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
modalMake1();*/

/***modal2번***/
$.ajax({
    url: "../json/cate2.json",
    type: "get",
    dataType: "json",
    success: function (data) {
        var html; //<<<꼭 필요?
        var blogs = data.result.blog;
        var posts = data.result.recent;

        //blogs생성
        for (i = 0; i < blogs.length; i++) {
            html = '<ul>';
            html += '<li class="title">';
            html += '<a href="' + blogs[i].main.link + '">' + blogs[i].main.title + '</a>';
            if (blogs[i].main.icon != "") {
                html += '<div class="tooltip" style="background:' + blogs[i].main.color + '">';
                html += blogs[i].main.icon;
                html += '<div style="background:' + blogs[i].main.color + '"></div>';
                html += '</div>';
            }
            html += '</li>';
            for (j = 0; j < blogs[i].sub.length; j++) {
                html += '<li class="sub">';
                html += '<a href="' + blogs[i].sub[j].link + '">' + blogs[i].sub[j].title + '</a>';
                if (blogs[i].sub[j].icon != "") {
                    html += '<div class="tooltip" style="background:' + blogs[i].sub[j].color + '">';
                    html += blogs[i].sub[j].icon;
                    html += '<div style="background:' + blogs[i].sub[j].color + '"></div>';
                    html += '</div>';
                }
                html += '</li>';
            }
            html += '</ul>';
            $("#modal2>.blogs").append(html);
        }


        //recent생성
        for (i = 0; i < posts.length; i++) {
            html = '<ul>';
            html += '<li class="post clear" onclick="goPost(\'' + posts[i].link + '\');">'
            html += '<img src="' + posts[i].img + '" class="img post_img hover">'
            html += '<div>'
            html += '<div class="post_title">' + posts[i].title + '</div>'
            html += '<span class="post_date">' + posts[i].date + '</span>'
            html += '<span class="post_cnt">' + posts[i].coment + '</span>'
            html += '<span class="post_comment">Comment</span>'
            html += '</div>'
            html += '</li>'
            html += '</ul>';
            $("#modal2>.recents").append(html);
        }
    },
    error: function (xhr, status, error) {
        alert("통신이 원할하지 않습니다.\n잠시 후 다시 시도해 주세요.")
        console.log(xhr, status, error);
    }
})
/*
                            <div class="blogs">

                                <ul>
                                    <li class="title"><a href="#">BLOG TYPES</a></li>
                                    <li class="sub"><a href="#">Alternative</a></li>
                                </ul>
                                <ul>
                                    <li class="title"><a href="#">SINGLE POSTS</a></li>
                                    <li class="sub"><a href="#">Post example #1</a></li>
                                </ul>

                            </div>
                            <div class="recents">
                                <div class="title">RECENT POSTS</div>

                                <ul>
                                    <li class="post clear" onclick="goPost();">
                                        <img src="../img/main/blog0.jpg" class="img post_img">
                                        <div>
                                            <div class="post_title">A companion for extra sleeping</div>
                                            <span class="post_date">July 23, 2018</span>
                                            <span class="post_cnt">1</span>
                                            <span class="post_comment">Comment</span>
                                        </div>
                                    </li>
                                </ul>

                            </div>

/*    
var cate3 = { //var~~를 지우고 그냥 {}부터 json파일에 적기
    blog:[{ main:{title:"BLOG TYPES",icon:"",color:"",link:"#"},
            sub:[
                {title:"Alternative",icon:"",color:"",link:"#"},
                {title:"Small images",icon:"",color:"",link:"#"},
                {title:"Blog chess",icon:"",color:"",link:"#"},
                {title:"Masonry grid",icon:"",color:"",link:"#"},
                {title:"Infinit scrolling",icon:"FEATURE",color:"red",link:"#"},
                {title:"With background",icon:"",color:"",link:"#"},
                {title:"Blog flat",icon:"",color:"",link:"#"},
                {title:"Default flat",icon:"",color:"",link:"#"},
                {title:"Blog mask",icon:"NEW",color:"yellow",link:"#"}]
        },{
            main:{title:"SINGLE POSTS",icon:"EXAMPLES",color:"green",link:"#"},
             sub:[
                 {title:"Post example #1",icon:"",color:"",link:"#"},
                 {title:"Post example #2",icon:"",color:"",link:"#"},
                 {title:"Post example #3",icon:"",color:"",link:"#"},
                 {title:"Post example #4",icon:"",color:"",link:"#"},
                 {title:"Post example #5",icon:"",color:"",link:"#"},
                 {title:"Post example #6",icon:"",color:"",link:"#"},
                 {title:"Post example #7",icon:"",color:"",link:"#"},
                 {title:"Post example #8",icon:"",color:"",link:"#"},
                 {title:"Post example #9",icon:"",color:"",link:"#"}
             ]
        }],
    recent:[
            { img:"../img/main/blog0.jpg",title:"A companion for extra sleeping",link:"#",date:"July 23",coment:"2016 1 Comment"},
            {img:"../img/main/blog1.jpg",title:"Outdoor seating collection inspiration",link:"#",date:"July 23",coment:"2016 1 Comment"},
            { img:"../img/main/blog2.jpg",title:"Modular seating and table system",link:"#",date:"July 23",coment:"2016 1 Comment"}
        ]
}
      구조
{
    "blog":[{main{},sub[]},{}],
    "recent":[{},{},{}]
}
*/
/*******************************아래 : 내가한것, 위에 :선생님이 한것 비교
var cateLeft = [
         {
             main:{title:"BLOG TYPES",icon:"",color:"",link:"#"},
             sub:[
                 {title:"Alternative",icon:"",color:"",link:"#"},
                 {title:"Small images",icon:"",color:"",link:"#"},
                 {title:"Blog chess",icon:"",color:"",link:"#"},
                 {title:"Masonry grid",icon:"",color:"",link:"#"},
                 {title:"Infinit scrolling",icon:"FEATURE",color:"red",link:"#"},
                 {title:"With background",icon:"",color:"",link:"#"},
                 {title:"Blog flat",icon:"",color:"",link:"#"},
                 {title:"Default flat",icon:"",color:"",link:"#"},
                 {title:"Blog mask",icon:"NEW",color:"yellow",link:"#"}
             ]
         },{
             main:{title:"SINGLE POSTS",icon:"EXAMPLES",color:"green",link:"#"},
             sub:[
                 {title:"Post example #1",icon:"",color:"",link:"#"},
                 {title:"Post example #2",icon:"",color:"",link:"#"},
                 {title:"Post example #3",icon:"",color:"",link:"#"},
                 {title:"Post example #4",icon:"",color:"",link:"#"},
                 {title:"Post example #5",icon:"",color:"",link:"#"},
                 {title:"Post example #6",icon:"",color:"",link:"#"},
                 {title:"Post example #7",icon:"",color:"",link:"#"},
                 {title:"Post example #8",icon:"",color:"",link:"#"},
                 {title:"Post example #9",icon:"",color:"",link:"#"}
             ]
         }
        ];
 var cateRight={
        main:{title:"RECENT POSTS"},
         sub:[
             {
                 img:"../img/main/blog0.jpg",
                 title:"A companion for extra sleeping",
                 link:"#",
                 date:"July 23",
                 coment:"2016 1 Comment"
             },{
                 img:"../img/main/blog1.jpg",
                 title:"Outdoor seating collection inspiration",
                 link:"#",
                 date:"July 23",
                 coment:"2016 1 Comment"
             },{
                 img:"../img/main/blog2.jpg",
                 title:"Modular seating and table system",
                 link:"#",
                 date:"July 23",
                 coment:"2016 1 Comment"
             }
             ]
         };
 console.log(JSON.stringify(cateLeft));
 console.log(JSON.stringify(cateRight));*/



/*********cate3********/
$.ajax({
    url: "../json/cate3.json",
    type: "get",
    dataType: "json",
    success(data) {
        var html;
        for (i = 0; i < data.result.length; i++) {
            html = '<ul>';
            html += '<li class="title">';
            html += '<a href="' + data.result[i].main.link + '">' + data.result[i].main.title + '</a>';
            if (data.result[i].main.icon != "") {
                html += '<div class="tooltip" style="background:' + data.result[i].main.color + '">';
                html += data.result[i].main.icon;
                html += '<div style="background:' + data.result[i].main.color + '"></div>';
                html += '</div>';
            }
            html += '</li>'
            for (j = 0; j < data.result[i].sub.length; j++) {
                html += '<li class="sub"><a href="' + data.result[i].sub[j].link + '">' + data.result[i].sub[j].title + '</a>';
                if (data.result[i].sub[j].icon != "") {
                    html += '<div class="tooltip" style="background:' + data.result[i].sub[j].color + '">';
                    html += data.result[i].sub[j].icon;
                    html += '<div style="background:' + data.result[i].sub[j].color + '"></div>';
                    html += '</div>';
                }
                html += '</li>';
            }
            html += '</ul>';
            $("#modal3").append(html);
        }
    },
    error(error) {
        alert("통신이 원할하지 않습니다.\n 다시 시도해 주시기 바랍니다.")
        console.log(error);
    }

})

/************cate4*************/
$.ajax({
    url: "../json/cate4.json",
    data: "get",
    dataType: "json",
    success(data) {
        for (i = 0; i < data.result.length; i++) {
            html = '<ul>';
            html += '<li class="title">';
            html += '<a href="' + data.result[i].main.link + '">' + data.result[i].main.title + '</a>';
            if (data.result[i].main.icon != "") {
                html += '<div class="tooltip" style="background:' + data.result[i].main.color + '">';
                html += data.result[i].main.icon;
                html += '<div style="background:' + data.result[i].main.color + '"></div>';
                html += '</div>';
            }
            html += '</li>';
            for (j = 0; j < data.result[i].sub.length; j++) {
                html += '<li class="sub">';
                html += '<a href="' + data.result[i].sub[j].link + '">' + data.result[i].sub[j].title + '</a>';
                if (data.result[i].sub[j].icon != "") {
                    html += '<div class="tooltip" style="background:' + data.result[i].sub[j].color + '">';
                    html += data.result[i].sub[j].icon;
                    html += '<div style="background:' + data.result[i].sub[j].color + '"></div>';
                    html += '</div>';
                }
                html += '</li>';
            }
            html += '</ul>';
            $("#modal4").append(html);
        }
    },
    error(error) {
        console.log(error);
    }
})
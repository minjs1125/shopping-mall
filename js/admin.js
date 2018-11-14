// Initialize Firebase
var config = {
    apiKey: "AIzaSyC8trXbIQ0TtWVFrLUPIg4CMH_BrJ2DTeU",
    authDomain: "minjs1125-mall.firebaseapp.com",
    databaseURL: "https://minjs1125-mall.firebaseio.com",
    projectId: "minjs1125-mall",
    storageBucket: "minjs1125-mall.appspot.com",
    messagingSenderId: "579907489248"
};
firebase.initializeApp(config);

var db = firebase.database();
var ref;
var key;

/******************************** home *********************************/
//initHome();
(function initHome() {
    $(".list:not(#home_wr)").remove();
    //첫번째를 지우지 않는 이유 : 등록폼
    ref = db.ref("root/home");
    ref.on("child_added", homeAdd);
    ref.on("child_changed", homeChg);
    ref.on("child_removed", homeRev);
})();


function homeAdd(data) {
    var id = data.key;
    var img = data.val().img;
    var src = '../img/main/' + img;
    var title = data.val().title;
    var link = data.val().link;
    var html = '';
    html += '<ul class="list clear row" id="' + id + '">';
    html += '<li class="col-xs-4 col-sm-3 col-md-2 col-lg-2">';
    html += '<div>';
    html += '<img src="' + src + '">';
    html += '<input type="text" class="tit_img form-control" placeholder="이미지" value="' + img + '">';
    html += '</div>';
    html += '</li>';
    html += '<li class="col-xs-4 col-sm-6 col-md-7 col-lg-8">';
    html += '<div>';
    html += '<input type="text" class="title form-control" placeholder="타이틀" value="' + title + '">';
    html += '<input type="text" class="link form-control"style="margin-top:5px;" placeholder="링크주소" value="' + link + '">';
    html += '</div>';
    html += '</li>';
    html += '<li class="col-xs-4 col-sm-3 col-md-3 col-lg-2">';
    html += '<div>';
    html += '<button class="btn btn-danger" onclick="homeDel(this)">삭제</button> ';
    html += '<button class="btn btn-warning" onclick="homeUp(this)">수정</button>';
    html += '</div>';
    html += '</li>';
    html += '</ul>';
    $("#home_wrap").append(html);
}

$("#home_save").on("click", function () {

    var title = $("#home_wr .title").val();
    var link = $("#home_wr .link").val();
    var img = $("#home_wr .tit_img").val();

    if (title == '' || link == '' || img == '') {
        alert("내용을 입력해 주세요.")
    } else {
        ref = db.ref("root/home");
        ref.push({
            img: img,
            title: title,
            link: link
        }).key;
        alert("등록되었습니다.")
    }
});
/*
||   :  or 연산자 (이거나) => true || true => 결과값 true /  true||false => 결과값 true  둘중에 하나만 있어도 true / false || false => 결과값 false
&&   : and 연산자 (그리고) => true || true => 결과값 true /  true||false => 결과값 false  / false || false => 결과값 false
 */
function homeRev(data) {
    $("#" + data.key).remove();
}
//어떤 ul이 업그레이드가 되었는지 알기 위해서는 부모 div위의 부모 li의 부모인 ul에 접근해야 id값을 얻을 수 있음.
function homeDel(obj) {
    //window.event.stopPropagation();
    id = $(obj).parent().parent().parent().attr("id");
    // = obj.parentNode.parentNode.parentNode.id; 자바, 자바를 $로 감싸면 제이쿼리가 됨;
    /*
            .attr
        attr("title") 만 쓰면 가져오는 것
        attr("title", "..") 뒤에 인자를 하나 더 쓰면 바꾸어주는 것
    */
    key = id;
    /*
    //console.log(db.ref("root/home/").key);
    var id = db.ref("root/home/key");*/
    if (confirm("정말 삭제하시겠습니까?")) {
        db.ref("root/home/" + id).remove();
    } else {}
};




/*
                                        센세의 homeDel

 function homeDel(obj){
    window.event.stopPropagation();
    id = $(obj).parent().parent().parent().attr("id");
    if(confirm("정말 삭제하시겠습니까?")){
         if(id != ""){ 
             //id가 빈값이 아니라면 삭제
             db.ref("root/home/"+id).remove();
        }
    }
                      //데이터베이스에서 지워짐 화면에서는 반영이 안댐 !!! 화면에 반영되기 위해 위에 이벤트 삽입 >> ref.on("child_removed", homeRev);
}


function homeRev(data){ 
                    //data ; 지워진 데이타 위에서 보낸
    var id = data.key;
    $("#"+id).remove(); // ul을 삭제함
}

*/


/*
                            나의 homeUp

 function homeChg(data){
     $("#"+data.key).find(".title").html(data.val().title);
     $("#"+data.key).find(".tit_img").html(data.val().img);
     $("#"+data.key).find(".link").html(data.val().link);
 }
 function homeUp(obj){
     key = obj.parentNode.parentNode.parentNode.id;
     console.log(key);
     var title = $(".title", $("#"+key)).val();
     var link = $(".link", $("#"+key)).val();
     var img = $(".tit_img", $("#"+key)).val();
     
            ~~ 안의 ~를 찾아라 같은말 4가지

     var img = $("#home_wr .tit_img").val();
     var img = $(".tit_img", "#home_wr").val();
     var img = $("#home_wr").find(".tit_img").val();
     var img = $("#home_wr").children(".tit_img").val();

     
     if(title == '' || link == ''){
         alert("내용을 입력하세요.");
     }
     else{
         ref = db.ref("root/home/"+key);
         ref.update({
             title:title,
             link:link,
             img:img
         });
         alert("수정되었습니다.")
     }
 }

*/


function homeChg(data) {
    var id = data.key;
    var ul = $("#" + id);
    $("img", ul).attr("src", "../img/main/" + data.val().img);
    alert("수정되었습니다.")
    //이미 관리자 화면에 적어논 정보가 최신 정보이기 때문에 따로 수정할 사항이 없으므로
    //잘 돌아가는지만 확인 하기 위해서 경고창을 넣어줌
}

function homeUp(obj) {

    var ul = $(obj).parent().parent().parent();
    var id = ul.attr("id");

    var title = $(".title", ul).val();
    var link = $(".link", ul).val();
    var img = $(".tit_img", ul).val();
    if (title == '' || link == '' || img == '') {
        alert("내용을 입력하세요.");
    } else {
        ref = db.ref("root/home/" + id);
        ref.update({
            title: title,
            link: link,
            img: img
        });
    }
}











/******************************** shop *********************************/

/************initShop:페이지가 생성될때 한번 실행되며 shop레퍼런스에 콜백함수를 링크한다.***/
//initHome();
(function initShop() {
    //$("#shop_wrap>ul").empty();
    $(".grid>ul").remove();
    //remove = ul도 가치 삭제, empty = ul안을 삭제
    ref = db.ref("root/shop");
    ref.on("child_added", shopAdd);
    ref.on("child_changed", shopChg);
    //ref = db.ref("root/home");기준(root/shop)에서 기존에 추가되있던 데이터의(key) 내용이 내부에서 수정되거나 삭제되어 변한것 => change
    ref.on("child_removed", shopRev);
})();

/************shopMake(chk, data):shopMake(변수값, data) chk 변수의 값(C, U)에 따라 ul을 생성 또는 수정한다.*/
function shopMake(chk, data) {
    var id = data.key;
    var html = '';
    if (chk == 'C') html += '<ul id="' + id + '" class="grid-item">';
    else if (chk == 'U') $("#" + id).empty();
    html += '<li class="shop_li1 clear">';
    html += '<div>';
    html += '<input type="text" value="' + data.val().title + '" class="title form-control" placeholder="제목">';
    html += '<input type="text"  value="' + data.val().icon + '" class="icon form-control" placeholder="아이콘">';
    html += '<input type="text" value="' + data.val().color + '" class="color form-control" placeholder="아이콘컬러">';
    html += '<input type="text" value="' + data.val().link + '" class="link form-control" placeholder="링크">';
    html += '</div>';
    html += '<div>';
    html += '<button class="btn btn-danger" onclick="shopDel(this);">삭제</button>';
    html += '<button class="btn btn-warning" onclick="shopUp(this);">수정</button>';
    html += '</div>';
    html += '</li>';
    html += '<li class="shop_li2 clear shop_li2_wr">';
    html += '<div>';
    html += '<input type="text" class="title form-control" placeholder="제목">';
    html += '<input type="text" class="icon form-control" placeholder="아이콘">';
    html += '<input type="text" class="color form-control" placeholder="아이콘컬러">';
    html += '<input type="text" class="link form-control" placeholder="링크">';
    html += '</div>';
    html += '<div>';
    html += '<button class="btn btn-primary" onclick="shopAdd2(this)">저장</button>';
    html += '</div>';
    html += '</li>';

    //.once("value") : 데이터의 key를 만날때 사용

    if (chk == 'C') {
        html += '</ul>';
        $(".grid").append(html);
    } else if (chk == 'U') {
        $("#" + id).html(html);
        //$("#" + id).html(html); 덮어쓰게되면 위에 emtpy부분이 필요가 없어짐 =====> 기존것을 없애고 다 바꿔버림
        //$("#" + id).html(html); (내가만든html)로 html을 갈아껴주세요
    }
    if (data.val().sub) {
        db.ref("root/shop/" + id + "/sub").once("value").then(function (snapshot) {
            snapshot.forEach(function (item) {
                html = '<li class="shop_li2 clear" id="' + item.key + '">';
                html += '<div>';
                html += '<input type="text" value="' + item.val().title + '" class="title form-control" placeholder="제목">';
                html += '<input type="text" value="' + item.val().icon + '" class="icon form-control" placeholder="아이콘">';
                html += '<input type="text" value="' + item.val().color + '" class="color form-control" placeholder="아이콘컬러">';
                html += '<input type="text" value="' + item.val().link + '" class="link form-control" placeholder="링크">';
                html += '</div>';
                html += '<div>';
                html += '<button class="btn btn-danger" onclick="shopDel2(this);">삭제</button>';
                html += '<button class="btn btn-warning" onclick="shopUp2(this);">수정</button>';
                html += '</div>';
                html += '</li>';
                $("#" + id).append(html);
            });
            //snapshopt은 배열이 아니기 때문에 .lenght를 못찍음
            //forEach : 포문을 돌릴때, 각각 한번씩 돌면서 함수를 실행해줘(갯수만큼 돌려줌) item에 저장
        });
    }
}


/************shopAdd:child_added 콜백에 따른 이벤트***/
function shopAdd(data) {
    //여기서 data는 root/shop의 내용
    var id = data.key;
    shopMake('C', data);
    //f5를 눌러 새로고침을 하거나 새로운 ul을 만드는 이벤트
    //신규생성 => $("#shop_wrap").append(html);
}
/************shopRev:child_remove 콜백에 따른 이벤트***/
function shopRev(data) {
    var id = data.key;
    $("#" + id).remove();
}
/************shopChg:child_change 콜백에 따른 이벤트***/
function shopChg(data) {
    var id = data.key;
    shopMake('U', data);
}
/*
    null        -   값은 없다
    undefined   -   지정된 것이 없음, 정의되지 않음
    ''          -   문자열을 넣었는데 빈값을 넣음
    NaN         -   not a number 숫자가 아닙니다. 숫자를 써야 하는 곳에 숫자를 안썼을때
*/

/************1차 카테고리 생성***/
$(".shop_wr").click(function () {
    title = $(".shop_li0 .title").val();
    icon = $(".shop_li0 .icon").val();
    color = $(".shop_li0 .color").val();
    link = $(".shop_li0 .link").val();
    if (title == "") {
        alert("제목을 입력해주세요.");
        $(".shop_li0 .title").focus();
    } else {
        ref = db.ref("root/shop");
        ref.push({
            title: title,
            icon: icon,
            color: color,
            link: link
        }).key;
    } //데이터베이스에 저장하면 shopAdd가 돌게됨
});
/*
                                $(".shop_wr2").click(function (){}가 실행되지 않는이유

$(".shop_wr").click(function () {}이 실행할 시점에는 이미 구조가 만들어져 있지만,                             
함수가 아니기 때문에 이벤트를 선언하는 시점에 실행, 하지만 이벤트를 선언하는 시점에 .shop_wr2 는 존재하지 않음!
콜백으로 붙여주어야 한다.
*/
/************2차 카테고리 생성***/
function shopAdd2(obj) {
    //모든 ul마다 .shop_li2가 생기기 때문에 선택자로 쓸수 없다.
    var div = $(obj).parent().prev(); //나의 부모의 앞에 있는 것
    var idUL = $(obj).parent().parent().parent().attr("id");
    var title = $(".title", div).val();
    var icon = $(".icon", div).val();
    var color = $(".color", div).val();
    var link = $(".link", div).val();
    ref = db.ref("root/shop/" + idUL + "/sub");
    ref.push({
        title: title,
        icon: icon,
        color: color,
        link: link
    }).key;

};
/************1차 카테고리 삭제***/
function shopDel(obj) {
    if (confirm("정말로 삭제하시겠습니까?\n 1차 카테고리 삭제시 하위 카테고리도 삭제됩니다.")) {
        var id = $(obj).parent().parent().parent().attr("id");
        db.ref("root/shop/" + id).remove();
    }
}
/************1차 카테고리 수정***/
function shopUp(obj) {
    var id = $(obj).parent().parent().parent().attr("id");
    var div = $(obj).parent().prev();
    var title = $(".title", div).val();
    var icon = $(".icon", div).val();
    var color = $(".color", div).val();
    var link = $(".link", div).val();
    if (title == "") {
        alert("카테고리 명을 입력하세요.")
        $(".title", div).focus();
        return false;
    } else {
        db.ref("root/shop/" + id).update({
            title: title,
            icon: icon,
            color: color,
            link: link
        });
    }
}

/************2차 카테고리 삭제***/
function shopDel2(obj) {
    if (confirm("정말로 삭제하시겠습니까?")) {
        var id = $(obj).parent().parent().parent().attr("id"); //ul
        var id2 = $(obj).parent().parent().attr("id"); //li
        db.ref("root/shop/" + id + "/sub/" + id2).remove();
        //db.ref("root/shop/"+key+"/sub/")+id.remove(); ref에는 key값만 있으므로 id를 찾을수 없음

    }
}
/************2차 카테고리 수정***/
function shopUp2(obj) {
    var id = $(obj).parent().parent().parent().attr("id"); //ul
    var id2 = $(obj).parent().parent().attr("id"); //li
    var div = $(obj).parent().prev();
    var title = $(".title", div).val();
    var icon = $(".icon", div).val();
    var color = $(".color", div).val();
    var link = $(".link", div).val();
    if (title == "") {
        alert("카테고리 명을 입력하세요.")
        $(".title", div).focus();
        return false;
    } else {
        db.ref("root/shop/" + id + "/sub/" + id2).update({
            title: title,
            icon: icon,
            color: color,
            link: link
        });
    }
}

/*      내가한 2차 카테고리 수정
 function shopUp2(obj){
    var key = $(obj).parent().parent().parent().attr("id");
    var id = $(obj).parent().parent().attr("id");
     var div = $(obj).parent().prev();
     var title = $(".title", div).val();
     var icon = $(".icon", div).val();
     var color =$(".color", div).val();
     var link= $(".link", div).val();
     ref = db.ref("root/shop/"+key+"/sub/"+id);
     ref.update({
        title: title,
        icon: icon,
        color: color,
        link: link
     });
 }
*/

/******************************** UI *********************************/
/*내가 한 부분
 $(".nav").on("click", function(){
       $(".navs:nth-child(1)").attr("background-color","#555");
       $(".navs:nth-child(1)").attr("color","#fff");
       $("#home").attr("display","block");
 });
 */
$(".nav").on("click", function () {
    var n = $(this).index();
    //값을 숫자로 return
    $(".nav").css({
        "background-color": "",
        "color": ""
    })
    $(this).css({
        "background-color": "#8a2f28",
        "color": "#fff"
    });
    $(".section").hide();
    $(".section").eq(n).show();
});
$(".nav").eq(0).trigger("click");
//nav중에 0번째
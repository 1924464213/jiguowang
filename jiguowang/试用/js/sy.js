// 试用页请求数据
// 2、进行ajax请求的方法  请求完成后 把数据放入dataList
var dataList = [];
window.onload = function getData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/useing/master');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                data = ajax_.responseText;
                dataList = JSON.parse(data);
                console.log(dataList);
                // 3.调用展示数据的方法
                show();

            } else {
                console.log('加载错误');
            }
        }
    }
}
// 渲染数据
var shuju = document.getElementsByTagName('dl')[0];
function show() {
    // 找到所有的box盒子

    // 遍历dataList;
    for (var item of dataList) {
        str =
            `<dt>
            <a href="../首页/jiage.html" >
                    <span class="shoufa">${item.info_ty}</span>
                    <img src=${item.img} width="220" height="130" />
                    <div class="hot-con">
                        <h2 class="name">${item.text}</h2>
                        <p class="tabs">
                            <span>${item.totalnum}</span>
                            <span>${item.num}</span>
                        </p>
                        <p class="sq"><span>${item.apply}</span>申请</p>
                        <p class="current ">报告数量:8</p>
                    </div>
                    </a>
                    </dt>     
        `
        shuju.innerHTML += str;
    }
}

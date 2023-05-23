var dataList = [];
window.onload = function getData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/play/new');
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
var ul_ = document.querySelector('#shu');

function show() {

    console.log(ul_);
    for (var item of dataList) {
        for (var i = 0; i < item.length; i++) {
            console.log(item[i]);
            str = `
        <li>
        <a href="../首页/jiage.html">
        <img src="${item[i].img}" alt="">
        <div class="text">
        <p class="name">${item[i].text}</p>
        <span>${item[i].description}</span>
        </div>
        <div class="jiage">
        <span class="price">${item[i].price}</span>
        <div class="icon">
        <span class="xin">${item[i].like}</span>
        <span class="look">${item[i].words}</span>
        </div>
        </div>
        </a>
        </li>
        `
            ul_.innerHTML += str
        }
    }
}

// 点击加载更多
var item = document.getElementsByClassName('item1')[0];
var dianji_ = document.getElementsByClassName('more')[0];
dianji_.addEventListener('click', function () {
    ul_.style.height = `2000px`;
    item.style.height = `2090px`;
    dianji_.innerHTML = '没有更多了';
})
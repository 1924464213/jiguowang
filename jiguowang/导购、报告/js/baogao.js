// tab切换

var tabLi = document.getElementsByClassName('tabLi');
console.log(tabLi);
var items = document.getElementsByClassName('item');
console.log(items);
for (var i = 0; i < tabLi.length; i++) {
    tabLi[i].setAttribute('index', i);
    tabLi[i].onclick = function () {
        var ind = this.getAttribute('index');
        for (var j = 0; j < tabLi.length; j++) {
            tabLi[j].className = 'tabLi';
            tabLi[ind].className = 'tabLi active';
        }

        for (var k = 0; k < items.length; k++) {
            items[k].style.display = 'none';
            items[ind].style.display = 'block';
        }
    }
}


// 渲染数据
var dataList = [];
window.onload = function getData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/report/new');
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

function show() {
    var ul_ = document.getElementById('ul');
    for (var item of dataList) {
        str = `
        <li>
        <div class="up">
        <img class="tu" src="${item.img}" alt="">
        <div class="wenzi">
        <p class="p1">${item.text}</p>
        <p class="p2">
        <img class="tou" src='./images/tou.jpg'>
        <span class="su">${item.uName}</span>
        <span class="time">${item.endTime}</span>
        <i>${item.num}</i>
        <e>${item.apply}</e>
        </p>
        </div>
        </div>
        <div class="down">
        <a href="#">关于格林威特空气净化器还有4篇报道，点击查看</a>
        </div>
        </li>
        `
        ul_.innerHTML += str;
    }
}


// 点击加载更多
var ul_ = document.getElementById('ul');
var item_ = document.getElementsByClassName('item')[0];
var left_ = document.getElementsByClassName('left')[0];
var more = document.getElementsByClassName("more")[0];
more.addEventListener('click', function () {
    item_.style.height = `6320px`;
    left_.style.height = `6320px`;
    ul_.style.height = `6320px`;
    more.innerHTML = '没有更多了';
    more.style.color = `#a3a3b8`;
    more.style.background = 'none';
    more.style.width = `65%`;
    more.style.height = `100px`;
    more.style.backgroundColor = `#f7f7f7`
})
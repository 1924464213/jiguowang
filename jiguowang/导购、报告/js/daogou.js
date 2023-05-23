
// tab切换

var tabLi = document.getElementsByClassName('tabLi');
console.log(tabLi);
var item_ = document.getElementsByClassName('item');
console.log(item_);
for (var i = 0; i < tabLi.length; i++) {
    tabLi[i].setAttribute('index', i);
    tabLi[i].onclick = function () {
        var ind = this.getAttribute('index');
        for (var j = 0; j < tabLi.length; j++) {
            tabLi[j].className = 'tabLi';
            tabLi[ind].className = 'tabLi active';
        }

        for (var k = 0; k < item_.length; k++) {
            item_[k].style.display = 'none';
            item_[ind].style.display = 'block';
        }
    }
}



// 渲染数据
var dataList = [];
window.onload = function getData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/guid/new');
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
        <img src="${item.img}" alt="">
        <div class="ceng2"></div>
        <div class="ceng1"></div>
        <div class="wenzi">
        <p>${item.text}</p>
        <span>
        <i>${item.like}</i>
        <e>${item.words}</e>
        </span>
        </div>
        </li>
        `
        ul_.innerHTML += str;
    }
}

// 点击加载更多
var ul_ = document.getElementById('ul');
var new_ = document.getElementsByClassName('new')[0];
var more = document.getElementsByClassName("more")[0];
more.addEventListener('click', function () {
    new_.style.height = `1100px`;
    ul_.style.height = `1100px`;
    more.innerHTML = '没有更多了';
    more.style.color = `#a3a3b8`;
    more.style.background = 'none';
    more.style.width = `100%`;
    more.style.height = `100px`;
    more.style.backgroundColor = `#f7f7f7`
})








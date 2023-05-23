var jiazai = document.getElementsByClassName('jiazai')[0];
var img_ = document.getElementsByClassName('img')[0];
img_.src = './img/more.png';
console.log(img_);
jiazai.onclick = function () {
    jiazai.innerHTML = '正在加载中';
    img_.src = './img/loading-icon.gif';
}
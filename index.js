// 获取图片标签
var imgs = document.getElementById("imglist").getElementsByTagName("li");
// 获取列表
var icons = document.getElementById("iconlist").getElementsByTagName("li");
// 初始化图片位置
var left = 0;
imglist.style.marginLeft = left + "px";
// 设置一个计时器
var timer;

// 触发
run();
function run() {
  if (left <= -1500) {
    left = 0;
    imglist.style.marginLeft = left + "px";
  }
  // 如果位置为整张图片，暂停一秒钟
  var n = left % 660 == 0 ? 1000 : 10;
  changeimg();

  // 计算图片下标
  var m = Math.floor(-left / 660);
  changeicon(m);

  left -= 10;
  timer = setTimeout(run, n);
}

// setInterval(run,10);
function changeimg() {
  imglist.style.marginLeft = left + "px";
}

function changeicon(m) {
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.backgroundColor = "";
  }
  icons[m].style.backgroundColor = "red";
}

//绑定图片事件
for (var i = 0; i < imgs.length; i++) {
  // i的作用域--闭包解决
  (function (i) {
    imgs[i].onmousemove = function () {
      clearTimeout(timer);
      left = -i * 660;
      changeimg();
      changeicon(i);
    };
    imgs[i].onmouseout = function () {
      run();
    };
  })(i);
}

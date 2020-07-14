var imgs = document.getElementById("show").getElementsByTagName("li");
var icons = document.getElementById("icon").getElementsByTagName("li");
var next =document.getElementById('right');
var back =document.getElementById('left');


var left = 0;
var timer = 100;
run();
function run() {
  if (left % 440 == 0) {
    n = 1000;
  } else {
   n = 10;
  }
  if (left <= -1760) {
    left = 0;
    show.style.marginLeft = left + "px";
  }
  left += -10;
  show.style.marginLeft = left + "px";
  changeicon(Math.floor(-left / 440) % (imgs.length - 1));
  //   console.log(timer)
  // var t = setTimeout("javascript语句", 毫秒) 
  // 希望取消这个 setTimeout()，你可以使用这个变量名来指定它。
 timer= setTimeout(run, n);
}
//  setInterval(run, timer);
function changeicon(n) {
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.backgroundColor = "white";
  }
  icons[n].style.backgroundColor = "pink";
}

for (var i = 0; i < imgs.length; i++) {
  (function(i){
    imgs[i].onmousemove = function () {
      clearTimeout(timer);
      changeicon(i);
      left = -i * 440;
      show.style.marginLeft = left + "px";
    };
    imgs[i].onmouseout = function () {
      run();
    };
  })(i);
}

next.onclick=function(){
  if(Math.floor(-left/440)<4){
  left-=440;
  show.style.marginLeft = left + "px";
  changeicon(Math.floor(-left / 440) % (imgs.length - 1));
  }
  // console.log(left);
}

back.onclick=function(){
  if(Math.floor(-left/440)>0){
  left+=440;
  show.style.marginLeft = left + "px";
  changeicon(Math.floor(-left / 440) % (imgs.length - 1));
  }
  console.log(left);
}
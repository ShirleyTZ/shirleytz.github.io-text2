var timer;
var logomenuUls = document.getElementById("logomenuUl").getElementsByTagName("li");
var xiaomishoujiuls = document.getElementsByClassName("xiaomishoujiul");
var m = 0;
function fnLisOver(m) {
  clearTimeout(timer);
  xiaomishoujiuls[m].style.cssText = "display:block";
}
fnLisOver();
function fnLisOut(m) {
  timer = setTimeout(function() {
    xiaomishoujiuls[m].style.cssText = "display:none";
  },500);
}
fnLisOut();
function fnDivsOver(m) {
  clearTimeout(timer);
  xiaomishoujiuls[m].style.cssText = "display:block";
}
fnDivsOver();
function fnDivsOut(m) {
  xiaomishoujiuls[m].style.cssText = "display:none";
}
fnDivsOut();
for( var q = 0 ; q < logomenuUls.length - 1; q++) {
  logomenuUls[q].index = q;
  logomenuUls.onmouseover = function() {
    fnLisOver(this.index);
    fnLisOut(this.index);
    fnDivsOver(this.index);
    fnDivsOut(this.index);
  }
}


//自动轮播
var box = document.getElementById("spellImgBox");
var imgwidth = document.getElementsByClassName("spellImg");
var nums = document.getElementById("rightbottombutton").getElementsByTagName("li");
var i = 0;
auto();
buttontrans();
nums[0].style.cssText = "brackground-color:grey;";

function auto(){
  time = setInterval(function(){
    i++;
    if(i <= 4) {
      box.style.left = -i*1226 + "px";
      nums[i].style.cssText = "background-color:grey;";
      nums[i -1].style.cssText = "background:none;";
    } else {
      box.style.left = "0px";
      nums[4].style.cssText = "brackground:none;";
      nums[0].style.cssText = "brackground-color:grey;";
      i = 0;
    }
    console.log(i);
  },4000)
}

//左右切换与点击轮播
function buttontrans() {
  var numsbutton = document.getElementById("rightbottombutton");
  var spanL = document.getElementById("spanL");
  var spanR = document.getElementById("spanR");
  var t = 0;
  var j = 0;
  function fnimg(t) {
    box.style.left = -t*1226 + "px";
    nums[t].style.cssText = "background:grey";
  }
  fnimg(0);
  function fnli(t) {
    j = t;
  }
  fnli(0);
  spanL.onclick = function() {
    clearInterval(time);
    if (t < 1) {
      t = imgwidth.length - 1;
      fnimg(t);
      fnli(t);
    } else {
      t--;
      fnli(t);
      fnimg(t); 
    }
    spanL.onmouseout = function() {
      auto();
      nums[t].style.cssText = "background:none";
    }

  }
  spanR.onclick = function() {
    clearInterval(time);
    if(t == imgwidth.length - 1) {
      t = 0;
      fnimg(t);
      fnli(t);
    } else {
      t++;
      fnli(t);
      fnimg(t);
    }
    spanR.onmouseout = function() {
      auto();
      nums[t].style.cssText = "background:none";
    }
  }

  for (var k = 0 ; k < nums.length; k++) {
    nums[k].index = k;
    nums[k].onclick = function() {
      fnimg(this.index);
      fnli(this.index);
      nums[this.index].style.cssText = "background:grey"; 
    }
    nums[k].onmouseout = function() {
      nums[this.index].style.cssText = "background:none";
    }
  }
}

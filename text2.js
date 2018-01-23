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

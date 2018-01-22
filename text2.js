var box = document.getElementById("spellImgBox");
var imgwidth = document.getElementsByClassName("spellImg");
var nums = document.getElementById("rightbottombutton").getElementsByTagName("li");
var i = 0;
auto();
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
  },3000)
}


for(var j = 0; j <= 4; j++) {
  imgwidth[j].index = j;
  nums[j].index = j;
  nums[j].onmouseover = function() {
    this.style.cssText = "background:grey;";
    this.onmouseout = function() {
      this.style.cssText = "background:none;";
    }
  }
  nums[j].onlick = function() {
    clearInterval(time);
    t = this.index;
    box.style.left = -t*1226 + "px";
    i = t;
    auto();
    consolo.log(i);
  }
}
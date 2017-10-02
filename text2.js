function moveElement(elementID,final_x,final_y,interval) {
  var elem = documentById(elementID);
  if (elem.movement) {
  	clearTimeout(elem.movement);;
  }
  if (!elem.style.left) {
  	elem.style.left = "0px";
  }
  if (!elem.style.top) {
  	elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final) {
  	return true;
  }
  if (xpos < final_x) {
  	var dist = Math.ceil((final_x - xpos)/10);
  	xpos = xpos + dist;
  }
  if (xpos > final_x) {
  	var dist = Math.ceil((xpos - final_x)/10);
  	xpos = xpos - dist;
  }
  if (ypos < final_y) {
    var dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if (ypos >final_y) {
  	var dist = Math.ceil((ypos - final_y)/10);
  	ypos = ypos - dist;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}

function prepareSlidesshow() {
  var rightbottombutton = document.getElementByIdName("rightbottombutton");
  var links = rightbottombutton.getElementsByTagName("a");
  var backgroundimg = ducoment.getElementByIdName("backgroundimg");
  for (var i = 0; i < links.length; i++) {
	links[i].onmouseover = function() {
	  var destination = this.getAttribute("data_name");
	  if (destination == li1){
		moveElement("backgroundimg",0,0,5);
	  }
	  if (destination == li2) {
		moveElement("backgroundimg",-1226,0,5);
	  }
	  if (destination == li3) {
		moveElement("backgroundimg",-2452,0,5);
	  }
	  if (destination == li4) {
		moveElement("backgroundimg",-3678,0,5);
	  }
	  if (destination == li5) {
		moveElement("backgroundimg",-4904,0,5);
	  }
	}
  }
}

prepareSlidesshow();



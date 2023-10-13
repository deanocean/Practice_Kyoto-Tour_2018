window.onload = init;

function init(){
	var objs = document.getElementsByClassName("spotItem");
	objs.forEach((item)=>{
		item.onclick = lightBox
	})
	
	var close = document.getElementById("close");
	close.onclick = closeBox;
	changeImg();
}

function lightBox(){
	var box = document.getElementById("boxBg");
	box.style.display = "block";
}

function closeBox(){
	var box = document.getElementById("boxBg");
	box.style.display = "none";	
}


function changeImg(){
	var imgs = document.querySelectorAll('#spotBox .smallPic img');
	for( i = 0 ; i<imgs.length ; i++ ){
		imgs[i].addEventListener("click", showLarge, false);
	}
}

function showLarge(e){
	var obj = e.target;
	document.querySelector('#lImg img').src = obj.src;
}







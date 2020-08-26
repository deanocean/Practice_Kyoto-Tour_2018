	function $id(id){
  return document.getElementById(id);
};
//==========window.onload
window.onload=function (){
      document.querySelectorAll('#season .img .toright')[0].onclick = function (){
      var imgContainer = document.querySelector('#season .spring_img');
      var imgs = imgContainer.getElementsByTagName("img");
      var first = imgs[0];
      imgContainer.appendChild( first );
    }

    document.querySelectorAll('#season .img .toleft')[0].onclick = function (){
      var imgContainer = document.querySelector('#season .spring_img');
      var imgs = imgContainer.getElementsByTagName("img");
      var first = imgs[0];
      var last = imgs[imgs.length - 1];
      imgContainer.insertBefore( last, first );
    }




      document.querySelectorAll('#season .img .toright')[1].onclick = function (){
      var imgContainer = document.querySelector('#season .summer_img');
      var imgs = imgContainer.getElementsByTagName("img");
      var first = imgs[0];
      imgContainer.appendChild( first );
    }

    document.querySelectorAll('#season .img .toleft')[1].onclick = function (){
      var imgContainer = document.querySelector('#season .summer_img');
      var imgs = imgContainer.getElementsByTagName("img");
      var first = imgs[0];
      var last = imgs[imgs.length - 1];
      imgContainer.insertBefore( last, first );
    }




      document.querySelectorAll('#season .img .toright')[2].onclick = function (){
      var imgContainer = document.querySelector('#season .autumn_img');
      var imgs = imgContainer.getElementsByTagName("img");
      var first = imgs[0];
      imgContainer.appendChild( first );
    }

    document.querySelectorAll('#season .img .toleft')[2].onclick = function (){
      var imgContainer = document.querySelector('#season .autumn_img');
      var imgs = imgContainer.getElementsByTagName("img");
      var first = imgs[0];
      var last = imgs[imgs.length - 1];
      imgContainer.insertBefore( last, first );
    }




      document.querySelectorAll('#season .img .toright')[3].onclick = function (){
      var imgContainer = document.querySelector('#season .winter_img');
      var imgs = imgContainer.getElementsByTagName("img");
      var first = imgs[0];
      imgContainer.appendChild( first );
    }

    document.querySelectorAll('#season .img .toleft')[3].onclick = function (){
      var imgContainer = document.querySelector('#season .winter_img');
      var imgs = imgContainer.getElementsByTagName("img");
      var first = imgs[0];
      var last = imgs[imgs.length - 1];
      imgContainer.insertBefore( last, first );
    }



}
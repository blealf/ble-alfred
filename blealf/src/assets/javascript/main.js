window.onload = function() {
  var nav = document.getElementById("nav-wrapper");
  var btn = document.getElementById("menu-btn");

  if (btn){
    btn.addEventListener("click", showMenu);
  }
  window.addEventListener('resize', respond);

  // Adjust navigation on width change
  function respond(){
    if (window.innerWidth > 768) {
      nav.style.display = "grid";
    }
    if (window.innerWidth < 768) {
      nav.style.display = "none";
    }
  }
  
  // navigation for mobile
  function showMenu() {
    if (nav.style.display === "none"){
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }


  // Gallery
  var smallimages1 = document.getElementsByClassName("big-screen");
  var smallimages2 = document.getElementsByClassName("big-screen2");

  showBig(smallimages1, "front1");
  showBig(smallimages2, "front2");

  function showBig(array, imgfront){
    for (var i = 0; i < array.length; i++) {
      array[i].addEventListener("click", function () {
        // console.log(this.src);
        var previousimg = document.getElementById
          (imgfront);
        var temp = previousimg.src;
        var current = this.src;
        previousimg.src = current;
        this.src = temp;
      });
    }
  }

  


}
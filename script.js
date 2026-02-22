  window.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".preloader");


    // sakrij preloader nakon animacije (1.6s) + fade
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 400);
    }, 1600);
  });

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

(function(){
			const gallery = document.querySelector('.gallery');
			if(!gallery) return;
			gallery.addEventListener('click', (e)=>{
				const target = e.target;
				if(target.tagName !== 'IMG') return;
				const big = gallery.querySelector('.big');
				const small = gallery.querySelector('.small');
				if(!big || !small) return;
				// if clicked the big already, still swap (so user can toggle)
				// Swap DOM order so the clicked image moves to the other place
				if(small && big){
					// move small before big (this will put the currently-small image on top)
					gallery.insertBefore(small, big);
					// swap classes
					big.classList.replace('big','small');
					small.classList.replace('small','big');
				}
			});
		})();
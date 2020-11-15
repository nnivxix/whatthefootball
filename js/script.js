//hide appshell when scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".scroll").style.top = "0";
  } else {
    document.querySelector(".scroll").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}


//floating button
  document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelector('.fixed-action-btn');
    const instances = M.FloatingActionButton.init(elems, {
      direction : 'right'
    });
  });
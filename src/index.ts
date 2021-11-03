const update = (scrollY: number) => {
  document.getElementById("hello").style.color = "blue";
}

document.addEventListener('DOMContentLoaded', () => {
  update(window.scrollY);
});

/* 
  Reference: 
    https://developer.mozilla.org/ja/docs/Web/API/Document/scroll_event,
    https://www.html5rocks.com/en/tutorials/speed/animations/
*/

let last_known_scroll_position = 0;
let ticking = false;

window.addEventListener("scroll", () => {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      update(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

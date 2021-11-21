export function registerAnimation(animate: (scrollY: number) => void) {
  window.addEventListener("DOMContentLoaded", () => {
    animate(window.scrollY);
  });

  /* 
  Reference: 
    https://developer.mozilla.org/ja/docs/Web/API/Document/scroll_event,
    https://www.html5rocks.com/en/tutorials/speed/animations/
  */

  let lastKnownScrollPosition = 0;
  let ticking = false;

  window.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        animate(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });
}

export type AnimationMap = {
  [selector: string]: {
    [cssProperty: string]: (scrollY: number) => string;
  }
};

export function registerAnimationMap(animationMap: AnimationMap) {
  registerAnimation((scrollY: number) => {
    Object.entries(animationMap).forEach(([selector, styles]) => {
      const elements: NodeListOf<HTMLElement> =
        document.querySelectorAll(selector);
      elements.forEach((element) => {
        Object.entries(styles).forEach(([property, update]) => {
          element.style[property] = update(scrollY);
        });
      });
    });
  });
}

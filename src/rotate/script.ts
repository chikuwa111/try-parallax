import { registerAnimationMap } from "../util";

registerAnimationMap({
  "#rotate-text": {
    transform: (scrollY: number) => `rotate(${scrollY / 5}deg)`
  }
});

import { registerAnimationMap } from "../util";

registerAnimationMap({
  "#scale-text": {
    transform: (scrollY: number) => `scale(${Math.abs(scrollY - 2500) / 2500})`
  }
});

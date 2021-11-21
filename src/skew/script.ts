import { registerAnimationMap } from "../util";

registerAnimationMap({
  "#skew-text": {
    transform: (scrollY: number) => `skew(${scrollY / 10}deg)`
  }
});

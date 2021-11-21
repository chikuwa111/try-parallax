import { registerAnimationMap } from "../util";

registerAnimationMap({
  "#translate-text": {
    transform: (scrollY: number) =>
      `translate(0, ${Math.abs(((scrollY / 5) % 800) - 400) - 200}px)`,
  },
});

import { registerAnimation } from "../util";

registerAnimation((scrollY: number) => {
  document.getElementById("hello").style.color = "blue";
});

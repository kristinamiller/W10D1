import warmUp from "./warmup";
import Clock from "./clock";

let clockElement = document.getElementById("clock");
console.log(clockElement);
let clock = new Clock(clockElement);
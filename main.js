import "./styles.scss";
// EXAMPLE ONE ON HOW TO IMPORT IMAGES
/* import selfie from "./lasse.jpg";
document.querySelector("img").src = selfie; */

const fakeJson = ["lasse", "lasse"];

fakeJson.forEach((el) => {
  const t = document.createElement("img");
  t.src = el + ".jpg";
  document.body.appendChild(t);
});

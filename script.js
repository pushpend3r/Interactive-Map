// let mapButtons = document.querySelectorAll(".btn");
let mapImagesMap = new Map();

document.querySelectorAll(".map > img").forEach((e) => {
  mapImagesMap.set(e.id, e);
});

document.querySelectorAll(".btn").forEach((mapButton) => {
  mapButton.addEventListener("mouseover", () => {
    let class_name = mapButton.className.split(" ")[1];
    class_name = class_name.slice(class_name.indexOf("-") + 1);
    mapImagesMap.get(class_name).classList.replace("img-hidden", "img-visible");
    mapImagesMap.get("original").classList.replace("img-visible", "img-hidden");
  });

  mapButton.addEventListener("mouseout", () => {
    let class_name = mapButton.className.split(" ")[1];
    class_name = class_name.slice(class_name.indexOf("-") + 1);
    mapImagesMap.get(class_name).classList.replace("img-visible", "img-hidden");
    mapImagesMap.get("original").classList.replace("img-hidden", "img-visible");
  });
});

let MapOfImages = new Map();

document.querySelectorAll(".map > img").forEach((e) => {
  MapOfImages.set(e.id, e);
});

let previousButtonClick = null;

document.querySelectorAll(".btn").forEach((mapButton) => {
  mapButton.addEventListener("mouseover", () => {
    let class_name = mapButton.className.split(" ")[1];
    class_name = class_name.slice(class_name.indexOf("-") + 1);
    MapOfImages.get(class_name).classList.replace("img-hidden", "img-visible");
    MapOfImages.get("original").classList.replace("img-visible", "img-hidden");
  });

  mapButton.addEventListener("mouseout", () => {
    let class_name = mapButton.className.split(" ")[1];
    class_name = class_name.slice(class_name.indexOf("-") + 1);
    MapOfImages.get(class_name).classList.replace("img-visible", "img-hidden");
    MapOfImages.get("original").classList.replace("img-hidden", "img-visible");
  });

  mapButton.addEventListener("click", () => {
    let class_name = mapButton.className.split(" ")[1];
    class_name = class_name.slice(class_name.indexOf("-") + 1);
    MapOfImages.get(class_name).classList.replace("img-hidden", "img-visible");

    if (previousButtonClick === MapOfImages.get(class_name)) return;

    if (previousButtonClick !== null) {
      previousButtonClick.classList.replace("img-visible", "img-hidden");
    }

    previousButtonClick = MapOfImages.get(class_name);

    MapOfImages.get("original").classList.replace("img-visible", "img-hidden");
  });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  if (previousButtonClick === null) return;

  previousButtonClick.classList.replace("img-visible", "img-hidden");
  MapOfImages.get("original").classList.replace("img-hidden", "img-visible");
  previousButtonClick = null;
});

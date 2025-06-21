  const infoOverlay = document.getElementById("infoOverlay");
  const closeBtn = document.getElementById("closeInfo");
  const infoIcon = document.querySelector(".top-left img");

  infoIcon.addEventListener("click", () => 
  {
    infoOverlay.classList.add("show");
  });

  closeBtn.addEventListener("click", () => 
  {
    infoOverlay.classList.remove("show");
  });

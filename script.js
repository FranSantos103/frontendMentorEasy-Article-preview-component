const shareBtn = document.getElementById("shareBtn");
const sharePanel = document.getElementById("sharePanel");
const footer = document.querySelector(".articlePreviewFooter");

shareBtn.addEventListener("click", () => {
  sharePanel.classList.toggle("active");
  shareBtn.classList.toggle("active");
  footer.classList.toggle("active");
});

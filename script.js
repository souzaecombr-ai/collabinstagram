document.querySelectorAll(".story img").forEach(img => {
  img.addEventListener("click", () => {
    alert(`Assistindo story de ${img.alt} 📸`);
  });
});

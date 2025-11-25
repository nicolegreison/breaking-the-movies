document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById("movieModal").style.display = "flex";
  });
});

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("movieModal").style.display = "none";
});

window.addEventListener("click", (e) => {
  const modal = document.getElementById("movieModal");
  if (e.target === modal) modal.style.display = "none";
});

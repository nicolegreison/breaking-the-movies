document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert('Filme selecionado: ' + card.querySelector('p').innerText);
  });
});

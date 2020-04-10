document.querySelectorAll('.price').forEach(item => {
  item.textContent = new Intl.NumberFormat('ru-RU', {
    currency: 'USD',
    style: 'currency'
  }).format(item.textContent)
})

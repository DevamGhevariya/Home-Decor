document.getElementById('searchInput').addEventListener('input', function () 
{
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll('#itemList li');
  
    items.forEach(item => 
    {
      const text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) 
      {
        item.style.display = 'block';
      } 
      else 
      {
        item.style.display = 'none';
      }
    });
});
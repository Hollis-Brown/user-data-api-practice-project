function loadPage(pageId) {
  // Hide all pages
  document.querySelectorAll('div').forEach(div => div.style.display = 'none');
 
  // Show the selected page
  document.getElementById(pageId).style.display = 'block';
}
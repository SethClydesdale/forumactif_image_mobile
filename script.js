$(function() {
  if (!_userdata.page_desktop) return; // return if classic version
  
  for (var a = document.getElementsByTagName('A'), i = 0, j = a.length; i < j; i++) {
    if (/img_link/.test(a[i].className)) {
      a[i].removeAttribute('class');
      a[i].innerHTML = '<img src="' + a[i].href + '" alt="' + a[i].innerHTML + '" />';
    }
  }
});

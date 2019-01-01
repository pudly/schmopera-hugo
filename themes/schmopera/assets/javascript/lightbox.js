/* init gallery */
function initGallery() {
  var $body = document.body,
      $anchors = document.querySelectorAll('a[rel=lightbox]');

  // add lightbox container to DOM
  var $lightbox = document.createElement('div');
      $lightbox.classList.add('lightbox');
      $lightbox.addEventListener('click', function(e) {
        e.preventDefault();
        destroy_lightbox($lightbox);
      });
      $body.appendChild($lightbox);

  // click event on all anchors
  Array.prototype.forEach.call($anchors, function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      lightbox(this, $lightbox);
    });
  });
}

/* trigger lightbox */
function lightbox(el, lb) {
  var desc = el.getAttribute('title');
  var imgurl = el.getAttribute('data-lightbox')

  lb.innerHTML = "<img src=" + imgurl + ">";
  lb.innerHTML += "<p>" + desc + "</p>";
  lb.classList.toggle('__active');
}

/* destroy !!! */
function destroy_lightbox(lb) {
  lb.classList.toggle('__active');
  lb.innerHTML = '';
}

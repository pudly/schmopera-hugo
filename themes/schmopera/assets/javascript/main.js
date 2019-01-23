document.addEventListener('DOMContentLoaded', function() {

  "use strict";

  var $html = document.querySelector('html');
  var $body = document.querySelector('body');
  var $footer = document.querySelector('.page--footer');


// remove no-js
  $html.classList.remove('no-js');


// init fastclick
  if ('addEventListener' in document) {
    FastClick.attach(document.body);
  }


// body scroll listener
  var st_cur = 0;

  window.addEventListener('scroll', function() {
    var st = window.pageYOffset;
    var ft = document.body.clientHeight;
    var vh = window.innerHeight;

    if (st > st_cur && st > '90' && st_cur < (ft - vh - 100)) {
      $body.classList.add('scroll');
    } else {
      $body.classList.remove('scroll');
    }

    st_cur = st;

  });


// featured articles scroll indicators
  var $featured_nav = document.querySelector('.post--featured > nav');
  if ($featured_nav) {

    $featured_nav.addEventListener('scroll', function() {
      var fw = $featured_nav.scrollWidth;
      var fc = $featured_nav.scrollLeft;
      var fm = $featured_nav.clientWidth;

      $featured_nav.classList.remove('__notscrolled');

      if (fc > (fw - fm - 40)) {
        $featured_nav.classList.remove('__right');
        $featured_nav.classList.add('__left');
      }
      else if (fc == 0) {
        $featured_nav.classList.remove('__left');
        $featured_nav.classList.add('__right');
      }
      else {
        $featured_nav.classList.add('__right');
        $featured_nav.classList.add('__left');
      }
    })
  }


// nav toggle
  var $icon_menu = document.querySelector('.nav--primary-toggle > .icon-menu');
  var $icon_cancel = document.querySelector('.nav--primary-toggle > .icon-cancel');

  $icon_menu.addEventListener('click', function(e) {
    e.preventDefault();
    $html.classList.remove('nav-inactive');
    $html.classList.add('nav-active');
  });

  $icon_cancel.addEventListener('click', function(e) {
    e.preventDefault();
    $html.classList.remove('nav-active');
    $html.classList.add('nav-inactive');
  });


// external urls
  [].forEach.call(document.querySelectorAll('a[href^=http]'), function(el) {
    var url = el.href;
    var base = window.location.hostname;

    if (!url.includes(base)) {
      el.setAttribute('target','_blank');
    }
  })


// toggle
  var $toggle_el = document.querySelector('a[rel=toggle]');

  if($toggle_el) {
    $toggle_el.addEventListener('click', function(e) {
      e.preventDefault();

      var target = this.getAttribute('href'),
          $target = document.querySelector(target);

      $target.classList.toggle('__active');
    })
  }


// donate nag
  var nag_cookie = Cookies.get('donate_nag');

  if (nag_cookie) {

  }
  else {
    $html.classList.remove('__dontnag');
  }

  var $opt_out = document.querySelector('.patreon_floater a.opt-out');
  var $opt_out_text = document.querySelector('.patreon_floater p.opt-out-text')

  if ($opt_out) {
    $opt_out.addEventListener('click', function(e) {
      e.preventDefault();

      Cookies.set('donate_nag', 'hide', { expires: 7 });
      $html.classList.toggle('__dontnag')
    })
  }
});


//TODO: Figure out where this is used?
function offset(elt) {
  var rect = elt.getBoundingClientRect(), bodyElt = document.body;

  return {
    top: rect.top + bodyElt .scrollTop,
    left: rect.left + bodyElt .scrollLeft
  }
}


// initialize lazyload
lazyload();
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

// body scroll
  var st_cur = 0;

  window.addEventListener('scroll', function() {
    var st = window.pageYOffset;
    var ft = document.body.clientHeight;
    var vh = window.innerHeight;

    // var ap = document.querySelector('.post--single_authors')[0].offsetTop;

    if (st > st_cur && st > '90' && st_cur < (ft - vh - 100)) {
      $body.classList.add('scroll');
    } else {
      $body.classList.remove('scroll');
    }

    // if (st_cur < (ft - vh - 100)) {
    //   $body.classList.add('article-read');
    // } else {
    //   $body.classList.remove('article-read');
    // }
    //
    // console.log(ap);

    st_cur = st;

  });

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
    el.setAttribute('target','_blank');
  })

// social counter
  function slFacebook ($element) {
      var socialight = new Socialight({
          container: $element,
          url: $element.getAttribute("data-url")
        });

      socialight.add(new Facebook());
      socialight.draw();
  }
  //
  // function slTwitter ($element) {
  //     var socialight = new Socialight({
  //         container: $element,
  //         url: $element.getAttribute("data-url")
  //       });
  //
  //     socialight.add(new Twitter());
  //     socialight.draw();
  // }

  var social_fb = document.querySelectorAll(".social--count_facebook"), i, len;

  for (i = 0, len = social_fb.length; i < len; i++) {
      slFacebook(social_fb[i]);
  }

  // var social_tw = document.querySelectorAll(".social--count_twitter"), i, len;

  // for (i = 0, len = social_tw.length; i < len; i++) {
  //     slTwitter(social_tw[i]);
  // }

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
});

function offset(elt) {
  var rect = elt.getBoundingClientRect(), bodyElt = document.body;

  return {
    top: rect.top + bodyElt .scrollTop,
    left: rect.left + bodyElt .scrollLeft
  }
}


// initialize lazyload
lazyload();

ready(init);


function init() {
    resizePage();
    
    window.onresize = function(){
        resizePage();
    };

    window.onload = function() {
        hideSpinner();
    };

    // document.addEventListener('keypress', function (e) {
    //     if ( e.keyCode == 40 ) {
    //         console.log('DOWN');
    //     } else if ( e.keyCode == 38 ) {
    //         console.log('UP');
    //     }
    // }, false);
}



function resizePage() {
    var pages = document.getElementsByClassName('page');

    // Resize Body
    document.body.style.height = window.innerHeight + "px";

    // Resize Slides
    forEach(pages, function(item, i){
        item.style.height = window.innerHeight + "px";
    });
}

function hideSpinner() {
    jsAddClass(document.body, 'loaded');
}

// http://youmightnotneedjquery.com/ -------------------------------------------

function jsAddClass (el, className) {
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + className;
}

function ready(fn) {
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'interactive')
        fn();
    });
  }
}

function forEach(array, fn) {
    for (i = 0; i < array.length; i++)
        fn(array[i], i);
}

/* */ 
'use strict';
var linotype = require('../../../index');
window.onload = function() {
  window.Linotype = new linotype({
    slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    afterLoad: function(anchorLink, index) {
      if (index === 2) {
        document.querySelector('#section1').querySelector('img').style.left = '0%';
        document.querySelector('#section1').querySelectorAll('p')[0].style.opacity = 1;
        setTimeout(function() {
          document.querySelector('#section1').querySelectorAll('p')[1].style.opacity = 1;
        }, 1800);
      }
      if (anchorLink === '3rdPage') {
        document.querySelector('#section2').querySelector('.intro').style.left = '0%';
      }
    }
  });
  window.Linotype.init();
};

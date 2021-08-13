(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var $menuBtn = document.querySelector('.header__btnMenu');
    $menuBtn.removeAttribute('style');


})()
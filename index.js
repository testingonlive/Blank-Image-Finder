// load in the polyfil
require('core-js/fn/array/from');

// http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

const ALL = document.querySelectorAll( '*' ),
    IMG = document.querySelectorAll( 'img' ),
    PATH = location.href,
    REG = new RegExp( escapeRegExp( 'url(' + PATH  + ')' ) );

// check the images
Array.from( IMG ).forEach( elm => {
     if ( elm.src === '' || elm.src === PATH ) {
        console.log( elm );
    }
});

// check the backgound-image
Array.from( ALL ).forEach( elm => {
    let _elmBackImg = window.getComputedStyle( elm )[ 'background-image' ],
        _beforeBackImg = window.getComputedStyle( elm, ':before' )[ 'background-image' ],
        _afterBackImg = window.getComputedStyle( elm, ':after' )[ 'background-image' ];

    if ( _elmBackImg === '' || REG.test( _elmBackImg ) ||
         _beforeBackImg === '' || REG.test( _beforeBackImg ) ||
         _afterBackImg === '' ||  REG.test( _afterBackImg ) ) 
     {
        console.log( elm );
     }
});
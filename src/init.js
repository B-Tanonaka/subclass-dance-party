$(document).ready(function () {
  window.dancers = [];
  window.limit = 0;
  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    // New HTML elements
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    if (window.limit < 9) {
      var dancer = dancerMakerFunction(
        $("body").height() * Math.random(), // top
        $("body").width() * Math.random(), // left
        Math.random() * 1000 // timeBetweenSteps
      );
      window.dancers.push(dancer);

      // if (Math.floor(Math.random() * 10) % 2 === 0) {

      // }

      numDancers = window.dancers.length;
      var left = $('body').width() / (2 * numDancers);
      var leftSpacing = $('body').width() / window.dancers.length;

      for (let dancer in window.dancers) {
        window.dancers[dancer].setPosition.call(window.dancers[dancer], window.dancers[dancer].top, left);

        console.log(window.dancers[dancer]);
        left += leftSpacing;
      }

      $('body').append(dancer.$node);
      window.limit++;
    }
    // var dancerKite = dancerMakerFunction(
    //   $("body").height() * Math.random(), // top
    //   $("body").width() * Math.random(), // left
    //   Math.random() * 1000 // timeBetweenSteps
    // );
    // $('body').append(dancer.$node);
    // //this.$node
    // var dancerPitou = dancerMakerFunction(
    //   $("body").height() * Math.random(), // top
    //   $("body").width() * Math.random(), // left
    //   Math.random() * 1000 // timeBetweenSteps
    // );
    // $('body').append(dancer.$node);
  });


  $('.lineUpDancerButton').on('click', function (event) {
    //var dancerMakerFunctionName = $(this).data('makeChibisLineUp');
    // get the maker function for the kind of dancer we're supposed to make
    //var dancerMakerFunction = window[dancerMakerFunctionName];


    console.log('Dancers ', window.dancers);
    for (let dancer in window.dancers) {
      window.dancers[dancer].lineUp.call(window.dancers[dancer], '50%');
    }
  });



});

// $('.Button').on('click', function (event) {
/* This function sets up the click handlers for the create-dancer
* buttons on dancefloor.html. You should only need to make one small change to it.
* As long as the "data-dancer-maker-function-name" attribute of a
* class="addDancerButton" DOM node matches one of the names of the
* maker functions available in the global scope, clicking that node
* will call the function to make the dancer.
*/

/* dancerMakerFunctionName is a string which must match
* one of the dancer maker functions available in global scope.
* A new object of the given type will be created and added
* to the stage.
*/

  // New HTML elements
  // let $pitouHead = $('<img class="pitou head" src="lib/Neferpitou_Head_Chibi.png"></img>');
  // let $pitouBody = $('<img class="pitou body" src="lib/Neferpitou.png"></img>');
  // let $kiteHead = $('<img class="kite head" src="lib/Kite_Chibi_head.png"></img>');
  // let $kiteBody = $('<img class="kite body" src="lib/Kite_body.png"></img>');
  // let $howelsBG = $('<img class="howels" src="lib/Howels.png"></img>');

  // var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

  // // get the maker function for the kind of dancer we're supposed to make
  // var dancerMakerFunction = window[dancerMakerFunctionName];

  // make a dancer with a random position

/*
$('.button').click(function() {
  $('.box').animate(
    { deg: 180 },
    {
      duration: 1200,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    }
  );
});
// */
  // var dancer = dancerMakerFunction(
  //   $("body").height() * Math.random(), // top
  //   $("body").width() * Math.random(), // left
  //   Math.random() * 1000 // timeBetweenSteps
  // );
  // if (Math.floor(Math.random() * 10) % 2 = 0) {
  //   char 1
  // } else {
  //   char 2
  // }

  // window.dancers.push(dancer);
  // $('body').append(dancer.$node);

  // var dancerKite = dancerMakerFunction(
  //   $("body").height() * Math.random(), // top
  //   $("body").width() * Math.random(), // left
  //   Math.random() * 1000 // timeBetweenSteps
  // );
  // $('body').append(dancer.$node);
  // //this.$node
  // var dancerPitou = dancerMakerFunction(
  //   $("body").height() * Math.random(), // top
  //   $("body").width() * Math.random(), // left
  //   Math.random() * 1000 // timeBetweenSteps
  // );
  // $('body').append(dancer.$node);
// });
// {/* <div class="dancer">
// <img class="pitou head" src="Neferpitou_Head_Chibi.png"></img>
// <img class="pitou body" src="Neferpitou.png"></img>
// <img class="kite head" src="Kite-Head.png"></img>
// <img class="kite body" src="Kite-Body.png"></img>
// </div> */}
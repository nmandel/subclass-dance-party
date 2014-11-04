$(document).ready(function(){
  window.dancers = [];
  window.naughtyGlobalVar = true

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      (($("body").height()-500) * Math.random())+400,
      $("body").width() * Math.random(),
      50 + Math.random() * 10
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  window.collide = function(){
    if (window.naughtyGlobalVar) {
    for (var i = 0; i < window.dancers.length; i++) {
      // var local = window.dancers[i]
      // console.log(window.dancers[i]);
      // console.log(window.dancers[i].left);
      for (var j = 0; j < window.dancers.length; j++) {

        if (i !== j) {
          if (Math.abs(window.dancers[i].left - window.dancers[j].left) < 100 && Math.abs(window.dancers[i].top - window.dancers[j].top) < 100) {
              // console.log("window.dancers["+i+"]"); console.log(window.dancers[i].left); console.log(window.dancers[i].top);
              // console.log("window.dancers["+j+"]"); console.log(window.dancers[j].left); console.log(window.dancers[j].top);
              if (window.dancers[i].direction === 'left') {
                // console.log("left -> right")
                window.dancers[i].direction = 'right';
              }
              else if (window.dancers[i].direction === 'right') {
                // console.log("right -> left")
                window.dancers[i].direction = 'left';
              }
              else if (window.dancers[i].direction === 'downAndRight') {
                // console.log("downAndRight -> leftAndUp")
                window.dancers[i].direction = 'leftAndUp';
              }
              else if (window.dancers[i].direction === 'leftAndUp') {
                // console.log("leftAndUp -> right")
                window.dancers[i].direction = 'right';
              }


          };
          // console.log(window.dancers[i].left, window.dancers[j].left)
        };
      };
    };
    // Get dancers' positions
    // if difference between x and y coordinates is less than 50
    // then delete one of the dancers
    };
  }

  // setInterval(window.collide(), 100);

  $(".lineUpButton").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      // var local = window.dancers[i]
      window.dancers[i].lineUp();
    };
    console.log(window.dancers[0].lineUp());

  })
  // $(".collideButton").on("click", function(event){
  //   collide();
  // });

});


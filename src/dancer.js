// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.left = left;
  this.top = top;

  // now that we have defined the dancer object, we can start
  // setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  this.timeBetween = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.enlarge();
};

Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // console.log('test')
    var thisCopy = this;
    // console.log(thisCopy.timeBetweenSteps);
    setTimeout(function() {thisCopy.step();}, this.timeBetween);
  };


Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function (){
  this.left = 0;
  this.setPosition(this.top, this.left);
};

Dancer.prototype.enlarge = function(){
  this.$node.mouseenter(function(){
    var styleSettings = {
      "transform": "scale(1.4)"
    };

    $(this).css(styleSettings);
    console.log($(this));
  });
  this.$node.mouseleave(function(){
    var styleSettings = {
      "transform": "scale(1)"
    };

    $(this).css(styleSettings);
    console.log($(this));
  });
};

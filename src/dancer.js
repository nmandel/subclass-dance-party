var p = function(input){
  console.log(input);
}
// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.left = left;
  this.top = top;
  this.leftIncrement = 0;
  this.topIncrement = 0;
  // now that we have defined the dancer object, we can start
  // setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  this.timeBetween = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.enlarge();
};

Dancer.prototype.generateIncrement = function (leftMax, topMax, isRandom) {
  console.log('test')
  if (isRandom) {
    this.leftIncrement = Math.floor(Math.random() * 2 * leftMax + 1) - leftMax;
    this.topIncrement = Math.floor(Math.random() * 2 * topMax + 1) - topMax;
  } else {
    this.leftIncrement = leftMax;
    this.topIncrement = topMax;
  }
};

Dancer.prototype.step = function(leftIncrement, topIncrement){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    if (this.left < 50 || this.left > $("body").width()*0.95){
      this.leftIncrement = -(this.leftIncrement);
    }
    if (this.top < 200 || this.top > $("body").height()*0.95){
      this.topIncrement = -this.topIncrement;
    }

    var thisCopy = this;

    this.left += this.leftIncrement;
    this.top += this.topIncrement;

    // if (this.direction === 'trueLeft' && this.left > 50){
    //   this.left -= Math.random()* 5 * parameter;
    // }
    // wallHandler(this.left, this.top)
    p("hello")

    setTimeout(function() {thisCopy.step();}, this.timeBetween);
    window.collide();

    };
    // if (naughtyGlobalVar) {


    // }
    // console.log(thisCopy.timeBetweenSteps);





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
  // this.left = 0;
  // this.setPosition(this.top, this.left);
  // console.log(this.direction)
  this.direction = 'trueLeft';
  window.naughtyGlobalVar = false;
  // Dancer.prototype.step.call(this);
  // Dancer.prototype.step.call(this);
  // if (this.left > 0) {
  //   this.left -= 10;
  // }
  // this.setPosition(this.top, this.left);
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

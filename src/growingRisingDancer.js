var GrowingRisingDancer = function(top, left, timeBetweenSteps){
  RisingDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.width = 50;
  // this.setPosition(top, left);
  this.$node[0].className += " growing";
  // this.$node
};

GrowingRisingDancer.prototype = Object.create(RisingDancer.prototype);

GrowingRisingDancer.prototype.step = function(){
  RisingDancer.prototype.step.call(this);
  if (this.width < 550) {
    this.width += 0.5;
  }
  var styleSettings = {
    "width": this.width + "px",
    "height": this.width + "px"
  };
  this.$node.css(styleSettings);
  // this.top -= 10;
  // this.setPosition(this.top, this.left);
};


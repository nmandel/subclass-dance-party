var GrowingRisingDancer = function(top, left, timeBetweenSteps){
  RisingDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  // this.setPosition(top, left);
  this.$node[0].className += " growing";
  // this.$node
};

RisingDancer.prototype = Object.create(Dancer.prototype);

RisingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.top -= 10;
  this.setPosition(this.top, this.left);
};


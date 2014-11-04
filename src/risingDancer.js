var RisingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  // this.setPosition(top, left);
  this.$node[0].className += " jumpy";
  // this.$node
};

RisingDancer.prototype = Object.create(Dancer.prototype);

RisingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.top -= 1;
  this.setPosition(this.top, this.left);
};

// var sallyJumpyDancer = new JumpyDancer(100, 200, 100)

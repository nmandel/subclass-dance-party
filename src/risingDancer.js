var RisingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  // this.setPosition(top, left);
  this.$node[0].className += " jumpy";
  this.generateIncrement(0, -40, false);
  // this.$node
};

RisingDancer.prototype = Object.create(Dancer.prototype);

RisingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this, this.leftIncrement, this.topIncrement);
  // this.top -= 5;
  this.setPosition(this.top, this.left);
  if (this.top < 300) {
    this.$node.fadeOut(1500);
    // this.setPosition(1000, this.left);
    // this.$node.fadeIn(200);
    // console.log("hello")
  };
};

// var sallyJumpyDancer = new JumpyDancer(100, 200, 100)

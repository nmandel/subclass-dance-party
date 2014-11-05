var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps/10);
  this.top = top;
  this.left = left;
  // this.setPosition(top, left);
  this.$node[0].className += " moving";
  this.direction = 'right';
  this.count = 0;
  this.generateIncrement(20, 20, true);
  // this.collide();
  // this.$node
};

MovingDancer.prototype = Object.create(Dancer.prototype);

MovingDancer.prototype.step = function(){


  Dancer.prototype.step.call(this, this.leftIncrement, this.topIncrement);
  this.setPosition(this.top, this.left);


  // if (this.count%10 === 0) {

  // };
  // this.count++;

};



// var sallyJumpyDancer = new JumpyDancer(100, 200, 100)
